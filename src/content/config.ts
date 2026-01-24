import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		category: z.enum(['Comparativas', 'Noticias', 'Ciber-Contingencia']),
	}),
});

export const collections = { news };
