"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Experience from "../components/Experience";
import CarShowcase from "../components/CarShowcase";
import HowItWorks from "../components/HowItWorks";
import BeforeAfter from "../components/BeforeAfter";
import Pricing from "../components/Pricing";
import AppPreview from "../components/AppPreview";
import Locations from "../components/Locations";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="relative min-h-screen bg-[#190019]">
      <div className="fixed inset-0 noise z-[60]"/>
      <Navbar lang={lang} setLang={setLang}/>
      <Hero lang={lang}/>
      <Marquee/>
      <Services lang={lang}/>
      <Experience/>
      <CarShowcase/>
      <HowItWorks/>
      <BeforeAfter/>
      <Pricing/>
      <AppPreview/>
      <Locations/>
      <BookingCTA/>
      <Footer/>
    </main>
  );
}