import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
       environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
        testMatch: ['./tests/**/*.test.tsx'],
        globals: true
      },
      server: {
        watch: {
          usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 3000, // you can replace this port with any port
      }
})

