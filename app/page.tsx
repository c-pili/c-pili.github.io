"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-[#0B0B0F] min-h-screen text-white">
      {/* Hero Section avec fond dégradé animé */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(15, 23, 42)"
        gradientBackgroundEnd="rgb(2, 6, 23)"
        firstColor="59, 130, 246"
        secondColor="147, 51, 234"
        thirdColor="37, 99, 235"
        fourthColor="79, 70, 229"
        fifthColor="124, 58, 237"
        pointerColor="147, 51, 234"
        containerClassName="h-screen w-full"
      >
        <div className="absolute z-50 inset-0 flex flex-col pointer-events-none">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 max-w-7xl mx-auto w-full pointer-events-auto">
            <span className="text-xl font-bold tracking-tight">Portfolio</span>
            <div className="flex gap-6 text-sm text-neutral-300">
              <Link href="#projets" className="hover:text-white transition">
                Projets
              </Link>
              <Link href="#competences" className="hover:text-white transition">
                Compétences
              </Link>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </nav>

          {/* Accroche centrale */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pointer-events-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
              Ingénierie, systèmes embarqués & interfaces web
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl">
              Conception matérielle et architectures modernes.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="#projets"
                className="bg-white text-slate-950 font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition"
              >
                Explorer mes projets
              </Link>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Section Macbook */}
      <div className="overflow-hidden bg-[#0B0B0F] w-full pt-10">
        <MacbookScroll
          title={
            <span className="text-white font-semibold">
              Un aperçu de mes travaux et réalisations.
            </span>
          }
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          showGradient={false}
        />
      </div>

      {/* Section Projets */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10 tracking-tight text-white">
          Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-2">Systèmes embarqués & IoT</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Conception de cartes électroniques, programmation firmware et intégration de capteurs.
            </p>
            <div className="flex gap-2 text-xs text-neutral-300">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">C / C++</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Hardware</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 hover:border-white/20 transition">
            <h3 className="text-xl font-semibold mb-2">Automatisation & Réseaux</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Passerelles applicatives, protocoles de communication et interfaces de pilotage.
            </p>
            <div className="flex gap-2 text-xs text-neutral-300">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Next.js</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Réseaux</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}