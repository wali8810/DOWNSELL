import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    src: "https://imgur.com/j1TOXF9.png",
    alt: "Depoimento de aluna satisfeita 1",
    width: 300,
    height: 400,
  },
  {
    src: "https://imgur.com/q2zw7x9.png",
    alt: "Depoimento de aluna satisfeita 2",
    width: 300,
    height: 400,
  },
  {
    src: "https://imgur.com/eyRUvyM.png",
    alt: "Depoimento de aluna satisfeita 3",
    width: 300,
    height: 400,
  },
  {
    src: "https://imgur.com/or4Na3a.png",
    alt: "Depoimento de aluna satisfeita 4",
    width: 300,
    height: 400,
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">Milhares de mulheres já treinam conosco. Veja o que elas dizem:</h2>
           <p className="text-lg mt-4 text-muted-foreground">Elas estão <span className="text-accent underline">transformando sua paixão em lucro.</span></p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-border rounded-lg p-2">
                        <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={testimonial.width}
                        height={testimonial.height}
                        className="w-full h-auto object-cover rounded"
                        data-ai-hint="user testimonial social"
                        unoptimized
                        />
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Imagina você faturar até R$5.000,00 por mês apenas criando cartões decorativos em casa? Com meu método, você não precisa investir quase nada em materiais, e já no primeiro mês pode alcançar esse resultado.
              </p>
              <p className="mt-4 text-lg text-foreground/90 leading-relaxed">
                Diferente de artesanatos demorados, os cartões decorativos são rápidos de fazer, estão super em alta no Brasil e qualquer pessoa pode aprender — mesmo sem experiência.
              </p>
              <p className="mt-4 text-lg text-foreground/90 leading-relaxed">
                Você recebe modelos prontos e vídeos passo a passo, para criar cartões lindos e começar a vender ainda hoje.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Dica: os cartões para chá revelação e chá de bebê estão entre os mais procurados e vendem muito rápido.
              </p>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="mb-12">
                  <a href="#plans" className="inline-block">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl h-auto py-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      GARANTIR AGORA COM DESCONTO
                    </Button>
                  </a>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Quanto Tempo Leva Para Receber Meu Acesso?</h3>
              <p className="text-muted-foreground mb-4 text-lg">
                Após confirmar seu pedido, <strong>você receberá automaticamente</strong> no seu e-mail os dados de acesso para login e poderá começar seus estudos imediatamente.
              </p>
              <p className="text-muted-foreground text-lg">
                Todo o material está hospedado em uma <strong>área de membros exclusiva</strong> para alunos, para que você possa acessar com segurança, quando e de onde estiver.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
