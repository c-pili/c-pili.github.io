"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function GantMagiquePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white pt-28 px-6 pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-xs font-mono text-neutral-400 hover:text-white transition flex items-center gap-2 mb-8">
          &larr; Retour à l&apos;accueil
        </Link>
        <div className="overflow-hidden rounded-2xl border border-white/10 mb-8 max-h-[450px]">
          <img src="/IMG_GantsMag.jpg" alt="Gant Magique" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projet : Gant Magique</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs">Capteurs & Gestuelle</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-xs">Microcontrôleur</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-xs">I2C / SPI</span>
        </div>
        <div className="text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Ce dispositif portable interactif intègre des capteurs de flexion et une centrale inertielle pour interpréter les mouvements et gestes de la main en temps réel.
          </p>
          <p>
            Les données acquises sont traitées localement afin d&apos;exécuter des commandes sans fil ou de déclencher des interactions lumineuses et sonores.
          </p>
        </div>
      </div>
    </main>
  );
}