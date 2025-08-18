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

// Custom plugin to ignore SCSS files during test runs
import type { Plugin } from 'vite';
function IgnoreScssInTests(): Plugin {
  return {
    name: 'ignore-scss-in-tests',
    enforce: 'pre' as const,
    resolveId(source) {
      if (process.env.VITEST && source.endsWith('.scss')) {
        return source;
      }
      return null;
    },
    load(id) {
      if (process.env.VITEST && id.endsWith('.scss')) {
        return 'export default {}';
      }
      return null;
    },
  };
}

// Basic Vite configuration
const viteConfig = defineConfig({
  plugins: [react(), BlogHotReload(), IgnoreScssInTests()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        quietDeps: true,
        silenceDeprecations: [
          'import',
          'legacy-js-api',
          'global-builtin',
          'color-functions',
          'mixed-decls',
        ],
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
    css: true,
    // Use the same SCSS configuration as the app
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    deps: {
      inline: [/\.scss$/],
      // fallbackCJS: true,
    },
    mock: {
      // Mock all .scss imports to an empty object
      '\\.scss$': {},
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
        '**/*.config.ts',
        'docs/assets/index-**.js',
        'src/__tests__/**',
        'src/utils/__tests__/**',
        'src/server.tsx',
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
