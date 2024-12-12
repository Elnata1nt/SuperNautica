import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export const metadata: Metadata = {
  title: "Super Náutica",
  description:
    "Descubra nossa seleção premium de produtos náuticos. Qualidade e confiabilidade para suas aventuras no mar.",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div className="auth-layout">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

