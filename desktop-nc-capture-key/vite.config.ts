
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },

  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@layouts': '/src/layouts',
      '@router': '/src/router',
      '@views': '/src/views',
      '@webassembly': '/src/webassembly',
    },
  },

  esbuild: {
    target: 'es2022',
  },
});
