
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
        <section className="py-16 md:py-24 bg-white text-black">
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

                    <h2 className="text-2xl font-bold uppercase text-white bg-yellow-400 inline-block px-4 py-2 mb-8">
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
                        <a href="#bonus">
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl h-auto py-4 px-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                QUERO APROVEITAR
                            </Button>
                        </a>
                    </div>
                    
                    <p className="text-gray-600 mb-8">Seguindo o curso, <b>você NÃO precisa de:</b> experiência, materiais caros ou passar horas trabalhando</p>

                    <hr className="border-gray-300 my-8" />
                </div>
            </div>
        </section>
    );
}
