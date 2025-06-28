import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";

export function Hero() {
  return (
    <section className="relative text-white flex items-center justify-center text-center min-h-[400px] md:min-h-[500px] py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Violão de madeira com iluminação suave ao fundo"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-25"
          priority
          data-ai-hint="guitar background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide leading-tight">
            Mude sua forma de tocar com<br />
            <span className="text-primary">as batidas que transformam!</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Descubra como dominar as 26 batidas mais tocadas de forma simples e prática.
          </p>

          <CountdownTimer />

          <div className="mt-10 w-full max-w-xs md:max-w-sm">
            <Image
              src="https://i.imgur.com/FLcLQWF.png"
              alt="Mockup do eBook 'As 26 Batidas Mais Poderosas'"
              width={500}
              height={500}
              priority
              className="rounded-lg shadow-2xl shadow-primary/20"
              data-ai-hint="ebook cover 3d"
            />
          </div>
          
          <div className="mt-8 flex flex-col items-center space-y-4 w-full max-w-xs">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border w-full">
                <p className="text-lg text-muted-foreground">DE <span className="line-through">R$67,00</span> POR APENAS</p>
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-accent">R$16,90</span>
                </div>
            </div>
            
            <a href="#plans" className="w-full">
              <Button size="lg" className="bg-[#00C853] hover:bg-[#00B148] text-black font-bold text-xl h-auto py-4 w-full transform hover:scale-105 transition-transform duration-300 shadow-lg">
                QUERO APRENDER AGORA!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
