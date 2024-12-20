"use client";

import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Chat from "@/components/landpage/chat";

import FeaturesSection from "@/components/landpage/Features-section";
// import Footer from "@/components/landpage/footer";
// import Header from "@/components/landpage/header";
import Hero from "@/components/landpage/hero";
import HeroSection from "@/components/landpage/herosection";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col bg-foreground min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <Hero />
          <FeaturesSection />
          <Chat />
        </main>
        <Footer />
      </div>
    </>
  );
}
