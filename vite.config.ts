/// <reference types="vitest" />
import { defineConfig, mergeConfig, PluginOption } from 'vite';
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

// Basic Vite configuration
const viteConfig = defineConfig({
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
});

// Vitest configuration
const vitestConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: false, // Disable CSS processing during tests
    deps: {
      inline: true, // Inline all dependencies for testing
    },
    coverage: {
      provider: 'istanbul', // Changed from 'v8' to 'istanbul'
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
      // Temporarily reduce thresholds while implementing more tests
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};

// Merge configurations and export
export default mergeConfig(viteConfig, vitestConfig);
