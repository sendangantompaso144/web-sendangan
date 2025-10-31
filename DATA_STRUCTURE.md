# Dokumentasi Struktur Data

File: `src/data/data.json`

## Format Data

### 1. Perangkat Desa

```json
{
  "perangkatDesa": [
    {
      "nama": "string",           // Nama lengkap
      "jabatan": "string",        // Jabatan di pemerintahan desa
      "foto": "string"            // Path ke foto (dari folder /public)
    }
  ]
}
```

**Contoh:**
```json
{
  "perangkatDesa": [
    {
      "nama": "Johny R. Mandagi",
      "jabatan": "Kepala Desa",
      "foto": "/images/foto/kepala_desa.jpg"
    },
    {
      "nama": "Maria S. Wenas",
      "jabatan": "Sekretaris Desa",
      "foto": "/images/foto/sekdes.jpg"
    },
    {
      "nama": "Nama Bendahara",
      "jabatan": "Bendahara Desa",
      "foto": "/images/foto/bendahara.jpg"
    }
  ]
}
```

### 2. Program Desa

```json
{
  "programDesa": [
    {
      "judul": "string",          // Judul program
      "deskripsi": "string",      // Deskripsi singkat program
      "gambar": "string"          // Path ke gambar (dari folder /public)
    }
  ]
}
```

**Contoh:**
```json
{
  "programDesa": [
    {
      "judul": "Digitalisasi & Website Desa",
      "deskripsi": "Pembuatan website resmi desa sebagai media informasi dan dokumentasi.",
      "gambar": "/images/dokumentasi/program_web.jpg"
    },
    {
      "judul": "Gotong Royong Bersih Desa",
      "deskripsi": "Kegiatan bulanan membersihkan jalan utama dan area publik.",
      "gambar": "/images/dokumentasi/gotong_royong.jpg"
    },
    {
      "judul": "Pemberdayaan UMKM",
      "deskripsi": "Pelatihan dan pendampingan untuk UMKM lokal.",
      "gambar": "/images/dokumentasi/umkm.jpg"
    }
  ]
}
```

### 3. Cerita Warga

```json
{
  "ceritaWarga": [
    {
      "nama": "string",           // Nama warga
      "usia": number,             // Usia dalam tahun
      "kutipan": "string",        // Kutipan/testimoni
      "foto": "string"            // Path ke foto (dari folder /public)
    }
  ]
}
```

**Contoh:**
```json
{
  "ceritaWarga": [
    {
      "nama": "Oma Lina",
      "usia": 78,
      "kutipan": "Dulu desa ini hampir digabung, tapi kami tetap bertahan.",
      "foto": "/images/foto/oma_lina.jpg"
    },
    {
      "nama": "Rico Senduk",
      "usia": 22,
      "kutipan": "Meski kerja di kota, saya tetap pulang untuk kegiatan desa.",
      "foto": "/images/foto/rico.jpg"
    }
  ]
}
```

### 4. Statistik Desa

```json
{
  "statistik": {
    "jumlahPenduduk": number,     // Total penduduk
    "jumlahRT": number,           // Jumlah RT/Jaga
    "luasWilayahHa": number,      // Luas wilayah dalam hektar
    "proporsiUsia": {
      "anakAnak": number,         // Persentase (0-100)
      "dewasa": number,           // Persentase (0-100)
      "lansia": number            // Persentase (0-100)
    }
  }
}
```

**Contoh:**
```json
{
  "statistik": {
    "jumlahPenduduk": 230,
    "jumlahRT": 3,
    "luasWilayahHa": 85,
    "proporsiUsia": {
      "anakAnak": 18,
      "dewasa": 62,
      "lansia": 20
    }
  }
}
```

**Catatan:** Total proporsiUsia harus = 100%

## Penggunaan di Komponen

### Di halaman Astro:
```astro
---
import data from '../data/data.json';

const { perangkatDesa, programDesa, ceritaWarga, statistik } = data;
---

<!-- Tampilkan data -->
<p>Total Penduduk: {statistik.jumlahPenduduk}</p>

{perangkatDesa.map(person => (
  <div>
    <h3>{person.nama}</h3>
    <p>{person.jabatan}</p>
  </div>
))}
```

## Tips

1. **Path Foto:** Selalu mulai dengan `/` untuk path absolut dari folder `public`
2. **Format Angka:** Gunakan number untuk data numerik, bukan string
3. **Validasi:** Pastikan JSON valid (gunakan JSON validator online)
4. **Backup:** Selalu backup data.json sebelum edit besar-besaran

## Contoh File Lengkap

Lihat file `src/data/data.json` untuk contoh lengkap struktur data yang sudah terimplementasi.
