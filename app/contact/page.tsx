"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // REMPLACEZ 'xbjnvkzo' PAR VOTRE CODE FOURNI PAR FORMSPREE.IO
      const response = await fetch("https://formspree.io/f/xbjnvkzo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#FBFBFD] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition mb-8"
        >
          &larr; Retour à l&apos;accueil
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Colonne infos */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Contact
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">
              Parlons de votre projet.
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Une opportunité, une question sur un projet ou une collaboration technique ? Envoyez-moi un message via ce formulaire, je le reçois directement par e-mail.
            </p>

            <div className="pt-4 space-y-4 text-sm">
              <div>
                <span className="block text-xs font-mono uppercase text-slate-400">Email direct</span>
                <a
                  href="mailto:contact@c-pili.fr"
                  className="font-medium text-slate-900 hover:text-blue-600 transition"
                >
                  contact@c-pili.fr
                </a>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase text-slate-400">Localisation</span>
                <span className="font-medium text-slate-800">France</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12 space-y-3">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h2 className="text-lg font-bold text-slate-900">Message envoyé !</h2>
                <p className="text-sm text-slate-600">
                  Votre message m&apos;a bien été transmis par e-mail. Je vous répondrai au plus vite.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs font-mono text-blue-600 hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-600 uppercase mb-2">
                    Votre nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-600 uppercase mb-2">
                    Votre adresse email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="jean@exemple.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-600 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Détaillez votre projet ou posez votre question..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 font-mono">
                    Une erreur est survenue lors de l&apos;envoi. Vous pouvez m&apos;écrire directement à contact@c-pili.fr.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium text-sm transition active:scale-[0.98] shadow-sm"
                >
                  {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}