import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/provenza/',  // Solo el nombre del repositorio con barras
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})