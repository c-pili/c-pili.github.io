"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SmoothImageReveal } from "@/components/ui/smooth-image-reveal";
import { BentoGallery } from "@/components/ui/bento-gallery"; // <-- Ajout de BentoGallery
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
            name: "Clément",
            designation: "Étudiant GEII",
            image: "/IMG_Profile.JPG",
        },
        {
            id: 2,
            name: "Yliès",
            designation: "Étudiant GEII",
            image: "/IMG_Team.png",
        },
    ];

    const scrollContent = [
        {
            title: "Conceptions",
            description:
                "Analyses des différents cahiers des charges et dessin des premiers schémas partie par partie. Réalisation des premiers graphes SFC avec Schneider EcoStruxure en intégrant les entrées/sorties de l'API.",
            content: (
                <img
          src= "/IMG_Cellule-1.png"
          alt="Système mécanique"
          className="h-full w-full object-cover"
            />
      ),
},
{
    title: "Optimisations et Tests",
        description:
    "Élaboration des premiers tests pour la validation des graphes, réalisée module par module. Optimisation du graphe et amélioration du cahier des charges en prenant en compte les couleurs/matériaux des différentes pièces ainsi que les erreurs de production.",
        content: (
            <img
          src= "/IMG_Cellule-2.png"
    alt = "Logique et automatisation"
    className = "h-full w-full object-cover"
        />
      ),
},
{
    title: "Passage en Sémaphore",
        description:
    "Optimisation finale et passage au dernier cahier des charges. Traduction du graphe classique en graphe à sémaphore. Cette méthode est indispensable lorsque plusieurs pièces de couleurs/matériaux différents sont simultanément sur la machine, offrant une gestion optimale de la file d'attente.",
        content: (
            <img
          src= "/IMG_Cellule-3.png"
    alt = "Programmation API"
    className = "h-full w-full object-cover"
        />
      ),
},
  ];

// Configuration de la Galerie Bento (4 éléments pour faire une belle grille complète)
const galleryItems = [
    {
        id: 1,
        src: "/IMG_CelluleFesto.png",
        title: "Cellule Festo",
        desc: "Vue globale de la ligne de production automatisée.",
        className: "md:col-span-2 md:row-span-2 h-[500px]", // Grande image à gauche
    },
    {
        id: 2,
        src: "/IMG_Cellule-1.png",
        title: "Graphes SFC",
        desc: "Premiers schémas et graphes SFC réalisés avec Schneider EcoStruxure.",
        className: "md:col-span-1 md:row-span-1 h-[242px]", // En haut à droite
    },
    {
        id: 3,
        src: "/IMG_Cellule-2.png",
        title: "Tests et Optimisations",
        desc: "Validation étape par étape et gestion des erreurs de production.",
        className: "md:col-span-1 md:row-span-1 h-[242px]", // En bas à droite
    },
    {
        id: 4,
        src: "/IMG_Cellule-3.png",
        title: "Graphe à Sémaphore",
        desc: "Passage au graphe à sémaphore pour la gestion complexe de pièces simultanées sur la ligne de production.",
        className: "md:col-span-3 md:row-span-1 h-[300px]", // Grande barre horizontale en bas
    },
];

return (
    <main className= "min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900" >
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32" >
        <Link
          href="/"
className = "inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-10"
    >
          & larr; Retour à l'accueil
    </Link>

{/* 1. Image en haut */ }
<SmoothImageReveal src="/IMG_CelluleFesto.png" alt = "Cellule Festo" />

{/* 2. Titre animé et Tooltip de l'équipe */ }
    < div className = "mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/70" >
        <div>
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold block mb-3" >
            Automatisme Industriel
                </span>
                < motion.h1
initial = {{ opacity: 0, y: 10 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6, delay: 0.2 }}
className = "text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950"
    >
    Cellule Festo
        </motion.h1>
        </div>

        < div className = "flex flex-col items-start md:items-end gap-3" >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider" > Équipe de Projet </span>
                < div className = "flex flex-row items-center" >
                    <AnimatedTooltip items={ team } />
                        </div>
                        </div>
                        </div>

{/* 3. Section Architecture (Sticky Scroll Natif avec Images) */ }
<div className="mt-16 mb-32 flex flex-col md:flex-row items-start gap-12 relative" >

    <div className="w-full md:w-1/2 pb-32" >
        <div className="mb-20" >
            <h2 className="text-2xl font-bold text-slate-900 mb-4" > Introduction </h2>
                < p className = "text-slate-600 leading-relaxed" >
                    Ce projet simule une ligne de production industrielle automatisée.L'objectif était de maîtriser l'ensemble de la chaîne d'action : depuis l'énergie pneumatique jusqu'à l'intelligence de commande de l'API.
                        </p>
                        </div>

{
    scrollContent.map((item, index) => (
        <motion.div
                key= { index }
                initial = {{ opacity: 0, y: 30 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "scroll-section min-h-[50vh] pt-10"
    >
    <h3
                  className={
    `text-3xl font-bold mb-4 transition-colors duration-500 ${activeSection === index ? "text-emerald-600" : "text-slate-300"
    }`
}
                >
{ item.title }
    </h3>
    < p
className = {`leading-relaxed text-lg transition-opacity duration-500 ${activeSection === index ? "opacity-100 text-slate-600" : "opacity-30 text-slate-400"
    }`}
                >
{ item.description }
    </p>
    </motion.div>
            ))}
</div>

    < div className = "hidden md:block w-full md:w-1/2 sticky top-32" >
        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 relative" >
            <AnimatePresence mode="wait" >
                <motion.div
                  key={ activeSection }
initial = {{ opacity: 0, scale: 0.95 }}
animate = {{ opacity: 1, scale: 1 }}
exit = {{ opacity: 0, scale: 1.05 }}
transition = {{ duration: 0.4, ease: "easeInOut" }}
className = "absolute inset-0"
    >
{ scrollContent[activeSection].content }
    </motion.div>
    </AnimatePresence>
    </div>
    </div>
    </div>

{/* Galerie détaillée avec BentoGallery */ }
<div className="mb-20" >
    <h2 className="text-2xl font-bold text-slate-900 mb-2" > Galerie Détaillée </h2>
        < p className = "text-slate-500 text-sm mb-8 font-light" >
            Cliquez sur un graphe ou une image pour l'agrandir.
                </p>
                < BentoGallery items = { galleryItems } />
                    </div>
                    </div>

                    < Footer />
                    </main>
  );
}