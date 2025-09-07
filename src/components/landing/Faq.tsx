import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Em quantos dispositivos posso usar os arquivos?",
    answer: "Depois de baixar os arquivos, você pode copiá-los e compartilhá-los em todos os seus dispositivos."
  },
  {
    question: "Por quanto tempo e quantas vezes posso baixar as planilhas?",
    answer: "Você poderá acessar os arquivos quando quiser, sem limites de tempo ou acesso. Entendemos que, após a compra, o arquivo é seu e não há limites de tempo. O acesso é vitalício!"
  },
  {
    question: "Preciso de algum programa especial para abrir os arquivos?",
    answer: "Basta usar um leitor de PDF para abrir e imprimir os arquivos. Atualmente, todos os dispositivos (PC, Android, iOS) suportam esse formato."
  },
  {
    question: "Existe uma garantia?",
    answer: "Oferecemos aos nossos clientes uma garantia de satisfação de um ano. Se, durante esse período, você não tiver acesso ao nosso produto ou tiver algum problema técnico, envie-nos um e-mail para obter assistência ou solicitar um reembolso total, sem perguntas. Queremos garantir que nossos clientes fiquem completamente satisfeitos com a compra."
  },
  {
    question: "Preciso de acesso à Internet para usar os arquivos?",
    answer: "Você só precisa de uma conexão com a internet para baixar os arquivos."
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            <span role="img" aria-label="question mark">❓</span> Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mt-2">Esclareça todas as suas dúvidas</p>
        </div>
        <Accordion type="single" collapsible className="w-full bg-black text-yellow-400">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className={index === faqItems.length - 1 ? "border-b-0" : "border-b border-yellow-400/30"}>
              <AccordionTrigger className="text-lg text-left hover:no-underline py-6">{item.question}</AccordionTrigger>
              <AccordionContent className="text-white/80 text-base pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
