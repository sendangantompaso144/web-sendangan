# Website Desa Sendangan

Website resmi Desa Sendangan yang dibangun dengan Astro - framework modern untuk website yang cepat dan efisien.

## ✨ Fitur

- 🎨 **Desain Minimalis Modern Humanistik** - Interface bersih dengan tema pastel yang menenangkan
- 📱 **Responsive Design** - Tampil sempurna di semua perangkat (desktop, tablet, mobile)
- ⚡ **Performance Optimal** - Load cepat dengan optimasi gambar dan code splitting
- 🎭 **Animasi Halus** - Scroll reveal dan transisi yang smooth
- ♿ **Aksesibilitas Tinggi** - Kontras warna yang baik dan ukuran font minimum 16px

## 🎨 Tema Desain

### Warna Pastel Calm
- **Primary**: `#90CAF9` (Biru Pastel)
- **Secondary**: `#E3F2FD` (Biru muda sangat lembut)
- **Accent**: `#FFE082` (Kuning lembut)
- **Text**: `#263238` (Abu gelap)
- **Neutral**: `#F9FAFB` (Latar belakang netral)

### Tipografi
- **Heading**: Poppins (modern, geometris, ramah)
- **Body**: Inter (mudah dibaca di layar)

## 📁 Struktur Proyek

```
/
├── public/
│   ├── assets/           # Asset statis
│   └── images/          # Gambar dan foto
│       ├── dokumentasi/ # Foto kegiatan
│       ├── foto/        # Foto perangkat desa
│       └── maps/        # Peta desa
├── src/
│   ├── components/      # Komponen Astro reusable
│   │   ├── CardPerson.astro
│   │   ├── CardProgram.astro
│   │   ├── Footer.astro
│   │   ├── GalleryGrid.astro
│   │   └── Header.astro
│   ├── data/           # Data JSON
│   │   └── data.json
│   ├── layouts/        # Layout template
│   │   └── BaseLayout.astro
│   ├── pages/          # Halaman website
│   │   ├── index.astro     # Beranda
│   │   ├── profil.astro    # Profil Desa
│   │   ├── cerita.astro    # Cerita Warga
│   │   ├── data.astro      # Data Desa
│   │   ├── galeri.astro    # Galeri
│   │   ├── kontak.astro    # Kontak
│   │   └── program.astro   # Program Desa
│   └── styles/
│       └── global.css  # Style global
├── astro.config.mjs    # Konfigurasi Astro
├── package.json
└── README.md
```

## 🚀 Halaman Utama (Home)

Halaman utama terdiri dari 7 section:

1. **Hero Section** - Sambutan dengan data singkat (penduduk, luas wilayah, jumlah jaga)
2. **Jelajahi Desa** - Menu navigasi ke halaman penting
3. **Sambutan Kepala Desa** - Foto dan sambutan dari Hukum Tua
4. **Peta Desa** - Placeholder untuk peta (akan diisi kemudian)
5. **Struktur Organisasi** - Grid foto perangkat desa
6. **Administrasi Penduduk** - Data kependudukan
7. **APBDes** - Transparansi anggaran desa

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start dev server di `localhost:4321`             |
| `npm run build`        | Build production ke `./dist/`                    |
| `npm run preview`      | Preview build sebelum deploy                     |
| `npm run astro ...`    | Jalankan CLI commands Astro                      |

## 🖼️ Menambahkan Foto

### Foto Perangkat Desa
1. Simpan foto di `public/images/foto/`
2. Format: JPG atau PNG
3. Ukuran: Rasio 3:4 (contoh: 600x800px)
4. Update path di `src/data/data.json`

### Foto Dokumentasi
1. Simpan foto di `public/images/dokumentasi/`
2. Format: JPG atau PNG
3. Ukuran maksimal: 500KB per foto
4. Update data di `data.json`

## 📝 Mengedit Konten

### Data Desa
Edit file `src/data/data.json` untuk mengubah:
- Perangkat desa
- Program desa
- Cerita warga
- Statistik desa

### Styling
Edit `src/styles/global.css` untuk mengubah:
- Warna tema
- Spacing
- Typography
- Animasi

## 🌐 Deploy

Website ini bisa di-deploy ke:
- **GitHub Pages** (Gratis)
- **Netlify** (Gratis)
- **Vercel** (Gratis)
- **Cloudflare Pages** (Gratis)

### Deploy ke GitHub Pages

1. Build project:
```sh
npm run build
```

2. Deploy folder `dist/` ke GitHub Pages

## 📖 Dokumentasi Tambahan

- [Astro Documentation](https://docs.astro.build)
- [Mockup Lengkap](./MOCKUP.md)
- [Panduan Tema](./theme.md)

## 🤝 Kontribusi

Website ini dibuat untuk Desa Sendangan. Untuk update atau perbaikan, hubungi tim pengelola website desa.

---

**Dibuat dengan ❤️ untuk Desa Sendangan**


Rn condition - Workspace structure:
```
/
├── astro.config.mjs
├── node_modules/
├── package-lock.json
├── package.json
├── public/
│   ├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── dokumentasi/
│       ├── foto/
│       ├── hero/
│       ├── keterangan.txt
│       └── maps/
├── README.md
├── src/
│   ├── components/
│   │   ├── CardPerson.astro
│   │   ├── CardProgram.astro
│   │   ├── Footer.astro
│   │   ├── GalleryGrid.astro
│   │   ├── index.astro
│   │   └── Header.astro
│   ├── data/
│   │   └── data.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── cerita.astro
│   │   ├── data.astro
│   │   ├── galeri.astro
│   │   ├── kontak.astro
│   │   └── program.astro
│   └── styles/
│       └── global.css
└── tsconfig.json
```
