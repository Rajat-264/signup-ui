import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allow external access
    port: 80,       // Ensure the correct port
    strictPort: true,
    allowedHosts: ["signup-ui-production.up.railway.app"],  // Allow Railway domain
  },
})
