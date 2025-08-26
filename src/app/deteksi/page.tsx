"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ImageUpload from '@/components/ImageUpload';
import LoadingState from '@/components/LoadingState';
import WasteResult from '@/components/WasteResult';
import TipsSection from '@/components/TipsSection';
import { useImageUpload } from '@/hooks/useImageUpload';
import { wasteArticles } from '@/data/wasteData';
import { Footer } from "@/components/sections/footer";

const WasteDetectionPage = () => {
  const {
    selectedImage,
    imagePreview,
    isAnalyzing,
    result,
    error,
    handleFileSelect,
    analyzeImage,
    resetDetection
  } = useImageUpload();

  const handleNavigateToArticle = (url: string) => {
    console.log('Navigate to:', url);
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
                  Deteksi Sampah
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
                  Gunakan AI untuk mengidentifikasi dan mendapatkan panduan pengelolaan sampah
                </motion.p>
              </div>
            </div>
            
             
          </div>
        </div>

        {/* Main Content */}
      <div className="container relative mx-auto px-4 py-6 -mt-6">
  <div className="max-w-4xl mx-auto border border-emerald-200 rounded-2xl shadow-md bg-white/70 backdrop-blur-sm p-6">
    {/* Upload Section */}
    <motion.div
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
      <ImageUpload
        selectedImage={selectedImage}
        imagePreview={imagePreview}
        isAnalyzing={isAnalyzing}
        error={error}
        onFileSelect={handleFileSelect}
        onAnalyze={analyzeImage}
        onReset={resetDetection}
      />
    </motion.div>

    {/* Loading State */}
    {isAnalyzing && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <LoadingState />
      </motion.div>
    )}

    {/* Results Section */}
    {result && (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <WasteResult
          result={result}
          wasteArticles={wasteArticles}
          onReset={resetDetection}
          onNavigateToArticle={handleNavigateToArticle}
        />
      </motion.div>
    )}

    {/* Tips Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <TipsSection />
    </motion.div>
  </div>
</div>

      </div>

      {/* ✅ Footer di bawah */}
      <Footer />
    </div>
  );
};

export default WasteDetectionPage;
