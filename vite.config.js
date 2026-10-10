import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project-site URL: https://snehagoudar887.github.io/sneha-cv-/
  base: '/sneha-cv-/',
});
