"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryItem {
    id: number;
    src: string;
    title: string;
    desc: string;
    className?: string; // Permet de définir la taille dans la grille
}

export function BentoGallery({ items }: { items: GalleryItem[] }) {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    // État pour gérer l'image ouverte en plein écran
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    // Fermer la vue en grand si on appuie sur la touche "Échap"
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Bloquer le défilement de la page quand l'image est ouverte en grand
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedImage]);

    return (
        <div className= "w-full" >
        {/* 1. La grille d'images classique */ }
        < div className = "grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[250px]" >
        {
            items.map((item, index) => (
                <motion.div
            key= { item.id }
            initial = {{ opacity: 0, y: 20 }}
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true, margin: "-50px" }}
transition = {{ duration: 0.5, delay: index * 0.1 }}
className = {
    cn(
              "relative overflow-hidden rounded-2xl group cursor-zoom-in bg-slate-100 shadow-sm hover:shadow-md transition-shadow",
        item.className
            )
}
onMouseEnter = {() => setActiveItem(item.id)}
onMouseLeave = {() => setActiveItem(null)}
onClick = {() => setSelectedImage(item)} // Ouvre l'image au clic
          >
{/* L'image de fond */ }
    < motion.img
src = { item.src }
alt = { item.title }
className = "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />

{/* Dégradé sombre au survol pour la lisibilité du texte */ }
    < div className = "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Contenu textuel qui apparaît au survol */ }
        <AnimatePresence>
{
    activeItem === item.id && (
        <motion.div
                  initial={ { opacity: 0, y: 20 } }
    animate = {{ opacity: 1, y: 0 }
}
exit = {{ opacity: 0, y: 10 }}
transition = {{ duration: 0.3 }}
// pointer-events-none évite que le texte bloque le clic sur l'image
className = "absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full pointer-events-none"
    >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight" >
    { item.title }
        </h3>
        < p className = "text-sm text-slate-200 line-clamp-3 leading-relaxed" >
        { item.desc }
            </p>
            </motion.div>
              )}
</AnimatePresence>
    </motion.div>
        ))}
</div>

{/* 2. La modale (Lightbox) pour voir l'image en plein écran */ }
<AnimatePresence>
    { selectedImage && (
        <motion.div
            initial={ { opacity: 0 } }
animate = {{ opacity: 1 }}
exit = {{ opacity: 0 }}
transition = {{ duration: 0.2 }}
className = "fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 md:p-12"
onClick = {() => setSelectedImage(null)} // Ferme au clic sur le fond noir
          >
{/* Bouton de fermeture (Croix) SANS L'ATTRIBUT aria-label QUI POSAIT PROBLÈME */ }
    < button
onClick = {() => setSelectedImage(null)}
className = "absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[101]"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" strokeWidth = "2" strokeLinecap = "round" strokeLinejoin = "round" >
        <line x1="18" y1 = "6" x2 = "6" y2 = "18" > </line>
            < line x1 = "6" y1 = "6" x2 = "18" y2 = "18" > </line>
                </svg>
                </button>

{/* Conteneur principal de l'image en grand */ }
<motion.div
              initial={ { scale: 0.95, opacity: 0, y: 20 } }
animate = {{ scale: 1, opacity: 1, y: 0 }}
exit = {{ scale: 0.95, opacity: 0, y: 20 }}
transition = {{ type: "spring", damping: 25, stiffness: 300 }}
className = "relative max-w-6xl w-full max-h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
onClick = {(e) => e.stopPropagation()} // Empêche de fermer si on clique directement sur l'image
            >
{/* Image affichée en entier (object-contain empêche le rognage) */ }
    < div className = "relative flex-1 min-h-0 w-full bg-black/40 flex items-center justify-center p-4" >
        <img
                  src={ selectedImage.src }
alt = { selectedImage.title }
className = "w-full h-full max-h-[70vh] object-contain rounded-lg"
    />
    </div>

{/* Légende en bas de l'image agrandie */ }
<div className="p-6 md:p-8 bg-slate-900 border-t border-slate-800 shrink-0" >
    <h3 className="text-2xl font-bold text-white mb-3" > { selectedImage.title } </h3>
        < p className = "text-slate-300 text-base leading-relaxed" > { selectedImage.desc } </p>
            </div>
            </motion.div>
            </motion.div>
        )}
</AnimatePresence>
    </div>
  );
}