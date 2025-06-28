import { Check } from "lucide-react";

const features = [
    "As 26 batidas de violão mais versáteis e usadas",
    "Ritmos de pop, rock, sertanejo, reggae e mais",
    "Aplicação prática em louvores e nas músicas que você ama",
    "Técnicas que funcionam em qualquer violão (acústico ou elétrico)",
    "Método 100% prático, focado em resultados rápidos",
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">O QUE VOCÊ VAI DOMINAR:</h2>
            <ul className="space-y-4 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-lg p-4 rounded-lg bg-white/5 border border-white/10 shadow-sm transition-all hover:shadow-md hover:border-white/50">
                        <Check className="h-6 w-6 text-white mr-4 shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
