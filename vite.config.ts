/// <reference types="vitest" />
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';

function BlogHotReload() {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.md')) {
        console.log('reloading md file...');

        server.ws.send({
          type: 'full-reload',
          path: '*',
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
        api: 'modern-compiler',
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: false, // Disable CSS processing during tests
    deps: {
      inline: true, // Inline all dependencies for testing
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'coverage/**',
        'dist/**',
        '**/[.]**',
        'packages/*/test?(s)/**',
        '**/*.d.ts',
        '**/virtual:*',
        '**/__mocks__/*',
        '**/index.ts?(x)',
        'src/vite-env.d.ts',
        'src/main.tsx',
        'src/**/*.stories.{ts,tsx}',
      ],
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
});
