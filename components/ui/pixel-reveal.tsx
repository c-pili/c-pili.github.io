"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PixelReveal({ src, alt }: { src: string; alt: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Génère une grille de "pixels" (10x10) pour l'effet de révélation
  const pixels = Array.from({ length: 100 });

  return (
    <div className="relative overflow-hidden rounded-3xl h-[450px] w-full bg-slate-100">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      {mounted && (
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none z-10">
          {pixels.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: Math.random() * 0.8, // Apparition aléatoire des pixels
                ease: "easeInOut",
              }}
              className="bg-[#FBFBFD] w-[101%] h-[101%]"
            />
          ))}
        </div>
      )}
    </div>
  );
}