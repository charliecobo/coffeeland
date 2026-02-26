import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.MSW_ENABLED': JSON.stringify(true),
    'process.env.BASE_URL': JSON.stringify('https://my-custom/api/v1'),
  },
});
