"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const words = ["PRECISION DETAILING", "PREMIUM CARE", "DOORSTEP SERVICE", "DUBAI", "ABU DHABI"];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#2B124C]/25">
      <motion.div animate={{x:["0%","-50%"]}} transition={{duration:22,repeat:Infinity,ease:"linear"}} className="flex whitespace-nowrap w-max">
        {[...words,...words,...words].map((w,i)=><div key={i} className="flex items-center gap-8 px-5 py-5 text-[10px] tracking-[.3em] text-[#DFB6B2]"><span>{w}</span><span className="text-[#854F6C]">✦</span></div>)}
      </motion.div>
    </div>
  );
}