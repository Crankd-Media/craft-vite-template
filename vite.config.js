import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";
import mkcert from "vite-plugin-mkcert";

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
    },
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    ViteRestart({
      reload: ["./templates/**/*"],
    }),
    mkcert(),
  ],
  server: {
    https: true,
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
});
