import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: true,
  },
  server: {
    host: true,   // bind to 0.0.0.0 so Docker can expose the port
    port: 5173,
  },
});
