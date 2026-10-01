"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Home() {
    const [hovered, setHovered] = useState<number | null>(null);

    const projects = [
        {
            title: "Gant Magique",
            src: "/IMG_GantsMag.jpg",
            href: "/projets/gant-magique",
            category: "Électronique",
            desc: "Dispositif de traitement de capteurs de flexion et pilotage d'actionneur.",
        },
        {
            title: "Matrice LED",
            src: "/IMG_MatriceLED.png",
            href: "/projets/matrice-led",
            category: "Informatique",
            desc: "Programmation d'une Matrice LED avec un Arduino UNO.",
        },
        {
            title: "Cellule Festo",
            src: "/IMG_CelluleFesto.png",
            href: "/projets/cellule-festo",
            category: "Automatisme",
            desc: "Réalisation d'un grafcet automatisé pour une chaîne de production.",
        },
    ];

    // Animation pour l'apparition en cascade des projets
    const containerVariants: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        },
    };

    return (
        <main className= "min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900 overflow-hidden" >

        {/* 1. Hero Section Épurée */ }
        < section className = "max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24" >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" >

                <motion.div
            initial={ { opacity: 0, y: 20 } }
    animate = {{ opacity: 1, y: 0 }
}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "flex-1 space-y-6"
    >
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-800 text-xs font-medium tracking-wide" >
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Recherche de Stage - Laboratoire d'Électronique et de Microélectronique
                </div>

                < h1 className = "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]" >
                    Clément PILI < br />
                        <span className="text-slate-600 font-semibold text-2xl sm:text-3xl lg:text-4xl block mt-2" >
                            Électronique & Systèmes Embarqués
                                </span>
                                </h1>

                                < p className = "text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal" >
                                    Passionné par les systèmes nécessitant de l'électronique embarquée et communicante. Je conçois des solutions matérielles et logicielles innovantes.
                                        </p>

                                        < div className = "flex items-center gap-4 pt-2" >
                                            <Link
                href="#projets"
className = "px-6 py-3 rounded-full bg-slate-950 text-white font-medium text-sm hover:bg-slate-800 transition shadow-sm active:scale-95"
    >
    Découvrir mes projets
        </Link>
        </div>
        </motion.div>

        < motion.div
initial = {{ opacity: 0, scale: 0.9 }}
animate = {{ opacity: 1, scale: 1 }}
transition = {{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
className = "relative shrink-0 mx-auto md:mx-0"
    >
    <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden border-2 border-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-slate-100 ring-1 ring-slate-200/80" >
        <img
                src="/IMG_Profile.JPG"
onError = {(e) => {
    (e.target as HTMLElement).setAttribute("src", "/IMG_Accueil.jpg");
}}
alt = "Clément PILI"
className = "h-full w-full object-cover"
    />
    </div>
    </motion.div>
    </div>
    </section>

{/* 2. SECTION : À propos de moi */ }
<section className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60 overflow-hidden" >
    <div className="flex flex-col md:flex-row items-center gap-12" >

        <motion.div 
            initial={ { opacity: 0, x: -40 } }
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "flex-1"
    >
    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold" > Présentation </span>
        < h2 className = "text-3xl font-bold tracking-tight text-slate-950 mt-1 mb-6" > À propos de moi </h2>
            < div className = "space-y-4 text-slate-600 leading-relaxed" >
                <p>
                Actuellement étudiant en deuxième année de BUT GEII à l'Université Savoie Mont Blanc, je me spécialise dans l'Électronique des Systèmes Embarqués(ESE).
              </p>
                    <p>
                Mon approche associe la conception matérielle(schématiques, routage de PCB sur Altium Designer) et le développement logiciel(C, C++, Python, Qt) pour donner vie à des systèmes autonomes et intelligents.J'aime particulièrement relever des défis techniques qui lient l'électronique de précision au code embarqué.
              </p>
    </div>
    </motion.div>

    < motion.div
initial = {{ opacity: 0, x: 40, filter: "blur(10px)" }}
whileInView = {{ opacity: 1, x: 0, filter: "blur(0px)" }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.8, ease: "easeOut" }}
className = "flex-1 w-full"
    >
    <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 bg-slate-100 h-80 relative group" >
        <img 
                src="/IMG_Apropos.jpg"
onError = {(e) => {
    (e.target as HTMLElement).setAttribute("src", "/IMG_Pres.jpg");
}}
alt = "Clément au travail"
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    </div>
    </motion.div>

    </div>
    </section>

{/* 3. SECTION : Médias (Photo & Vidéo) juste avant les projets */ }
<section className="bg-white py-20 border-y border-slate-200/60" >
    <div className="max-w-5xl mx-auto px-6" >
        <div className="flex flex-col md:flex-row gap-6" >

        {/* Une belle photo d'action / de projet */ }
            < motion.div
initial = {{ opacity: 0, scale: 0.9, y: 30 }}
whileInView = {{ opacity: 1, scale: 1, y: 0 }}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.6, ease: "easeOut" }}
className = "flex-1 h-72 md:h-96 rounded-3xl overflow-hidden shadow-md group relative bg-slate-100"
    >
    <img 
                src="/IMG_Action.jpg"
onError = {(e) => {
    (e.target as HTMLElement).setAttribute("src", "/IMG_Pres_2.jpg");
}}
alt = "En pleine conception"
className = "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    </motion.div>

{/* Un lecteur Vidéo fluide et muet (style background dynamique) */ }
<motion.div 
              initial={ { opacity: 0, scale: 0.9, y: 30 } }
whileInView = {{ opacity: 1, scale: 1, y: 0 }}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
className = "flex-1 h-72 md:h-96 rounded-3xl overflow-hidden shadow-md group relative bg-slate-900 border border-slate-800"
    >
{/* REMARQUE : Placez une vidéo courte dans public/Video_Projet.mp4 */ }
    < video
src = "/VID_MAIN-2.mp4"
autoPlay
loop
muted
playsInline
className = "w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
    />
{/* Si la vidéo n'est pas trouvée, un message subtil s'affiche derrière */ }
    < div className = "absolute inset-0 -z-10 flex items-center justify-center text-slate-500 text-sm font-mono" >
        Vidéo introuvable
            </div>
            </motion.div>

            </div>
            </div>
            </section>

{/* 4. Section Projets (Animée en cascade / Stagger) */ }
<section id="projets" className = "max-w-6xl mx-auto px-6 py-24" >
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4" >
        <div>
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold" >
            Portfolio
            </span>
            < h2 className = "text-3xl font-bold tracking-tight text-slate-950 mt-1" >
                Réalisations sélectionnées
                    </h2>
                    </div>
                    < p className = "text-sm text-slate-500 max-w-xs font-light" >
                        Cliquez sur un projet pour explorer son architecture technique et ses détails.
          </p>
                            </div>

{/* Grille de cartes gérée par Framer Motion pour l'apparition en cascade */ }
<motion.div 
          variants={ containerVariants }
initial = "hidden"
whileInView = "show"
viewport = {{ once: true, margin: "-100px" }}
className = "grid grid-cols-1 md:grid-cols-3 gap-7"
    >
{
    projects.map((project, index) => (
        <motion.div variants= { itemVariants } key = { project.title } >
        <Link
                href={ project.href }
                onMouseEnter = {() => setHovered(index)}
onMouseLeave = {() => setHovered(null)}
className = {
    cn(
                  "group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full",
        hovered !== null && hovered !== index && "opacity-60 scale-[0.99] filter blur-[0.5px]"
                )}
              >
    <div className="h-60 w-full overflow-hidden bg-slate-100 relative" >
        <img
                    src={ project.src }
alt = { project.title }
className = "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-slate-800 border border-slate-200/60 font-medium" >
    { project.category }
        </div>
        </div>

        < div className = "p-6 flex flex-col flex-1 justify-between bg-white" >
            <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors" >
            { project.title }
                </h3>
                < p className = "text-sm text-slate-600 mt-2 leading-relaxed font-normal" >
                { project.desc }
                    </p>
                    </div>

                    < div className = "mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-600 transition-colors" >
                        <span>En savoir plus </span>
                            < span className = "group-hover:translate-x-1 transition-transform" >→</span>
                                </div>
                                </div>
                                </Link>
                                </motion.div>
          ))}
</motion.div>
    </section>

{/* Footer */ }
<Footer />
    </main>
  );
}