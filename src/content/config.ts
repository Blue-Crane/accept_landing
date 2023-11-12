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

const sectionCollection = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    href: z.string(),
    order: z.number(),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    github: z.string(),
    telegram: z.string(),
    about: z.string(),
    role: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  features: featuresCollection,
  sections: sectionCollection,
  team: teamCollection,
};
