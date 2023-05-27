import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
    port: 8888,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: `@import "${path.resolve(__dirname, 'src/style/index.less')}`,
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/styles/index.less')}"`,
        },
      },
    },
  },
  plugins: [
    vue(),
    createHtmlPlugin(),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name]_[hash:10][extname]',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
