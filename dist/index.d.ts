import { Plugin, App, PluginManifest, MarkdownPostProcessorContext, Vault } from 'obsidian';
import { Root } from 'react-dom/client';
import * as obsidian_dataview from 'obsidian-dataview';
import { DataviewApi } from 'obsidian-dataview';
import React, { ReactNode, ReactElement } from 'react';

declare module 'obsidian' {
    interface MetadataCache {
        on(name: 'dataview:index-ready', callback: () => void, ctx?: any): EventRef;
        on(name: 'dataview:metadata-change', callback: (type: string, page: any) => void, ctx?: any): EventRef;
    }
}
declare class ReactPlugin extends Plugin {
    dataviewApi: DataviewApi;
    readonly rootsIndex: Map<string, Root[]>;
    readonly elementsFactoriesIndex: Map<Root, () => ReactNode>;
    constructor(app: App, manifest: PluginManifest);
    onload(): void;
    onunload(): void;
    protected registerEvents(): void;
    protected registerElement(container: HTMLElement, context: MarkdownPostProcessorContext, elementFactory: () => ReactElement): void;
    protected onDataviewIndexReady(): void;
    protected onDataviewMetadataChange(_type: string, page: any): void;
    protected registerRoot(root: Root, path: string): Root;
    protected renderAllRoots(): void;
    protected renderRootsByPath(path: string): void;
    protected unmountAllRoots(): void;
    protected clearAllRoots(): void;
}

declare class Reader {
    protected api: DataviewApi;
    static readonly FolderIndex = "index";
    static readonly FolderIndexExt: string;
    constructor(api: DataviewApi);
    getPage(path: string): Record<string, any> | undefined;
    getPages(query: string): obsidian_dataview.DataArray<Record<string, any>>;
    getPagesByPath(path: string): obsidian_dataview.DataArray<Record<string, any>>;
    getPagesAtDepth(query: string, depth?: number): obsidian_dataview.DataArray<Record<string, any>>;
    getPagesByPathAtDepth(path: string, depth?: number): obsidian_dataview.DataArray<Record<string, any>>;
    getPagesByPathAtDepthRel(path: string, depth?: number): obsidian_dataview.DataArray<Record<string, any>>;
    private static isPageAtDepth;
    private static pathToSource;
    private static normalizePath;
}

declare class Writer {
    protected vault: Vault;
    constructor(vault: Vault);
    createPage(path: string, metadata: Record<string, any>, content: string): Promise<void>;
}

interface InternalLinkProps {
    path: string;
    children?: React.ReactNode;
}
declare const InternalLink: ({ path, children }: InternalLinkProps) => React.JSX.Element;

interface ContainerProps {
    loading: boolean;
    className?: string;
    children?: ReactNode;
}
declare const Container: ({ loading, className, children }: ContainerProps) => React.JSX.Element;

interface CheckProps {
    label: string;
    checked?: boolean;
    onChange: (value: boolean) => void;
}
declare const Check: ({ label, checked, onChange }: CheckProps) => React.JSX.Element;

interface EditProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
}
declare const Edit: ({ label, value, onChange }: EditProps) => React.JSX.Element;

interface ToolBarProps {
    children?: ReactNode;
}
declare const ToolBar: ({ children }: ToolBarProps) => React.JSX.Element;

declare function setActiveTabTitle(title: string): void;

declare const getRootFolder: (path: string) => string;
declare const getFolder: (path: string) => string;

export { Container, ContainerProps, InternalLink, InternalLinkProps, ReactPlugin, Reader, ToolBar, Check as ToolBarCheck, CheckProps as ToolBarCheckProps, Edit as ToolBarEdit, EditProps as ToolBarEditProps, ToolBarProps, Writer, getFolder, getRootFolder, setActiveTabTitle };
