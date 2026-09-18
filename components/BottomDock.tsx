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
                <IconHome className= "h-full w-full text-neutral-600 hover:text-blue-600 transition-colors" />
      ),
    href: "/",
    },
{
    title: "Gant Magique",
        icon: (
            <IconCpu className= "h-full w-full text-neutral-600 hover:text-blue-600 transition-colors" />
      ),
    href: "/projets/gant-magique",
    },
{
    title: "GitHub",
        icon: (
            <IconBrandGithub className= "h-full w-full text-neutral-600 hover:text-blue-600 transition-colors" />
      ),
    href: "https://github.com/c-pili",
    },
{
    title: "Contact",
        icon: (
            <IconMail className= "h-full w-full text-neutral-600 hover:text-blue-600 transition-colors" />
      ),
    href: "/contact",
    },
  ];

return (
    <div className= "fixed bottom-8 sm:bottom-10 inset-x-0 z-50 flex items-center justify-center pointer-events-none" >
    <div className="pointer-events-auto shadow-lg rounded-full border border-neutral-200 bg-white/85 backdrop-blur-xl p-1" >
        <FloatingDock items={ links } />
            </div>
            </div>
  );
}