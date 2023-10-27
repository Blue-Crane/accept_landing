import { z, defineCollection } from "astro:content";

const featuresCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    imageLeft: z.string(),
    imageRight: z.string(),
    bottomP: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  features: featuresCollection,
};
