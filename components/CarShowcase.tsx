"use client";
import { motion } from "framer-motion";
import { translations } from "../lib/data";

const positions = [["18%","28%"],["70%","48%"],["15%","67%"],["70%","76%"]];

export default function CarShowcase({ lang }: { lang: "en" | "ar" }) {
  const t = translations[lang];
  return <section className="relative py-20 md:py-32 px-5 md:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">{t.showcaseLabel}</div>
      <div className="relative min-h-[600px] md:min-h-[720px] rounded-[2.5rem] overflow-hidden glass">
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2200&q=90" alt="Premium sports car" className="absolute inset-0 w-full h-full object-cover object-center opacity-75"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#190019]/20 via-transparent to-[#190019]"/>
        <motion.div animate={{x:["-20%","120%"]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut",repeatDelay:2}} className="absolute top-0 bottom-0 w-24 bg-[#FBE4D8]/10 blur-2xl -skew-x-12"/>
        {t.showcaseTags.map((name,i)=><motion.div key={name} initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.15}} className="absolute glass rounded-full px-3 py-2 text-[9px] tracking-[.16em] hidden md:flex items-center gap-2" style={{left:positions[i][0],top:positions[i][1]}}><span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2] shadow-[0_0_15px_#DFB6B2]"/>{name}</motion.div>)}
        <div className="absolute left-6 right-6 bottom-6 md:left-10 md:right-10 md:bottom-10 flex items-end justify-between">
          <div><p className="text-[10px] tracking-[.3em] text-[#DFB6B2]">{t.showcaseSub}</p><h3 className="font-display text-3xl md:text-5xl font-bold tracking-[-.04em] mt-2">{t.showcaseTitle}</h3></div>
          <div className="hidden sm:flex w-16 h-16 rounded-full border border-white/20 items-center justify-center text-xs">{t.scroll}</div>
        </div>
      </div>
    </div>
  </section>
}
