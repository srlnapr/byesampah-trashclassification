"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Star, 
  Search,
  Filter
} from 'lucide-react';

// Hooks
import { useSuggestions } from '../../hooks/useSuggestions';

// Data
import { categories, quickTips } from '../../data/suggestions';

// Components
import { SuggestionCard } from '@/components/SuggestionCard';
import { FeaturedCard } from '@/components/FeaturedCard';
import { QuickTipCard } from '@/components/QuickTipCard';
import { WasteTypeFilter } from '@/components/WasteTypeFilter';
import { Footer } from "@/components/sections/footer";

const SuggestionsPage = () => {
  const {
    activeCategory,
    selectedWasteType,
    searchQuery,
    bookmarked,
    filteredSuggestions,
    featuredSuggestions,
    setActiveCategory,
    setSelectedWasteType,
    setSearchQuery,
    toggleBookmark
  } = useSuggestions();

  const handleStartSuggestion = (id: number) => {
    // Navigate to suggestion detail page or open modal
    console.log(`Starting suggestion ${id}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-black 
      bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FFFFFF_20%,#A7F3D0_50%,#FFFFFF_80%,#FFFFFF_100%)] overflow-clip">
      
      {/* Konten utama */}
      <div className="flex-1">
        {/* Header */}
        <div className="relative bg-transparent">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <motion.h1 
                  className="text-5xl sm:text-7xl font-bold text-gray-700 tracking-tighter"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                  Saran & Tips
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                  Kumpulan ide kreatif dan panduan praktis untuk mengurangi sampah berdasarkan 6 jenis sampah
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative mx-auto px-4 py-6 -mt-6">
          {/* Quick Tips Section */}
          <motion.div 
            className="max-w-6xl mx-auto border border-emerald-200 rounded-2xl shadow-md bg-white/70 backdrop-blur-sm p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-emerald-500" />
              Tips Cepat Berdasarkan Jenis Sampah
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <QuickTipCard tip={tip} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Suggestions Section */}
          <motion.div 
            className="max-w-6xl mx-auto border border-emerald-200 rounded-2xl shadow-md bg-white/70 backdrop-blur-sm p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" />
              Saran Unggulan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredSuggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <FeaturedCard 
                    suggestion={suggestion}
                    onStartSuggestion={handleStartSuggestion}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div 
            className="max-w-6xl mx-auto border border-emerald-200 rounded-2xl shadow-md bg-white/70 backdrop-blur-sm p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {/* Search and Filter Header */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-700">Semua Saran</h2>
              <div className="flex gap-4 items-center">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari saran..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80"
                  />
                </div>
              </div>
            </div>

            {/* Waste Type Filter */}
            <div className="mb-6">
              <WasteTypeFilter 
                selectedWasteType={selectedWasteType}
                onWasteTypeChange={setSelectedWasteType}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                      activeCategory === category.id
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-white/80 text-gray-700 hover:bg-emerald-50 border border-emerald-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </motion.button>
                );
              })}
            </div>

            {/* Suggestions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSuggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <SuggestionCard
                    suggestion={suggestion}
                    isBookmarked={bookmarked.has(suggestion.id)}
                    onBookmark={toggleBookmark}
                    onStartSuggestion={handleStartSuggestion}
                  />
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredSuggestions.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Tidak ada saran ditemukan</h3>
                <p className="text-gray-500">Coba ubah kata kunci pencarian, kategori, atau jenis sampah</p>
              </motion.div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="max-w-6xl mx-auto border border-emerald-200 rounded-2xl shadow-md bg-gradient-to-r from-emerald-500 to-green-600 p-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Punya Saran Kreatif?</h2>
            <p className="text-xl mb-8 text-emerald-50">
              Bagikan ide dan pengalaman Anda untuk membantu komunitas zero waste Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kirim Saran
              </motion.button>
              <motion.button 
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bergabung Komunitas
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Footer di bawah */}
      <Footer />
    </div>
  );
};

export default SuggestionsPage;