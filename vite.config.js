import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Example alias for components
      '@components': '/src/components',
    },
  },
})