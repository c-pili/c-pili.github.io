"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function MatriceLedPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white pt-28 px-6 pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-xs font-mono text-neutral-400 hover:text-white transition flex items-center gap-2 mb-8">
          &larr; Retour à l&apos;accueil
        </Link>
        <div className="overflow-hidden rounded-2xl border border-white/10 mb-8 max-h-[450px]">
          <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop" alt="Matrice LED" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projet : Matrice LED</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs">Affichage dynamique</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-xs">WS2812B / FastLED</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-xs">C++</span>
        </div>
        <div className="text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Conception et pilotage d&apos;une matrice LED adressable capable de restituer des animations graphiques fluides, des textes déroulants et des motifs synchronisés.
          </p>
          <p>
            Optimisation des timings de transmission et gestion fine de l&apos;alimentation électrique pour garantir une luminosité homogène sur l&apos;ensemble de la grille.
          </p>
        </div>
      </div>
    </main>
  );
}