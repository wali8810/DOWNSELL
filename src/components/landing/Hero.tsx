import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";

export function Hero() {
  return (
    <section className="relative text-white flex items-center justify-center text-center min-h-[450px] md:min-h-[600px] py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://i.imgur.com/okdxZ1l.png"
          alt="Violão de madeira com iluminação suave ao fundo"
          layout="fill"
          objectFit="cover"
          className="z-0 animate-zoom-in-out"
          priority
          data-ai-hint="guitar concert stage"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide leading-tight">
            Mude sua forma de tocar com<br />
            <span className="text-white/80 font-semibold">as batidas que transformam!</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Descubra como dominar as 26 batidas mais tocadas de forma simples e prática.
          </p>

          <div className="mt-10 w-full max-w-xs md:max-w-sm">
            <Image
              src="https://i.imgur.com/FLcLQWF.png"
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
                <p className="text-lg text-muted-foreground">DE <span className="line-through">R$67,00</span> POR APENAS</p>
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">R$16,90</span>
                </div>
            </div>
            
            <CountdownTimer />

            <a href="#plans" className="w-full">
              <Button size="lg" className="bg-[#00C853] hover:bg-[#00B148] text-black font-bold text-xl h-auto py-4 w-full transform hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse-green">
                QUERO APRENDER AGORA!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
