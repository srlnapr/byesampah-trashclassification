"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowIcon from "@/assets/icons/arrow-w.svg";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";
import { siteConfig } from "@/lib/config";

export function HeroSection() {
  // const { hero } = siteConfig;

  return (
    <section className="relative text-black py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#FFFFFF,#A7F3D0)] overflow-clip">
      <div
        className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]
rounded-[100%] left-1/2 -translate-x-1/2 border border-[#6EE7B7]
bg-[radial-gradient(circle_at_center,#ffffff_20%,#6EE7B7_50%,#34D399_80%)]
top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"
      ></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
          >
            <motion.span
              className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE)] [background-size:200%] text-transparent bg-clip-text [-webkit-background-clip:text]"
              animate={{
                backgroundPositionX: "-100%",
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            ></motion.span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex -mt-20 text-gray-700">
              Kelola <br /> Sampahmu
            </h1>

            <motion.div
              className="absolute right-[676px] top-[108px] hidden sm:inline cursor-grabbing"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="Cursor Image"
                height="200"
                width="200"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[698px] top-[56px] hidden sm:inline cursor-grabbing"
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="Message Image"
                height="200"
                width="200"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.p
            className="text-xl text-center mt-8 max-w-md"
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
            Deteksi, klasifikasi, dan kelola sampahmu dengan mudah. Bersama
            Byesampah, kita bisa wujudkan lingkungan yang lebih bersih.
          </motion.p>
        </div>
        <div className="flex justify-center mt-8"></div>
      </div>
    </section>
  );
}
