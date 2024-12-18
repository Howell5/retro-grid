import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RetroGrid',
      fileName: (format) => `retro-grid.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (info) => {
          if (info.name === 'style.css') {
            return 'retro-grid.css'
          }
          return info.name || ''
        },
      },
    },
    cssCodeSplit: false,
  },
})
