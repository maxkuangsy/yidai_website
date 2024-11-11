import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/yidai_website/'
  plugins: [react()],
  resolve: {
    alias: {
      '/public': '/public'
    }
  },
  optimizeDeps: {
    include: ['i18next', 'react-i18next']
  }
});
