import { App, Plugin } from 'obsidian';
import type { MarkdownPostProcessorContext, PluginManifest } from 'obsidian';
import { createRoot, Root } from 'react-dom/client';
import { DataviewApi, getAPI as getDataviewApi } from 'obsidian-dataview';
import {
    ReactElement,
    ReactNode,
} from 'react';
import { getFolder, getRootFolder } from '../../utils';

declare module 'obsidian' {
    interface MetadataCache {
        on(
            name: 'dataview:index-ready',
            callback: () => void,
            ctx?: any,
        ): EventRef;
        on(
            name: 'dataview:metadata-change',
            callback: (type: string, page: any) => void,
            ctx?: any,
        ): EventRef;
    }
}

export class ReactPlugin extends Plugin {
    dataviewApi: DataviewApi;

    readonly rootsIndex: Map<string, Root[]> = new Map();

    readonly elementsFactoriesIndex: Map<Root, () => ReactNode> = new Map();

    constructor(app: App, manifest: PluginManifest) {
        super(app, manifest);

        const dataviewApi = getDataviewApi();

        if (!dataviewApi) {
            throw new Error('Dataview Plugin required');
        }

        this.dataviewApi = dataviewApi;
    }

    onload() {
        this.registerEvents();
    }

    onunload() {
        this.clearAllRoots();
    }

    protected registerEvents(): void {
        this.registerEvent(
            this.app.metadataCache.on(
                'dataview:index-ready',
                this.onDataviewIndexReady,
                this,
            ),
        );

        this.registerEvent(
            this.app.metadataCache.on(
                'dataview:metadata-change',
                this.onDataviewMetadataChange,
                this,
            ),
        );
    }

    protected onDataviewIndexReady() {
        this.renderAllRoots();
    }

    protected onDataviewMetadataChange(_type: string, page: any) {
        if (!page.path) {
            return;
        }

        this.renderRootsByPath(getRootFolder(page.path));
    }

    protected registerElement(
        container: HTMLElement,
        context: MarkdownPostProcessorContext,
        elementFactory: () => ReactElement,
    ): Root {
        const root = createRoot(container);

        this.registerRoot(root, context.sourcePath);

        this.elementsFactoriesIndex.set(root, elementFactory);

        return root;
    }

    protected registerRoot(root: Root, path: string) {
        if (!this.rootsIndex.has(path)) {
            this.rootsIndex.set(path, []);
        }

        (this.rootsIndex.get(path) ?? []).push(root);

        const parentPath = getFolder(path);

        if (parentPath !== path) {
            this.registerRoot(root, parentPath);
        }
    }

    protected renderAllRoots(): void {
        for (const [root, elementFactory] of this.elementsFactoriesIndex) {
            root.render(elementFactory());
        }
    }

    protected renderRootsByPath(path: string): void {
        if (!this.rootsIndex.has(path)) {
            return;
        }

        const roots = this.rootsIndex.get(path);

        for (const root of (roots ?? [])) {
            const elementFactory = this.elementsFactoriesIndex.get(root);

            if (elementFactory) {
                root.render(elementFactory());
            }
        }
    }

    protected unmountAllRoots(): void {
        for (const [, roots] of this.rootsIndex) {
            for (const root of roots) {
                root.unmount();
            }
        }
    }

    protected clearAllRoots(): void {
        this.unmountAllRoots();

        this.elementsFactoriesIndex.clear();
        this.rootsIndex.clear();
    }
}
