import { App, Plugin } from 'obsidian';
import type { PluginManifest } from 'obsidian';
import { Root } from 'react-dom/client';
import { DataviewApi } from 'obsidian-dataview';
import { ReactElement, ReactNode } from 'react';
declare module 'obsidian' {
    interface MetadataCache {
        on(name: 'dataview:index-ready', callback: () => void, ctx?: any): EventRef;
        on(name: 'dataview:metadata-change', callback: (type: string, page: any) => void, ctx?: any): EventRef;
    }
}
export declare class ReactPlugin extends Plugin {
    dataviewApi: DataviewApi;
    readonly rootsIndex: Map<string, Root[]>;
    readonly elementsFactoriesIndex: Map<Root, () => ReactNode>;
    constructor(app: App, manifest: PluginManifest);
    onload(): void;
    onunload(): void;
    protected registerEvents(): void;
    protected onDataviewIndexReady(): void;
    protected onDataviewMetadataChange(_type: string, page: any): void;
    protected registerElement(root: Root, path: string, elementFactory: () => ReactElement): Root;
    protected registerRoot(root: Root, path: string): void;
    protected renderAllRoots(): void;
    protected renderRootsByPath(path: string): void;
    protected unmountAllRoots(): void;
    protected clearAllRoots(): void;
}
