
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
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">+7.000 ALUNAS POR TODO O BRASIL. VEJA O QUE ELAS DIZEM:</h2>
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
              <div className="text-lg text-left text-foreground/90 leading-relaxed space-y-4">
                  <p>Imagina você faturar até <strong style={{color: '#4fc700'}}>R$5.000,00 por mês</strong> apenas criando cartões decorativos em casa? Com meu método, você não precisa investir quase nada em materiais, e já no primeiro mês pode alcançar esse resultado.</p>
                  <p>Diferente de artesanatos demorados, os cartões decorativos são rápidos de fazer, estão super em alta no Brasil e qualquer pessoa pode aprender — <strong>mesmo sem experiência</strong>.</p>
                  <p>Você recebe modelos prontos e vídeos passo a passo, para criar cartões lindos e começar a vender ainda hoje.</p>
                  <p><strong>Dica:</strong> os cartões para chá revelação e chá de bebê estão entre os mais procurados e vendem muito rápido.</p>
              </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="mb-12">
                  <a href="#plans" className="inline-block">
                    <Button size="lg" className="cta-button shadow-lg text-center h-auto py-4 px-6 md:px-8 text-base md:text-xl">
                      GARANTIR AGORA COM DESCONTO
                    </Button>
                  </a>
              </div>
               <h3 
                className="text-2xl md:text-3xl font-bold mb-4" 
                style={{ fontFamily: '"Montserrat", Sans-serif', lineHeight: '1.2', letterSpacing: '-0.9px' }}
              >
                Quanto Tempo Leva Para Receber Meu Acesso?
              </h3>
              <div 
                className="text-muted-foreground text-lg" 
                style={{ fontFamily: '"Montserrat", Sans-serif' }}
              >
                  <p>Após confirmar seu pedido, <strong>você receberá automaticamente</strong> no seu e-mail os dados de acesso para login e poderá começar seus estudos imediatamente.</p>
                  <p>Todo o material está hospedado em uma <strong>área de membros exclusiva</strong> para alunos, para que você possa acessar com segurança, quando e de onde estiver.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
