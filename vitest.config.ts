import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// -----------------------------------------------------------------------------

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    setupFiles: './tests/setupTests.ts',
  },
});
