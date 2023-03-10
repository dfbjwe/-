import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置全局@路径
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
