import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(), // Coerce ayuda a que las fechas en texto funcionen bien
		description: z.string(),
		category: z.enum(['Comparativas', 'Noticias', 'Urgente']),
	}),
});

export const collections = { news };
