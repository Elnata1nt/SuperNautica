import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Super Náutica",
  description:
    "Descubra nossa seleção premium de produtos náuticos. Qualidade e confiabilidade para suas aventuras no mar.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
}

