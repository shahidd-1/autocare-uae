"use client";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { plans, translations } from "../lib/data";

export default function Pricing({ lang }: { lang: "en" | "ar" }) {
 const t = translations[lang];
 return <section id="plans" className="py-28 md:py-36 px-5 md:px-8 bg-[#2B124C]/20">
  <div className="max-w-7xl mx-auto">
   <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">{t.plansLabel}</div><h2 className="font-display text-5xl md:text-8xl tracking-[-.06em] leading-[.85] font-extrabold">{t.plansTitle1}<br/><span className="text-gradient">{t.plansTitle2}</span></h2>
   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
    {plans.map((p,i)=><motion.div key={p.name.en} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className={`relative rounded-[2rem] p-7 md:p-8 border ${p.popular?"bg-[#FBE4D8] text-[#190019] border-[#FBE4D8]":"glass border-white/10"}`}>
      {p.popular&&<div className="absolute top-5 right-5 text-[9px] tracking-[.2em] bg-[#190019] text-[#FBE4D8] rounded-full px-3 py-1.5">{t.mostPopular}</div>}
      <div className="text-[10px] tracking-[.25em] text-[#854F6C]">{p.name[lang].toUpperCase()}</div>
      <div className="font-display text-4xl md:text-5xl font-extrabold mt-7">{p.price}</div><p className={`text-xs mt-2 ${p.popular?"text-[#522B5B]":"text-[#DFB6B2]"}`}>{p.desc[lang]}</p>
      <div className="mt-9 space-y-3">{p.features[lang].map(f=><div key={f} className="flex items-center gap-3 text-xs"><Check size={15}/>{f}</div>)}</div>
      <a href="#book" className={`mt-10 rounded-full w-full py-3.5 flex items-center justify-center gap-2 text-xs font-bold ${p.popular?"bg-[#190019] text-[#FBE4D8]":"bg-[#FBE4D8] text-[#190019]"}`}>{t.choosePlan} <ArrowUpRight size={14}/></a>
    </motion.div>)}
   </div>
  </div>
 </section>
}