"use client";

import React from "react";
import { motion } from "framer-motion";

export function SmoothImageReveal({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl h-[450px] w-full bg-slate-100">
      <motion.img
        src={src}
        alt={alt}
        // Animation : Part d'un zoom (1.1), transparent et flou (15px)
        initial={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
        // Va vers sa taille normale, net et visible
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        // Courbe d'animation très douce (ease-out) sur 1.2 secondes
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Léger contour interne pour la finition du design */}
      <div className="absolute inset-0 border border-slate-200/50 rounded-3xl pointer-events-none" />
    </div>
  );
}