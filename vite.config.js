import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages the workflow builds with VITE_BASE_PATH=/birthday/.
  base: process.env.VITE_BASE_PATH || '/',
})
