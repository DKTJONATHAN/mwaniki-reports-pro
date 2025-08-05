import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      external: [
        '@tanstack/react-query',
        'react-hot-toast',
        'react-helmet-async'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public')
    }
  },
  optimizeDeps: {
    include: [
      '@tanstack/react-query',
      'react-hot-toast',
      'react-helmet-async'
    ]
  },
  publicDir: 'public'
});