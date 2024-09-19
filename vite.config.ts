import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import  createPrismPlugin  from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createPrismPlugin({
      languages: ['javascript', 'typescript', 'json'], // 需要支持的语言
      plugins: [], // 可选的插件
    }),
  ],
  // server: {
  //   proxy: {
  //     '/a': {
  //       target: 'https://api.uomg.com/api',
  //       rewrite: (path) => path.replace(/^\/a/, ''),
  //       changeOrigin: true
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // optimizeDeps: {
  //   include: ['@kangc/v-md-editor','@kangc/v-md-editor/lib/theme/vuepress.js'],
  // },
})
