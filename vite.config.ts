import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['module-name'],
    },
  },
  server: {
    proxy: {
      '/graphql': 'http://localhost:3001',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
