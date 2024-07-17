import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { version } from './package.json';

const BASE_CONFIG = {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
}

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return BASE_CONFIG
  } else {
    return { ...BASE_CONFIG, base: '/Website-CDJVUL/'};
  }
})