import { defineCollection, reference, z } from 'astro:content';

const book = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		bookTitle: z.string().optional(),
		bookDescription: z.string().optional(),
		// Transform string to Date object
		bookPubDate: z.coerce.date().optional(),
		bookID: z.string().optional(),
		bookCoverImage: z.string().optional(),
		bookThumbImage: z.string().optional(),
      relatedPurchaseLinks: z.array(reference('links')).optional(),
      relatedTestimonials: z.array(reference('testimonials')).optional(),
      playlistID: z.string().optional(),
	}),
});

// Purchase Links Collection
const links = defineCollection({
	type: 'data',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string().optional(),
		label: z.string().optional(),
		url: z.string().url().optional(),
	}),
});

// Excerpts Collection
const excerpts = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string().optional(),
	}),
});

// Testimonials Collection
const testimonials = defineCollection({
	type: 'data',
	// Type-check frontmatter using a schema
	schema: z.object({
      testimonialName: z.string().optional(),
      testimonialRole: z.string().optional(),
      testimonialURL: z.string().url().optional(),
      testimonialImage: z.string().optional(),
      testimonialImageTitle: z.string().optional(),
      testimonialImageAlt: z.string().optional(),
      testimonialText: z.string().optional(),
	}),
});

export const collections = { book, excerpts, links, testimonials };
