import path from 'node:path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@shared/': `${path.resolve(__dirname, 'src/shared')}/`,
      '@store/': `${path.resolve(__dirname, 'src/shared/store')}/`,
    },
  },
  server: {
    open: false,
    port: 3001,
  },
  /*   css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./assets/styles/global.scss";
        `,
      },
    },
  }, */
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: true,
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    // Components({
    //   dts: true,
    //   dirs: ['./src/ui/components/**/*.vue'],
    // }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],
})
