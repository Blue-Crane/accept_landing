import {z, defineCollection} from "astro:content";

const featuresCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        shortTitle: z.string(),
        image: z.string(),
        svg: z.string(),
    })
})

export const collections = {
    fetures: featuresCollection
}