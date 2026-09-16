"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { translations } from "../lib/data";

export default function Hero({ lang }: { lang: "en" | "ar" }) {
  const t = translations[lang];
  return (
    <section className="relative min-h-[92vh] md:min-h-screen overflow-hidden flex items-end">
      <div className="absolute inset-0 bg-[#190019]"/>
      <div className="absolute inset-0 hero-glow"/>
      <div className="absolute inset-0 grid-bg"/>
      <motion.div initial={{scale:1.08,opacity:0}} animate={{scale:1,opacity:.72}} transition={{duration:1.8,ease:"easeOut"}} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90" alt="Luxury sports car" className="w-full h-full object-cover object-center mix-blend-screen opacity-55"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#190019] via-[#190019]/65 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#190019] via-transparent to-[#190019]/20"/>
      </motion.div>
      <motion.div animate={{x:[-30,30,-30],y:[0,15,0]}} transition={{duration:10,repeat:Infinity,ease:"easeInOut"}} className="absolute w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-[#522B5B]/35 blur-3xl right-[8%] top-[22%]"/>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20 pt-40">
        <div className="max-w-4xl">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3,duration:.7}} className="flex items-center gap-2 text-[10px] md:text-xs tracking-[.24em] text-[#DFB6B2] mb-6">
            <Sparkles size={13}/> {t.heroEyebrow}
          </motion.div>
          <div className="reveal-mask">
            <motion.h1 initial={{y:"100%"}} animate={{y:0}} transition={{delay:.4,duration:1,ease:[.22,1,.36,1]}} className="font-display text-[15vw] md:text-[9.5rem] leading-[.78] tracking-[-.075em] font-extrabold">
              <span className="block">{t.heroTitle1}</span>
              <span className="block text-gradient">{t.heroTitle2}</span>
            </motion.h1>
          </div>
          <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.8,duration:.7}} className="max-w-xl mt-8 text-sm md:text-base leading-7 text-[#DFB6B2]">
            {t.heroCopy}
          </motion.p>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:1,duration:.7}} className="flex flex-wrap gap-3 mt-8">
            <a href="#book" className="group bg-[#FBE4D8] text-[#190019] rounded-full px-6 py-4 text-xs font-bold flex items-center gap-2 hover:scale-[1.03] transition">
              {t.primary} <ArrowUpRight size={15} className="group-hover:rotate-45 transition"/>
            </a>
            <a href="#services" className="glass rounded-full px-6 py-4 text-xs font-bold flex items-center gap-2 hover:bg-[#522B5B]/50 transition">
              {t.secondary} <ArrowDownRight size={15}/>
            </a>
          </motion.div>
        </div>
        <div className="mt-14 grid grid-cols-3 max-w-2xl border-t border-white/10 pt-5">
          {t.heroStats.map((x,i)=><motion.div key={x} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2+i*.15}} className="text-[9px] md:text-[10px] tracking-[.18em] text-[#854F6C]">{x}</motion.div>)}
        </div>
      </div>
    </section>
  );
}
