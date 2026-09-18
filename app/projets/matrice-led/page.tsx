"use client";

import React from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function MatriceLedPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-8"
        >
          &larr; Retour à l&apos;accueil
        </Link>

        <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-md mb-10 max-h-[460px] bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop"
            alt="Matrice LED"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
            Électronique & Affichage
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">
            Projet : Matrice LED
          </h1>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs font-medium">
              LEDs adressables
            </span>
            <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-xs font-medium">
              C / C++
            </span>
            <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-xs font-medium">
              Distribution de puissance
            </span>
          </div>

          <div className="pt-6 text-slate-600 text-base leading-relaxed space-y-4 border-t border-slate-200/70 mt-6">
            <p>
              Développement et programmation bas niveau pour la gestion d&apos;une matrice de diodes électroluminescentes adressables à haute fréquence de rafraîchissement.
            </p>
            <p>
              Le projet aborde la gestion des contraintes d&apos;alimentation en courant, la réduction du bruit électromagnétique sur le bus de données et l&apos;implémentation d&apos;effets visuels synchronisés.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}