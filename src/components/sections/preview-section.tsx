"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, Camera, Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export function ClassificationPreviewSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demoSteps = [
    {
      id: 1,
      title: "Upload Gambar",
      description: "Pilih atau ambil foto sampah yang ingin diklasifikasi",
      icon: Upload,
      preview: "📸 Pilih gambar..."
    },
    {
      id: 2,
      title: "AI Processing",
      description: "Sistem AI menganalisis jenis dan karakteristik sampah",
      icon: Zap,
      preview: "🤖 Menganalisis..."
    },
    {
      id: 3,
      title: "Hasil Klasifikasi",
      description: "Dapatkan hasil klasifikasi dan rekomendasi pengelolaan",
      icon: CheckCircle,
      preview: "✅ Sampah Plastik - PET Bottle"
    }
  ];

  const sampleResults = [
    {
      type: "Plastik PET",
      confidence: "96%",
      color: "from-blue-400 to-blue-600",
      recommendation: "Dapat didaur ulang",
      icon: "♻️"
    },
    {
      type: "Organik",
      confidence: "94%", 
      color: "from-green-400 to-green-600",
      recommendation: "Cocok untuk kompos",
      icon: "🌱"
    },
    {
      type: "Logam",
      confidence: "92%",
      color: "from-gray-400 to-gray-600", 
      recommendation: "Nilai ekonomi tinggi",
      icon: "🔧"
    }
  ];

  const startDemo = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnimating(false);
            setCurrentStep(0);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 mb-6">
              <Sparkles className="w-4 h-4" />
              Teknologi AI Terdepan
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Lihat AI Kami 
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent"> 
              Beraksi
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Teknologi machine learning yang canggih dapat mengidentifikasi jenis sampah 
            hanya dalam hitungan detik dengan akurasi tinggi.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Demo Interface */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            >
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 font-mono">byesampah.ai</span>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center mb-8 relative overflow-hidden">
                <div className="relative z-10">
                  {!isAnimating ? (
                    <>
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Upload Gambar Sampah
                      </h3>
                      <p className="text-gray-500 mb-6">
                        Drag & drop atau klik untuk memilih gambar
                      </p>
                      <button
                        onClick={startDemo}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Coba Demo
                      </button>
                    </>
                  ) : (
                    <div className="space-y-4">
                      {/* Progress indicator */}
                      <div className="flex justify-center mb-6">
                        {demoSteps.map((_, index) => (
                          <div key={index} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                              index <= currentStep 
                                ? 'bg-emerald-500 border-emerald-500 text-white' 
                                : 'border-gray-300 text-gray-400'
                            }`}>
                              {index < currentStep ? '✓' : index + 1}
                            </div>
                            {index < demoSteps.length - 1 && (
                              <div className={`w-16 h-0.5 mx-2 ${
                                index < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
                              }`}></div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Current step display */}
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          {React.createElement(demoSteps[currentStep]?.icon, { 
                            className: "w-10 h-10 text-white" 
                          })}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {demoSteps[currentStep]?.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {demoSteps[currentStep]?.description}
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-700">
                          {demoSteps[currentStep]?.preview}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
                
                {/* Background animation */}
                {isAnimating && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-500/10"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                )}
              </div>

              {/* Sample Results */}
              {!isAnimating && (
                <div className="grid grid-cols-3 gap-4">
                  {sampleResults.map((result, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${result.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <span className="text-2xl">{result.icon}</span>
                      </div>
                      <h5 className="font-semibold text-sm text-gray-800 mb-1">
                        {result.type}
                      </h5>
                      <p className="text-xs text-gray-600 mb-2">
                        Akurasi {result.confidence}
                      </p>
                      <p className="text-xs text-emerald-600 font-medium">
                        {result.recommendation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Mengapa Fitur Ini Istimewa?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deteksi Instan</h4>
                      <p className="text-gray-600">Klasifikasi sampah dalam hitungan detik dengan akurasi hingga 96%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">15+ Kategori Sampah</h4>
                      <p className="text-gray-600">Mendukung klasifikasi berbagai jenis sampah organik dan anorganik</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Rekomendasi Cerdas</h4>
                      <p className="text-gray-600">Panduan pengelolaan yang tepat untuk setiap jenis sampah</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-8"
              >
                <button className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center gap-3">
                  Coba Klasifikasi Sekarang
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  Gratis dan tanpa perlu registrasi
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}