import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className= "w-full bg-[#111318] text-neutral-300 pt-20 pb-36 px-6 border-t border-neutral-800" >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12" >
        {/* Marque / Signature */ }
            < div className = "md:col-span-5 space-y-4" >
                <div className="flex items-center gap-3" >
                    <span className="font-bold text-2xl tracking-tighter text-white font-mono uppercase" >
                        Clément PILI
                        </span>
                        </div>
                        < p className = "text-sm text-neutral-400 max-w-sm leading-relaxed" >
                            Ingénierie en systèmes embarqués, électronique et interfaces web modernes.
          </p>
                                < div className = "pt-2" >
                                    <a
              href="mailto:Clement.pili@etu.univ-smb.fr"
    className = "font-mono text-sm tracking-wide text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-blue-500 transition-all"
        >
        Clement.pili@etu.univ-smb.fr
            </a>
            </div>
            </div>

    {/* Colonnes de liens */ }
    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono tracking-wider uppercase" >
        <div>
        <span className="text-neutral-500 block mb-4" >— Navigation </span>
            < ul className = "space-y-3" >
                <li>
                <Link href="/" className = "hover:text-white transition" > Accueil </Link>
                    </li>
                    < li >
                    <Link href="#projets" className = "hover:text-white transition" > Projets </Link>
                        </li>
                        < li >
                        <Link href="/contact" className = "hover:text-white transition" > Contact </Link>
                            </li>
                            </ul>
                            </div>

                            < div >
                            <span className="text-neutral-500 block mb-4" >— Réalisations </span>
                                < ul className = "space-y-3" >
                                    <li>
                                    <Link href="/projets/gant-magique" className = "hover:text-white transition" > Gant Magique </Link>
                                        </li>
                                        < li >
                                        <Link href="/projets/matrice-led" className = "hover:text-white transition" > Matrice LED </Link>
                                            </li>
                                            < li >
                                            <Link href="/projets/cellule-festo" className = "hover:text-white transition" > Cellule Festo </Link>
                                                </li>
                                                </ul>
                                                </div>

                                                < div >
                                                <span className="text-neutral-500 block mb-4" >— Réseaux </span>
                                                    < ul className = "space-y-3" >
                                                        <li>
                                                        <a href="https://github.com/c-pili" target = "_blank" rel = "noopener noreferrer" className = "hover:text-white transition" > GitHub </a>
                                                            </li>
                                                            < li >
                                                            <a href="www.linkedin.com/in/clément-pili" target = "_blank" rel = "noopener noreferrer" className = "hover:text-white transition" > LinkedIn </a>
                                                                </li>
                                                                </ul>
                                                                </div>
                                                                </div>
                                                                </div>

                                                                < div className = "max-w-6xl mx-auto mt-16 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 font-mono" >
                                                                    <p>© { new Date().getFullYear() } Clément PILI — Tous droits réservés.</p>
                                                                        < p className = "text-neutral-400" > Conçu avec Next.js & Tailwind CSS </p>
                                                                            </div>
                                                                            </footer>
  );
}