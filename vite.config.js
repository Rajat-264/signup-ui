import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  
    port: 80,        // ✅ Changed to port 80 for Railway
    strictPort: true,
    allowedHosts: ["signup-ui-production.up.railway.app"],  
  },
})
