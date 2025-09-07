
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const planoCompletoFeatures = [
  "<b>Curso Completo: Cartão Decorativo</b>",
  "<b>Certificado Incluso</b>",
  "<b>Acesso vitalício</b>",
  "<b>30 Dias de Garantia</b>",
];

const planoCompletoBonus = [
    { text: "<b>Bônus 1: Como vender nas redes sociais</b><br/><i>Roteiros e exemplos prontos para postar no Instagram, WhatsApp e marketplaces e fechar sua primeira venda em até 48 horas.</i>", icon: "check" },
    { text: "<b>Bônus 2: Manual de Vendas Pronto para Usar</b><br/><i>Guia rápido para oferecer suas criações sem sofrer na tentativa.</i>", icon: "check" },
    { text: "<b>Bônus 3: Guia rápido para encontrar inspiração e vender no mesmo dia</b><br/><i>Acesso a uma variedade de ideias criativas para nunca travar na hora de criar.</i>", icon: "check" },
    { text: "<b>Bônus 4: Mini curso de publicidade e vendas</b><br/><i>Aprenda como promover facilmente seus produtos usando anúncios e técnicas de marketing online.</i>", icon: "gift" },
    { text: "<b>Grupo de Alunos:</b> <i>Espaço exclusivo para suporte, troca de dicas e experiências.</i>", icon: "gift" },
    { text: "<b>Suporte VIP:</b> <i>Acompanhamento individual via WhatsApp por 90 dias para acelerar seus resultados.</i>", icon: "gift" }
]

const planoBasicoFeatures = {
  included: [
    "Curso Completo: Balão Decora",
    "Certificado Incluso",
    "1 Ano de Acesso",
    "30 Dias de Garantia"
  ],
  notIncluded: [
    '<b>Bônus 1: Como vender nas redes sociais</b><br/><i>Roteiros e exemplos prontos para postar no Instagram, WhatsApp e marketplaces e fechar sua primeira venda em até 48 horas.</i>',
    '<b>Bônus 2: Manual de Vendas Pronto para Usar</b><br/><i>Guia rápido para oferecer suas criações sem sofrer na tentativa.</i>',
    '<b>Bônus 3: Guia rápido para encontrar inspiração e vender no mesmo dia</b><br/><i>Acesso a uma variedade de ideias criativas para nunca travar na hora de criar.</i>',
    '<b>Bônus 4: Mini curso de publicidade e vendas</b><br/><i>Aprenda como promover facilmente seus produtos usando anúncios e técnicas de marketing online.</i>',
    '<b>Grupo de Alunos:</b> <i>Espaço exclusivo para suporte, troca de dicas e experiências.</i>',
    '<b>Suporte VIP:</b> <i>Acompanhamento individual via WhatsApp por 90 dias para acelerar seus resultados.</i>',
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
    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-1"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
  </svg>
);

const GiftIcon = () => (
    <svg aria-hidden="true" className="h-5 w-5 text-yellow-500 mr-2 shrink-0 mt-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg>
)

export function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-[#00110F]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">ESCOLHA A MELHOR OFERTA PARA VOCÊ</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          
          {/* Plano Básico */}
          <div className="w-full md:w-1/2 flex">
             <div className="bg-white text-black rounded-2xl shadow-lg flex flex-col h-full border-2 border-gray-200 p-8 w-full">
                <div className="text-center mb-6">
                   <div className="bg-gray-800 text-white rounded-full py-2 px-8 mb-4 inline-block self-center">
                    <h3 className="text-xl font-bold uppercase">Plano Básico:</h3>
                  </div>
                   <p className="font-bold text-lg uppercase text-black">Pagamento Único</p>
                  <p className="text-6xl font-extrabold text-green-500">R$10</p>
                </div>
                <div className="flex-grow">
                  <ul className="text-left space-y-3 my-4 text-gray-600">
                    {planoBasicoFeatures.included.map((item, index) => (
                       <li key={`basic-inc-${index}`} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                        <CheckIcon />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 my-4"></div>
                  <ul className="text-left space-y-3 my-4 text-red-500">
                    {planoBasicoFeatures.notIncluded.map((item, index) => (
                       <li key={`basic-not-${index}`} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                        <XIcon />
                        <span className="line-through" dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                   <a href="https://pay.kirvano.com/268fafab-5986-464b-9c14-bcdfa52ce9a2" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button size="lg" className="w-full text-lg py-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg">
                        QUERO ESSA OPÇÃO!
                      </Button>
                   </a>
                </div>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="w-full md:w-1/2 flex">
            <div
              className="bg-white text-black rounded-2xl shadow-2xl flex flex-col h-full border-4 border-yellow-400 p-8 w-full relative animate-pulse-yellow"
            >
               <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-yellow-400 hover:bg-yellow-400 text-black font-bold border-none shadow-lg px-6 py-2 text-lg whitespace-nowrap">Mais Vendido</Badge>
              </div>
              
              <div className="text-center mb-4 mt-6">
                 <div className="flex justify-center mb-4">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className="bg-red-500 text-white rounded-full py-2 px-8 mb-2 inline-block">
                  <h3 className="text-xl font-bold uppercase">Plano Completo:</h3>
                </div>
                <p className="font-bold text-lg text-black uppercase">(MELHOR NEGÓCIO)</p>
              </div>
              
              <Image src="https://imgur.com/ICZ20ja.png" alt="Mockup plano completo" width={400} height={300} className="w-full h-auto rounded-md my-4" data-ai-hint="course mockup bundle"/>

              <ul className="text-left space-y-3 my-4 text-gray-600 flex-grow">
                {planoCompletoFeatures.map((item, index) => (
                  <li key={`complete-${index}`} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                    <CheckIcon />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
                 {planoCompletoBonus.map((item, index) => (
                  <li key={`complete-bonus-${index}`} className="flex items-start pb-3 border-b border-gray-200 last:border-b-0">
                    {item.icon === 'check' ? <CheckIcon /> : <GiftIcon />}
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </li>
                ))}
              </ul>

              <div className="text-center my-4">
                <p className="text-red-500 line-through text-lg">Valor Total: R$147</p>
                <p className="uppercase font-bold text-black text-sm">HOJE PAGAMENTO ÚNICO...</p>
                <p className="text-6xl font-extrabold text-green-500">R$14,90</p>
              </div>

              <div className="mt-auto">
                 <div className="flex justify-center flex-col items-center gap-4">
                  <a href="https://pay.kirvano.com/278d35c1-ece3-4c43-90f3-f35474a70d92" target-="_blank" rel="noopener noreferrer" className="block w-full">
                     <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg text-xl shadow-lg animate-pulse-green">
                        SIM! QUERO ESSA SUPER OFERTA!
                      </button>
                   </a>
                   <p className="text-sm font-bold text-gray-700">ATENÇÃO: <span className="font-normal">A Promoção é <u className="font-bold">LIMITADA</u> e Acabará em Breve.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
