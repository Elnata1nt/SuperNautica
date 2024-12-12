"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  X,
  ChevronRight,
  TentTree,
  Fish,
  Ship,
  Award,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  const navigationPoints = [
    {
      title: "Motor",
      description:
        "Você encontra os melhores motores náuticos e equipamentos de pesca para tornar suas aventuras aquáticas inesquecíveis! Trabalhamos com marcas líderes do mercado, oferecendo motores potentes, econômicos e de alta durabilidade, ideais para lanchas, barcos de pesca e outras embarcações.",
      icon: Ship,
    },
    {
      title: "Pesca",
      description:
        "Oferecemos uma linha completa de materiais de pesca para atender pescadores amadores e profissionais. Aqui você encontra tudo o que precisa para tornar suas pescarias mais eficientes e prazerosas: varas de alta performance, carretilhas, molinetes, iscas artificiais, linhas, anzóis e uma grande variedade de acessórios de qualidade.",
      icon: Fish,
    },
    {
      title: "Camping",
      description:
        "você encontra tudo o que precisa para suas aventuras ao ar livre! Nossa linha de equipamentos de camping é pensada para oferecer conforto, praticidade e segurança em qualquer ambiente. Temos barracas resistentes, sacos de dormir aconchegantes, mochilas espaçosas, lanternas, fogareiros, utensílios de cozinha e muitos outros itens essenciais para tornar sua experiência única.",
      icon: TentTree,
    },
  ];

  return (
    <div className="min-h-screen mt-16 bg-zinc-90 text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/barcoimage.jpeg?height=1080&width=1920')] opacity-10 bg-no-repeat bg-cover" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Side - Title and Navigation Points */}
        <div className="relative mt-20">
          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3 mb-8"
          >
            <Button
              variant="secondary"
              className="rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
            >
              <Award className="w-4 h-4 mr-2" />
              Bem vindo Aventureiro
            </Button>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-extrabold text-start leading-tight mb-12"
          >
            <span className="text-orange-500 text-9xl block">
              Super Náutica
            </span>
            <span className="text-card text-4xl mt-4 block">
              Sua Experiência Completa em Aventura e Qualidade
            </span>
          </motion.h1>

          {/* Navigation Points */}
          <div className="space-y-12">
            {navigationPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
                onMouseEnter={() => setSelectedPoint(point.title)}
                onMouseLeave={() => setSelectedPoint(null)}
              >
                <div className="absolute -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <point.icon className="w-4 h-4 text-zinc-900" />
                </div>
                <div className="ml-12">
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  {selectedPoint === point.title && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-sm text-zinc-400 mt-2"
                    >
                      {point.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className="space-y-6 mt-20">
          {/* GPS Accuracy Card */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white text-zinc-900">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Produtos seguros</CardTitle>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Com as melhores qualidades  
                  </p>
                  <p className="text-xl font-bold text-green-600">±2.1m</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                Explore a natureza com tranquilidade e aproveite cada momento.
                </p>
                <div className="w-full h-2 bg-zinc-100 rounded-full mt-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* Map Coverage Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-white text-zinc-900">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Conheça nossas Embarcações</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Barcos de aluminho
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/barcoimage.jpeg?height=400&width=600"
                    alt="World map coverage"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-sm mt-4">
                  Com variedades de modelos com as melhores qualidades e
                  descontos
                </p>
                <Button variant="link" className="mt-2 p-0">
                  <ChevronRight className="w-4 h-4 ml-1" />
                  <Link href="/catalago[id]">Conheça nosso catalago</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Real Time Navigation Data Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-accent/40 text-orange-500">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Avisos</CardTitle>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Localização</p>
                  <p className="font-mono">AV.Lourenço da silva braga</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm">Atendimento das 7h30 às 16h30</p>
                  <p className="font-mono">698,box 6,centro</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Link
                    href="https://maps.app.goo.gl/hzua9BJjHNqfgGwu5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nossa Localização
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
