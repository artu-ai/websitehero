import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: 'websitehero' , // Replace with your GitHub repo name
  root: 'src', // Set the root to the src directory
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../dist', // Output directory for the build
    emptyOutDir: true, // Ensure the dist directory is emptied before each build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    },
  },
});
