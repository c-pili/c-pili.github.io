"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconCpu,
    IconCircuitSwitchClosed,
    IconAssembly,
    IconBrandGithub,
    IconMail,
} from "@tabler/icons-react";

export function BottomDock() {
    const links = [
        {
            title: "Accueil",
            icon: (
                <IconHome className= "h-full w-full text-neutral-400 hover:text-white transition-colors" />
      ),
    href: "/",
    },
{
    title: "Gant Magique",
        icon: (
            <IconCpu className= "h-full w-full text-neutral-400 hover:text-white transition-colors" />
      ),
    href: "/projets/gant-magique",
    },
{
    title: "Matrice LED",
        icon: (
            <IconCircuitSwitchClosed className= "h-full w-full text-neutral-400 hover:text-white transition-colors" />
      ),
    href: "/projets/matrice-led",
    },
{
    title: "Cellule Festo",
        icon: (
            <IconAssembly className= "h-full w-full text-neutral-400 hover:text-white transition-colors" />
      ),
    href: "/projets/cellule-festo",
    },
{
    title: "GitHub",
        icon: (
            <IconBrandGithub className= "h-full w-full text-neutral-400 hover:text-white transition-colors" />
      ),
    href: "https://github.com/c-pili",
    },
{
    title: "Contact",
        icon: (
            <IconMail className= "h-full w-full text-neutral-400 hover:text-white transition-colors" />
      ),
    href: "mailto:contact@c-pili.fr",
    },
  ];

return (
    <div className= "fixed bottom-6 inset-x-0 z-50 flex items-center justify-center pointer-events-none" >
    <div className="pointer-events-auto" >
        <FloatingDock items={ links } />
            </div>
            </div>
  );
}