import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
  
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    allowedHosts: ['daiyongkim.com'],
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true
    }
  }
})
