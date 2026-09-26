"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import { translations } from "../lib/data";

export default function Navbar({ lang, setLang }: { lang: "en" | "ar"; setLang: (v: "en" | "ar") => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ids = ["services", "experience", "process", "plans", "locations"];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "px-4 pt-3" : "px-5 pt-5"}`}>
      <nav className={`mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl" : ""}`}>
        <a href="#" className="font-display font-extrabold tracking-[.22em] text-sm md:text-base">M2E AVENUE</a>
        <div className="hidden md:flex items-center gap-7 text-xs text-[#DFB6B2]">
          {t.nav.map((item, i) => <a key={item} href={`#${ids[i]}`} className="hover:text-[#FBE4D8] transition">{item}</a>)}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a href="#book" className="bg-[#FBE4D8] text-[#190019] rounded-full px-5 py-2.5 text-xs font-bold flex items-center gap-1.5 hover:bg-white transition">{t.bookNow} <ArrowUpRight size={14}/></a>
        </div>
        <button className="md:hidden glass rounded-full p-2" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={18}/> : <Menu size={18}/>}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="md:hidden mt-2 mx-1 glass-strong rounded-3xl p-5">
            <div className="grid gap-4 text-sm">
              {t.nav.map((item, i) => <a onClick={() => setOpen(false)} key={item} href={`#${ids[i]}`} className="text-[#DFB6B2]">{item}</a>)}
              <div className="flex items-center justify-between pt-2">
                <LanguageToggle lang={lang} setLang={setLang}/>
                <a href="#book" onClick={() => setOpen(false)} className="bg-[#FBE4D8] text-[#190019] rounded-full px-4 py-2 text-xs font-bold">{t.bookNow}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}