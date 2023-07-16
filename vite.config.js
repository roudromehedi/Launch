import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        'images/person_1.jpg',
        // Add any other external modules here
        'images/market-launch-pana.svg',
        'images/dashboard.jpg'
      ],
    },
  },
});
