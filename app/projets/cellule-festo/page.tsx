"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import Link from "next/link";

export default function CelluleFestoPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0B0B0F] text-white pt-28 px-6 pb-20">
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-xs font-mono text-neutral-400 hover:text-white transition flex items-center gap-2 mb-8">
            &larr; Retour à l&apos;accueil
          </Link>
          
          <div className="overflow-hidden rounded-2xl border border-white/10 mb-8 max-h-[450px]">
            <img src="/IMG_CelluleFesto.jpg" alt="Cellule Festo" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">Projet : Cellule Festo</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs">Automatisme industriel</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-xs">Pneumatique</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-full text-xs">API / Grafcet</span>
          </div>

          <div className="prose prose-invert max-w-none text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Programmation et mise en service d'un banc d'automatisation Festo combinant préhenseurs pneumatiques, capteurs inductifs et convoyage de pièces.
            </p>
            <p>
              Élaboration des cycles de production selon la modélisation Grafcet, avec gestion des modes de marche (automatique, manuel) et des arrêts d'urgence de sécurité.
            </p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}