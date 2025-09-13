
import Image from "next/image";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    src: "https://imgur.com/j1TOXF9.png",
    alt: "Testimonio de alumna satisfecha 1",
    width: 300,
    height: 400,
  },
  {
    src: "https://imgur.com/q2zw7x9.png",
    alt: "Testimonio de alumna satisfecha 2",
    width: 300,
    height: 400,
  },
  {
    src: "https://imgur.com/eyRUvyM.png",
    alt: "Testimonio de alumna satisfecha 3",
    width: 300,
    height: 400,
  },
  {
    src: "https://imgur.com/or4Na3a.png",
    alt: "Testimonio de alumna satisfecha 4",
    width: 300,
    height: 400,
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">TESTIMONIOS REALES:</h2>
           <p className="text-lg mt-4 text-muted-foreground">Ellas están <span className="text-accent underline">transformando su pasión en ganancias.</span></p>
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
                  <p>Imagina que puedes ganar hasta <strong style={{color: '#4fc700'}}>$1.400 por mes</strong> solo creando tarjetas decorativas en casa. Con mi método, no necesitas invertir casi nada en materiales, y en la primera semana puedes alcanzar ese resultado.</p>
                  <p>A diferencia de las artesanías que llevan mucho tiempo, las tarjetas decorativas son rápidas de hacer, están muy de moda en toda América Latina y cualquiera puede aprender, <strong>incluso sin experiencia</strong>.</p>
                  <p>Recibes plantillas listas y videos paso a paso para crear tarjetas hermosas y comenzar a vender hoy mismo.</p>
                  <p><strong>Consejo:</strong> las tarjetas para baby shower y revelación de género están entre las más buscadas y se venden muy rápido.</p>
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
