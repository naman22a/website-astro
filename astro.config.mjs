import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000
    },
    integrations: [solidJs(), tailwind()]
});
