
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Qué es el ebook 'Personalizando con Plancha'?",
    answer: "Es una guía práctica que enseña a personalizar telas usando una plancha y una impresora común, sin necesidad de experiencia o máquinas costosas."
  },
  {
    question: "¿Necesito tener experiencia?",
    answer: "No. El método fue creado para principiantes. Cualquier persona puede aplicarlo."
  },
  {
    question: "¿Cuánto tiempo necesito dedicar por día?",
    answer: "De 30 a 60 minutos por día son suficientes para empezar a practicar y crear tus primeras piezas."
  },
  {
    question: "¿Por cuánto tiempo tengo acceso al ebook?",
    answer: "Acceso vitalicio. Puedes acceder cuando quieras, leer online o descargar el material."
  },
  {
    question: "¿Hay alguna garantía?",
    answer: "Sí. Tienes 7 días de garantía para probar todo. Si no estás satisfecho, te devolvemos el 100% de tu inversión."
  },
  {
    question: "¿Cómo funciona el soporte?",
    answer: "Tendrás acceso a nuestro Soporte VIP individual, con atención directa y personalizada."
  },
  {
    question: "¿Qué sucede después de comprar?",
    answer: "Recibes un correo electrónico automático de Kiwify con acceso inmediato al ebook. Es simple y rápido."
  },
  {
    question: "¿Necesito invertir en máquinas costosas?",
    answer: "No. Solo necesitarás: ✔ Una plancha ✔ Una impresora común ✔ Papel específico (te enseño cuál usar en el ebook)."
  },
  {
    question: "¿En cuántos dispositivos puedo usar los archivos?",
    answer: "Una vez que descargues los archivos, puedes copiarlos y compartirlos en todos tus dispositivos."
  },
  {
    question: "¿Por cuánto tiempo y cuántas veces puedo descargar las plantillas?",
    answer: "Podrás acceder a los archivos cuando quieras, sin límites de tiempo o acceso. Entendemos que, después de la compra, el archivo es tuyo y no hay límites de tiempo. ¡El acceso es vitalicio!"
  },
  {
    question: "¿Necesito algún programa especial para abrir los archivos?",
    answer: "Solo necesitas un lector de PDF para abrir e imprimir los archivos. Actualmente, todos los dispositivos (PC, Android, iOS) soportan este formato."
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            <span role="img" aria-label="question mark">❓</span> Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground mt-2">Aclara todas tus dudas</p>
        </div>
        <Accordion type="single" collapsible className="w-full bg-black text-yellow-400">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-white/30">
              <AccordionTrigger className="text-md md:text-lg text-left hover:no-underline py-6">{item.question}</AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6 whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
