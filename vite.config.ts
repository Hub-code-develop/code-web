import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// 目标域名是自定义子域 code.hub-develop.top，Pages 在自定义域下以根路径 / 提供服务，
// 因此 base 必须为 '/'（若改用 *.github.io/code-web/ 项目页，才需要 base: '/code-web/'）。
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
