"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Projets", href: "#projets" },
  { name: "Compétences", href: "#competences" },
  { name: "À propos", href: "#apropos" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-6 px-4 py-2.5 rounded-full border border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.36)] transition-all duration-300 max-w-4xl w-full">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center font-semibold text-xs text-white shadow-inner">
            P
          </div>
          <span className="font-semibold text-sm tracking-tight text-white hover:opacity-80 transition">
            Portfolio
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="hoverBackground"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-full bg-white text-neutral-900 px-4 py-1.5 text-xs font-semibold hover:bg-neutral-200 transition active:scale-95 shadow-sm"
        >
          Me contacter
        </Link>
      </nav>
    </header>
  );
}