// data/wasteData.ts
import { WasteArticles, WasteResult } from '../types/waste';

export const wasteArticles: WasteArticles = {
  'plastic': {
    title: 'Panduan Lengkap Pengelolaan Sampah Plastik',
    description: 'Pelajari cara mendaur ulang plastik dengan benar',
    url: '/artikel/pengelolaan-plastik'
  },
  'organic': {
    title: 'Mengubah Sampah Organik Menjadi Kompos',
    description: 'Teknik composting untuk sampah organik rumah tangga',
    url: '/artikel/kompos-organik'
  },
  'paper': {
    title: 'Daur Ulang Kertas: Dari Sampah Menjadi Berkah',
    description: 'Cara efektif mendaur ulang berbagai jenis kertas',
    url: '/artikel/daur-ulang-kertas'
  },
  'metal': {
    title: 'Pengelolaan Sampah Logam dan Nilai Ekonominya',
    description: 'Memaksimalkan nilai ekonomi dari sampah logam',
    url: '/artikel/sampah-logam'
  },
  'glass': {
    title: 'Kaca Bekas: Cara Pengelolaan yang Aman dan Efektif',
    description: 'Panduan aman mengelola sampah kaca',
    url: '/artikel/sampah-kaca'
  }
};

export const mockResults: WasteResult[] = [
  {
    type: 'Plastik PET',
    category: 'plastic',
    confidence: 0.96,
    description: 'Botol plastik PET yang dapat didaur ulang',
    recommendations: [
      'Bersihkan botol dari sisa isi',
      'Lepas label dan tutup botol',
      'Masukkan ke tempat sampah daur ulang',
      'Atau bawa ke bank sampah terdekat'
    ],
    icon: '♻️',
    color: 'from-blue-400 to-blue-600',
    economicValue: 'Rp 2.000-3.000 per kg'
  },
  {
    type: 'Sampah Organik',
    category: 'organic',
    confidence: 0.94,
    description: 'Sisa makanan yang dapat dikompos',
    recommendations: [
      'Pisahkan dari sampah non-organik',
      'Buat kompos dengan teknik yang benar',
      'Atau berikan ke peternakan sebagai pakan',
      'Hindari membuang ke saluran air'
    ],
    icon: '🌱',
    color: 'from-green-400 to-green-600',
    economicValue: 'Kompos: Rp 5.000-10.000 per kg'
  },
  {
    type: 'Kertas Bekas',
    category: 'paper',
    confidence: 0.89,
    description: 'Kertas yang masih dapat didaur ulang',
    recommendations: [
      'Pastikan kertas dalam kondisi kering',
      'Pisahkan dari kertas yang terkontaminasi',
      'Kumpulkan hingga jumlah yang cukup',
      'Jual ke pengepul kertas bekas'
    ],
    icon: '📄',
    color: 'from-yellow-400 to-orange-500',
    economicValue: 'Rp 1.500-2.500 per kg'
  }
];