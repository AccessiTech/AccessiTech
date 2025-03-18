import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        additionalData: `@import "./src/scss/variables.scss";`,
      },
    },
  },
  build: {
    target: 'esnext',
    outDir: 'docs',
    emptyOutDir: true,
  },
  // Note - update the basename value to reflect the location of your application.
  // base: "/vite-react-bootstrap-redux-toolkit-ts/",
});
