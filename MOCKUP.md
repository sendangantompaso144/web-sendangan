## 1. Halaman Utama (index.astro)

> Satu halaman panjang berisi seluruh konten utama yang diakses lewat scroll.
> Semua informasi penting desa ditampilkan secara ringkas, padat, dan visual.

**Section dan Kontennya:**

### 1.1. Hero Section
- Foto latar utama (panorama desa / kantor desa).
- Nama & logo desa.
- Tagline (misalnya: “Desa Kecil dengan Cerita Besar”).
- Tombol ajakan: “Kenali Kami” → scroll ke bawah.
### 1.2. Tentang Desa (Profil Singkat)
- Narasi pendek: sejarah singkat, lokasi geografis, dan identitas.
- Foto kantor desa atau warga.
- Kutipan atau pernyataan kepala desa singkat.
### 1.3. Data Singkat & Statistik
- Tabel/infografik kecil (jumlah penduduk, luas wilayah, rasio lansia, jumlah RT).
- Peta administratif kecil (hasil dari rekan PWK).
- Desain ringan berbentuk card/grid.
### 1.4. Cerita & Identitas Desa
- Paragraf singkat yang menggambarkan karakter unik desa:
> “Desa kecil di tengah dataran Tompaso yang bertahan di antara perkembangan kota.”
- Satu-dua foto human interest (oma-oma, anak bermain, warga bekerja).
- Kutipan warga: “Kami ingin desa ini tetap hidup walau kecil.”
### 1.5. Program & Inisiatif Desa
#### 3–4 kartu kegiatan utama desa:
- Program KKT
- Gotong royong bersih desa setiap hari jumat
- dan lainnya
Tombol: “Lihat Semua Program” → link ke /program.
### 1.6. Galeri Kegiatan
- Grid 6–8 foto kegiatan (statis).
- Link “Lihat Galeri Lengkap” → /galeri.
### 1.7. Peta & Lokasi
- Peta administratif atau lokasi desa (gambar statis dari ArcGIS).
- Alamat kantor desa, jam pelayanan, dan link WhatsApp.
### 1.8. Footer
- Navigasi ke halaman lain: Profil | Program | Galeri | Data | Cerita | Kontak.
- Credit: “© 2025 KKT 144 UNSRAT Desa Sendangan, Tompaso”

## 2. Halaman Profil Desa (/profil)
> Menampilkan informasi identitas dan sejarah secara lengkap

**Isi dan Section:**
- Sejarah Desa
- Visi & Misi: dalam poin-poin
- Letak Geografis & Batas Wilayah: Tabel + Peta ArcGIS
- Struktur Pemerintahan Desa: Foto dan nama perangkat
- Fasilitas Umum: Daftar fasilitas dasar (Balai desa, posyandu, tempat ibadah)

## 3. Halaman Program dan Kegiatan (/program)
> Dokumentasi kegiatan sosial dan inisiatif warga (statis, tanpa kalender dinamis)

**Isi dan Section:**
#### Program Unggulan Desa:
- Gotong Royong Bersih Lingkungan
- Kegiatan KKT 144 UNSRAT
#### Program Kolaborasi KKT 144 UNSRAT:
Setiap program dijelaskan singkat dengan foto pendukung.
- Bak Sampah
- KKT Mengajar
- Website Desa
- Penitikan Google Maps
- Senam Lansia

## 4. Halaman Galeri (/galeri)
> Visualisasi kehidupan desa dalam bentuk foto-foto dokumentasi

**Isi dan Section:**
- Galeri Kegiatan: Kegiatan sosial, KKT, Gotong royong
- Galeri Warga: Potret Lansia, anak-anak, keluarga
- Galeri Lingkungan: Pemandanngan, fasilitas desa, jalan utama

## 5. Halaman Data & Statistik (/data)
> Menampilkan data spasial & sosial secara visual dan sederhana
**Isi dan Section:**
- Data umum: Luas wilayah, jumlah penduduk, jumlah RT/RW.
- Statistik Sosial: pie chart statis usia penduduk (anak, dewasa, lansia).
- Peta Fasilitas & Infrastruktur: gambar ArcGIS dengan ikon fasilitas
- Sumber data: Keterangan "Sumber: Pemerintah Desa Sendangan, Tompaso, 2025"

## 6. Halaman Cerita Warga (/cerita)
> Fokus pada sisi human interest - cerita hidup, tradisi, dan nilai sosial. Disajikan dalam foto atau embedded video youtube.
**Isi dan Section:**
- Cerita Lansia: wawancara singkat dengan oma-oma tentang sejarah desa.
- Cerita Generasi Muda: anak muda yang sekolah di kota tapi tetap bangga akan desanya.
- Kutipan Inspiratif: Kalimat-kalimat pendek dari warga

## 7. Halaman Kontak (/kontak)
> Informasi resmi dan sarana komunikasi publik
**Isi dan Section:**
- Alamat Kantor Desa Lengkap
- Jam Pelayanan
- Kontak (email, WA, Instagram)
- Peta Statis Kecil (ArcGIS atau Google Maps screenshot)
- Link cepat ke media sosial atau pesan langsung.

## 8. Halaman Behind the Project (/tentang atau /kkt)
> Menjelaskan bagaimana program kerja dibuat oleh mahasiswa
**Isi dan Section:**
- Profil Singkat tim KKT 144 UNSRAT
- Tujuan pembuatan website: "Sebagai bentuk kontribusi dalam pengenalan dan pelestarian identitas desa."
- Foto tim & proses pembuatan (coding, dokumentasi, diskusi dengan warga).
- Ucapan terima kasih kepada warga desa dan pihak terkait.

## Navigasi Akhir (Navbar)
```
Home | Profil | Program | Galeri | Data | Cerita | Kontak | KKT
```