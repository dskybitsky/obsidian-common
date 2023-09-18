import React from 'react';
import * as obsidian_dataview from 'obsidian-dataview';
import { DataviewApi } from 'obsidian-dataview';

interface InternalLinkProps {
    path: string;
    children?: React.ReactNode;
}
declare const InternalLink: ({ path, children }: InternalLinkProps) => React.JSX.Element;

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
    children?: React.ReactNode[];
}
declare const ToolBar: ({ children }: ToolBarProps) => React.JSX.Element;

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

export { InternalLink, InternalLinkProps, Reader, ToolBar, Check as ToolBarCheck, CheckProps as ToolBarCheckProps, Edit as ToolBarEdit, EditProps as ToolBarEditProps, ToolBarProps };
