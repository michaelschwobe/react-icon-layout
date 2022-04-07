import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// -----------------------------------------------------------------------------

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.ts', '**/*.test.tsx'],
    setupFiles: './tests/setupTests.ts',
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['json'],
    },
  },
});
