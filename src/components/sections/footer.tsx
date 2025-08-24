"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Mail, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      href: "#",
      icon: Github,
      color: "hover:text-gray-900"
    },
    {
      name: "Instagram", 
      href: "#",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "Twitter",
      href: "#", 
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      href: "mailto:hello@byesampah.com",
      icon: Mail,
      color: "hover:text-emerald-500"
    }
  ];

  const quickLinks = [
    { name: "Klasifikasi", href: "#klasifikasi" },
    { name: "Tentang", href: "#tentang" },
    { name: "Ulasan", href: "#ulasan" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                  Byesampah
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Solusi cerdas untuk mengelola sampah dengan teknologi AI. 
                  Mari bersama wujudkan lingkungan yang lebih bersih dan berkelanjutan.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Link
                        href={social.href}
                        className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 backdrop-blur-sm`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Navigasi</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Tetap Terhubung</h4>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">
                  Dapatkan tips terbaru tentang pengelolaan sampah dan update fitur terbaru.
                </p>
                
                {/* Simple Newsletter */}
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Byesampah. Dibuat dengan</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>untuk lingkungan yang lebih baik.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500"></div>
    </footer>
  );
}