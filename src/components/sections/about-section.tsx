"use client";
import { motion } from "framer-motion";
import { Search, Recycle, BookOpen } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Search,
      title: "Klasifikasi Sampah Otomatis",
      description: "Deteksi jenis sampah dengan teknologi AI yang akurat dan cepat"
    },
    {
      icon: Recycle,
      title: "Rekomendasi Pengelolaan",
      description: "Panduan lengkap cara mengelola setiap jenis sampah dengan tepat"
    },
    {
      icon: BookOpen,
      title: "Edukasi & Artikel Lingkungan",
      description: "Konten edukatif untuk meningkatkan kesadaran lingkungan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
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
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100 rounded-full blur-xl opacity-40"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Small title */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 mb-6">
              🌱 Mengapa Harus Peduli Sampah?
            </span>
          </motion.div>
          
          {/* Main description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-emerald-600">Byesampah</span> hadir sebagai solusi digital 
              untuk membantu masyarakat dalam mengelola sampah dengan lebih cerdas dan bertanggung jawab. 
              Melalui teknologi klasifikasi otomatis dan panduan pengelolaan yang komprehensif, 
              kami memudahkan setiap orang untuk berkontribusi dalam menjaga kelestarian lingkungan.
            </p>
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-200 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-3 rounded-full border border-emerald-200">
            <span className="text-emerald-700 font-medium">
              Mari bersama wujudkan lingkungan yang lebih bersih! 
            </span>
            <span className="text-2xl">🌍</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}