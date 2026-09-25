"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { PixelReveal } from "@/components/ui/pixel-reveal";
import { AccordionGallery } from "@/components/ui/accordion-gallery";
import { motion, AnimatePresence } from "framer-motion";

export default function MatriceLedPage() {
  const [activeSection, setActiveSection] = useState(0);

  // Gestion du Sticky Scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-section");
      let current = 0;
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          current = index;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // L'équipe du projet
  const team = [
    {
      id: 1,
      name: "Clément PILI",
      designation: "Conception Hardware & Code C++",
      image: "/profil.jpg",
    },
  ];

  // Le contenu du Sticky Scroll
  const scrollContent = [
    {
      title: "Gestion de la Puissance",
      description:
        "Une matrice LED adressable consomme énormément de courant à pleine luminosité (jusqu'à 60mA par LED). Le défi matériel était de dimensionner l'alimentation et de concevoir un routage capable de distribuer cette puissance sans chute de tension.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white">
          <span className="font-mono text-sm tracking-widest uppercase text-center px-4">Alimentation & Routage</span>
        </div>
      ),
    },
    {
      title: "Microcontrôleur & Bus de données",
      description:
        "Utilisation d'un microcontrôleur (ESP32) pour générer le signal de commande avec une précision à la microseconde. L'utilisation du DMA (Direct Memory Access) a permis d'envoyer les trames sans bloquer le processeur principal.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
          <span className="font-mono text-sm tracking-widest uppercase">ESP32 & DMA</span>
        </div>
      ),
    },
    {
      title: "Algorithmes Visuels",
      description:
        "Développement de programmes de rendu dynamique. Les coordonnées 2D (X, Y) sont traduites en un index 1D correspondant au câblage en serpentin de la matrice, permettant des animations fluides.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white">
          <span className="font-mono text-sm tracking-widest uppercase">Mapping 2D -&gt; 1D</span>
        </div>
      ),
    },
  ];

  // Images de la galerie
  const galleryImages = [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-10"
        >
          &larr; Retour à l&apos;accueil
        </Link>

        {/* 1. Image Pixel Reveal en haut */}
        <PixelReveal 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop" 
          alt="Matrice LED" 
        />

        {/* 2. Titre animé et Tooltip de l'équipe */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/70">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-600 font-semibold block mb-3">
              Hardware & Développement C++
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950"
            >
              Matrice LED Adressable
            </motion.h1>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Créateur</span>
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={team} />
            </div>
          </div>
        </div>

        {/* 3. Section Architecture (Sticky Scroll Natif) */}
        <div className="mt-16 mb-20 flex flex-col md:flex-row items-start gap-12 relative">
          <div className="w-full md:w-1/2 pb-32">
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Technique</h2>
              <p className="text-slate-600 leading-relaxed">
                Ce projet a nécessité une double approche : une conception matérielle capable d'encaisser de forts appels de courant, et un code embarqué optimisé pour maintenir un framerate élevé sur un grand nombre de pixels.
              </p>
            </div>

            {scrollContent.map((item, index) => (
              <div key={index} className="scroll-section min-h-[50vh] pt-10">
                <h3
                  className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === index ? "text-purple-600" : "text-slate-300"
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

        {/* 4. Section BLOC DE CODE (Animé au défilement) */}
        <div className="mb-32 py-16 border-t border-slate-200/70 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Texte descriptif du code */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-1/3"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-purple-600 font-semibold block mb-3">
                Implémentation
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Bibliothèque FastLED</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Le cœur de l'animation repose sur la célèbre bibliothèque <strong>FastLED</strong>. Voici un extrait du code C++ permettant d'initialiser le ruban WS2812B et de générer un effet visuel de spectre arc-en-ciel dynamique sans saturer la mémoire du microcontrôleur.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-mono">C++</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-mono">ESP32</span>
              </div>
            </motion.div>

            {/* Faux Éditeur de Code Animé */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-2/3 w-full rounded-xl bg-[#0d1117] border border-slate-700 shadow-2xl overflow-hidden"
            >
              {/* Barre supérieure style macOS */}
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="ml-4 text-xs text-slate-400 font-mono">main.cpp</span>
              </div>
              
              {/* Code */}
              <div className="p-5 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed text-slate-300">
                  <code>
<span className="text-purple-400">#include</span> <span className="text-green-300">&lt;FastLED.h&gt;</span><br/><br/>
<span className="text-purple-400">#define</span> NUM_LEDS <span className="text-orange-300">256</span><br/>
<span className="text-purple-400">#define</span> DATA_PIN <span className="text-orange-300">3</span><br/><br/>
<span className="text-yellow-200">CRGB</span> leds[NUM_LEDS];<br/><br/>
<span className="text-blue-400">void</span> <span className="text-yellow-200">setup</span>() {'{'}<br/>
{'  '}FastLED.<span className="text-blue-300">addLeds</span>&lt;WS2812B, DATA_PIN, GRB&gt;(leds, NUM_LEDS);<br/>
{'  '}FastLED.<span className="text-blue-300">setBrightness</span>(<span className="text-orange-300">50</span>);<br/>
{'}'}<br/><br/>
<span className="text-blue-400">void</span> <span className="text-yellow-200">loop</span>() {'{'}<br/>
{'  '}<span className="text-slate-500">// Effet arc-en-ciel tournant fluide</span><br/>
{'  '}<span className="text-blue-300">fill_rainbow</span>(leds, NUM_LEDS, <span className="text-blue-300">millis</span>() / <span className="text-orange-300">10</span>, <span className="text-orange-300">5</span>);<br/>
{'  '}FastLED.<span className="text-blue-300">show</span>();<br/>
{'}'}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 5. Accordion Gallery à la fin */}
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