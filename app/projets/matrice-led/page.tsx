"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SmoothImageReveal } from "@/components/ui/smooth-image-reveal";
import { BentoGallery } from "@/components/ui/bento-gallery"; // <-- Ajout de BentoGallery
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

    // Le contenu du Sticky Scroll
    const scrollContent = [
        {
            title: "Synoptique",
            description:
                "Ce projet s'appuie sur une carte Arduino UNO pour le traitement des données. La commande est assurée par des modules 74HC238 et 74HC4094, permettant de piloter une matrice LED de 8x32. Un module TinyRTC, connecté en I2C à l'Arduino, fournit l'heure en temps réel.",
            content: (
                <img
          src= "/IMG_Matrice-1.png"
          alt="Synoptique du système"
          className="h-full w-full object-cover"
            />
      ),
},
{
    title: "Registres à Décalages",
        description:
    "Un registre à décalage est un système séquentiel permettant de mémoriser des bits ; lorsqu'un nouveau bit entre, les précédents sont décalés d'une position. Cela permet de transférer des données bit par bit dans un circuit numérique via un ensemble de bascules synchrones. Ces registres peuvent facilement être mis en cascade s'ils partagent le même signal d'horloge, qui cadence le basculement.",
        content: (
            <img
          src= "/IMG_Matrice-2.png"
    alt = "Registres à décalage"
    className = "h-full w-full object-cover"
        />
      ),
},
{
    title: "Intégration TinyRTC",
        description:
    "Le module TinyRTC intègre un composant DS1307 (Horloge Temps Réel I2C) et une EEPROM 24C32. Secouru par une pile bouton, il garantit la conservation de l'heure même en cas de coupure de l'alimentation de la carte Arduino. Cela évite de devoir reconfigurer l'heure à chaque démarrage du système.",
        content: (
            <img
          src= "/IMG_Matrice-3.png"
    alt = "Module TinyRTC"
    className = "h-full w-full object-cover"
        />
      ),
},
  ];

// Configuration de la Galerie Bento
const galleryItems = [
    {
        id: 1,
        src: "/IMG_Matrice-1.png",
        title: "Synoptique & Routage",
        desc: "Vue d'ensemble du système et conception du PCB sur Altium Designer.",
        className: "md:col-span-2 md:row-span-2 h-[500px]", // Grande image
    },
    {
        id: 2,
        src: "/IMG_Matrice-2.png",
        title: "Registres à Décalage",
        desc: "Gestion de l'affichage matriciel via les registres 74HC238 et 74HC4094.",
        className: "md:col-span-1 md:row-span-1 h-[242px]",
    },
    {
        id: 3,
        src: "/IMG_Matrice-3.png",
        title: "Module TinyRTC",
        desc: "Intégration du module d'horloge I2C pour l'affichage autonome de l'heure.",
        className: "md:col-span-1 md:row-span-1 h-[242px]",
    },
];

return (
    <main className= "min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900" >
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32" >
        <Link
          href="/"
className = "inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-10"
    >
          & larr; Retour à l'accueil
    </Link>

    < SmoothImageReveal src = "/IMG_MatriceLED.png" alt = "Matrice LED" />

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-200/70" >
            <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-600 font-semibold block mb-3" >
                Développement C++
                    </span>
                    < motion.h1
initial = {{ opacity: 0, y: 10 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6, delay: 0.2 }}
className = "text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950"
    >
    Matrice LED
        </motion.h1>
        </div>

        < div className = "flex flex-col items-start md:items-end gap-3" >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider" > Équipe de Projet </span>
                < div className = "flex flex-row items-center" >
                    <AnimatedTooltip items={ team } />
                        </div>
                        </div>
                        </div>

                        < div className = "mt-16 mb-20 flex flex-col md:flex-row items-start gap-12 relative" >
                            <div className="w-full md:w-1/2 pb-32" >
                                <div className="mb-20" >
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4" > Introduction </h2>
                                        < p className = "text-slate-600 leading-relaxed" >
                                            L'objectif de ce projet est de contrôler un panneau LED similaire à ceux rencontrés dans les transports en commun ou les espaces publics. Le but est de développer un système embarqué capable de récupérer l'heure en temps réel pour l'afficher sur la matrice. Bien que monochrome, ce type de panneau reste essentiel pour diffuser des informations de manière fiable et à faible coût.
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
    `text-3xl font-bold mb-4 transition-colors duration-500 ${activeSection === index ? "text-purple-600" : "text-slate-300"
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

{/* Section BLOC DE CODE */ }
<div className="mb-32 py-16 border-t border-slate-200/70 overflow-hidden" >
    <div className="flex flex-col lg:flex-row items-center gap-12" >
        <motion.div
              initial={ { opacity: 0, x: -40 } }
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "lg:w-1/3"
    >
    <span className="text-xs font-mono uppercase tracking-widest text-purple-600 font-semibold block mb-3" >
        Implémentation
        </span>
        < h2 className = "text-2xl font-bold text-slate-900 mb-4" > Fonctions Principales </h2>
            < p className = "text-slate-600 leading-relaxed mb-6" >
                Le cœur de l'affichage repose sur plusieurs fonctions développées par Matthieu, dont <strong>GenerateBufferLed()</strong>. Voici un extrait du code C++ illustrant la préparation du buffer et la logique d'affichage bit par bit sur la matrice.
              </p>
                    < div className = "flex flex-wrap gap-2" >
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-mono" > C++ </span>
                            < span className = "px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-mono" > Arduino UNO </span>
                                < span className = "px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-mono" > VS Code </span>
                                    < span className = "px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-mono" > GitHub </span>
                                        </div>
                                        </motion.div>

                                        < motion.div
initial = {{ opacity: 0, x: 40, scale: 0.95 }}
whileInView = {{ opacity: 1, x: 0, scale: 1 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "lg:w-2/3 w-full rounded-xl bg-[#0d1117] border border-slate-700 shadow-2xl overflow-hidden"
    >
    <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700/50" >
        <div className="flex space-x-2" >
            <div className="w-3 h-3 rounded-full bg-red-500/80" > </div>
                < div className = "w-3 h-3 rounded-full bg-yellow-500/80" > </div>
                    < div className = "w-3 h-3 rounded-full bg-green-500/80" > </div>
                        </div>
                        < span className = "ml-4 text-xs text-slate-400 font-mono" > main.cpp </span>
                            </div>

                            < div className = "p-5 overflow-x-auto" >
                                <pre className="text-sm font-mono leading-relaxed text-slate-300" >
                                    <code>
                                    <span className="text-blue-400" > { "void "} </span>
                                        < span className = "text-yellow-200" > { "GenerateBufferLed"} </span>
{ "() {\n" }
{ "    " }
<span className="text-blue-400" > { "uint8_t "} </span>
{ "*window;\n" }
{ "    " }
<span className="text-purple-400" > { "if "} </span>
{ "(mySnakeGame.__Snake_running) window = mySnakeGame.__window;\n" }
{ "    " }
<span className="text-purple-400" > { "else "} </span>
{ "window = myMatrice.__MatriceLed;\n\n" }
{ "    " }
<span className="text-purple-400" > { "for "} </span>
{ "(" }
<span className="text-blue-400" > { "uint8_t "} </span>
{ "i = " }
<span className="text-orange-300" > { "0"} </span>
{ "; i < " }
<span className="text-orange-300" > { "32"} </span>
{ "; i++) {\n" }
{ "        data_buffer[i] = ((window[i] >> ligneInProcesse) & " }
<span className="text-orange-300" > { "1"} </span>
{ ") ^ " }
<span className="text-orange-300" > { "1"} </span>
{ "; " }
<span className="text-slate-500" > { "// inversion bit\n"} </span>
{ "    }\n}\n\n" }

<span className="text-blue-400" > { "void "} </span>
    < span className = "text-yellow-200" > { "ShowLigne"} </span>
{ "() {\n    " }
<span className="text-slate-500" > { "/* Éteint la matrice */\n"} </span>
{ "    PORTC &= ~(" }
<span className="text-orange-300" > { "1"} </span>
{ " << CS1_PIN);\n\n    " }
<span className="text-slate-500" > { "/* Envoie la ligne */\n"} </span>
{ "    PORTC = (PORTC & ~(" }
<span className="text-orange-300" > { "1"} </span>
{ " << ALO_PIN)) | (((ligneInProcesse >> BIT0) & " }
<span className="text-orange-300" > { "1"} </span>
{ ") << ALO_PIN);\n" }
{ "    PORTC = (PORTC & ~(" }
<span className="text-orange-300" > { "1"} </span>
{ " << AL1_PIN)) | (((ligneInProcesse >> BIT1) & " }
<span className="text-orange-300" > { "1"} </span>
{ ") << AL1_PIN);\n" }
{ "    PORTC = (PORTC & ~(" }
<span className="text-orange-300" > { "1"} </span>
{ " << AL2_PIN)) | (((ligneInProcesse >> BIT2) & " }
<span className="text-orange-300" > { "1"} </span>
{ ") << AL2_PIN);\n}" }
</code>
    </pre>
    </div>
    </motion.div>
    </div>

    < motion.div
initial = {{ opacity: 0, y: 20 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.6, delay: 0.3 }}
className = "mt-16 flex justify-center"
    >
    <Link
              href="https://github.com/MatthieuDeroo02/ProjetS2-MatriceLed"
target = "_blank"
rel = "noopener noreferrer"
    >
    <motion.button
                whileHover={ { scale: 1.05, backgroundColor: "#1e293b" } }
whileTap = {{ scale: 0.95 }}
className = "flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold shadow-lg shadow-slate-900/20 transition-colors"
    >
    <svg className="w-6 h-6" fill = "currentColor" viewBox = "0 0 24 24" >
        <path fillRule="evenodd" d = "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule = "evenodd" />
            </svg>
                Voir le code sur GitHub
    </motion.button>
    </Link>
    </motion.div>
    </div>

{/* Galerie détaillée avec BentoGallery */ }
<div className="mb-20" >
    <h2 className="text-2xl font-bold text-slate-900 mb-2" > Galerie Détaillée </h2>
        < p className = "text-slate-500 text-sm mb-8 font-light" >
            Cliquez sur un schéma ou une image pour l'agrandir.
                </p>
                < BentoGallery items = { galleryItems } />
                    </div>
                    </div>

                    < Footer />
                    </main>
  );
}