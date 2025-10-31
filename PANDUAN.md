# Panduan Cepat Website Desa Sendangan

## 🚀 Memulai

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   
3. **Buka di Browser**
   - Akses: `http://localhost:4321`

## 📸 Mengganti Foto Placeholder

Saat ini website menggunakan placeholder SVG. Untuk mengganti dengan foto asli:

### Foto Kepala Desa & Perangkat
1. Siapkan foto dengan rasio 3:4 (portrait)
2. Simpan di: `public/images/foto/`
3. Edit `src/data/data.json`:
   ```json
   {
     "perangkatDesa": [
       {
         "nama": "Johny R. Mandagi",
         "jabatan": "Kepala Desa",
         "foto": "/images/foto/kepala_desa.jpg"  // Ganti .svg ke .jpg
       }
     ]
   }
   ```

## ✏️ Mengedit Konten

### 1. Data Statistik Desa
File: `src/data/data.json`

```json
{
  "statistik": {
    "jumlahPenduduk": 230,     // Ganti dengan data aktual
    "jumlahRT": 3,             // Ganti dengan data aktual
    "luasWilayahHa": 85,       // Ganti dengan data aktual
    "proporsiUsia": {
      "anakAnak": 18,          // Persentase
      "dewasa": 62,            // Persentase
      "lansia": 20             // Persentase
    }
  }
}
```

### 2. Sambutan Kepala Desa
File: `src/pages/index.astro`

Cari section "Sambutan Kepala Desa" (sekitar baris 115) dan edit teks sambutan:
```astro
<p>
  Selamat datang di website resmi Desa Sendangan...
  // Edit teks di sini
</p>
```

### 3. Data APBDes
File: `src/pages/index.astro`

Di bagian atas file (sekitar baris 8), edit data APBD:
```javascript
const apbdData = {
  totalAnggaran: 850000000,        // Total anggaran dalam Rupiah
  realisasi: 650000000,            // Realisasi dalam Rupiah
  persentaseRealisasi: 76.5        // Persentase realisasi
};
```

### 4. Menambah Perangkat Desa
File: `src/data/data.json`

```json
{
  "perangkatDesa": [
    {
      "nama": "Johny R. Mandagi",
      "jabatan": "Kepala Desa",
      "foto": "/images/foto/kepala_desa.svg"
    },
    {
      "nama": "Maria S. Wenas",
      "jabatan": "Sekretaris Desa",
      "foto": "/images/foto/sekdes.svg"
    },
    // Tambahkan perangkat desa lainnya di sini
    {
      "nama": "Nama Bendahara",
      "jabatan": "Bendahara Desa",
      "foto": "/images/foto/bendahara.jpg"
    }
  ]
}
```

## 🎨 Mengubah Warna Tema

File: `src/styles/global.css`

Edit CSS variables di bagian `:root`:
```css
:root {
  --color-primary: #90CAF9;      /* Warna utama */
  --color-secondary: #E3F2FD;    /* Warna background section */
  --color-accent: #FFE082;       /* Warna tombol/aksen */
  --color-text: #263238;         /* Warna teks */
  --color-neutral: #F9FAFB;      /* Background halaman */
}
```

## 📱 Navigasi Menu

File: `src/components/Header.astro`

Edit array `navItems` untuk menambah/mengurangi menu:
```javascript
const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  // Tambah menu baru di sini
  { label: 'Menu Baru', href: '/menu-baru' }
];
```

## 🔧 Tips Optimasi

### 1. Compress Foto
- Gunakan tools seperti TinyPNG atau Squoosh
- Target: < 500KB per foto
- Format: WebP untuk size lebih kecil

### 2. Lazy Loading
Semua foto sudah menggunakan `loading="lazy"` secara otomatis.

### 3. Build untuk Production
```bash
npm run build
```
Hasil build ada di folder `dist/`

## ❓ Troubleshooting

### Port sudah digunakan
Jika port 4321 sudah digunakan, Astro akan otomatis mencoba port lain (misal 4322).

### Foto tidak muncul
1. Pastikan path foto benar
2. Cek foto ada di folder `public/images/`
3. Path harus diawali dengan `/` (contoh: `/images/foto/nama.jpg`)

### Perubahan tidak terlihat
1. Refresh browser (Ctrl + R atau Cmd + R)
2. Clear cache (Ctrl + Shift + R atau Cmd + Shift + R)
3. Restart dev server

## 📞 Bantuan

Untuk pertanyaan atau bantuan lebih lanjut:
- Lihat dokumentasi lengkap di `README.md`
- Lihat mockup lengkap di `MOCKUP.md`
- Lihat panduan tema di `theme.md`

---

**Selamat mengelola website Desa Sendangan! 🎉**
