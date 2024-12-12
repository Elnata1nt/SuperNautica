"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="min-h-screen py-12 mx-auto container flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* <iframe // tirar depois pois serve como bg 
        className="absolute top-0 opacity-40 left-0 w-full h-full"
        src="https://www.youtube.com/embed/Tu6A74hW0dA?autoplay=1&mute=1&loop=1&playlist=Tu6A74hW0dA"
        title="Video Background"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
       */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-background dark:text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Visite nosso catálogo{" "}
          <span className="relative whitespace-nowrap text-orange-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-orange-500/20"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">personalizado</span>
          </span>{" "}
          e conheça nossos produtos
        </h1>
      </motion.div>
      <motion.p
        className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-background dark:text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Super Náutica é uma empresa dedicada à venda de barcos e equipamentos
        náuticos, oferecendo produtos de alta qualidade para atender às demandas
        de lazer e uso profissional no setor.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button
          asChild
          size="lg"
          className="text-lg bg-orange-500 hover:bg-orange-600"
        >
          <Link href="/catalago">Conheça nosso catalago</Link>
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="text-lg">
              <svg aria-hidden="true" className="h-4 w-4 mr-2 fill-current">
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              Assistir demonstração
            </Button>
          </DialogTrigger>
          <DialogContent className="w-11/12 lg:w-10/12 xl:w-8/12 h-max max-w-5xl !rounded-lg p-0 border-none">
            <DialogHeader className="p-4 text-lg mb-0 pb-0 h-auto bg-gray-100 dark:bg-gray-800 rounded-t-lg">
              <DialogTitle>Demonstração</DialogTitle>
            </DialogHeader>
            <video
              src="/repleace-system.mov"
              title="Demonstração"
              autoPlay
              controls
              className="w-full aspect-video rounded-b-lg"
            ></video>
          </DialogContent>
        </Dialog>
      </motion.div>
    </header>
  );
}
