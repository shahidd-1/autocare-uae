"use client";
import { motion } from "framer-motion";

const steps=[
  ["01","CHOOSE YOUR SERVICE","Select the care your vehicle needs."],
  ["02","PICK YOUR LOCATION","Dubai or Abu Dhabi — wherever you are."],
  ["03","WE COME TO YOU","Our team arrives at your chosen location."],
  ["04","ENJOY THE FINISH","Your vehicle gets the AUTOCARE treatment."]
];

export default function HowItWorks(){
 return <section id="process" className="py-28 md:py-36 px-5 md:px-8">
  <div className="max-w-7xl mx-auto">
   <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-16">
    <div><div className="text-[10px] tracking-[.3em] text-[#854F6C] mb-5">04 / PROCESS</div><h2 className="font-display text-5xl md:text-8xl tracking-[-.06em] leading-[.84] font-extrabold">YOUR CAR.<br/><span className="text-gradient">OUR ROUTINE.</span></h2></div>
    <div className="divide-y divide-white/10">
     {steps.map(([n,title,desc],i)=><motion.div key={n} initial={{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.1}} className="py-7 md:py-9 grid grid-cols-[60px_1fr] gap-5 group">
      <div className="text-xs text-[#854F6C]">{n}</div>
      <div><h3 className="font-display text-xl md:text-3xl font-bold group-hover:text-[#DFB6B2] transition">{title}</h3><p className="text-sm text-[#854F6C] mt-2">{desc}</p></div>
     </motion.div>)}
    </div>
   </div>
  </div>
 </section>
}