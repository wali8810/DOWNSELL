import Image from "next/image";

const testimonials = [
  {
    image: "https://i.imgur.com/T0pZGgp.png",
    text: "Vendi 20 caixinhas no fim de semana — recuperei o investimento logo na primeira encomenda.",
    name: "Ana P.",
    "data-ai-hint": "woman avatar"
  },
  {
    image: "https://i.imgur.com/sGU7mbE.png",
    text: "As medidas certas mudaram tudo. Agora aceito encomendas grandes sem medo de errar!",
    name: "Mariana F.",
     "data-ai-hint": "woman avatar"
  },
    {
    image: "https://i.imgur.com/1PiJQAb.png",
    text: "Simples, rápido e com um acabamento que parece de loja. As minhas clientes adoram.",
    name: "Sofia R.",
     "data-ai-hint": "woman avatar"
  },
];

const TestimonialCard = ({ image, text, name, hint }: { image: string, text: string, name: string, hint: string }) => (
    <div className="relative mt-12">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <Image 
                src={image}
                alt={`Depoimento de ${name}`}
                width={100}
                height={100}
                className="rounded-full border-4 border-white object-cover"
                data-ai-hint={hint}
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
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">O que as nossas alunas dizem:</h2>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index}
                        image={testimonial.image}
                        text={testimonial.text}
                        name={testimonial.name}
                        hint={testimonial['data-ai-hint']}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
