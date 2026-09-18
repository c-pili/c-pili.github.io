"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
    const [hovered, setHovered] = useState<number | null>(null);

    const projects = [
        {
            title: "Gant Magique",
            src: "/IMG_GantsMag.jpg",
            href: "/projets/gant-magique",
            tag: "Capteurs & Firmware",
        },
        {
            title: "Matrice LED",
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
            href: "/projets/matrice-led",
            tag: "Affichage adressable & C++",
        },
        {
            title: "Cellule Festo",
            src: "/IMG_CelluleFesto.jpg",
            href: "/projets/cellule-festo",
            tag: "Automatisme & Grafcet",
        },
    ];

    return (
        <main className= "w-full bg-[#0B0B0F] min-h-screen text-white" >
        <Navbar />

    {/* Hero Section */ }
    <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(15, 23, 42)"
    gradientBackgroundEnd = "rgb(2, 6, 23)"
    firstColor = "59, 130, 246"
    secondColor = "147, 51, 234"
    thirdColor = "37, 99, 235"
    fourthColor = "79, 70, 229"
    fifthColor = "124, 58, 237"
    pointerColor = "147, 51, 234"
    containerClassName = "h-screen w-full"
        >
        <div className="absolute z-40 inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-auto" >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight" >
                Ingénierie, systèmes embarqués & interfaces web
                    </h1>
                    < p className = "mt-6 text-base sm:text-lg text-white/80 max-w-2xl font-light" >
                        Conception matérielle et architectures logicielles modernes.
          </p>
                            < div className = "mt-8 flex gap-4" >
                                <Link
              href="#projets"
    className = "bg-white text-slate-950 font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition text-sm"
        >
        Explorer mes projets
            </Link>
            </div>
            </div>
            </BackgroundGradientAnimation>

    {/* Section Projets avec cartes interactives et focus */ }
    <section id="projets" className = "max-w-6xl mx-auto px-6 py-28" >
        <div className="text-center mb-16" >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white" >
                Projets & Réalisations
                </h2>
                < p className = "text-neutral-400 text-sm mt-3" >
                    Survolez et cliquez sur un projet pour afficher sa documentation détaillée.
          </p>
                        </div>

                        < div className = "grid grid-cols-1 md:grid-cols-3 gap-8" >
                        {
                            projects.map((project, index) => (
                                <Link
              key= { project.title }
              href = { project.href }
              onMouseEnter = {() => setHovered(index)}
    onMouseLeave = {() => setHovered(null)
}
className = {
    cn(
                "relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 h-96 md:h-[420px] transition-all duration-300 ease-out group block",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-60"
              )}
            >
    <img
                src={ project.src }
alt = { project.title }
className = "object-cover absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
    />
    <div
                className={
    cn(
        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-85"
    )
}
              >
    <span className="text-xs font-mono text-blue-400 mb-1" > { project.tag } </span>
        < div className = "flex items-center justify-between" >
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors" >
            { project.title }
                </h3>
                < span className = "text-xs font-mono text-white/70 group-hover:translate-x-1.5 transition-transform" >
                    Ouvrir & rarr;
</span>
    </div>
    </div>
    </Link>
          ))}
</div>
    </section>
    </main>
  );
}