import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    period: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = { work };
