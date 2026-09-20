"use client";

import React from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { PixelReveal } from "@/components/ui/pixel-reveal";
import { AccordionGallery } from "@/components/ui/accordion-gallery";
import { motion } from "framer-motion";

export default function GantMagiquePage() {
  // L'équipe du projet avec le tooltip animé
  const team = [
    {
      id: 1,
      name: "Clément PILI",
      designation: "Développement & Hardware (GEII - ESE)",
      image: "/profil.jpg",
    },
    {
      id: 2,
      name: "Matthieu",
      designation: "Software & Intégration GitHub",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", 
    },
  ];

  // Le contenu du Sticky Scroll
  const scrollContent = [
    {
      title: "Conception & Routage",
      description:
        "Modélisation de l'architecture matérielle et routage des circuits imprimés sous Altium Designer pour intégrer les capteurs de flexion et la centrale inertielle de manière ergonomique.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white rounded-xl shadow-inner">
          <span className="font-mono text-sm tracking-widest uppercase">Hardware & Altium</span>
        </div>
      ),
    },
    {
      title: "Acquisition & Traitement",
      description:
        "Programmation bas niveau sur microcontrôleur (STM32 / ESP32) pour l'acquisition des données I2C/SPI. Utilisation de Matlab pour simuler et ajuster les filtres de traitement du signal.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white rounded-xl shadow-inner">
          <span className="font-mono text-sm tracking-widest uppercase">Firmware & Matlab</span>
        </div>
      ),
    },
    {
      title: "Collaboration & Versioning",
      description:
        "Développement collaboratif avec une gestion de version stricte sous GitHub, assurant une intégration fluide des modules logiciels et une synchronisation parfaite entre les différentes cartes.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white rounded-xl shadow-inner">
          <span className="font-mono text-sm tracking-widest uppercase">Git & Déploiement</span>
        </div>
      ),
    },
  ];

  // Images pour l'accordéon final
  const galleryImages = [
    "/IMG_GantsMag.jpg",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-10"
        >
          &larr; Retour à l&apos;accueil
        </Link>

        {/* 1. Image Pixel Reveal en haut */}
        <PixelReveal src="/IMG_GantsMag.jpg" alt="Gant Magique" />

        {/* 2. Titre animé et Tooltip de l'équipe */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/70">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold block mb-3">
              Projet de spécialité ESE
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950"
            >
              Le Gant Magique
            </motion.h1>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Équipe projet</span>
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={team} />
            </div>
          </div>
        </div>

        {/* 3. Texte avec éléments épurés (Sticky Scroll) */}
        <div className="mt-16 mb-24">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Technique</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce projet met en synergie la capture de mouvement et l'électronique embarquée. Le défi principal consistait à miniaturiser l'acquisition tout en garantissant un traitement du signal robuste en temps réel.
            </p>
          </div>
          
          {/* Composant Sticky Scroll Reveal */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <StickyScroll content={scrollContent} />
          </div>
        </div>

        {/* 4. Accordion Gallery à la fin */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Galerie du projet</h2>
          <AccordionGallery images={galleryImages} />
        </div>
      </div>

      <Footer />
    </main>
  );
}