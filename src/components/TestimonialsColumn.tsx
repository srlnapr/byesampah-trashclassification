import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

interface Testimonial {
  text: string;
  imageSrc: string; // sudah tidak dipakai tapi tetap biar kompatibel
  name: string;     // sudah tidak dipakai
  username: string; // sudah tidak dipakai
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  className,
  duration = 10,
}) => {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text }, testimonialIndex) => (
              <Card key={`${index}-${testimonialIndex}`}>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </Card>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
