import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import Image from "next/image";

const bonusData = [
  {
    title: "O Ritmo e Leitura",
    description: "Aprofunde seu conhecimento com exercícios práticos.",
  },
  {
    title: "Transições Suaves",
    description: "Domine a arte de trocar de acordes sem esforço.",
  },
  {
    title: "Cifras com Batidas Marcadas",
    description: "Aplique o que aprendeu em músicas populares.",
  },
  {
    title: "Coordenação Motora",
    description: "Desenvolva a agilidade e a precisão dos seus dedos.",
  },
  {
    title: "Caderno de Treinos",
    description: "Organize seus estudos e acompanhe sua evolução.",
  }
];

export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          
          <div className="flex flex-col bg-card text-foreground rounded-lg shadow-lg w-full lg:w-1/2 p-1 border">
            <div className="bg-muted text-center py-3 rounded-t-md">
              <h3 className="text-2xl font-bold">PLANO BÁSICO:</h3>
            </div>
            <div className="p-6 flex flex-col flex-grow">
               <div className="flex justify-center my-4">
                 <Image
                    src="https://i.imgur.com/40oOK5X.png"
                    alt="Mockup do eBook"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    data-ai-hint="ebook cover"
                />
              </div>
              <p className="text-center font-bold text-lg uppercase">PAGAMENTO ÚNICO</p>
              <p className="text-center text-6xl font-extrabold text-primary my-4">R$10</p>
              
              <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>eBook Principal: <strong>As 26 Batidas Mais Poderosas</strong></span></li>
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span><strong>Acesso vitalício</strong> ao material em PDF</span></li>
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span><strong>Garantia incondicional</strong> de 7 dias</span></li>
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>Leitura em <strong>qualquer dispositivo</strong> (celular, tablet, computador)</span></li>
              </ul>

              <ul className="space-y-2 text-sm">
                <li className="flex items-start text-red-500/70 italic"><X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" /><del>Bônus 01: O Ritmo e Leitura</del></li>
                <li className="flex items-start text-red-500/70 italic"><X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" /><del>Bônus 02: Transições Suaves</del></li>
                <li className="flex items-start text-red-500/70 italic"><X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" /><del>Bônus 03: Cifras com Batidas Marcadas</del></li>
                <li className="flex items-start text-red-500/70 italic"><X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" /><del>Bônus 04: Coordenação Motora</del></li>
                <li className="flex items-start text-red-500/70 italic"><X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" /><del>Bônus 05: Caderno de Treinos</del></li>
              </ul>

              <div className="mt-auto pt-6">
                <Button className="w-full bg-primary/80 hover:bg-primary/70 text-primary-foreground font-bold text-lg h-auto py-3">
                  QUERO ESSA OPÇÃO!
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-card text-foreground rounded-lg shadow-2xl w-full lg:w-1/2 p-1 border-2 border-primary relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 z-10">
                <Star className="h-4 w-4" fill="currentColor" />
                Mais Vendido
            </div>
            <div className="bg-destructive text-white text-center py-3 rounded-t-md">
              <h3 className="text-2xl font-bold">PLANO COMPLETO:</h3>
            </div>
            <p className="text-center font-semibold text-foreground mt-2">(MELHOR NEGÓCIO)</p>
            <div className="p-6 pt-2 flex flex-col flex-grow">
              <div className="flex justify-center my-4">
                 <Image
                    src="https://i.imgur.com/kk1sR2G.png"
                    alt="Mockup do eBook e Bônus"
                    width={300}
                    height={300}
                    className="rounded-lg"
                    data-ai-hint="ebook cover bonuses"
                />
              </div>

              <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span>Receba o <strong>eBook Principal + 5 Bônus Exclusivos</strong> para acelerar seus resultados.</span></li>
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span><strong>Acesso vitalício</strong> a todo o material e <strong>futuras atualizações</strong>.</span></li>
                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" /><span><strong>Garantia total de 7 dias</strong>. Se não gostar, seu dinheiro de volta.</span></li>
              </ul>
              
              <div className="space-y-3 mb-6 text-muted-foreground">
                 {bonusData.map((bonus, index) => (
                    <div key={index}>
                        <h4 className="font-bold text-primary/90">Bônus 0{index + 1}: {bonus.title}</h4>
                        <p className="text-muted-foreground text-sm">{bonus.description}</p>
                    </div>
                ))}
              </div>

              <div className="text-center my-4">
                <p className="text-red-500 line-through">Valor Total: R$67,00</p>
                <p className="uppercase font-bold text-foreground">HOJE PAGAMENTO ÚNICO...</p>
                <p className="text-6xl font-extrabold text-primary">R$27,90</p>
              </div>

              <div className="mt-auto">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl h-auto py-4 transform hover:scale-105 transition-transform">
                  SIM! QUERO ESSA SUPER OFERTA!
                </Button>
                <p className="text-center text-muted-foreground mt-4 text-sm">
                  ATENÇÃO: A Promoção é <strong className="text-blue-600 font-bold">LIMITADA</strong> e <strong className="text-blue-600 font-bold">Acabará em Breve</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
