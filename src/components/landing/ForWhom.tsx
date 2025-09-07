
import Image from "next/image";
import { Button } from "@/components/ui/button";

const forWhomItems = [
    "Trabalhar de 3 a 4 horas por semana e ter mais liberdade de tempo.",
    "Sonha em ter um negócio altamente lucrativo independente da região.",
    "Começar a trabalhar na profissão que mais cresce em 2025.",
    "Para você que quer ganhar entre 4 a 7 mil por mês."
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
    <svg aria-hidden="true" className="h-6 w-6 text-green-500 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06l-3.25 3.25-1.5-1.5a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.75-3.75z" clipRule="evenodd" />
    </svg>
)

export function ForWhom() {
    return (
        <section className="py-16 md:py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">
                        PARA QUEM É O CURSO <span style={{color:"#FFAD00"}}>BALÃO DECORA?</span>
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
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl h-auto py-4 px-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
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
