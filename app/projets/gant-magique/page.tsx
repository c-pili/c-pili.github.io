"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { PixelReveal } from "@/components/ui/pixel-reveal";
import { AccordionGallery } from "@/components/ui/accordion-gallery";
import { motion, AnimatePresence } from "framer-motion";

export default function GantMagiquePage() {
  const [activeSection, setActiveSection] = useState(0);

  // Écouteur de défilement pour détecter quelle section textuelle est à l'écran
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-section");
      let current = 0;
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Si le bloc de texte arrive dans la moitié supérieure de l'écran
        if (rect.top < window.innerHeight / 2) {
          current = index;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init au chargement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    {
      id: 1,
      name: "Clément PILI",
      designation: "Développement & Hardware",
      image: "/IMG_Profile.JPG",
    },
    {
      id: 2,
      name: "Matthieu",
      designation: "Software & Intégration GitHub",
      image: "/IMG_Team.png",
    },
  ];

  const scrollContent = [
    {
      title: "Conception & Routage",
      description:
        "Modélisation de l'architecture matérielle et routage des circuits imprimés sous Altium Designer pour intégrer les capteurs de flexion et la centrale inertielle de manière ergonomique.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
          <span className="font-mono text-sm tracking-widest uppercase">Hardware & Altium</span>
        </div>
      ),
    },
    {
      title: "Acquisition & Traitement",
      description:
        "Programmation bas niveau sur microcontrôleur (STM32 / ESP32) pour l'acquisition des données I2C/SPI. Utilisation de Matlab pour simuler et ajuster les filtres de traitement du signal.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white">
          <span className="font-mono text-sm tracking-widest uppercase">Firmware & Matlab</span>
        </div>
      ),
    },
    {
      title: "Collaboration & Versioning",
      description:
        "Développement collaboratif avec une gestion de version stricte sous GitHub, assurant une intégration fluide des modules logiciels et une synchronisation parfaite entre les différentes cartes.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white">
          <span className="font-mono text-sm tracking-widest uppercase">Git & Déploiement</span>
        </div>
      ),
    },
  ];

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
              transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* 3. Section Architecture Intégrée à la page (Sticky Natif) */}
        <div className="mt-16 mb-32 flex flex-col md:flex-row items-start gap-12 relative">
          
          {/* Colonne de gauche : Texte qui défile normalement avec la page */}
          <div className="w-full md:w-1/2 pb-32">
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Technique</h2>
              <p className="text-slate-600 leading-relaxed">
                Ce projet met en synergie la capture de mouvement et l&apos;électronique embarquée. Le défi principal consistait à miniaturiser l&apos;acquisition tout en garantissant un traitement du signal robuste en temps réel.
              </p>
            </div>

            {/* Espacement important pour créer l'effet de défilement */}
            {scrollContent.map((item, index) => (
              <div key={index} className="scroll-section min-h-[50vh] pt-10">
                <h3
                  className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === index ? "text-blue-600" : "text-slate-300"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed text-lg transition-opacity duration-500 ${
                    activeSection === index ? "opacity-100 text-slate-600" : "opacity-30 text-slate-400"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Colonne de droite : Visuel Fixe (Sticky) */}
          <div className="hidden md:block w-full md:w-1/2 sticky top-32">
            <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {scrollContent[activeSection].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4. Accordion Gallery à la fin */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Galerie du projet</h2>
          <p className="text-slate-500 text-sm mb-6 font-light">Survolez les images pour les agrandir.</p>
          <AccordionGallery images={galleryImages} />
        </div>
      </div>

      <Footer />
    </main>
  );
}