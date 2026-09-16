import { translations } from "../lib/data";

export default function Footer({ lang }: { lang: "en" | "ar" }){
 const t = translations[lang];
 const ids = ["services", "process", "plans", "locations", "experience", "book"];
 return <footer className="px-5 md:px-8 pt-16 pb-8">
  <div className="max-w-7xl mx-auto">
   <div className="flex flex-col md:flex-row justify-between gap-10 pb-14 border-b border-white/10">
    <div><div className="font-display text-xl font-extrabold tracking-[.2em]">AUTOCARE</div><p className="text-xs text-[#854F6C] max-w-xs leading-5 mt-4">{t.footerTagline1}<br/>{t.footerTagline2}</p></div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3 text-xs text-[#DFB6B2]">
      {t.footerNav.map((item,i)=><a key={item} href={`#${ids[i]}`}>{item}</a>)}
    </div>
   </div>
   <div className="flex flex-col sm:flex-row justify-between gap-4 pt-7 text-[9px] tracking-[.15em] text-[#854F6C]"><span>{t.footerCopyright}</span><span>{t.footerLangLabel}</span></div>
  </div>
 </footer>
}
