import ViteRestart from "vite-plugin-restart";
import viteCompression from 'vite-plugin-compression';
import manifestSRI from "vite-plugin-manifest-sri";
import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: "./web/dist/",
    rollupOptions: {
      input: {
        app: "./src/js/app.ts",
      },
      output: {
        sourcemap: true
      }
    },
  },
  plugins: [
    manifestSRI(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    ViteRestart({
      reload: ["templates/**/*"],
    }),
  ],
  publicDir: path.resolve(__dirname, 'src/public'),
  resolve: {
      alias: {
          '@': path.resolve(__dirname, 'src'),
          '@css': path.resolve(__dirname, 'src/css'),
          '@js': path.resolve(__dirname, 'src/js'),
      },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
});
