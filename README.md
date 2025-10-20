# Web Sendangan

One-page Astro site for Desa Sendangan with Tailwind CSS, MDX content collections, Chart.js visualisations, and Leaflet maps. Deployment target is GitHub Pages with a custom domain.

## Struktur

```text
src/
├── components/
├── content/
│   ├── agenda/
│   ├── berita/
│   ├── halaman/
│   └── produk/
├── data/
├── images/
├── layouts/
├── pages/
├── scripts/
└── styles/
```

## Perintah NPM

| Command         | Keterangan                                    |
|-----------------|-----------------------------------------------|
| `npm install`   | Instal semua dependensi                        |
| `npm run dev`   | Jalankan server pengembangan `localhost:4321`  |
| `npm run build` | Build untuk produksi ke folder `dist/`         |
| `npm run preview` | Pratinjau hasil build secara lokal           |

## Langkah Selanjutnya

- Tambahkan konten Markdown/MDX pada koleksi di `src/content/`.
- Muat data pendukung di `src/data/` dan skrip interaktif di `src/scripts/`.
- Sesuaikan konfigurasi `astro.config.mjs` dengan domain GitHub Pages final.
