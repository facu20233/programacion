import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    strictPort: true,
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-eval'"
    }
  }
});

// // export default defineConfig({
// //   server: {
// //     // Configuración para eliminar la política CSP en desarrollo
// //     headers: {
// //       'Content-Security-Policy': "script-src 'self' 'unsafe-eval' *"
// //     }
// //   }
// // });