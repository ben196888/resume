import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: {
    enabled: process.env.NODE_ENV !== 'test'
  }
});
