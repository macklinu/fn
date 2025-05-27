import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  outDir: 'dist',
  watch: options.watch,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  minify: true,
  sourcemap: true,
  treeshake: true,
}))
