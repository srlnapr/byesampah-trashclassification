"use client";
import React from "react";
import { siteConfig } from "@/lib/config";
import TestimonialsColumn from "@/components/TestimonialsColumn";

// Tambahkan data testimonials yang hilang
const testimonials = [
  {
    text: "Aplikasi Bye Sampah benar-benar mengubah cara saya memandang sampah. Sekarang saya lebih aware dan terorganisir dalam mengelola limbah rumah tangga.",
    imageSrc: "/images/user1.jpg", // Sesuaikan dengan path gambar
    name: "Sarah Wijaya",
    username: "@sarahw"
  },
  {
    text: "Fitur edukasi di Bye Sampah sangat membantu saya belajar cara daur ulang yang benar. Lingkungan sekitar rumah jadi lebih bersih!",
    imageSrc: "/images/user2.jpg",
    name: "Ahmad Rizki",
    username: "@ahmadrizki"
  },
  {
    text: "Komunitas Bye Sampah luar biasa supportif. Kita saling berbagi tips dan motivasi untuk hidup lebih ramah lingkungan.",
    imageSrc: "/images/user3.jpg",
    name: "Maya Sari",
    username: "@mayasari"
  },
  {
    text: "Sejak menggunakan Bye Sampah, pengeluaran rumah tangga berkurang karena lebih banyak barang yang bisa didaur ulang dan dijual.",
    imageSrc: "/images/user4.jpg",
    name: "Budi Santoso",
    username: "@budisan"
  },
  {
    text: "Anak-anak saya jadi lebih peduli lingkungan setelah ikut program edukasi Bye Sampah. Mereka bahkan mengingatkan saya untuk memilah sampah!",
    imageSrc: "/images/user5.jpg",
    name: "Indira Putri",
    username: "@indiraputri"
  },
  {
    text: "Platform yang sangat inovatif! Bye Sampah membuat pengelolaan sampah jadi lebih mudah dan menyenangkan.",
    imageSrc: "/images/user6.jpg",
    name: "Eko Prasetyo",
    username: "@ekopras"
  },
  {
    text: "Tracking progress pengelolaan sampah di aplikasi ini sangat memotivasi. Saya jadi lebih semangat untuk terus konsisten.",
    imageSrc: "/images/user7.jpg",
    name: "Rina Marlina",
    username: "@rinamarlina"
  },
  {
    text: "Customer service yang responsif dan informasi yang akurat. Bye Sampah benar-benar solusi terpercaya untuk masalah sampah.",
    imageSrc: "/images/user8.jpg",
    name: "Doni Kurniawan",
    username: "@donikur"
  },
  {
    text: "Impact positif dari menggunakan Bye Sampah sangat terasa di lingkungan RT saya. Sekarang warga lain juga mulai tertarik ikut program ini.",
    imageSrc: "/images/user9.jpg",
    name: "Siti Fatimah",
    username: "@sitifatimah"
  }
];

// Tambahkan data testimonialsData yang hilang
const testimonialsData = {
  tag: "Testimoni Pengguna",
  title: "Apa Kata Mereka Tentang Bye Sampah?",
  description: "Bergabunglah dengan ribuan orang Indonesia yang telah merasakan dampak positif dari gerakan hidup bebas sampah bersama Bye Sampah."
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center">
          <div className="tag inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {testimonialsData.tag}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5">
            {testimonialsData.title}
          </h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            {testimonialsData.description}
          </p>
        </div>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};