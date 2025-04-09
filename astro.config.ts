import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://benliu.dev',
  base: '/',
  devToolbar: {
    enabled: process.env.NODE_ENV !== 'test'
  },
  // @ts-expect-error - content collections are supported but types are not up to date
  content: {
    collections: [
      {
        name: 'resume',
        schema: {
          type: 'content',
          schema: {
            title: { type: 'string', required: true },
            position: { type: 'string', required: true },
            email: { type: 'string', required: true },
            github: { type: 'string', required: true },
            linkedin: { type: 'string', required: true },
          },
        },
      },
    ],
  },
});
