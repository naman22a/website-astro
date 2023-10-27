import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import 'dotenv/config';

export default defineConfig({
    server: {
        port: 3000
    },
    integrations: [
        solidJs(),
        tailwind(),
        sanity({
            projectId: process.env.VITE_SANITY_PROJECT_ID,
            dataset: 'production',
            apiVersion: '2022-08-10',
            useCdn: true,
            token: process.env.VITE_SANITY_TOKEN,
            ignoreBrowserTokenWarning: true
        })
    ]
});
