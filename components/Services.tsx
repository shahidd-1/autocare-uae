"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, translations } from "../lib/data";

export default function Services({lang}:{lang:"en"|"ar"}) {
  const t=translations[lang];
  return <section id="services" className="relative py-28 md:py-36 px-5 md:px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7}}>
        <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">{t.servicesLabel}</div>
        <h2 className="font-display text-5xl md:text-8xl tracking-[-.06em] leading-[.86] font-extrabold">{t.servicesTitle}<br/><span className="text-gradient">{t.servicesTitle2}</span></h2>
        <p className="max-w-xl text-sm md:text-base text-[#DFB6B2] leading-7 mt-7">{t.servicesCopy}</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4 mt-16">
        {services.map((s,i)=><motion.a href="#book" key={s.n} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{delay:(i%2)*.08,duration:.65}} className="group relative min-h-[340px] md:min-h-[430px] rounded-[2rem] overflow-hidden glass">
          <img src={s.image} alt={s[lang].title} className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-1000"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#190019] via-[#190019]/25 to-transparent"/>
          <div className="absolute inset-0 bg-[#2B124C]/10 group-hover:bg-[#522B5B]/20 transition"/>
          <div className="absolute top-5 left-5 glass rounded-full px-3 py-1.5 text-[10px]">{s.n}</div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">{s[lang].title}</h3>
              <p className="text-xs text-[#DFB6B2] mt-2 max-w-sm">{s[lang].desc}</p>
            </div>
            <div className="shrink-0 rounded-full bg-[#FBE4D8] text-[#190019] p-3 group-hover:rotate-45 transition-transform"><ArrowUpRight size={18}/></div>
          </div>
        </motion.a>)}
      </div>
    </div>
  </section>
}
