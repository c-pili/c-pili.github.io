"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SmoothImageReveal } from "@/components/ui/smooth-image-reveal";
import { BentoGallery } from "@/components/ui/bento-gallery"; // <-- NOUVEAU COMPOSANT
import { motion, AnimatePresence } from "framer-motion";

export default function GantMagiquePage() {
    const [activeSection, setActiveSection] = useState(0);

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
            name: "Matthieu",
            designation: "Étudiant GEII",
            image: "/IMG_Team.png",
        },
    ];

    const scrollContent = [
        {
            title: "Schémas Fonctionnels",
            description:
                "Pour chaque doigt, nous utilisons un montage amplificateur soustracteur dédié afin d'adapter la tension proportionnellement à l'angle de flexion. Selon les doigts concernés, nous intégrons également des montages astables et de temporisation.",
            content: (
                <img
          src= "/IMG_Gants-1.png"
          alt="Schémas fonctionnels"
          className="h-full w-full object-cover"
            />
      ),
},
{
    title: "Études et Calculs",
        description:
    "Nous calculons les résistances nécessaires afin d'obtenir un circuit conditionneur délivrant entre 0 et 10V lorsque le doigt est plié à 90°. La flexion étant linéaire, nous déduisons nos seuils haut et bas à l'aide de comparateurs. Selon les besoins, nous ajoutons ensuite un circuit monostable, astable ou une commande par transistor.",
        content: (
            <img
          src= "/IMG_Gants-2.png"
    alt = "Études et calculs"
    className = "h-full w-full object-cover"
        />
      ),
},
{
    title: "Réalisations et Vérifications",
        description:
    "Après l'étude théorique, nous implémentons notre circuit sur une plaque LABDEC (breadboard). Différents tests sont réalisés pour valider la tension lorsque le doigt est à plat. Ces mesures nous permettent d'évaluer et de minimiser l'erreur relative de notre système.",
        content: (
            <img
          src= "/IMG_Gants-3.png"
    alt = "Réalisation LABDEC"
    className = "h-full w-full object-cover"
        />
      ),
},
  ];

// NOUVELLES DONNÉES POUR LA GALERIE BENTO
const galleryItems = [
    {
        id: 1,
        src: "/IMG_GantsMag.jpg",
        title: "Le Gant en Action",
        desc: "Vue globale du dispositif intégré sur le gant. Les capteurs de flexion sont soigneusement cousus pour capter les mouvements avec précision sans entraver l'utilisateur.",
        className: "md:col-span-2 md:row-span-2 h-[500px]", // Grande image à gauche
    },
    {
        id: 2,
        src: "/IMG_Gants-1.png",
        title: "Schéma structurel",
        desc: "Modélisation de la partie électronique chargée de conditionner les signaux analogiques.",
        className: "md:col-span-1 md:row-span-1 h-[242px]", // Petite image en haut à droite
    },
    {
        id: 3,
        src: "/IMG_Gants-3.png",
        title: "Tests sur LABDEC",
        desc: "Validation expérimentale des circuits amplificateurs et des seuils de comparaison avant le routage final.",
        className: "md:col-span-1 md:row-span-1 h-[242px]", // Petite image en bas à droite
    },
];

return (
    <main className= "min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900" >
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32" >
        <Link
          href="/"
className = "inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-10"
    >
          & larr; Retour à l'accueil
    </Link>

{/* 1. Image Smooth Reveal en haut */ }
<SmoothImageReveal src="/IMG_GantsMag.jpg" alt = "Gant Magique" />

{/* 2. Titre animé et Tooltip de l'équipe */ }
    < div className = "mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/70" >
        <div>
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold block mb-3" >
            Projet d'Électronique
                </span>
                < motion.h1
initial = {{ opacity: 0, y: 10 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6, delay: 0.2 }}
className = "text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950"
    >
    Le Gant Magique
        </motion.h1>
        </div>

        < div className = "flex flex-col items-start md:items-end gap-3" >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider" > Équipe projet </span>
                < div className = "flex flex-row items-center" >
                    <AnimatedTooltip items={ team } />
                        </div>
                        </div>
                        </div>

{/* 3. Section Architecture Intégrée à la page (Sticky Natif) */ }
<div className="mt-16 mb-32 flex flex-col md:flex-row items-start gap-12 relative" >
    <div className="w-full md:w-1/2 pb-32" >
        <div className="mb-20" >
            <h2 className="text-2xl font-bold text-slate-900 mb-4" > Introduction </h2>
                < p className = "text-slate-600 leading-relaxed" >
                    Ce projet consiste à concevoir un montage électronique capable de piloter des actionneurs en fonction de l'angle de flexion des doigts, mesuré par des capteurs cousus sur un gant. Le système doit fournir une tension proportionnelle à l'angle de flexion de chaque doigt.En comparant ces tensions, une LED RGB s'allume pour indiquer l'état.Ce dispositif pourrait être appliqué dans l'industrie pour le contrôle intuitif d'une main robotique.
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
    `text-3xl font-bold mb-4 transition-colors duration-500 ${activeSection === index ? "text-blue-600" : "text-slate-300"
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

{/* 4. NOUVELLE BENTO GALLERY À LA FIN */ }
<div className="mb-20" >
    <h2 className="text-2xl font-bold text-slate-900 mb-2" > Galerie Détaillée </h2>
        < p className = "text-slate-500 text-sm mb-8 font-light" >
            Découvrez en détail les différentes phases de réalisation du projet.
          </p>
                < BentoGallery items = { galleryItems } />
                    </div>
                    </div>

                    < Footer />
                    </main>
  );
}