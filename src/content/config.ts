import { defineCollection, z } from 'astro:content';

const berita = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const produk = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    kategori: z.string(),
    harga: z.number().optional(),
    foto: z.string(),
    deskripsi: z.string(),
    kontak: z.string().optional(),
  }),
});

const agenda = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dateStart: z.date(),
    dateEnd: z.date().optional(),
    lokasi: z.string(),
    ringkasan: z.string(),
  }),
});

const halaman = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    navLabel: z.string(),
    order: z.number().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = {
  berita,
  produk,
  agenda,
  halaman,
};
