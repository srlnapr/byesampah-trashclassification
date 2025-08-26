"use client";

import React from 'react';
import ImageUpload from '@/components/ImageUpload';
import LoadingState from '@/components/LoadingState';
import WasteResult from '@/components/WasteResult';
import TipsSection from '@/components/TipsSection';
import { useImageUpload } from '@/hooks/useImageUpload';
import { wasteArticles } from '@/data/wasteData';

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
    // Replace dengan router navigation sesuai framework yang digunakan
    console.log('Navigate to:', url);
    // Contoh untuk Next.js: router.push(url)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Deteksi Jenis Sampah</h1>
              <p className="text-gray-600 mt-2">Gunakan AI untuk mengidentifikasi dan mendapatkan panduan pengelolaan sampah</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="bg-emerald-100 px-4 py-2 rounded-full">
                <span className="text-emerald-700 font-semibold">✨ AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Upload Section */}
          <ImageUpload
            selectedImage={selectedImage}
            imagePreview={imagePreview}
            isAnalyzing={isAnalyzing}
            error={error}
            onFileSelect={handleFileSelect}
            onAnalyze={analyzeImage}
            onReset={resetDetection}
          />

          {/* Loading State */}
          {isAnalyzing && <LoadingState />}

          {/* Results Section */}
          {result && (
            <WasteResult
              result={result}
              wasteArticles={wasteArticles}
              onReset={resetDetection}
              onNavigateToArticle={handleNavigateToArticle}
            />
          )}

          {/* Tips Section */}
          <TipsSection />
        </div>
      </div>
    </div>
  );
};

export default WasteDetectionPage;