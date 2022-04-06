import { defineConfig } from 'tsup';

// -----------------------------------------------------------------------------

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  external: ['react'],
  clean: true,
  dts: true,
  minify: true,
  sourcemap: true,
  splitting: false,
});
