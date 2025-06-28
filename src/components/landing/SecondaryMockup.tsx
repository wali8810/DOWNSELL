import Image from "next/image";
import { Smartphone, Tablet, Monitor } from "lucide-react";

export function SecondaryMockup() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl">
        <div className="md:w-1/3 flex-shrink-0">
          <Image 
            src="https://i.imgur.com/ZZK7Oy6.png"
            alt="Capa do eBook em um tablet"
            width={400}
            height={400}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="ebook mockup"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-wide">Direto ao Ponto, Sem Enrolação.</h2>
            <p className="text-lg text-muted-foreground mb-6">
                Este não é mais um curso longo. É um guia <span className="text-white font-semibold">prático em PDF</span> com as 26 batidas essenciais para você destravar no violão. Simples, visual e direto ao que funciona.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-6">
                <div className="flex items-center gap-2 text-foreground">
                    <Smartphone className="h-6 w-6" />
                    <span>Celular</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                    <Tablet className="h-6 w-6" />
                    <span>Tablet</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                    <Monitor className="h-6 w-6" />
                    <span>Computador</span>
                </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
                Acesse de onde estiver e estude no seu ritmo.
            </p>
        </div>
      </div>
    </section>
  );
}
