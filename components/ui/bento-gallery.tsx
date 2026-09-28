"use client";

import React, { useState } from "react";
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

    return (
        <div className= "w-full" >
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[250px]" >
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
              "relative overflow-hidden rounded-2xl group cursor-pointer bg-slate-100",
        item.className
            )
}
onMouseEnter = {() => setActiveItem(item.id)}
onMouseLeave = {() => setActiveItem(null)}
          >
{/* L'image de fond */ }
    < motion.img
src = { item.src }
alt = { item.title }
className = "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
className = "absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full"
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
    </div>
  );
}