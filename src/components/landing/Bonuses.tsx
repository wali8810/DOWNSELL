import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonusData = [
  {
    title: "Bônus 1: O Ritmo e Leitura",
    description: "Aprofunde seu conhecimento com exercícios práticos de ritmo e leitura para solidificar sua batida.",
    image: "https://i.imgur.com/BEK0mhM.png",
    alt: "Bônus sobre ritmo e leitura",
    value: "R$19,90",
    aiHint: "music sheet exercise"
  },
  {
    title: "Bônus 2: Transições Suaves",
    description: "Domine a arte de trocar de acordes sem esforço para que suas músicas fluam perfeitamente.",
    image: "https://i.imgur.com/PPugZ2o.png",
    alt: "Bônus sobre transições de acordes",
    value: "R$27,00",
    aiHint: "guitar chord transition"
  },
  {
    title: "Bônus 3: Cifras com Batidas Marcadas",
    description: "Uma coleção de cifras com as batidas marcadas para você aplicar o que aprendeu em músicas populares.",
    image: "https://i.imgur.com/T7lmnPm.png",
    alt: "Bônus de cifras com batidas",
    value: "R$15,00",
    aiHint: "sheet music pdf"
  },
  {
    title: "Bônus 4: Coordenação Motora",
    description: "Desenvolva a agilidade e a precisão dos seus dedos com exercícios focados em coordenação motora.",
    image: "https://i.imgur.com/JQQDJtj.png",
    alt: "Bônus de exercícios de coordenação motora",
    value: "R$22,00",
    aiHint: "hand exercise guitar"
  },
  {
    title: "Bônus 5: Caderno de Treinos",
    description: "Organize seus estudos e acompanhe sua evolução com um caderno de treinos exclusivo.",
    image: "https://i.imgur.com/urXcrKy.png",
    alt: "Bônus de caderno de treinos",
    value: "R$12,00",
    aiHint: "progress journal"
  }
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            <span role="img" aria-label="gift">🎁</span> E você ainda leva <span className="text-accent underline">5 Bônus Exclusivos</span>
          </h2>
          <p className="text-destructive font-bold mt-2 max-w-2xl mx-auto">(ISSO TERMINA HOJE)</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonusData.map((bonus, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col shadow-lg">
              <CardHeader className="p-0 relative">
                <Image
                  src={bonus.image}
                  alt={bonus.alt}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                  data-ai-hint={bonus.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                <p className="text-muted-foreground flex-grow">{bonus.description}</p>
                 <div className="mt-4 flex items-center justify-between">
                  <span className="text-muted-foreground line-through">{bonus.value}</span>
                  <Badge variant="default" className="bg-primary text-primary-foreground border-none font-bold">GRÁTIS</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
