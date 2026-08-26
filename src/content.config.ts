import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const learn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/learn" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const facts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/facts" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = { learn, facts };
