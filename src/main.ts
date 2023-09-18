export * from "./ui/InternalLink.svelte";
export * from "./ui/OptionalInternalLink.svelte";

export * from "./service/ObsidianUtils";
export * from "./service/DataviewReader";

declare module "obsidian" {
    interface MetadataCache {
        on(name: "dataview:index-ready", callback: () => void, ctx?: any): EventRef;
        on(name: "dataview:metadata-change", callback: (type: string, page: any) => void, ctx?: any): EventRef;
    }
}
