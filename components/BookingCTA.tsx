"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function BookingCTA(){
 return <section id="book" className="px-5 md:px-8 py-10 md:py-16">
  <motion.div initial={{opacity:0,scale:.97}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden relative bg-[#FBE4D8] text-[#190019] min-h-[500px] flex items-end">
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(133,79,108,.4),transparent_38%)]"/>
   <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#DFB6B2] blur-3xl opacity-60"/>
   <div className="relative z-10 p-8 md:p-14 max-w-4xl">
    <div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">09 / READY WHEN YOU ARE</div>
    <h2 className="font-display text-6xl md:text-[8rem] tracking-[-.07em] leading-[.78] font-extrabold">YOUR CAR<br/><span className="text-[#854F6C]">DESERVES MORE.</span></h2>
    <p className="mt-8 max-w-lg text-sm leading-6 text-[#522B5B]">Experience premium car care, wherever you are.</p>
    <div className="flex flex-wrap gap-3 mt-7"><button className="rounded-full bg-[#190019] text-[#FBE4D8] px-6 py-4 text-xs font-bold flex gap-2 items-center">BOOK YOUR SERVICE <ArrowUpRight size={15}/></button><button className="rounded-full border border-[#854F6C]/30 px-6 py-4 text-xs font-bold flex gap-2 items-center"><MessageCircle size={15}/> WHATSAPP US</button></div>
   </div>
  </motion.div>
 </section>
}