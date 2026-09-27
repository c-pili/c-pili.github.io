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
            year: "2025 - Présent",
            degree: "BUT Génie Électrique et Informatique Industrielle (GEII)",
            specialty: "Spécialité Électronique des Systèmes Embarqués (ESE)",
            school: "Université Savoie Mont Blanc",
            desc: "Formation approfondie en conception de cartes électroniques, programmation bas niveau, automatisme et traitement du signal.",
        },
        {
            year: "2023 - 2025",
            degree: "Baccalauréat Professionnel",
            specialty: "Métiers de l'Electricité et de ses Environnements Connectés(MELEC)",
            school: "Lycée CECAM",
            desc: "Bases Professionnel en electricite et en energie",
        },
        {
            year: "2021 - 2023",
            degree: "Certificat d'Aptitudes Professionnel(CAP)",
            specialty: "Remontées Mecaniques et Transports par Cables(TCRM)",
            school: "Lycée des Métiers de la Montagne",
            desc: "Bases solides en mécanique, en CAO, en energie et depannage",
        },
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
            desc: "Animation et encadrement de jeunes. Organisation avec",
            icon: "⛺",
        },
        {
            title: "Nautisme & Voile",
            role: "Passion & Co-navigation",
            desc: "Grand intérêt pour la course au large (IMOCA, Vendée Globe, SailGP) et pratique régulière de la co-navigation.",
            icon: "⛵",
        },
    ];

    // CORRECTION ICI : Utilisation de 'any' pour forcer TypeScript à valider l'animation
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
    (e.target as HTMLElement).setAttribute("src", "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000&auto=format&fit=crop");
}}
alt = "Clément au travail"
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    </div>
    </motion.div>

    </div>
    </section>

{/* 3. Section Parcours Scolaire */ }
<motion.section
        initial={ { opacity: 0, y: 30 } }
whileInView = {{ opacity: 1, y: 0 }}
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
                        <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-blue-500 shadow-sm" />
                    <div className="text-sm font-mono text-slate-500 mb-2" > { item.year } </div>
                    < h3 className = "text-xl font-bold text-slate-900" > { item.degree } </h3>
                    < h4 className = "text-base font-medium text-blue-600 mb-3" >
                    { item.specialty } — { item.school }
                    </h4>
                    < p className = "text-slate-600 max-w-2xl leading-relaxed" > { item.desc } </p>
                    </div>
                    ))
                }
                    </div>
                    </motion.section>

{/* 4. Section Activités */ }
<motion.section
        initial={ { opacity: 0, y: 40 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: "-100px" }}
transition = {{ duration: 0.7, ease: "easeOut" }}
className = "bg-white border-t border-slate-200/60 pt-20 pb-12"
    >
    <div className="max-w-5xl mx-auto px-6" >
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
            < h4 className = "text-xs font-mono text-blue-600 mb-3 uppercase tracking-wider mt-1" >
            { act.role }
                </h4>
                < p className = "text-sm text-slate-600 leading-relaxed" > { act.desc } </p>
                    </motion.div>
            ))}
</div>
    </div>
    </motion.section>

{/* 5. SECTION : Photos d'activités */ }
<section className="bg-white pb-20 border-b border-slate-200/60" >
    <div className="max-w-5xl mx-auto px-6" >
        <div className="flex flex-col md:flex-row gap-6" >
            <motion.div 
              initial={ { opacity: 0, scale: 0.9, y: 30 } }
whileInView = {{ opacity: 1, scale: 1, y: 0 }}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.6, ease: "easeOut" }}
className = "flex-1 h-64 md:h-80 rounded-3xl overflow-hidden shadow-md group"
    >
    <img 
                src="/IMG_Activite1.jpg"
onError = {(e) => {
    (e.target as HTMLElement).setAttribute("src", "https://images.unsplash.com/photo-1541847596045-865324d081b3?q=80&w=1000&auto=format&fit=crop");
}}
alt = "Activité 1"
className = "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    </motion.div>

    < motion.div
initial = {{ opacity: 0, scale: 0.9, y: 30 }}
whileInView = {{ opacity: 1, scale: 1, y: 0 }}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
className = "flex-1 h-64 md:h-80 rounded-3xl overflow-hidden shadow-md group"
    >
    <img 
                src="/IMG_Activite2.jpg"
onError = {(e) => {
    (e.target as HTMLElement).setAttribute("src", "https://images.unsplash.com/photo-1534066068225-b778759fb920?q=80&w=1000&auto=format&fit=crop");
}}
alt = "Activité 2"
className = "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    </motion.div>
    </div>
    </div>
    </section>

{/* 6. Section Projets (Animée en cascade / Stagger) */ }
<section id="projets" className = "max-w-6xl mx-auto px-6 py-20" >
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