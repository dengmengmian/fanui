import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['packages/react/test/setup.ts'],
    include: ['packages/react/test/**/*.test.ts', 'packages/react/test/**/*.test.tsx'],
  },
});
