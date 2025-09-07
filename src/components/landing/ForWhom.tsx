
import Image from "next/image";
import { Button } from "@/components/ui/button";

const forWhomItems = [
    "Para quem deseja trabalhar em casa, dedicando apenas algumas horas por semana e ainda assim conquistar liberdade de tempo.",
    "Para quem sonha em ter um negócio lucrativo, que não depende da cidade ou região onde mora.",
    "Para quem busca aproveitar a tendência que mais cresce em 2025: os cartões decorativos.",
    "Para quem quer transformar papel em dinheiro e alcançar ganhos entre R$4.000,00 a R$7.000,00 por mês."
]

const whatYouGetItems = [
    {
        icon: "🎯",
        title: "ZERO AO AVANÇADO",
        description: "Você receberá o guia para criar decorações com balões e ser a profissional mais bem paga da sua cidade"
    },
    {
        icon: "💰",
        title: "ECONOMIA",
        description: "Dicas valiosas para fugir de gastos que aparentam ser “vantajosos” e acabam com o lucro"
    },
    {
        icon: "💎",
        title: "SUPORTE INDIVIDUAL",
        description: "Meu contato (particular) para esclarecer dúvidas e ganhar diversas dicas personalizadas"
    },
    {
        icon: "🚀",
        title: "GRUPO DE ALUNOS",
        description: "Grupo exclusivo de alunos para trocas de dicas e experiências"
    },
    {
        icon: "🧠",
        title: "BAIXO CUSTO",
        description: "Como começar seu negócio com materiais de baixo custo que geram alta taxa de lucro"
    }
]

const CheckIcon = () => (
    <svg aria-hidden="true" className="h-6 w-6 text-green-500 mr-3 shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
    </svg>
)

export function ForWhom() {
    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-12 md:pt-20">
              <div className="absolute inset-0 w-full h-full" style={{
                  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2560 720' preserveAspectRatio='none'><defs><linearGradient id='heroGrad' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='%23FF7A00'/><stop offset='45%' stop-color='%23FF8A20'/><stop offset='100%' stop-color='%23F70693'/></linearGradient></defs><path d='M0,0 H2560 V512 L0,600 Z' fill='url(%23heroGrad)'/><path d='M0,600 L2560,512 V720 H0 Z' fill='%23FFFFFF'/></svg>\")",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }}>
              </div>
              <div className="relative container mx-auto px-4 text-center z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-white" style={{ fontFamily: '"Montserrat", Sans-serif', letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                    Do zero ao seu primeiro<br/>
                     <span style={{color: '#fff', backgroundColor: '#47CB59'}}>cartão decorativo lucrativo</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl font-semibold uppercase text-white" style={{ fontFamily: '"Montserrat", Sans-serif' }}>
                    O passo a passo que mais de 1.200 pessoas usam para ganhar até R$3.000,00 por mês criando em casa
                </p>
                <div className="mt-8 flex justify-center">
                    <Image
                        src="https://imgur.com/mva0uTH.png"
                        alt="Mockup do curso e bônus"
                        width={608}
                        height={405}
                        className="max-w-full h-auto"
                        data-ai-hint="course bundle mockup"
                    />
                </div>
              </div>
            </section>

            <section className="bg-white pt-10 pb-0">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-red-500"><s>DE R$59,90</s></h2>
                        <h2 className="text-xl md:text-2xl font-bold uppercase mt-2 text-black">POR APENAS</h2>
                        <h2 className="text-6xl md:text-7xl font-extrabold text-green-600 mt-1">R$14,90</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">RISCO ZERO!</h2>
                        <a href="#plans" className="mt-6 inline-block">
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl h-auto py-4 px-8 rounded-lg shadow-lg animate-pulse-green">
                                QUERO APROVEITAR
                            </Button>
                        </a>
                        <hr className="mt-8 border-t-2 border-black font-bold w-full" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">
                            PARA QUEM É O MÉTODO <span style={{color:"#FFAD00"}}>CARTÕES DECORATIVOS?</span>
                        </h2>
                        <ul className="space-y-4 text-left mb-12 max-w-2xl mx-auto">
                            {forWhomItems.map((item, index) => (
                                <li key={index} className="flex items-center text-lg">
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4 my-8"></div>

                        <h2 className="text-xl md:text-2xl font-bold uppercase text-black bg-yellow-400 inline-block px-4 py-2 mb-8">
                            VEJA O QUE VOCÊ VAI RECEBER:
                        </h2>

                        <div className="text-left space-y-6 mb-8 max-w-2xl mx-auto">
                            {whatYouGetItems.map((item, index) => (
                                <p key={index} className="flex items-start text-lg">
                                    <span className="text-2xl mr-3 w-8 text-center">{item.icon}</span>
                                    <span><span className="underline font-bold">{item.title}</span>: {item.description}</span>
                                 </p>
                            ))}
                        </div>

                        <div className="mb-8">
                            <a href="#plans">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl h-auto py-4 px-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    QUERO APROVEITAR
                                </Button>
                            </a>
                        </div>
                        
                        <p className="text-gray-600 mb-8">Seguindo o curso, <b>você NÃO precisa de:</b> experiência, materiais caros ou passar horas trabalhando</p>

                        <hr className="border-t-2 border-black font-bold w-full" />
                    </div>
                </div>
            </section>
        </>
    );
}
