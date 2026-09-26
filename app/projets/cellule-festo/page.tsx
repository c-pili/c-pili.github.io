"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SmoothImageReveal } from "@/components/ui/smooth-image-reveal";
import { AccordionGallery } from "@/components/ui/accordion-gallery";
import { motion, AnimatePresence } from "framer-motion";

export default function CelluleFestoPage() {
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

  const team = [
    {
      id: 1,
      name: "Clément PILI",
      designation: "Automatisme, Grafcet & API",
      image: "/profil.jpg",
    },
  ];

  const scrollContent = [
    {
      title: "Pneumatique & Mécanique",
      description:
        "Analyse et câblage de la partie opérative de la cellule. Intégration des vérins, des distributeurs pneumatiques et des préhenseurs nécessaires au transfert et au tri sélectif des pièces industrielles.",
      content: (
        <img
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1000&auto=format&fit=crop"
          alt="Système mécanique"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Modélisation Grafcet",
      description:
        "Élaboration rigoureuse de la logique séquentielle via le Grafcet (Graphe de Commande Étape-Transition). Gestion intégrale des modes de marche (automatique, cycle par cycle, manuel) et sécurisation du système (arrêts d'urgence).",
      content: (
        <img
          src="https://images.unsplash.com/photo-1580983554869-906969562768?q=80&w=1000&auto=format&fit=crop"
          alt="Logique et automatisation"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Programmation API",
      description:
        "Traduction de la modélisation en langage automate (Ladder/ST) pour piloter l'Automate Programmable Industriel (API). Intégration en temps réel des retours d'information des capteurs inductifs et optiques.",
      content: (
        <img
          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000&auto=format&fit=crop"
          alt="Programmation API"
          className="h-full w-full object-cover"
        />
      ),
    },
  ];

  const galleryImages = [
    "/IMG_CelluleFesto.jpg", // Remplacez par votre vraie photo
    "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580983554869-906969562768?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-10"
        >
          &larr; Retour à l&apos;accueil
        </Link>

        {/* 1. Nouvelle animation fluide d'image (Smooth Reveal) */}
        <SmoothImageReveal 
          src="/IMG_CelluleFesto.jpg" 
          alt="Cellule d'Automatisation Festo" 
        />

        {/* 2. Titre animé et Tooltip de l'équipe */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/70">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold block mb-3">
              Génie Électrique & Informatique Industrielle
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950"
            >
              Cellule Festo
            </motion.h1>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Responsable</span>
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={team} />
            </div>
          </div>
        </div>

        {/* 3. Section Architecture (Sticky Scroll Natif avec Images) */}
        <div className="mt-16 mb-32 flex flex-col md:flex-row items-start gap-12 relative">
          
          <div className="w-full md:w-1/2 pb-32">
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ingénierie Système</h2>
              <p className="text-slate-600 leading-relaxed">
                Ce projet simule une ligne de production industrielle automatisée. L'objectif était de maîtriser l'ensemble de la chaîne d'action : depuis l'énergie pneumatique jusqu'à l'intelligence de commande de l'API.
              </p>
            </div>

            {scrollContent.map((item, index) => (
              <div key={index} className="scroll-section min-h-[50vh] pt-10">
                <h3
                  className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === index ? "text-emerald-600" : "text-slate-300"
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