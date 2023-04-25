import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), vueJsx(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', '@vueuse/head',],
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
          // alias: { park: 'icon-park' } 集合的别名
          // 在这个网站找图标，然后将对应的合集名添加至此：https://icones.netlify.app/
          enabledCollections: ["heroicons-outline","mdi"] // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
        })
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
