import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/shared/ui', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/shared/styles', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@styles/variables.less"; @import "@styles/mixins.less";`,
        javascriptEnabled: true,
      },
    },
  }
})
