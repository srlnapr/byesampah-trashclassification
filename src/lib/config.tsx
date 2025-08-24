import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;
// Tambahkan ke lib/config.ts atau buat file terpisah
// Tambahkan ke lib/config.ts atau buat file terpisah
// Tambahkan ke lib/config.ts atau buat file terpisah

export const footerConfig = {
  brand: {
    name: "Byesampah",
    description: "Solusi cerdas untuk mengelola sampah dengan teknologi AI. Mari bersama wujudkan lingkungan yang lebih bersih dan berkelanjutan."
  },
  
  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/byesampah",
      platform: "github"
    },
    {
      name: "Instagram", 
      href: "https://instagram.com/byesampah",
      platform: "instagram"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/byesampah",
      platform: "twitter"
    },
    {
      name: "Email",
      href: "mailto:hello@byesampah.com",
      platform: "email"
    }
  ],

  quickLinks: [
    { name: "Klasifikasi", href: "#klasifikasi" },
    { name: "Tentang", href: "#tentang" },
    { name: "Ulasan", href: "#ulasan" }
  ],

  newsletter: {
    title: "Tetap Terhubung",
    description: "Dapatkan tips terbaru tentang pengelolaan sampah dan update fitur terbaru.",
    placeholder: "Email Anda",
    buttonText: "Subscribe"
  },

  legal: [
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Syarat & Ketentuan", href: "/terms" }
  ],

  copyright: "Dibuat dengan ❤️ untuk lingkungan yang lebih baik."
};
export const classificationPreviewConfig = {
  title: "Lihat AI Kami Beraksi",
  subtitle: "Teknologi AI Terdepan",
  description: "Teknologi machine learning yang canggih dapat mengidentifikasi jenis sampah hanya dalam hitungan detik dengan akurasi tinggi.",
  
  demoSteps: [
    {
      id: 1,
      title: "Upload Gambar",
      description: "Pilih atau ambil foto sampah yang ingin diklasifikasi",
      preview: "📸 Pilih gambar..."
    },
    {
      id: 2,
      title: "AI Processing", 
      description: "Sistem AI menganalisis jenis dan karakteristik sampah",
      preview: "🤖 Menganalisis..."
    },
    {
      id: 3,
      title: "Hasil Klasifikasi",
      description: "Dapatkan hasil klasifikasi dan rekomendasi pengelolaan", 
      preview: "✅ Sampah Plastik - PET Bottle"
    }
  ],

  sampleResults: [
    {
      type: "Plastik PET",
      confidence: "96%",
      recommendation: "Dapat didaur ulang",
      icon: "♻️",
      color: "from-blue-400 to-blue-600"
    },
    {
      type: "Organik", 
      confidence: "94%",
      recommendation: "Cocok untuk kompos",
      icon: "🌱",
      color: "from-green-400 to-green-600"
    },
    {
      type: "Logam",
      confidence: "92%", 
      recommendation: "Nilai ekonomi tinggi",
      icon: "🔧",
      color: "from-gray-400 to-gray-600"
    }
  ],

  features: [
    {
      title: "Deteksi Instan",
      description: "Klasifikasi sampah dalam hitungan detik dengan akurasi hingga 96%",
      icon: "zap",
      color: "blue"
    },
    {
      title: "15+ Kategori Sampah", 
      description: "Mendukung klasifikasi berbagai jenis sampah organik dan anorganik",
      icon: "check-circle",
      color: "emerald"
    },
    {
      title: "Rekomendasi Cerdas",
      description: "Panduan pengelolaan yang tepat untuk setiap jenis sampah", 
      icon: "sparkles",
      color: "purple"
    }
  ],

  cta: {
    text: "Coba Klasifikasi Sekarang",
    subtitle: "Gratis dan tanpa perlu registrasi"
  }
};
export const aboutConfig = {
  subtitle: "Mengapa Harus Peduli Sampah?",
  description: "Byesampah hadir sebagai solusi digital untuk membantu masyarakat dalam mengelola sampah dengan lebih cerdas dan bertanggung jawab. Melalui teknologi klasifikasi otomatis dan panduan pengelolaan yang komprehensif, kami memudahkan setiap orang untuk berkontribusi dalam menjaga kelestarian lingkungan.",
  features: [
    {
      title: "Klasifikasi Sampah Otomatis",
      description: "Deteksi jenis sampah dengan teknologi AI yang akurat dan cepat",
      emoji: "🔍"
    },
    {
      title: "Rekomendasi Pengelolaan", 
      description: "Panduan lengkap cara mengelola setiap jenis sampah dengan tepat",
      emoji: "♻️"
    },
    {
      title: "Edukasi & Artikel Lingkungan",
      description: "Konten edukatif untuk meningkatkan kesadaran lingkungan",
      emoji: "📚"
    }
  ],
  callToAction: "Mari bersama wujudkan lingkungan yang lebih bersih!"
};
export const siteConfig = {

  nav: {
    links: [
      { id: 1, name: "Beranda", href: "/" },
      { id: 2, name: "Deteksi", href: "/deteksi" },
      { id: 3, name: "Saran", href: "/saran" },
    ],
  },


 
  
};

export type SiteConfig = typeof siteConfig;
