"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { useState, useEffect } from 'react';
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    if (window.pageYOffset < window.innerHeight) {
       setOffsetY(window.pageYOffset);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroHighlight containerClassName="min-h-[450px] md:min-h-[600px] overflow-hidden">
      <section className="relative text-white flex items-center justify-center text-center w-full h-full pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.imgur.com/okdxZ1l.png"
            alt="Violão de madeira com iluminação suave ao fundo"
            layout="fill"
            objectFit="cover"
            className="z-0 animate-zoom-in-out"
            priority
            data-ai-hint="guitar concert stage"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

        <motion.div 
           initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="relative z-20 container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide leading-tight text-shadow">
              Domine as <Highlight>26 Batidas Mais Poderosas</Highlight> e Revolucione seu Som no Violão em qualquer Estilo
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/80">
              Descubra como dominar as 26 batidas mais tocadas de forma simples e prática.
            </p>

            <div className="mt-10 w-full max-w-xs md:max-w-sm">
              <Image
                src="https://i.imgur.com/40oOK5X.png"
                alt="Mockup do eBook 'As 26 Batidas Mais Poderosas'"
                width={500}
                height={500}
                priority
                className="rounded-lg"
                data-ai-hint="ebook cover 3d"
              />
            </div>
            
            <div className="mt-8 flex flex-col items-center space-y-6 w-full max-w-sm">
              <div className="bg-transparent rounded-lg w-full text-center">
                  <p className="text-lg text-white/80">DE <span className="line-through">R$67,00</span> POR APENAS</p>
                  <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-white">R$19,90</span>
                  </div>
              </div>
              
              <CountdownTimer />

              <a href="#plans" className="w-full">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl h-auto py-4 w-full transform hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-green">
                  QUERO APRENDER AGORA!
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </HeroHighlight>
  );
}
