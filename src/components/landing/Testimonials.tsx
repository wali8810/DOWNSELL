import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    image: "https://i.imgur.com/6QpQwXi.png",
    text: "Fiz 12 panos no fim de semana. Vendi 10 em 3 horas! Estou em choque!",
    name: "Ana G.",
  },
  {
    image: "https://i.imgur.com/qxUkZGZ.png",
    text: "Nunca pensei que alguém pagaria por algo que fiz com um ferro de engomar!",
    name: "Maria C.",
  },
    {
    image: "https://i.imgur.com/RrstbbC.png",
    text: "Comecei sem saber nada e já estou a vender as minhas criações. O curso é incrível!",
    name: "Lúcia M.",
  },
  {
    image: "https://i.imgur.com/9KwVXA0.png",
    text: "O grupo de alunas é fantástico! Todas se ajudam e dão muitas dicas.",
    name: "Sofia P.",
  },
];

const TestimonialCard = ({ image, text, name }: { image: string, text: string, name: string }) => (
    <div className="relative mt-12">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <Image 
                src={image}
                alt={`Depoimento de ${name}`}
                width={100}
                height={100}
                className="rounded-full border-4 border-white object-cover"
                data-ai-hint="woman avatar"
                priority
            />
        </div>
        <div className="bg-[#5c2c2c] text-white rounded-xl p-6 pt-16 text-center shadow-lg">
            <p className="text-lg italic mb-4">"{text}"</p>
            <p className="font-bold text-yellow-400">{name}</p>
        </div>
    </div>
)


export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">DEPOIMENTOS REAIS:</h2>
           <p className="text-lg mt-4 text-muted-foreground">Elas estão a <span className="text-accent underline">transformar a sua paixão em lucro.</span></p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index}
                        image={testimonial.image}
                        text={testimonial.text}
                        name={testimonial.name}
                    />
                ))}
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="text-lg text-left text-foreground/90 leading-relaxed space-y-4">
                  <p>Imagine ganhar até <strong style={{color: '#4fc700'}}>700€ por mês</strong> a criar cartões decorativos a partir de sua casa. Com o meu método Estampa Mágica, não precisa de investir quase nada em materiais, e na sua primeira semana já pode ter resultados reais.</p>
                  <p>Diferente de outros artesanatos que consomem muito tempo, os cartões decorativos são rápidos de fazer, estão em alta em toda a América Latina e qualquer pessoa pode aprender, mesmo sem experiência prévia.</p>
                  <p>Com o método, receberá moldes prontos e vídeos passo a passo para criar cartões lindos e começar a vender hoje mesmo.</p>
                  <p><strong>Uma dica estratégica:</strong> os cartões para chá de bebé e revelação de género são dos mais procurados e vendem muito rápido, sendo um excelente ponto de partida para gerar rendimento imediato.</p>
              </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="mb-12">
                  <a href="#plans" className="inline-block">
                    <Button size="lg" className="cta-button shadow-lg text-center h-auto whitespace-normal">
                      GARANTIR AGORA COM DESCONTO
                    </Button>
                  </a>
              </div>
               <h3 
                className="text-2xl md:text-3xl font-bold mb-4" 
                style={{ fontFamily: '"Montserrat", Sans-serif', lineHeight: '1.2', letterSpacing: '-0.9px' }}
              >
                Quanto Tempo Leva Para Receber o Meu Acesso?
              </h3>
              <div 
                className="text-muted-foreground text-lg" 
                style={{ fontFamily: '"Montserrat", Sans-serif' }}
              >
                  <p>Após confirmar o seu pedido, <strong>receberá automaticamente</strong> no seu e-mail os dados de acesso para login e poderá começar os seus estudos imediatamente.</p>
                  <p>Todo o material está hospedado numa <strong>área de membros exclusiva</strong> para alunos, para que possa aceder com segurança, quando e de onde estiver.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
