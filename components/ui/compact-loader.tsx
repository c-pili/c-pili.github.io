"use client";

import React from "react";
import { motion } from "framer-motion";

export function CompactLoader({ text = "Chargement..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0F]/90 backdrop-blur-md">
      <div className="flex items-center space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-3 w-3 rounded-full bg-blue-500"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.18,
            }}
          />
        ))}
      </div>
      {text && (
        <p className="mt-4 text-xs font-medium tracking-widest text-neutral-400 uppercase">
          {text}
        </p>
      )}
    </div>
  );
}