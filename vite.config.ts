import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from "vite-plugin-singlefile";
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), viteSingleFile()],
    css:{
        postcss
    }
})
