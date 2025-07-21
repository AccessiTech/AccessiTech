import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";

function BlogHotReload() {
  return {
    name: "custom-hmr",
    enforce: "post",
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".md")) {
        console.log("reloading md file...");

        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    },
  } as PluginOption;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), BlogHotReload()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
        additionalData: `@import "./src/scss/variables.scss";`,
      },
    },
  },
  build: {
    target: "esnext",
    outDir: "docs",
    emptyOutDir: true,
  },
  // Note - update the basename value to reflect the location of your application.
  // base: "/vite-react-bootstrap-redux-toolkit-ts/",
});
