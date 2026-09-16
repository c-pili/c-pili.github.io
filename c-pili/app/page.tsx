"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export default function Home() {
    return (
        <div className= "w-full bg-[#0B0B0F] min-h-screen text-white" >
        {/* Barre de navigation */ }
        < nav className = "flex items-center justify-between px-8 py-5 border-b border-white/10 max-w-7xl mx-auto" >
            <span className="text-xl font-bold tracking-tight" > Portfolio </span>
                < div className = "flex gap-6 text-sm text-neutral-400" >
                    <Link href="#projets" className = "hover:text-white transition" >
                        Projets
                        </Link>
                        < Link href = "#competences" className = "hover:text-white transition" >
                            Compétences
                            </Link>
                            < Link href = "#contact" className = "hover:text-white transition" >
                                Contact
                                </Link>
                                </div>
                                </nav>

    {/* Section Macbook Scroll */ }
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full" >
        <MacbookScroll
          title={
        <span className="text-neutral-800 dark:text-white font-semibold" >
            Conception de systèmes et développement. < br /> Découvrez mes réalisations.
            </span>
    }
    src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    showGradient = { false}
        />
        </div>

    {/* Section Projets */ }
    <section id="projets" className = "max-w-6xl mx-auto px-6 py-20" >
        <h2 className="text-3xl font-bold mb-10 tracking-tight text-white" >
            Projets récents
                </h2>

                < div className = "grid grid-cols-1 md:grid-cols-2 gap-8" >
                {/* Carte Projet 1 */ }
                    < div className = "rounded-2xl border border-white/10 bg-neutral-900/50 p-6 hover:border-white/20 transition" >
                        <h3 className="text-xl font-semibold mb-2" > Systèmes embarqués & IoT </h3>
                            < p className = "text-neutral-400 text-sm mb-4" >
                                Conception matérielle, routage de cartes électroniques et programmation bas niveau de microcontrôleurs.
            </p>
                                    < div className = "flex gap-2 text-xs text-neutral-300" >
                                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10" > C / C++ </span>
                                            < span className = "px-2.5 py-1 rounded-md bg-white/5 border border-white/10" > Hardware </span>
                                                </div>
                                                </div>

    {/* Carte Projet 2 */ }
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 hover:border-white/20 transition" >
        <h3 className="text-xl font-semibold mb-2" > Automatisation & Protocoles </h3>
            < p className = "text-neutral-400 text-sm mb-4" >
                Mise en place de réseaux de communication, intégration domotique et développement de passerelles applicatives.
            </p>
                    < div className = "flex gap-2 text-xs text-neutral-300" >
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10" > Next.js </span>
                            < span className = "px-2.5 py-1 rounded-md bg-white/5 border border-white/10" > Réseaux </span>
                                </div>
                                </div>
                                </div>
                                </section>
                                </div>
  );
}