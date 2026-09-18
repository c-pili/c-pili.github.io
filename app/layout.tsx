"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BottomDock } from "@/components/BottomDock";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr" className={font.className}>
      <body className="antialiased bg-[#FBFBFD] text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FBFBFD]/95 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-3 w-3 rounded-full bg-blue-600"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.16,
                    }}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs font-mono tracking-widest text-slate-500 uppercase">
                Chargement...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {children}

        {/* Le Dock flottant disponible sur toutes les pages */}
        <BottomDock />
      </body>
    </html>
  );
}