import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80,
    strictPort: true
  },
  assetsInclude: ['png'],
  // base: process.env.NODE_ENV === 'production' ? '/GeoDiscover/' : '/',
})
