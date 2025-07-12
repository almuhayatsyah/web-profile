# **Portofolio Almuhayats – Fullstack Developer**

Situs web portofolio modern dan responsif yang menampilkan pengalaman, keahlian, dan project nyata seperti CRM, GIS, CMS organisasi, dan E-Learning. Dibangun dengan React, TypeScript, dan Tailwind CSS.

## **🚀 Fitur Unggulan**

- **Desain Modern & Animasi**: UI profesional dengan animasi halus (Framer Motion)
- **Responsif**: Tampilan optimal di semua perangkat
- **Interaktif**: Navigasi smooth scroll, modal project, dark mode toggle
- **Performa**: Optimasi loading (spinner), lazy load gambar
- **TypeScript**: Kode aman dan maintainable
- **Modular**: Struktur komponen rapi, mudah dikembangkan

## **🛠️ Stack Teknologi**

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animasi**: Framer Motion
- **Ikon**: Lucide React, React Icons
- **Build Tool**: Vite
- **Linting**: ESLint

## **📁 Struktur Proyek**

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Portfolio.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── asset/
│   └── img/
│       ├── crm.png
│       ├── bem.png
│       ├── gis.png
│       └── sertifikat.jpg
├── App.tsx
├── main.tsx
└── index.css
```

## **🎨 Bagian Utama**

1. **Hero**: Intro singkat & ajakan bertindak
2. **About**: Profil, pengalaman, dan keunggulan
3. **Skills**: Keahlian teknis (PHP, Laravel, JS, API, Database, dsb)
4. **Portfolio**: Showcase project nyata (CRM, GIS, CMS, E-Learning)
5. **Experience**: Pengalaman magang/kerja (PLN UID Aceh)
6. **Contact**: Formulir & info kontak

## **🚀 Cara Menjalankan**

1. **Install dependensi**
   ```bash
   npm install
   ```
2. **Jalankan server development**
   ```bash
   npm run dev
   ```
3. **Build untuk produksi**
   ```bash
   npm run build
   ```

## **📝 Kustomisasi**

- **Profil & Hero**: Ubah di `src/components/sections/Hero.tsx` dan `About.tsx`
- **Project**: Edit/isi project di `src/components/sections/Portfolio.tsx` (tambahkan gambar di `asset/img`)
- **Keahlian**: Update skill di `src/components/sections/Skills.tsx`
- **Pengalaman**: Edit pengalaman di `src/components/sections/Experience.tsx`
- **Kontak**: Ubah info/form di `src/components/sections/Contact.tsx`

## **🎯 Fitur Performa**

- Lazy loading gambar project
- Modal detail project
- Smooth scroll navigation
- Dark/light mode
- SEO friendly structure

## **📱 Responsif**

Sudah diuji di:

- Desktop
- Laptop
- Tablet
- Mobile

## **🔧 Pengembangan**

### **Skrip**

- `npm run dev` – Jalankan development server
- `npm run build` – Build untuk produksi
- `npm run preview` – Preview hasil build
- `npm run lint` – Cek kualitas kode

### **Gaya Kode**

- ESLint & Prettier
- TypeScript strict mode

## **📄 Lisensi**

MIT License

## **🤝 Kontribusi**

Kontribusi, issue, dan saran sangat terbuka!

## **📞 Kontak & Dukungan**

Jika ada pertanyaan atau ingin kerja sama, silakan hubungi melalui email atau LinkedIn yang tertera di halaman kontak.
