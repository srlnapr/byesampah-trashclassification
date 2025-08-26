// data/suggestions.ts
import { 
  Home, 
  Building, 
  Users, 
  TrendingUp, 
  Star 
} from 'lucide-react';
import { Suggestion, QuickTip, Category, WasteTypeInfo } from '../types/suggestions';

export const wasteTypes: WasteTypeInfo[] = [
  {
    id: 'plastic',
    name: 'Plastik',
    icon: '🥤',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'organic',
    name: 'Organik',
    icon: '🥬',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'paper',
    name: 'Kertas',
    icon: '📄',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'glass',
    name: 'Kaca',
    icon: '🍾',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'metal',
    name: 'Logam',
    icon: '🥫',
    color: 'from-gray-400 to-gray-600'
  },
  {
    id: 'cardboard',
    name: 'Kardus',
    icon: '📦',
    color: 'from-amber-400 to-orange-600'
  }
];

export const categories: Category[] = [
  { id: 'all', name: 'Semua', icon: Star },
  { id: 'home', name: 'Rumah Tangga', icon: Home },
  { id: 'office', name: 'Kantor', icon: Building },
  { id: 'community', name: 'Komunitas', icon: Users },
  { id: 'business', name: 'Bisnis', icon: TrendingUp }
];

export const suggestions: Suggestion[] = [
  {
    id: 1,
    category: 'home',
    wasteType: 'organic',
    title: 'Membuat Kompos dari Sampah Dapur',
    description: 'Panduan lengkap mengubah sisa makanan menjadi pupuk organik berkualitas',
    difficulty: 'Mudah',
    timeRequired: '2-4 minggu',
    impact: 'Tinggi',
    steps: 5,
    likes: 1250,
    tags: ['organik', 'kompos', 'dapur', 'pupuk'],
    image: '🌱',
    color: 'from-green-400 to-green-600',
    featured: true
  },
  {
    id: 2,
    category: 'home',
    wasteType: 'plastic',
    title: 'Mengubah Botol Plastik Menjadi Pot Tanaman',
    description: 'Cara kreatif mendaur ulang botol plastik menjadi wadah tanaman yang cantik',
    difficulty: 'Mudah',
    timeRequired: '1-2 jam',
    impact: 'Sedang',
    steps: 6,
    likes: 890,
    tags: ['plastik', 'diy', 'tanaman', 'pot'],
    image: '🌿',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 3,
    category: 'home',
    wasteType: 'glass',
    title: 'Kreasi Lampu Hias dari Botol Kaca',
    description: 'Transformasi botol kaca bekas menjadi lampu hias yang artistik',
    difficulty: 'Sedang',
    timeRequired: '2-3 jam',
    impact: 'Sedang',
    steps: 8,
    likes: 756,
    tags: ['kaca', 'lampu', 'dekorasi', 'diy'],
    image: '💡',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 4,
    category: 'office',
    wasteType: 'paper',
    title: 'Program Paperless Office yang Efektif',
    description: 'Strategi mengurangi penggunaan kertas di tempat kerja hingga 80%',
    difficulty: 'Mudah',
    timeRequired: '1-2 minggu',
    impact: 'Tinggi',
    steps: 6,
    likes: 2100,
    tags: ['kertas', 'digital', 'efisiensi', 'paperless'],
    image: '📱',
    color: 'from-indigo-400 to-purple-600',
    featured: true
  },
  {
    id: 5,
    category: 'office',
    wasteType: 'paper',
    title: 'Sistem Daur Ulang Kertas Kantor',
    description: 'Implementasi program daur ulang kertas yang menguntungkan secara ekonomi',
    difficulty: 'Sedang',
    timeRequired: '1 minggu',
    impact: 'Tinggi',
    steps: 7,
    likes: 643,
    tags: ['kertas', 'daur ulang', 'ekonomi', 'kantor'],
    image: '📋',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 6,
    category: 'community',
    wasteType: 'plastic',
    title: 'Membangun Bank Sampah Komunitas',
    description: 'Panduan step-by-step mendirikan dan mengelola bank sampah di lingkungan RT/RW',
    difficulty: 'Sulit',
    timeRequired: '2-3 bulan',
    impact: 'Sangat Tinggi',
    steps: 15,
    likes: 1876,
    tags: ['bank sampah', 'komunitas', 'ekonomi circular', 'plastik'],
    image: '🏦',
    color: 'from-emerald-400 to-green-600',
    featured: true
  },
  {
    id: 7,
    category: 'community',
    wasteType: 'metal',
    title: 'Kampanye Pengumpulan Kaleng Bekas',
    description: 'Strategi mengorganisir kampanye pengumpulan kaleng aluminium di lingkungan',
    difficulty: 'Sedang',
    timeRequired: '1-2 bulan',
    impact: 'Tinggi',
    steps: 10,
    likes: 934,
    tags: ['logam', 'kaleng', 'kampanye', 'aluminium'],
    image: '🥫',
    color: 'from-gray-400 to-gray-600'
  },
  {
    id: 8,
    category: 'business',
    wasteType: 'cardboard',
    title: 'Strategi Kemasan Kardus Berkelanjutan',
    description: 'Panduan bisnis menggunakan kemasan kardus daur ulang dan sistem return',
    difficulty: 'Sedang',
    timeRequired: '2-4 minggu',
    impact: 'Tinggi',
    steps: 9,
    likes: 1456,
    tags: ['kardus', 'kemasan', 'bisnis', 'berkelanjutan'],
    image: '📦',
    color: 'from-amber-400 to-orange-600'
  },
  {
    id: 9,
    category: 'home',
    wasteType: 'cardboard',
    title: 'DIY Organizer dari Kotak Kardus',
    description: 'Cara membuat organizer serbaguna dari kotak kardus bekas',
    difficulty: 'Mudah',
    timeRequired: '1-2 jam',
    impact: 'Sedang',
    steps: 5,
    likes: 567,
    tags: ['kardus', 'organizer', 'diy', 'storage'],
    image: '🗂️',
    color: 'from-amber-400 to-orange-600'
  },
  {
    id: 10,
    category: 'business',
    wasteType: 'glass',
    title: 'Program Kembalikan Botol Kaca',
    description: 'Implementasi sistem deposit botol kaca untuk restoran dan café',
    difficulty: 'Sedang',
    timeRequired: '3-4 minggu',
    impact: 'Tinggi',
    steps: 12,
    likes: 1234,
    tags: ['kaca', 'botol', 'deposit', 'restoran'],
    image: '🍺',
    color: 'from-cyan-400 to-blue-500'
  }
];

export const quickTips: QuickTip[] = [
  {
    title: 'Kurangi Sampah Plastik',
    tip: 'Bawa tas belanja sendiri dan botol minum reusable',
    icon: '🛍️',
    color: 'bg-blue-100 text-blue-800',
    wasteType: 'plastic'
  },
  {
    title: 'Pilah Sampah Organik',
    tip: 'Pisahkan sisa makanan untuk dibuat kompos atau biogas',
    icon: '🥬',
    color: 'bg-green-100 text-green-800',
    wasteType: 'organic'
  },
  {
    title: 'Manfaatkan Kertas Bekas',
    tip: 'Gunakan kedua sisi kertas dan daur ulang ke pengepul',
    icon: '📄',
    color: 'bg-yellow-100 text-yellow-800',
    wasteType: 'paper'
  },
  {
    title: 'Kumpulkan Logam Bernilai',
    tip: 'Pisahkan kaleng, aluminium, dan besi untuk dijual',
    icon: '🥫',
    color: 'bg-gray-100 text-gray-800',
    wasteType: 'metal'
  },
  {
    title: 'Simpan Botol Kaca',
    tip: 'Botol kaca dapat digunakan ulang atau dikembalikan',
    icon: '🍾',
    color: 'bg-cyan-100 text-cyan-800',
    wasteType: 'glass'
  },
  {
    title: 'Lipat Kardus dengan Rapi',
    tip: 'Kardus yang rapi lebih mudah didaur ulang',
    icon: '📦',
    color: 'bg-amber-100 text-amber-800',
    wasteType: 'cardboard'
  }
];