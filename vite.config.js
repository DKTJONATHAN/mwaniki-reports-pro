import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // Explicitly set root to current directory (where index.html lives)
  base: '/', // Ensure paths start from root
  server: {
    port: 3000,
    historyApiFallback: true, // Required for React Router
  },
  build: {
    outDir: 'dist', // Output folder
    emptyOutDir: true, // Clear dist/ before build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Explicit entry point
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // For cleaner imports
    },
  },
});