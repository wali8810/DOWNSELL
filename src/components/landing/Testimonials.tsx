"use client"

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    src: "https://i.imgur.com/RSo4tUO.jpeg",
    alt: "Depoimento de aluno satisfeito 1"
  },
  {
    src: "https://i.imgur.com/LVgGjrz.jpeg",
    alt: "Depoimento de aluno satisfeito 2"
  },
  {
    src: "https://i.imgur.com/e1L0Ua7.jpeg",
    alt: "Depoimento de aluno satisfeito 3"
  }
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-slate-800">Veja o que dizem nossos leitores</h2>
          <p className="text-slate-600 mt-2">Resultados reais de quem já está transformando o som do violão.</p>
        </div>
        <Carousel 
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg bg-white border border-slate-200 shadow-sm transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={400}
                        height={400}
                        className="aspect-square w-full object-cover"
                        data-ai-hint="user testimonial social"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-white text-slate-800 hover:bg-slate-200 border-slate-300" />
          <CarouselNext className="hidden sm:flex bg-white text-slate-800 hover:bg-slate-200 border-slate-300" />
        </Carousel>
      </div>
    </section>
  );
}
