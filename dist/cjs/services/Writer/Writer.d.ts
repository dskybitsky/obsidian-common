import { Vault } from 'obsidian';
export declare class Writer {
    protected vault: Vault;
    constructor(vault: Vault);
    createPage(path: string, metadata: Record<string, any>, content: string): Promise<void>;
    hasPage(path: string): boolean;
}
