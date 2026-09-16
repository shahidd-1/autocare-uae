"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { translations } from "../lib/data";

export default function Locations({ lang }: { lang: "en" | "ar" }){
 const t = translations[lang];
 return <section id="locations" className="py-28 md:py-36 px-5 md:px-8">
  <div className="max-w-7xl mx-auto">
   <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">{t.locationsLabel}</div><h2 className="font-display text-5xl md:text-8xl tracking-[-.06em] leading-[.85] font-extrabold">{t.locationsTitle1}<br/><span className="text-gradient">{t.locationsTitle2}</span></h2>
   <div className="grid md:grid-cols-2 gap-4 mt-16">
    {t.locations.map((loc,i)=><motion.div key={loc.city} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.15}} className="glass rounded-[2rem] p-7 md:p-10 min-h-[280px] group">
      <div className="flex justify-between"><MapPin className="text-[#DFB6B2]" size={22}/><span className="text-[9px] tracking-[.2em] text-[#854F6C]">UAE · 0{i+1}</span></div>
      <h3 className="font-display text-4xl md:text-5xl font-extrabold mt-20">{loc.city}</h3><p className="text-xs text-[#DFB6B2] mt-3 leading-6">{loc.areas}</p>
    </motion.div>)}
   </div>
  </div>
 </section>
}
