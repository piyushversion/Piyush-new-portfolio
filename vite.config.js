import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{

    allowedHosts:["55ca-2409-4081-911f-637c-815e-6b28-7302-1070.ngrok-free.app"]

  }
})
