import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const planoCompletoFeatures = [
  "<b>Curso Completo: Balão Decora</b>",
  "<b>Certificado Incluso</b>",
  "<b>Acesso vitalício</b>",
  "<b>30 Dias de Garantia</b>",
];

const planoCompletoBonus = [
    { text: "<b>Bônus 01:</b> <i>23 NOVOS Modelos de Balões que Estão em Alta em 2025</i>", icon: "gift" },
    { text: "<b>Bônus 02:</b> <i>Lista de Fornecedores que Estão Vendendo 37% Abaixo do Valor de Mercado</i>", icon: "gift" },
    { text: "<b>Bônus 03:</b> <i>100 Artes Prontas de Balões Decorativos para Festas</i>", icon: "gift" },
    { text: "<b>Bônus Extra:</b> <i>Técnica de Escritas em Balões Decorados</i>", icon: "gift" },
    { text: "<b>Grupo de Alunos:</b> <i>Grupo de Alunos Para Suporte e Trocas de Dicas e Experiências</i>", icon: "gift" },
    { text: "<b>Suporte VIP:</b> Ganhe um <i>Acompanhamento Individual via WhatsApp por 90 Dias</i>", icon: "gift" }
]

const planoBasicoFeatures = {
  included: [
    "Curso Completo: Balão Decora",
    "Certificado Incluso",
    "1 Ano de Acesso",
    "30 Dias de Garantia"
  ],
  notIncluded: [
    '<s>Bônus 01: </s><span style="font-weight: 400;"><i><strike>23 NOVOS Modelos de Balões que Estão em Alta em 2024</strike></i></span>',
    '<s>Bônus 02: </s><span style="font-weight: 400;"><i><strike>Lista de Fornecedores que Estão Vendendo 37% Abaixo do Valor de Mercado</strike></i></span>',
    '<s>Bônus 03: </s><span style="font-weight: 400;"><i><strike>100 Artes Prontas de Balões Decorativos para Festas</strike></i></span>',
    '<s>Bônus Extra: </s><span style="font-weight: 400;"><i><strike>Técnica de Escritas em Balões Decorados</strike></i></span>',
    '<s>Grupo de Alunos: </s><span style="font-weight: 400;"><i><strike>Grupo de Alunos Para Suporte e Trocas de Dicas e Experiências</strike></i></span>',
    '<s>Suporte VIP: </s><span style="font-weight: 400;"><i><strike>Ganhe um Acompanhamento Individual via WhatsApp por 90 Dias</strike></i></span>',
  ]
}

const StarIcon = () => (
  <svg
    className="w-7 h-7 text-yellow-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-primary mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-5 w-5 text-destructive/50 mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
  </svg>
);

const GiftIcon = () => (
    <svg aria-hidden="true" className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg>
)

export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">ESCOLHA O PLANO PERFEITO PARA VOCÊ</h2>
            <p className="text-muted-foreground mt-2">Comece a lucrar com sua arte hoje mesmo!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          
          {/* Plano Básico */}
          <div className="w-full max-w-md">
             <div className="bg-card text-foreground rounded-2xl shadow-lg flex flex-col h-full border-2 border-border p-8">
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold uppercase mb-2">Plano Básico:</h3>
                <p className="uppercase font-bold text-foreground/70 text-sm mb-4">Pagamento único</p>
                 <div className="text-center my-4">
                  <p className="text-6xl font-bold text-primary">R$10</p>
                </div>
                <ul className="text-left space-y-3 my-4 text-muted-foreground flex-grow">
                  {planoBasicoFeatures.included.map((item, index) => (
                    <li key={`basic-inc-${index}`} className="flex items-start">
                      <CheckIcon />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <hr className="border-border my-4" />
                <ul className="text-left space-y-3 my-4 text-muted-foreground flex-grow">
                  {planoBasicoFeatures.notIncluded.map((item, index) => (
                     <li key={`basic-not-${index}`} className="flex items-start text-muted-foreground/50">
                      <XIcon />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <a href="https://pay.kirvano.com/268fafab-5986-464b-9c14-bcdfa52ce9a2" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button size="lg" variant="outline" className="w-full text-lg py-6">
                        QUERO ESSA OPÇÃO!
                      </Button>
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="w-full max-w-md">
            <div
              className="bg-card text-foreground rounded-2xl shadow-2xl flex flex-col h-full border-2"
              style={{ borderColor: '#FFAD00', boxShadow: '0px 0px 44px 0px rgba(254, 255, 0, 0.5)'}}
            >
              <div className="p-8 flex flex-col flex-grow text-center relative">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground font-bold border-none shadow-lg">Mais Vendido</Badge>
                </div>
                
                <div className="flex justify-center mt-5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <h3 className="text-2xl font-bold uppercase mt-2 text-foreground">Plano Completo:</h3>
                <p className="font-bold text-foreground/80 mb-4">(MELHOR NEGÓCIO)</p>
                
                <Image src="https://balaodecora.shop/wp-content/uploads/2024/05/super-mockups-405-x-270-px-5-1.png" alt="Mockup plano completo" width={506} height={338} className="w-full h-auto rounded-md my-4" />

                <ul className="text-left space-y-3 my-4 text-foreground flex-grow">
                  {planoCompletoFeatures.map((item, index) => (
                    <li key={`complete-${index}`} className="flex items-start">
                      <CheckIcon />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                   {planoCompletoBonus.map((item, index) => (
                    <li key={`complete-bonus-${index}`} className="flex items-start">
                      <GiftIcon />
                      <span dangerouslySetInnerHTML={{ __html: item.text }} />
                    </li>
                  ))}
                </ul>

                <div className="text-center my-4">
                  <p className="text-foreground/70 line-through text-lg">Valor Total: R$147</p>
                  <p className="uppercase font-bold text-foreground/80 text-sm">HOJE PAGAMENTO ÚNICO...</p>
                  <p className="text-6xl font-extrabold text-primary">R$19</p>
                </div>

                <div className="mt-auto">
                   <div className="flex justify-center flex-col items-center gap-4">
                    <a href="https://pay.kirvano.com/278d35c1-ece3-4c43-90f3-f35474a70d92" target="_blank" rel="noopener noreferrer" className="block w-full">
                       <button className="cta-button w-full">
                          SIM! QUERO ESSA SUPER OFERTA!
                        </button>
                     </a>
                     <p className="text-sm font-bold">ATENÇÃO: <span className="font-normal">A Promoção é <u className="font-bold">LIMITADA</u> e Acabará em Breve.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
