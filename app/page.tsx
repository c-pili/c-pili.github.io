"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FocusCards } from "@/components/ui/focus-cards";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Gant Magique",
      src: "/IMG_GantsMag.jpg",
    },
    {
      title: "Matrice LED",
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Cellule Festo",
      src: "/IMG_CelluleFesto.jpg",
    },
  ];

  return (
    <main className="w-full bg-[#0B0B0F] min-h-screen text-white">
      {/* Navbar flottante */}
      <Navbar />

      {/* Hero Section */}
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
        <div className="absolute z-40 inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
            Ingénierie, systèmes embarqués & interfaces web
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl font-light">
            Conception matérielle et architectures logicielles modernes.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#projets"
              className="bg-white text-slate-950 font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition text-sm"
            >
              Explorer mes projets
            </Link>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Section Projets avec les Focus Cards */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Projets & Réalisations
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Survole une carte pour mettre l'accent sur le projet.
          </p>
        </div>

        <FocusCards cards={cards} />
      </section>
    </main>
  );
}