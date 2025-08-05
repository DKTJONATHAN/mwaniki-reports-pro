import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // Explicit base path
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
    },
    // Add these optimizations
    minify: 'terser',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public')
    }
  },
  // Critical for production
  define: {
    'process.env': {}
  }
});