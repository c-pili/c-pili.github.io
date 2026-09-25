"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function Home() {
    const [hovered, setHovered] = useState<number | null>(null);

    const projects = [
        {
            title: "Gant Magique",
            src: "/IMG_GantsMag.jpg",
            href: "/projets/gant-magique",
            category: "Electronique",
            desc: "Dispositif de traitement de capteurs de flexion et pilotage d'actionneur",
        },
        {
            title: "Matrice LED",
            src: "/IMG_MatriceLED.png",
            href: "/projets/matrice-led",
            category: "Informatique",
            desc: "Pilotage adressable haute fréquence et synchronisation d'effets visuels dynamiques",
        },
        {
            title: "Cellule Festo",
            src: "/IMG_CelluleFesto.png",
            href: "/projets/cellule-festo",
            category: "Automatisme",
            desc: "Banc automatisé, programmation API et architecture Grafcet",
        },
    ];

    return (
        <main className= "min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900" >
        {/* Hero Section Épurée */ }
        < section className = "max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24" >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" >

            {/* Texte de présentation */ }
                < div className = "flex-1 space-y-6" >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50/70 text-emerald-800 text-xs font-medium tracking-wide" >
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Recherche de Stage - Electronique de Labo
                                </div>

                                < h1 className = "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]" >
                                    Clément PILI < br />
                                        <span className="text-slate-600 font-semibold text-2xl sm:text-3xl lg:text-4xl block mt-2" >
                                            Concepteur Électronique & Développeur
                                                </span>
                                                </h1>

                                                < p className = "text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal" >
                                                    Passionné par la convergence entre matériel et logiciel: microcontrôleurs,
                                                        systèmes communicants et interfaces utilisateurs soignées.
            </p>

                                                            < div className = "flex items-center gap-4 pt-2" >
                                                                <Link
                href="#projets"
    className = "px-6 py-3 rounded-full bg-slate-950 text-white font-medium text-sm hover:bg-slate-800 transition shadow-sm active:scale-95"
        >
        Découvrir mes projets
            </Link>
            < Link
    href = "/contact"
    className = "px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition active:scale-95 shadow-xs"
        >
        Prendre contact
            </Link>
            </div>
            </div>

    {/* Photo de profil moderne avec cadre subtil */ }
    <div className="relative shrink-0 mx-auto md:mx-0" >
        <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden border-2 border-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-slate-100 ring-1 ring-slate-200/80" >
        {/* Remplacez par votre photo dans public/profil.jpg */ }
            < img
    src = "/IMG_Profile.JPG"
    onError = {(e) => {
        // Fallback automatique si la photo n'est pas encore ajoutée
        (e.target as HTMLElement).setAttribute(
            "src",
            "/IMG_Accueil.jpg"
        );
    }
}
alt = "Clément PILI"
className = "h-full w-full object-cover"
    />
    </div>
    </div>
    </div>
    </section>

{/* Section Projets avec cartes */ }
<section id="projets" className = "max-w-6xl mx-auto px-6 py-20 border-t border-slate-200/60" >
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
                "group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col",
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
                            < span className = "group-hover:translate-x-1 transition-transform" > </span>
                                </div>
                                </div>
                                </Link>
          ))}
</div>
    </section>

{/* Footer */ }
<Footer />
    </main>
  );
}