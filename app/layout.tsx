import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { BottomDock } from "@/components/BottomDock";
import { PageLoader } from "@/components/PageLoader";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Les balises SEO pour Google
export const metadata: Metadata = {
    title: "Clément PILI | Electronique et Systèmes Embarqués",
    description: "Portfolio de Clément PILI. Étudiant en Génie Électrique et Informatique Industrielle (GEII). Découvrez mes projets en systèmes embarqués, électronique",
    keywords: ["Clément PILI", "Pili Clément", "Portfolio", "Ingénieur", "Systèmes Embarqués", "Électronique", "Développeur", "GEII", "PILI", "IUT Annecy"],
    authors: [{ name: "Clément PILI" }],
    creator: "Clément PILI",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://c-pili.github.io",
        title: "Clément PILI | Portfolio",
        description: "Ingenierie en Electronique et Systeme Embarquée",
        siteName: "Clément PILI Portfolio",
    },
    verification: {
        google: "CcibHALtcBpTLM5VpbHHn4KyQexIEnQzrxJ7ujuk-pQ",
    },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Clément PILI",
            "alternateName": "Pili Clément",
            "url": "https://c-pili.github.io",
            "jobTitle": "Étudiant en Ingénierie / Développeur",
            "sameAs": [
                "https://www.linkedin.com/in/clément-pili",
                "https://github.com/c-pili"
            ]
        }),
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang= "fr" className = {`${font.className} scroll-smooth`
}>
      <body className="antialiased bg-[#FBFBFD] text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative">
        {/* Le loader gère lui-même son "use client" */}
        <PageLoader />
        
        {children}

        {/* Le dock flottant s'affiche sur chaque page */}
        <BottomDock />
      </body>
    </html>
  );
}