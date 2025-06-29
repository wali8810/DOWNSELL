import { CheckCircle2 } from "lucide-react";

const audienceItems = [
  "Nunca mais fique preso em batidas repetitivas",
  "Ideal pra quem está começando do zero",
  "Para quem quer acompanhar qualquer música com confiança",
  "Impressione seus amigos em qualquer roda de violão",
];

export function Audience() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">
            PARA QUEM É ESTE EBOOK?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {audienceItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border transition-all hover:shadow-xl hover:border-primary shadow-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                <p className="text-foreground/90 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
