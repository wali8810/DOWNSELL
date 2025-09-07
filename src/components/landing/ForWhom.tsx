
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
    <svg aria-hidden="true" className="h-6 w-6 text-primary mr-3 shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>
    </svg>
)

export function ForWhom() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">
                        PARA QUEM É O CURSO <span style={{color:"#FFAD00"}}>BALÃO DECORA?</span>
                    </h2>
                    <ul className="space-y-4 text-left mb-12">
                        {forWhomItems.map((item, index) => (
                            <li key={index} className="flex items-center text-lg p-4 rounded-lg bg-card border border-border shadow-md">
                                <CheckIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="space-y-4 my-8"></div>

                    <h2 className="text-2xl font-bold uppercase text-white bg-accent inline-block px-4 py-2 rounded-md mb-8">
                        VEJA O QUE VOCÊ VAI RECEBER:
                    </h2>

                    <div className="text-left space-y-6 mb-8">
                        {whatYouGetItems.map((item, index) => (
                             <p key={index} className="flex items-start text-lg">
                                <span className="text-2xl mr-3">{item.icon}</span>
                                <span><span className="underline font-bold">{item.title}</span>: {item.description}</span>
                            </p>
                        ))}
                    </div>

                    <div className="mb-8">
                        <Image
                            src="https://balaodecora.shop/wp-content/uploads/2024/05/super-mockups-405-x-270-px-1.jpg"
                            alt="Mockup dos materiais do curso"
                            width={506}
                            height={338}
                            className="rounded-lg shadow-xl mx-auto"
                        />
                    </div>
                    
                    <div className="mb-8">
                        <a href="#bonus">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl h-auto py-4 px-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                QUERO APROVEITAR
                            </Button>
                        </a>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">Seguindo o curso, <b>você NÃO precisa de:</b> experiência, materiais caros ou passar horas trabalhando</p>

                    <hr className="border-border my-8" />
                </div>
            </div>
        </section>
    );
}
