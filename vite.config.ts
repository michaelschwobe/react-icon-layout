/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

// -----------------------------------------------------------------------------

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'react-icon-layout',
      fileName: (format) => `react-icon-layout.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [eslintPlugin(), react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['tests/**/*.test.tsx'],
    setupFiles: './tests/setupTests.ts',
  },
});
