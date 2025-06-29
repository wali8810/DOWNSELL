"use client"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">Veja o que dizem nossos leitores</h2>
          <p className="text-muted-foreground mt-2">Resultados reais de quem já está transformando o som do violão.</p>
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-card rounded-xl border border-border shadow-lg transform transition-transform hover:scale-105 overflow-hidden">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={400}
                        height={400}
                        className="aspect-square w-full object-cover"
                        data-ai-hint="user testimonial social"
                      />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
