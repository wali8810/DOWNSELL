import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const basicPlanFeatures = {
  included: ["eBook Principal: As 26 Batidas Mais Poderosas (PDF)"],
  excluded: [
    "Bônus: O Ritmo e Leitura",
    "Bônus: Transições Suaves",
    "Bônus: Cifras com Batidas Marcadas",
    "Bônus: Coordenação Motora",
    "Bônus: Caderno de Treinos",
  ]
};

const completePlanFeatures = [
  "eBook Principal (PDF)",
  "Bônus: O Ritmo e Leitura",
  "Bônus: Transições Suaves",
  "Bônus: Cifras com Batidas Marcadas",
  "Bônus: Coordenação Motora",
  "Bônus: Caderno de Treinos",
  "Acesso vitalício a tudo",
];

export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">Escolha sua Oferta e Comece Hoje</h2>
          <p className="text-muted-foreground mt-2">Acesso imediato e vitalício após a compra.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <Card className="flex-1 flex flex-col w-full bg-card/80 border-border">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold">PLANO BÁSICO</CardTitle>
              <p className="text-4xl font-bold pt-2">R$12,90</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {basicPlanFeatures.included.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {basicPlanFeatures.excluded.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <X className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Quero só o eBook</Button>
            </CardFooter>
          </Card>

          {/* Plano Completo */}
          <Card className="flex-1 flex flex-col w-full border-primary border-2 relative shadow-lg shadow-primary/20 bg-card">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-none">Mais Popular</Badge>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-primary">PACOTE COMPLETO</CardTitle>
              <p className="text-4xl font-bold pt-2">R$16,90</p>
               <p className="text-muted-foreground line-through">De R$67,00</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {completePlanFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#00C853] hover:bg-[#00B148] text-black font-bold text-lg transform hover:scale-105 transition-transform">QUERO O PACOTE COMPLETO</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
