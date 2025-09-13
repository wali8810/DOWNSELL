
import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    image: "https://imgur.com/6QpQwXi",
    text: "Hice 12 paños el fin de semana. ¡Vendí 10 en 3 horas! ¡Estoy en shock!",
    name: "Ana G.",
  },
  {
    image: "https://imgur.com/qxUkZGZ",
    text: "¡Nunca pensé que alguien pagaría por algo que hice con una plancha de ropa!",
    name: "Maria C.",
  },
    {
    image: "https://imgur.com/RrstbbC",
    text: "Empecé sin saber nada y ya estoy vendiendo mis creaciones. ¡El curso es increíble!",
    name: "Lucía M.",
  },
  {
    image: "https://imgur.com/9KwVXA0",
    text: "¡El grupo de alumnas es fantástico! Todas se ayudan y dan muchos tips.",
    name: "Sofía P.",
  },
];

const TestimonialCard = ({ image, text, name }: { image: string, text: string, name: string }) => (
    <div className="relative mt-12">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <Image 
                src={image}
                alt={`Testimonio de ${name}`}
                width={100}
                height={100}
                className="rounded-full border-4 border-white object-cover"
                data-ai-hint="woman avatar"
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
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">TESTIMONIOS REALES:</h2>
           <p className="text-lg mt-4 text-muted-foreground">Ellas están <span className="text-accent underline">transformando su pasión en ganancias.</span></p>
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
                  <p>Imagina ganar hasta <strong style={{color: '#4fc700'}}>$1.400 al mes</strong> creando tarjetas decorativas desde tu casa. Con mi método Estampa Mágica, no necesitas invertir casi nada en materiales, y en tu primera semana ya puedes obtener resultados reales.</p>
                  <p>A diferencia de otras manualidades que consumen mucho tiempo, las tarjetas decorativas son rápidas de hacer, están en tendencia en toda América Latina y cualquiera puede aprender, incluso sin experiencia previa.</p>
                  <p>Con el método, recibirás plantillas listas y videos paso a paso para crear tarjetas hermosas y empezar a vender hoy mismo.</p>
                  <p><strong>Un consejo estratégico:</strong> las tarjetas para baby shower y revelación de género son de las más buscadas y se venden muy rápido, así que son un excelente punto de partida para generar ingresos inmediatos.</p>
              </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="mb-12">
                  <a href="#plans" className="inline-block">
                    <Button size="lg" className="cta-button shadow-lg text-center h-auto py-4 px-6 md:px-8 text-base md:text-xl">
                      GARANTIZAR AHORA CON DESCUENTO
                    </Button>
                  </a>
              </div>
               <h3 
                className="text-2xl md:text-3xl font-bold mb-4" 
                style={{ fontFamily: '"Montserrat", Sans-serif', lineHeight: '1.2', letterSpacing: '-0.9px' }}
              >
                ¿Cuánto Tiempo Tarda en Llegar Mi Acceso?
              </h3>
              <div 
                className="text-muted-foreground text-lg" 
                style={{ fontFamily: '"Montserrat", Sans-serif' }}
              >
                  <p>Después de confirmar tu pedido, <strong>recibirás automáticamente</strong> en tu correo electrónico los datos de acceso para iniciar sesión y podrás comenzar tus estudios de inmediato.</p>
                  <p>Todo el material está alojado en un <strong>área de miembros exclusiva</strong> para alumnos, para que puedas acceder de forma segura, cuando y desde donde estés.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
