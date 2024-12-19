import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/__tests__/*'],
      copyDtsFiles: true,
      aliasesExclude: [/\.vue$/],
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content,
      }),
      afterBuild: () => {
        // 可以在这里添加构建后的处理
      },
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
