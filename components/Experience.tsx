"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Gauge, MapPin, Sparkles } from "lucide-react";

const items = [
  ["PRECISION", "Careful, surface-by-surface attention.", Gauge],
  ["CONVENIENCE", "Professional service without the detour.", MapPin],
  ["PROTECTION", "Treatments designed around your finish.", ShieldCheck],
  ["EXPERIENCE", "A premium journey from start to finish.", Sparkles]
];

export default function Experience() {
  return <section id="experience" className="relative py-28 md:py-36 px-5 md:px-8 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#2B124C]/25 via-[#190019] to-[#190019]"/>
    <div className="max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{opacity:0,x:-35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.8}}>
          <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">02 / EXPERIENCE</div>
          <h2 className="font-display text-5xl md:text-8xl tracking-[-.065em] leading-[.84] font-extrabold">NOT JUST<br/><span className="text-gradient">A WASH.</span></h2>
          <p className="mt-8 max-w-lg text-sm md:text-base leading-7 text-[#DFB6B2]">AUTOCARE is built around the idea that vehicle care should feel effortless, precise and unmistakably premium.</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          {items.map(([title,desc,Icon],i)=>(
            <motion.div key={title as string} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className="glass rounded-3xl p-5 md:p-7 min-h-[190px] flex flex-col justify-between group hover:bg-[#522B5B]/35 transition">
              <Icon size={20} className="text-[#DFB6B2] group-hover:rotate-12 transition"/>
              <div><div className="text-[10px] tracking-[.2em] text-[#854F6C]">{title as string}</div><p className="text-xs md:text-sm text-[#DFB6B2] mt-2 leading-5">{desc as string}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
}