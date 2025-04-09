import { defineCollection, z } from 'astro:content';

export const collections = {
  'resume': defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      position: z.string(),
      email: z.string(),
      github: z.string(),
      linkedin: z.string()
    })
  })
};
