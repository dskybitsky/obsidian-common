import { DataviewApi } from 'obsidian-dataview';
export declare class Reader {
    protected api: DataviewApi;
    static readonly FolderIndex = "index";
    static readonly FolderIndexExt: string;
    constructor(api: DataviewApi);
    getPage(path: string): Record<string, any> | undefined;
    getPages(query: string): import("obsidian-dataview").DataArray<Record<string, any>>;
    getPagesByPath(path: string): import("obsidian-dataview").DataArray<Record<string, any>>;
    getPagesAtDepth(query: string, depth?: number): import("obsidian-dataview").DataArray<Record<string, any>>;
    getPagesByPathAtDepth(path: string, depth?: number): import("obsidian-dataview").DataArray<Record<string, any>>;
    getPagesByPathAtDepthRel(path: string, depth?: number): import("obsidian-dataview").DataArray<Record<string, any>>;
    private static isPageAtDepth;
    private static pathToSource;
    private static normalizePath;
}
