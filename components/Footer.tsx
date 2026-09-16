export default function Footer(){
 return <footer className="px-5 md:px-8 pt-16 pb-8">
  <div className="max-w-7xl mx-auto">
   <div className="flex flex-col md:flex-row justify-between gap-10 pb-14 border-b border-white/10">
    <div><div className="font-display text-xl font-extrabold tracking-[.2em]">AUTOCARE</div><p className="text-xs text-[#854F6C] max-w-xs leading-5 mt-4">Premium car care, redefined for the UAE.<br/>Dubai · Abu Dhabi</p></div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3 text-xs text-[#DFB6B2]">
      <a href="#services">Services</a><a href="#process">How It Works</a><a href="#plans">Plans</a><a href="#locations">Locations</a><a href="#experience">About</a><a href="#book">Contact</a>
    </div>
   </div>
   <div className="flex flex-col sm:flex-row justify-between gap-4 pt-7 text-[9px] tracking-[.15em] text-[#854F6C]"><span>© 2026 AUTOCARE. ALL RIGHTS RESERVED.</span><span>ENGLISH · العربية</span></div>
  </div>
 </footer>
}