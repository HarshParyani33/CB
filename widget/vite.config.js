import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  },
  build: {
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'),
      name: 'BunnyWidget',
      fileName: () => 'bunny-widget.js',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
