import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteMinifyPlugin } from 'vite-plugin-minify';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({})],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~components': path.resolve(__dirname, 'src/components'),
    }
  }
})
