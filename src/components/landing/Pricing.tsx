
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const bonusData = [
  {
    title: "Top 50 Gospel",
    description: "Uma seleção exclusiva das melhores músicas gospel cifradas, ideal para louvores e momentos de adoração.",
  },
  {
    title: "Top 50 Rock Internacional",
    description: "Grandes sucessos do rock britânico e americano, com cifras precisas para músicos de todos os níveis.",
  },
  {
    title: "Top 50 Sertanejo",
    description: "Descubra os melhores modões e sertanejo universitário com cifras completas.",
  },
  {
    title: "Top 50 MPB",
    description: "Clássicos e contemporâneos da música brasileira reunidos em um único lugar.",
  },
  {
    title: "Rock / Pop Nacional",
    description: "Clássicos inesquecíveis do rock e pop brasileiro, desde Legião Urbana até Jota Quest.",
  }
];

const basicPlanIncluded = [
  "eBook Principal: <strong>As 26 Batidas Mais Poderosas</strong>",
  "<strong>Acesso vitalício</strong> ao material em PDF",
  "<strong>Garantia incondicional</strong> de 7 dias",
  "Leitura em <strong>qualquer dispositivo</strong>"
];

const basicPlanExcluded = [
  "Bônus 01: Top 50 Gospel",
  "Bônus 02: Top 50 Rock Internacional",
  "Bônus 03: Top 50 Sertanejo",
  "Bônus 04: Top 50 MPB",
  "Bônus 05: Rock / Pop Nacional"
];

const completePlanIncluded = [
    "Receba o <strong>eBook Principal + 5 Bônus Exclusivos</strong>",
    "<strong>Acesso vitalício</strong> a todo o material",
    "<strong>Garantia total de 7 dias</strong>"
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
            <div className="p-6 flex flex-col flex-grow text-center">
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
              <p className="font-bold text-lg uppercase">PAGAMENTO ÚNICO</p>
              <p className="text-6xl font-extrabold text-primary my-4">R$10</p>
              
              <div className="mb-6 flex justify-center">
                <ul className="divide-y divide-border">
                  {basicPlanIncluded.map((item, index) => (
                    <li key={`include-${index}`} className="flex items-center py-2">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span className="text-sm text-muted-foreground text-left" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                  {basicPlanExcluded.map((item, index) => (
                    <li key={`exclude-${index}`} className="flex items-center py-2">
                      <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                      <span className="text-sm text-red-500/70 italic"><del>{item}</del></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <Button className="w-full bg-primary/80 hover:bg-primary/70 text-primary-foreground font-bold text-lg h-auto py-3">
                  QUERO ESSA OPÇÃO!
                </Button>
              </div>
            </div>
          </div>

          <BackgroundGradient
            containerClassName="w-full lg:w-1/2 rounded-2xl"
            className="bg-card text-foreground rounded-2xl shadow-2xl flex flex-col h-full"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 z-20">
                <Star className="h-4 w-4" fill="currentColor" />
                <Star className="h-4 w-4" fill="currentColor" />
                <Star className="h-4 w-4" fill="currentColor" />
                <Star className="h-4 w-4" fill="currentColor" />
                <Star className="h-4 w-4" fill="currentColor" />
                <span className="ml-1">Mais Vendido</span>
            </div>
            <div className="bg-destructive text-white text-center py-3 rounded-t-2xl">
              <h3 className="text-2xl font-bold">PLANO COMPLETO:</h3>
            </div>
            <div className="p-6 pt-2 flex flex-col flex-grow text-center">
              <p className="font-semibold text-foreground mt-2 text-lg">(MELHOR NEGÓCIO)</p>
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
              
              <div className="mb-6 flex justify-center">
                  <ul className="divide-y divide-border">
                    {completePlanIncluded.map((item, index) => (
                      <li key={`complete-${index}`} className="flex items-center py-2">
                        <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span className="text-sm text-muted-foreground text-left" dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                     {bonusData.map((bonus, index) => (
                        <li key={index} className="flex items-start space-x-2 py-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                            <div className="text-left">
                                <h4 className="font-bold text-primary/90 text-sm">Bônus 0{index + 1}: {bonus.title}</h4>
                                <p className="text-muted-foreground text-sm">{bonus.description}</p>
                            </div>
                        </li>
                    ))}
                  </ul>
              </div>

              <div className="text-center my-4">
                <p className="text-red-500 line-through">Valor Total: R$67,00</p>
                <p className="uppercase font-bold text-foreground">HOJE PAGAMENTO ÚNICO...</p>
                <p className="text-6xl font-extrabold text-primary">R$27,90</p>
              </div>

              <div className="mt-auto">
                 <div className="flex justify-center">
                   <HoverBorderGradient
                      as="button"
                      containerClassName="w-full rounded-md"
                      className="w-full bg-primary text-primary-foreground font-bold text-lg md:text-xl h-auto py-4"
                    >
                      SIM! QUERO ESSA SUPER OFERTA!
                    </HoverBorderGradient>
                </div>
                <p className="text-center text-muted-foreground mt-4 text-sm">
                  ATENÇÃO: A Promoção é <strong className="text-destructive font-bold">LIMITADA</strong> e <strong className="text-destructive font-bold">Acabará em Breve</strong>.
                </p>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
}
