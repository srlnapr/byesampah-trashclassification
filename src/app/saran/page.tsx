"use client";
import React, { use, useState } from 'react';
import { 
  Lightbulb, 
  Recycle, 
  Leaf, 
  Home, 
  Building, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Search,
  Filter,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

const SuggestionsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState(new Set());

  const categories = [
    { id: 'all', name: 'Semua', icon: Star },
    { id: 'home', name: 'Rumah Tangga', icon: Home },
    { id: 'office', name: 'Kantor', icon: Building },
    { id: 'community', name: 'Komunitas', icon: Users },
    { id: 'business', name: 'Bisnis', icon: TrendingUp }
  ];

  const suggestions = [
    {
      id: 1,
      category: 'home',
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
      title: 'DIY Tempat Sampah 3 in 1',
      description: 'Cara membuat sistem pemilahan sampah praktis untuk rumah dengan budget minimal',
      difficulty: 'Sedang',
      timeRequired: '1-2 hari',
      impact: 'Sedang',
      steps: 8,
      likes: 890,
      tags: ['diy', 'pemilahan', 'organizer'],
      image: '♻️',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      category: 'home',
      title: 'Mengolah Minyak Jelantah Menjadi Sabun',
      description: 'Transformasi minyak bekas masak menjadi sabun cuci yang ramah lingkungan',
      difficulty: 'Sedang',
      timeRequired: '3-4 jam',
      impact: 'Tinggi',
      steps: 10,
      likes: 756,
      tags: ['minyak jelantah', 'sabun', 'ramah lingkungan'],
      image: '🧼',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 4,
      category: 'office',
      title: 'Program Paperless Office yang Efektif',
      description: 'Strategi mengurangi penggunaan kertas di tempat kerja hingga 80%',
      difficulty: 'Mudah',
      timeRequired: '1-2 minggu',
      impact: 'Tinggi',
      steps: 6,
      likes: 2100,
      tags: ['paperless', 'digital', 'efisiensi'],
      image: '📄',
      color: 'from-indigo-400 to-purple-600',
      featured: true
    },
    {
      id: 5,
      category: 'office',
      title: 'Sistem Daur Ulang Kertas Kantor',
      description: 'Implementasi program daur ulang kertas yang menguntungkan secara ekonomi',
      difficulty: 'Sedang',
      timeRequired: '1 minggu',
      impact: 'Tinggi',
      steps: 7,
      likes: 643,
      tags: ['kertas', 'daur ulang', 'ekonomi'],
      image: '📋',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 6,
      category: 'community',
      title: 'Membangun Bank Sampah Komunitas',
      description: 'Panduan step-by-step mendirikan dan mengelola bank sampah di lingkungan RT/RW',
      difficulty: 'Sulit',
      timeRequired: '2-3 bulan',
      impact: 'Sangat Tinggi',
      steps: 15,
      likes: 1876,
      tags: ['bank sampah', 'komunitas', 'ekonomi circular'],
      image: '🏦',
      color: 'from-emerald-400 to-green-600',
      featured: true
    },
    {
      id: 7,
      category: 'community',
      title: 'Kampanye Zero Waste Neighborhood',
      description: 'Strategi mengajak tetangga menerapkan gaya hidup zero waste bersama-sama',
      difficulty: 'Sedang',
      timeRequired: '1-2 bulan',
      impact: 'Tinggi',
      steps: 12,
      likes: 934,
      tags: ['zero waste', 'kampanye', 'lingkungan'],
      image: '🌍',
      color: 'from-teal-400 to-cyan-600'
    },
    {
      id: 8,
      category: 'business',
      title: 'Strategi Kemasan Ramah Lingkungan',
      description: 'Panduan bisnis menggunakan kemasan biodegradable tanpa mengorbankan kualitas',
      difficulty: 'Sedang',
      timeRequired: '2-4 minggu',
      impact: 'Tinggi',
      steps: 9,
      likes: 1456,
      tags: ['kemasan', 'biodegradable', 'bisnis'],
      image: '📦',
      color: 'from-rose-400 to-pink-600'
    }
  ];

  const quickTips = [
    {
      title: 'Kurangi Sampah Plastik',
      tip: 'Bawa tas belanja sendiri dan botol minum reusable',
      icon: '🛍️',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Pilah Sampah dengan Benar',
      tip: 'Pisahkan organik, anorganik, dan B3 sejak dari rumah',
      icon: '🗂️',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Manfaatkan Sampah Organik',
      tip: 'Buat kompos atau berikan ke peternakan sebagai pakan',
      icon: '🌿',
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: 'Jual Sampah Bernilai',
      tip: 'Kumpulkan kertas, plastik, logam untuk dijual ke pengepul',
      icon: '💰',
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const filteredSuggestions = suggestions.filter(suggestion => {
    const matchesCategory = activeCategory === 'all' || suggestion.category === activeCategory;
    const matchesSearch = suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         suggestion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredSuggestions = suggestions.filter(s => s.featured);

  const toggleBookmark = (id) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarked(newBookmarked);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Mudah': return 'text-green-600 bg-green-100';
      case 'Sedang': return 'text-yellow-600 bg-yellow-100';
      case 'Sulit': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Tinggi': return 'text-emerald-600 bg-emerald-100';
      case 'Sangat Tinggi': return 'text-green-600 bg-green-100';
      case 'Sedang': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Saran & Tips 
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                {' '}Zero Waste
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Kumpulan ide kreatif dan panduan praktis untuk mengurangi sampah di sekitar kita
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            Tips Cepat
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-3">{tip.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${tip.color}`}>
                    {tip.tip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Suggestions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-500" />
            Saran Unggulan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredSuggestions.map((suggestion) => (
              <div key={suggestion.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${suggestion.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{suggestion.image}</span>
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{suggestion.title}</h3>
                  <p className="text-white/90 text-sm">{suggestion.description}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(suggestion.difficulty)}`}>
                      {suggestion.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                      Impact {suggestion.impact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>⏱️ {suggestion.timeRequired}</span>
                    <span>📋 {suggestion.steps} langkah</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{suggestion.likes}</span>
                    </div>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2">
                      Pelajari
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Semua Saran</h2>
            <div className="flex gap-4 items-center">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari saran..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                    activeCategory === category.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Suggestions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`bg-gradient-to-r ${suggestion.color} p-6 text-white relative`}>
                <button
                  onClick={() => toggleBookmark(suggestion.id)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Bookmark 
                    className={`w-5 h-5 ${bookmarked.has(suggestion.id) ? 'fill-current' : ''}`} 
                  />
                </button>
                <span className="text-4xl mb-4 block">{suggestion.image}</span>
                <h3 className="text-xl font-bold mb-2">{suggestion.title}</h3>
                <p className="text-white/90 text-sm">{suggestion.description}</p>
              </div>
              
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestion.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(suggestion.difficulty)}`}>
                    {suggestion.difficulty}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                    Impact {suggestion.impact}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {suggestion.steps} langkah
                    </span>
                    <span>⏱️ {suggestion.timeRequired}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{suggestion.likes}</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="bg-emerald-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2">
                    Mulai
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSuggestions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tidak ada saran ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Punya Saran Kreatif?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Bagikan ide dan pengalaman Anda untuk membantu komunitas zero waste Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
              Kirim Saran
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Bergabung Komunitas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsPage;