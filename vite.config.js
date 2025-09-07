import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configure base path for GitHub Pages. When CI=true, set a subpath; otherwise root.
const isCI = process.env.CI === 'true'

export default defineConfig({
  plugins: [react()],
  base: isCI ? '/app/' : '/',
  build: {
    outDir: 'dist'
  }
})