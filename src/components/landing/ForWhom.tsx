'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";

const whatYouGetItems = [
    {
        icon: "✅",
        title: "O ORGULHO",
        description: "de criar caixas de luxo para momentos especiais (casamentos, nascimentos), feitas pelas suas próprias mãos."
    },
    {
        icon: "✅",
        title: "A CONFIANÇA",
        description: "de dominar o meu \"Método das 3 Peças\", para que nunca mais desperdice material e cada caixa saia perfeita."
    },
    {
        icon: "✅",
        title: "A ALEGRIA",
        description: "de ver o lucro real a entrar na sua conta, transformando menos de €1 de material em produtos desejados."
    },
    {
        icon: "✅",
        title: "A LIBERDADE",
        description: "de construir algo seu, a partir de casa, e ter uma fonte de rendimento que lhe dá segurança e independência."
    }
]

export function ForWhom() {

    return (
        <>
            <section className="relative w-full pb-10 overflow-hidden text-white pt-12 md:pt-20 bg-gray-900">
              <div className="relative container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white" style={{ fontFamily: '"Montserrat", Sans-serif', letterSpacing: '-0.9px', lineHeight: '1.1' }}>
                ESPERE! <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">O seu caminho ainda não terminou...</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                Parabéns pela sua decisão! Agora, deixe-me entregar-lhe pessoalmente o meu método completo para transformar a sua nova habilidade numa fonte de orgulho e lucro. Adicione o curso completo ao seu pedido por um pagamento único e simbólico de apenas €9,90.
                </p>
                <div className="mt-8 flex justify-center">
                    <Image
                        src="https://picsum.photos/seed/upsellMain/608/405"
                        alt="Mockup do curso Vivendo da Caixa"
                        width={608}
                        height={405}
                        className="max-w-full h-auto rounded-lg shadow-2xl"
                        data-ai-hint="course bundle mockup"
                        priority
                    />
                </div>
                 <div className="mt-8">
                    <a href="#plans" className="inline-block">
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl md:text-2xl h-auto py-4 px-10 rounded-lg shadow-lg animate-pulse-green whitespace-normal text-center leading-tight">
                            SIM, EU QUERO! Adicione o método completo ao meu pedido por €9,90.
                        </Button>
                    </a>
                    <p className="mt-2 text-sm text-white/80">
                        ✅ Sim, adicione com 1 clique sem precisar de preencher os dados novamente. Compra 100% segura e acesso imediato.
                    </p>
                </div>
              </div>
            </section>

            <section className="py-12 bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 uppercase tracking-wide">
                           Isto é o que eu quero que você sinta e consiga, talvez já na próxima semana:
                        </h2>

                        <div className="text-left space-y-6 mb-8 max-w-2xl mx-auto">
                            {whatYouGetItems.map((item, index) => (
                                <div key={index} className="flex items-start text-base md:text-lg">
                                    <span className="text-2xl mr-3 w-8 text-center">{item.icon}</span>
                                    <span><span className="font-bold">{item.title}</span>: {item.description}</span>
                                 </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
