import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': createProxyMiddleware({
        target: 'https://www.virustotal.com/api/v3',
        changeOrigin: true 
      })
    }
  }
})
