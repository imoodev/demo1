import { defineConfig } from 'astro/config'
// import react from '@astrojs/react';

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].mjs',
          chunkFileNames: 'chunks/chunk.[hash].mjs',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
  build: {
    assets: '_custom',
    inlineStylesheets: 'auto',
    
  },
  prefetch: true
  // integrations: [react()],

})