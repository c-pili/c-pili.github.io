"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AccordionGallery({ images }: { images: string[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex h-[400px] w-full gap-2 overflow-hidden mt-10">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className={cn("relative h-full overflow-hidden rounded-2xl bg-slate-200 cursor-pointer")}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            width: hoveredIndex === idx ? "50%" : hoveredIndex === null ? `${100 / images.length}%` : `${50 / (images.length - 1)}%`,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={src} className="absolute inset-0 h-full w-full object-cover" alt={`Gallery ${idx}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
}