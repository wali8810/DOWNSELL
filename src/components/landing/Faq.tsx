import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Em quanto tempo recebo o eBook?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o seu PDF. Simples e rápido."
  },
  {
    question: "Serve para violão acústico e elétrico?",
    answer: "Sim! As técnicas de batida ensinadas no eBook funcionam perfeitamente para qualquer tipo de violão, seja ele acústico (nylon ou aço) ou elétrico."
  },
    {
    question: "Mesmo que eu seja iniciante, vou conseguir aprender?",
    answer: "Com certeza! O material foi criado pensando em iniciantes. As explicações são visuais, claras e diretas ao ponto, para que você aprenda sem dificuldades."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é seu para sempre! Como é um arquivo PDF, você pode baixar e guardar em quantos dispositivos quiser para consultar quando precisar."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro."
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            <span role="img" aria-label="question mark">❓</span> Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full bg-card border border-border rounded-lg p-2 md:p-4 shadow-lg">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className={index === faqItems.length - 1 ? "border-b-0" : ""}>
              <AccordionTrigger className="text-lg text-left hover:no-underline px-4">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base px-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
