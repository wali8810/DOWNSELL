import Image from "next/image";

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
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-foreground">Milhares de mulheres já treinam conosco. Veja o que elas dizem:</h2>
           <p className="text-lg mt-4 text-muted-foreground">Elas estão <span className="text-accent underline">transformando sua paixão em lucro.</span></p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-card p-0 rounded-lg shadow-md border border-border overflow-hidden">
                        <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={testimonial.width}
                        height={testimonial.height}
                        className="w-full h-auto object-cover"
                        data-ai-hint="user testimonial social"
                        unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
