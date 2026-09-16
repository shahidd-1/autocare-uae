"use client";
import { useRef, useState } from "react";
import { translations } from "../lib/data";

export default function BeforeAfter({ lang }: { lang: "en" | "ar" }) {
 const t = translations[lang];
 const [pos,setPos]=useState(50);
 const ref=useRef<HTMLDivElement>(null);
 const move=(clientX:number)=>{if(!ref.current)return;const r=ref.current.getBoundingClientRect();setPos(Math.max(4,Math.min(96,((clientX-r.left)/r.width)*100)))};
 return <section className="py-20 md:py-28 px-5 md:px-8">
  <div className="max-w-7xl mx-auto">
   <div className="flex items-end justify-between mb-8"><div><div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-4">{t.differenceLabel}</div><h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-.05em]">{t.differenceTitle1} <span className="text-gradient">{t.differenceTitle2}</span></h2></div><div className="hidden md:block text-xs text-[#854F6C]">{t.dragToCompare}</div></div>
   <div ref={ref} onMouseMove={e=>e.buttons===1&&move(e.clientX)} onTouchMove={e=>move(e.touches[0].clientX)} className="relative h-[420px] md:h-[620px] rounded-[2rem] overflow-hidden select-none cursor-ew-resize glass">
    <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1800&q=85" className="absolute inset-0 w-full h-full object-cover" alt="Car detailing result"/>
    <div className="absolute inset-y-0 left-0 overflow-hidden" style={{width:`${pos}%`}}><img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1800&q=85" className="h-full w-[100vw] max-w-none object-cover object-center" alt="Car before detailing"/></div>
    <div className="absolute top-5 left-5 glass rounded-full px-4 py-2 text-[10px] tracking-[.2em]">{t.before}</div><div className="absolute top-5 right-5 glass rounded-full px-4 py-2 text-[10px] tracking-[.2em]">{t.after}</div>
    <div className="absolute top-0 bottom-0 w-px bg-[#FBE4D8]" style={{left:`${pos}%`}}><div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FBE4D8] text-[#190019] flex items-center justify-center text-xs">↔</div></div>
   </div>
  </div>
 </section>
}
