import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Exposer le port 5173 pour docker
  server: {
    host: true,
    port: 5173
  }
})
