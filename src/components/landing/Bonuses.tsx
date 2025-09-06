import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonusData = [
  {
    title: "Bônus 1: Como vender nas redes sociais",
    description: "Roteiros e exemplos para postar no Instagram, WhatsApp e marketplaces para atrair e fechar sua primeira venda em até 48 horas.",
    image: "https://imgur.com/E0QxgBv.png",
    alt: "Bônus sobre vendas nas redes sociais",
    value: "US$10",
    aiHint: "social media marketing"
  },
  {
    title: "Bônus 2: Manual de Vendas Pronto para Usar",
    description: "Guia rápido para oferecer suas criações sem sofrer na tentativa.",
    image: "https://imgur.com/hdbzMRu.png",
    alt: "Bônus manual de vendas",
    value: "US$5",
    aiHint: "sales guide book"
  },
  {
    title: "Bônus 3: Guia de Inspiração e Venda Rápida",
    description: "Acesso a uma variedade de ideias para criar novos designs e vender no mesmo dia.",
    image: "https://imgur.com/eIcZkRK.png",
    alt: "Bônus guia de inspiração",
    value: "US$15",
    aiHint: "inspiration lightbulb ideas"
  },
  {
    title: "Bônus 4: Mini Curso de Publicidade e Vendas",
    description: "Aprenda como promover facilmente seus produtos usando publicidade online.",
    image: "https://imgur.com/0jFdKVH.png",
    alt: "Bônus mini curso de publicidade",
    value: "US$30",
    aiHint: "online advertising"
  }
];

export function Bonuses() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            <span role="img" aria-label="gift">🎁</span> E com sua compra HOJE você leva <span className="text-accent underline">BÔNUS GRÁTIS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
