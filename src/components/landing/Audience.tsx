import { CheckCircle2 } from "lucide-react";

const audienceItems = [
  "Compositores e Arranjadores: que escrevem suas próprias músicas ou fazem arranjos.",
  "Músicos: que precisam expandir sua habilidade rítmica no violão.",
  "Líderes de louvor: que buscam ampliar as opções de músicas para os cultos.",
  "Estudantes: que possuem sede de conteúdo e querem adicionar novas técnicas ao seu repertório.",
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
            {audienceItems.map((item, index) => {
              const parts = item.split(':');
              const title = parts[0] + ':';
              const description = parts.slice(1).join(':');
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border transition-all hover:shadow-xl hover:border-primary shadow-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <p className="text-foreground/90 text-lg">
                    <strong className="font-bold">{title}</strong>
                    {description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
