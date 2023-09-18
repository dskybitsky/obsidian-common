import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';
import builtins from 'builtin-modules';
import dts from "vite-plugin-dts";

const prod = (process.argv[2] === 'production');

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            svelte({
                preprocess: autoPreprocess()
            }),
            dts({
                insertTypesEntry: true,
            }),
        ],
        watch: !prod,
        build: {
            sourcemap: prod ? false : 'inline',
            minify: prod,
            lib: {
                entry: path.resolve(__dirname, './src/main.ts'),
                formats: ['cjs'],
            },
            css: {},
            rollupOptions: {
                output: {
                    // Overwrite default Vite output fileName
                    entryFileNames: 'main.js',
                    assetFileNames: 'styles.css',
                },
                external: ['obsidian',
                    'electron',
                    "codemirror",
                    "@codemirror/autocomplete",
                    "@codemirror/closebrackets",
                    "@codemirror/collab",
                    "@codemirror/commands",
                    "@codemirror/comment",
                    "@codemirror/fold",
                    "@codemirror/gutter",
                    "@codemirror/highlight",
                    "@codemirror/history",
                    "@codemirror/language",
                    "@codemirror/lint",
                    "@codemirror/matchbrackets",
                    "@codemirror/panel",
                    "@codemirror/rangeset",
                    "@codemirror/rectangular-selection",
                    "@codemirror/search",
                    "@codemirror/state",
                    "@codemirror/stream-parser",
                    "@codemirror/text",
                    "@codemirror/tooltip",
                    "@codemirror/view",
                    "@lezer/common",
                    "@lezer/lr",
                    "@lezer/highlight",
                    ...builtins,
                ],
            },
            // Use root as the output dir
            emptyOutDir: true,
            outDir: env.VITE_OUT_DIR ?? './dist',
        },
    }
});
