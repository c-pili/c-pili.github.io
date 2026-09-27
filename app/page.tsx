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

    const education = [
        {
            year: "2024 - Présent",
            degree: "BUT Génie Électrique et Informatique Industrielle (GEII)",
            specialty: "Spécialité Électronique des Systèmes Embarqués (ESE)",
            school: "Université Savoie Mont Blanc",
            desc: "Formation approfondie en conception de cartes électroniques, programmation bas niveau, automatisme et traitement du signal.",
        },
        {
            year: "Avant 2024",
            degree: "Baccalauréat",
            specialty: "Filière Scientifique / Technologique",
            school: "Lycée",
            desc: "Bases solides en sciences de l'ingénieur, mathématiques et physique-chimie.",
        }
    ];

    const activities = [
        {
            title: "Aviron",
            role: "Pratique sportive",
            desc: "Esprit d'équipe, rigueur et dépassement de soi lors des entraînements et compétitions sur l'eau.",
            icon: "🚣",
        },
        {
            title: "Scoutisme",
            role: "Chef Scout & Animateur",
            desc: "Animation et encadrement de jeunes (Pionniers-Caravelles, 14-17 ans). Organisation de veillées, de débats et de projets de groupe. (BAFA obtenu).",
            icon: "⛺",
        },
        {
            title: "Nautisme & Voile",
            role: "Passion & Co-navigation",
            desc: "Grand intérêt pour la course au large (IMOCA, Vendée Globe, SailGP) et pratique de la co-navigation.",
            icon: "⛵",
        }
    ];

    return (
        <main className= "min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900" >

        {/* 1. Hero Section Épurée (Animée au chargement) */ }
        < section className = "max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24" >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" >

            {/* Texte de présentation */ }
                < motion.div
    initial = {{ opacity: 0, y: 20 }
}
animate = {{ opacity: 1, y: 0 }}
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

{/* Photo de profil moderne */ }
<motion.div 
            initial={ { opacity: 0, scale: 0.9 } }
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

{/* 2. Section Parcours Scolaire (Glissement depuis la gauche) */ }
<motion.section 
        initial={ { opacity: 0, x: -40 } }
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60"
    >
    <div className="mb-12" >
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold" > Formation </span>
            < h2 className = "text-3xl font-bold tracking-tight text-slate-950 mt-1" > Parcours Scolaire </h2>
                </div>

                < div className = "space-y-12 border-l-2 border-slate-200 ml-3 pl-8 relative" >
                {
                    education.map((item, index) => (
                        <div key= { index } className = "relative" >
                        {/* Point de la frise chronologique */ }
                        < div className = "absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-blue-500 shadow-sm" />

                        <div className="text-sm font-mono text-slate-500 mb-2" > { item.year } </div>
                    < h3 className = "text-xl font-bold text-slate-900" > { item.degree } </h3>
                    < h4 className = "text-base font-medium text-blue-600 mb-3" > { item.specialty } — { item.school } </h4>
                    < p className = "text-slate-600 max-w-2xl leading-relaxed" > { item.desc } </p>
                    </div>
                    ))
                }
                    </div>
                    </motion.section>

{/* 3. Section Activités (Apparition avec léger zoom depuis le bas) */ }
<motion.section 
        initial={ { opacity: 0, y: 40 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "bg-white border-y border-slate-200/60"
    >
    <div className="max-w-5xl mx-auto px-6 py-20" >
        <div className="mb-12 text-center" >
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold" > Extra - scolaire </span>
                < h2 className = "text-3xl font-bold tracking-tight text-slate-950 mt-1" > Mes Activités </h2>
                    </div>

                    < div className = "grid grid-cols-1 md:grid-cols-3 gap-6" >
                    {
                        activities.map((act, index) => (
                            <motion.div 
                key= { index }
                whileHover = {{ y: -5 }}
className = "p-6 rounded-2xl bg-[#FBFBFD] border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
    >
    <div className="text-4xl mb-4" > { act.icon } </div>
        < h3 className = "text-lg font-bold text-slate-900" > { act.title } </h3>
            < h4 className = "text-xs font-mono text-blue-600 mb-3 uppercase tracking-wider mt-1" > { act.role } </h4>
                < p className = "text-sm text-slate-600 leading-relaxed" > { act.desc } </p>
                    </motion.div>
            ))}
</div>
    </div>
    </motion.section>

{/* 4. Section Projets (Fondu global) */ }
<motion.section 
        id="projets"
initial = {{ opacity: 0 }}
whileInView = {{ opacity: 1 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.9, ease: "easeOut" }}
className = "max-w-6xl mx-auto px-6 py-20"
    >
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4" >
        <div>
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold" > Portfolio </span>
            < h2 className = "text-3xl font-bold tracking-tight text-slate-950 mt-1" > Réalisations sélectionnées </h2>
                </div>
                < p className = "text-sm text-slate-500 max-w-xs font-light" >
                    Cliquez sur un projet pour explorer son architecture technique et ses détails.
          </p>
                        </div>

{/* Grille de cartes */ }
<div className="grid grid-cols-1 md:grid-cols-3 gap-7" >
{
    projects.map((project, index) => (
        <Link
              key= { project.title }
              href = { project.href }
              onMouseEnter = {() => setHovered(index)}
onMouseLeave = {() => setHovered(null)}
className = {
    cn(
                "group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col",
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
          ))}
</div>
    </motion.section>

{/* Footer */ }
<Footer />
    </main>
  );
}