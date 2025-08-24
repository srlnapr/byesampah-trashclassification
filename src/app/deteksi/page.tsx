"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Camera, Upload, Loader2, CheckCircle, AlertCircle, ArrowRight, Recycle, Leaf, Trash2, Lightbulb } from 'lucide-react';

const WasteDetectionPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Contoh data artikel untuk setiap jenis sampah
  const wasteArticles = {
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

  // Simulasi klasifikasi sampah (replace dengan API Hugging Face yang sebenarnya)
  const classifyWaste = async (imageFile) => {
    // Simulasi delay API
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulasi hasil klasifikasi (replace dengan API call yang sebenarnya)
    const mockResults = [
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

    // Return random result untuk demo
    return mockResults[Math.floor(Math.random() * mockResults.length)];
  };

  const handleFileSelect = useCallback((file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      setError(null);
      setResult(null);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Mohon pilih file gambar yang valid (JPG, PNG, WebP)');
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const analyzeImage = async () => {
    if (!selectedImage) {
      setError('Mohon pilih gambar terlebih dahulu');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    
    try {
      const analysisResult = await classifyWaste(selectedImage);
      setResult(analysisResult);
    } catch (err) {
      setError('Terjadi kesalahan saat menganalisis gambar. Silakan coba lagi.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetDetection = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Gambar Sampah</h2>
            
            <div
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragOver 
                  ? 'border-emerald-400 bg-emerald-50' 
                  : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {imagePreview ? (
                <div className="space-y-4">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="max-w-md max-h-64 mx-auto rounded-lg shadow-md"
                  />
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Menganalisis...
                        </>
                      ) : (
                        <>
                          <Camera className="w-5 h-5" />
                          Analisis Gambar
                        </>
                      )}
                    </button>
                    <button
                      onClick={resetDetection}
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Pilih Ulang
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Upload atau Drop Gambar Sampah
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Drag & drop gambar ke sini atau klik tombol di bawah
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Pilih Gambar
                  </button>
                  <p className="text-sm text-gray-400 mt-4">
                    Format: JPG, PNG, WebP • Max: 5MB
                  </p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-red-700">{error}</span>
              </div>
            )}
          </div>

          {/* Loading State */}
          {isAnalyzing && (
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Sedang Menganalisis</h3>
                <p className="text-gray-600">Mohon tunggu sebentar...</p>
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {result && (
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-900">Hasil Klasifikasi</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Result Card */}
                <div className="space-y-6">
                  <div className={`bg-gradient-to-r ${result.color} rounded-2xl p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{result.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{result.type}</h3>
                        <p className="text-blue-100">Akurasi: {Math.round(result.confidence * 100)}%</p>
                      </div>
                    </div>
                    <p className="text-blue-50">{result.description}</p>
                  </div>

                  {result.economicValue && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        💰 Nilai Ekonomi
                      </h4>
                      <p className="text-amber-700">{result.economicValue}</p>
                    </div>
                  )}
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Rekomendasi Pengelolaan
                  </h4>
                  <div className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Article */}
              {wasteArticles[result.category] && (
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    📚 Artikel Terkait
                  </h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">
                        {wasteArticles[result.category].title}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {wasteArticles[result.category].description}
                      </p>
                    </div>
                    <button 
                      onClick={() => {
                        // Navigate to article - replace dengan router navigation
                        console.log('Navigate to:', wasteArticles[result.category].url);
                      }}
                      className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2 ml-4"
                    >
                      Baca Artikel
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={resetDetection}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Analisis Gambar Lain
                </button>
                <button 
                  onClick={() => {
                    // Share functionality
                    if (navigator.share) {
                      navigator.share({
                        title: `Hasil Deteksi: ${result.type}`,
                        text: `Saya baru saja mengidentifikasi ${result.type} dengan akurasi ${Math.round(result.confidence * 100)}% menggunakan ByeSampah!`,
                        url: window.location.href
                      });
                    }
                  }}
                  className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
                >
                  Bagikan Hasil
                </button>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Tips untuk Hasil Terbaik</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Foto yang Jelas</h4>
                    <p className="text-gray-600 text-sm">Pastikan gambar tidak buram dan memiliki pencahayaan yang cukup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Objek Utama</h4>
                    <p className="text-gray-600 text-sm">Fokuskan pada satu jenis sampah per foto untuk akurasi maksimal</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Recycle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Angle yang Tepat</h4>
                    <p className="text-gray-600 text-sm">Ambil foto dari berbagai sudut jika diperlukan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Background Bersih</h4>
                    <p className="text-gray-600 text-sm">Gunakan latar belakang yang kontras dan tidak ramai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteDetectionPage;