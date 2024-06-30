import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { version } from './package.json';

export default defineConfig({
  plugins: [vue()],
  base: '/Website-CDJVUL/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
})