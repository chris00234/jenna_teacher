import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jenna_teacher/',     // ← your repo name, leading and trailing slashes
  plugins: [react()],
});
