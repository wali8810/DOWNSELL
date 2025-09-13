
'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";

const forWhomItems = [
    "Para quienes desean trabajar desde casa, dedicando solo unas horas a la semana y aun así lograr libertad de tiempo.",
    "Para quienes sueñan con tener un negocio rentable, que no dependa de la ciudad o región donde viven.",
    "Para quienes quieren aprovechar la tendencia que más crece en 2025: los productos personalizados con plancha.",
    "Para quienes quieren transformar papel en dinero y obtener ganancias entre $800 y $1.400 por mes (aproximadamente, según tu inversión y tiempo)."
]

const whatYouGetItems = [
    {
        icon: "🎯",
        title: "DE PRINCIPIANTE A AVANÇADO",
        description: "Recibirás la guía para crear productos personalizados increíbles y convertirte en la profesional mejor paga de tu zona."
    },
    {
        icon: "💰",
        title: "GUÍA DE PRECIO",
        description: "Consejos valiosos para evitar gastos que parecen “ventajosos” pero que reducen tu ganancia."
    },
    {
        icon: "💎",
        title: "SOPORTE INDIVIDUAL",
        description: "Mi contacto personal para aclarar dudas y brindarte consejos personalizados."
    },
    {
        icon: "🚀",
        title: "GRUPO DE ALUMNAS",
        description: "Grupo exclusivo para intercambio de tips y experiencias con otras emprendedoras."
    },
    {
        icon: "🧠",
        title: "GUÍA DE MATERIALES",
        description: "Cómo comenzar tu negocio usando materiales económicos que generan alta rentabilidad."
    }
]

const carouselImages = [
    "https://imgur.com/UKAI3ZD.png",
    "https://imgur.com/kouuIKY.png",
    "https://imgur.com/RNfHvRD.png",
    "https://imgur.com/OrZF0j3.png",
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
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-white" style={{ fontFamily: '"Montserrat", Sans-serif', letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                Cómo crear <span className="bg-green-500 px-2">productos personalizados que se vendan en 48 horas</span> usando solo una impresora normal y una plancha
                </h2>
                <div className="mt-8 flex justify-center">
                    <Image
                        src="https://imgur.com/oCI618G.png"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-red-500"><s>DE $59.900</s></h2>
                        <h2 className="text-xl md:text-2xl font-bold uppercase mt-2 text-black">POR SOLO</h2>
                        <h2 className="text-6xl md:text-7xl font-extrabold text-green-600 mt-1">$18.000</h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">¡RIESGO CERO!</h2>
                        <a href="#plans" className="mt-6 inline-block">
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl h-auto py-4 px-8 rounded-lg shadow-lg animate-pulse-green">
                                QUIERO APROVECHAR
                            </Button>
                        </a>
                        <hr className="mt-8 border-t-2 border-black font-bold w-full" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 uppercase tracking-wide">
                            ¿PARA QUIÉN ES EL MÉTODO ESTAMPA MÁGICA?
                        </h2>
                        <ul className="space-y-4 text-left mb-12 max-w-2xl mx-auto">
                            {forWhomItems.map((item, index) => (
                                <li key={index} className="flex items-center text-lg md:text-xl">
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4 my-8"></div>

                        <h2 className="text-xl md:text-2xl font-bold uppercase text-black bg-yellow-400 inline-block px-4 py-2 mb-8">
                            MIRA LO QUE RECIBIRÁS:
                        </h2>

                        <div className="text-left space-y-6 mb-8 max-w-2xl mx-auto">
                            {whatYouGetItems.map((item, index) => (
                                <p key={index} className="flex items-start text-base md:text-lg">
                                    <span className="text-2xl mr-3 w-8 text-center">{item.icon}</span>
                                    <span><span className="underline font-bold">{item.title}</span>: {item.description}</span>
                                 </p>
                            ))}
                        </div>

                        <div className="my-8">
                            <p className="font-bold underline text-lg mb-4">Productos que puedes empezar a hacer hoy:</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                                {carouselImages.map((src, index) => (
                                    <div key={index} className="aspect-square">
                                        <Image
                                            src={src}
                                            alt={`Example image ${index + 1}`}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <a href="#plans">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl h-auto py-4 px-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                                    ¡QUIERO APROVECHAR!
                                </Button>
                            </a>
                        </div>
                        
                        <p className="text-gray-600 mb-8 text-sm md:text-base">Siguiendo este curso, <b>NO necesitas:</b> experiencia previa, materiales caros ni pasar horas trabajando.</p>

                        <hr className="border-t-2 border-black font-bold w-full" />
                    </div>
                </div>
            </section>
        </>
    );
}
