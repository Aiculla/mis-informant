import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    featured: z.boolean().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
};
