import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/retro-grid/',
  build: {
    outDir: 'demo-dist', // 使用不同的输出目录
  },
  plugins: [vue()],
})
