import { Document } from 'yaml';
import { Vault } from 'obsidian';

export class Writer {
    constructor(
        protected vault: Vault,
    ) {
    }

    async createPage(
        path: string,
        metadata: Record<string, any>,
        content: string,
    ): Promise<void> {
        const yaml = new Document(metadata);

        const metadataString = `---\n${yaml}---\n`;

        await this.vault.create(path, `${metadataString}${content}`);
    }

    hasPage(path: string): boolean {
        const file = this.vault.getAbstractFileByPath(path);

        return file !== null;
    }
}
