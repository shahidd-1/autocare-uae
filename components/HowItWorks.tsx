"use client";
import { motion } from "framer-motion";
import { translations } from "../lib/data";

export default function HowItWorks({ lang }: { lang: "en" | "ar" }) {
  const t = translations[lang];
  return <section id="process" className="py-28 md:py-36 px-5 md:px-8">
  <div className="max-w-7xl mx-auto">
   <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-16">
    <div><div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">{t.processLabel}</div><h2 className="font-display text-5xl md:text-8xl tracking-[-.06em] leading-[.84] font-extrabold">{t.processTitle}<br/><span className="text-gradient">{t.processTitle2}</span></h2></div>
    <div className="divide-y divide-white/10">
     {t.steps.map((step,i)=><motion.div key={step.n} initial={{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.1}} className="py-7 md:py-9 grid grid-cols-[60px_1fr] gap-5 group">
      <div className="text-xs text-[#854F6C]">{step.n}</div>
      <div><h3 className="font-display text-xl md:text-3xl font-bold group-hover:text-[#DFB6B2] transition">{step.title}</h3><p className="text-sm text-[#854F6C] mt-2">{step.desc}</p></div>
     </motion.div>)}
    </div>
   </div>
  </div>
 </section>
}
