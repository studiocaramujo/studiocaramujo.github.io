import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of studiocaramujo.github.io, so base is '/'.
export default defineConfig({ plugins: [react()], base: '/' })
