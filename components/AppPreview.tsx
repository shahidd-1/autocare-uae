"use client";
import { motion } from "framer-motion";

export default function AppPreview(){
 return <section className="py-28 md:py-36 px-5 md:px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto rounded-[2.5rem] glass overflow-hidden relative min-h-[620px]">
   <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#522B5B]/45 blur-3xl"/>
   <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[620px] p-8 md:p-14 gap-12">
    <div><div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">07 / DIGITAL EXPERIENCE</div><h2 className="font-display text-5xl md:text-7xl tracking-[-.06em] leading-[.85] font-extrabold">YOUR CAR CARE.<br/><span className="text-gradient">IN YOUR HANDS.</span></h2><p className="max-w-md text-sm text-[#DFB6B2] leading-7 mt-7">A future-ready app experience for scheduling, service updates and vehicle care management.</p><div className="inline-flex mt-6 glass rounded-full px-4 py-2 text-[9px] tracking-[.2em]">COMING SOON</div></div>
    <motion.div animate={{y:[0,-12,0],rotate:[-1,1,-1]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className="mx-auto w-[270px] md:w-[310px] rounded-[3rem] p-3 bg-[#190019] border border-white/15 shadow-2xl">
      <div className="rounded-[2.4rem] bg-[#FBE4D8] text-[#190019] min-h-[520px] p-6">
       <div className="flex justify-between text-[9px]"><span>09:41</span><span>AUTOCARE</span></div>
       <div className="mt-12"><div className="text-xs opacity-60">GOOD MORNING</div><div className="font-display text-2xl font-extrabold mt-1">Your M4</div></div>
       <div className="mt-8 rounded-3xl bg-[#2B124C] text-[#FBE4D8] p-5"><div className="text-[9px] opacity-60">NEXT SERVICE</div><div className="text-lg font-bold mt-1">Tomorrow · 10:00</div><div className="text-[9px] mt-4 opacity-60">Exterior Detail</div></div>
       <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#DFB6B2]/50 p-4"><div className="text-[9px]">STATUS</div><div className="font-bold text-sm mt-2">Scheduled</div></div><div className="rounded-2xl bg-[#DFB6B2]/50 p-4"><div className="text-[9px]">PLAN</div><div className="font-bold text-sm mt-2">Premium</div></div></div>
       <div className="mt-5 rounded-full bg-[#190019] text-[#FBE4D8] text-center py-3 text-[9px] tracking-[.18em]">MANAGE SERVICE</div>
      </div>
    </motion.div>
   </div>
  </div>
 </section>
}