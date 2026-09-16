"use client";

import { motion } from "framer-motion";

export default function LanguageToggle({ lang, setLang }: { lang: "en" | "ar"; setLang: (v: "en" | "ar") => void }) {
  return (
    <div className="glass rounded-full p-1 flex items-center gap-1 text-xs">
      <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-[#FBE4D8] text-[#190019]" : "text-[#DFB6B2]"}`}>EN</button>
      <button onClick={() => setLang("ar")} className={`rounded-full px-3 py-1.5 transition ${lang === "ar" ? "bg-[#FBE4D8] text-[#190019]" : "text-[#DFB6B2]"}`}>AR</button>
    </div>
  );
}