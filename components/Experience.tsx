"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Gauge, MapPin, Sparkles } from "lucide-react";
import { translations } from "../lib/data";

const icons = [Gauge, MapPin, ShieldCheck, Sparkles];

export default function Experience({ lang }: { lang: "en" | "ar" }) {
  const t = translations[lang];
  return <section id="experience" className="relative py-28 md:py-36 px-5 md:px-8 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#2B124C]/25 via-[#190019] to-[#190019]"/>
    <div className="max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{opacity:0,x:-35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.8}}>
          <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">{t.experienceLabel}</div>
          <h2 className="font-display text-5xl md:text-8xl tracking-[-.065em] leading-[.84] font-extrabold">{t.experienceTitle1}<br/><span className="text-gradient">{t.experienceTitle2}</span></h2>
          <p className="mt-8 max-w-lg text-sm md:text-base leading-7 text-[#DFB6B2]">{t.experienceCopy}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.experienceItems.map((item,i)=>{
            const Icon = icons[i];
            return (
            <motion.div key={item.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className="glass rounded-3xl p-5 md:p-7 min-h-[190px] flex flex-col justify-between group hover:bg-[#522B5B]/35 transition">
              <Icon size={20} className="text-[#DFB6B2] group-hover:rotate-12 transition"/>
              <div><div className="text-[10px] tracking-[.2em] text-[#854F6C]">{item.title}</div><p className="text-xs md:text-sm text-[#DFB6B2] mt-2 leading-5">{item.desc}</p></div>
            </motion.div>
          )})}
        </div>
      </div>
    </div>
  </section>
}