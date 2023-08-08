import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': 'http://localhost:3001',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@/tests': '/tests',
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
