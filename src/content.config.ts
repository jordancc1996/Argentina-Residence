import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    readTime: z.string(),
    category: z.string(),
    slug: z.string(),
    author: z.string(),
    image: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({
    base: './src/content/faqs',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    slug: z.string(),
    question: z.string(),
    answer: z.string(),
    richContent: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const industryNews = defineCollection({
  loader: glob({
    base: './src/content/industryNews',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    body: z.string(),
    source: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  articles,
  faqs,
  industryNews,
};
