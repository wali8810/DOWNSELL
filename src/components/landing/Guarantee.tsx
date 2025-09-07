
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://imgur.com/3nS8KCV.png"
                    alt="Selo de Garantia de 30 dias"
                    width={250}
                    height={250}
                    className="mx-auto mix-blend-multiply"
                    data-ai-hint="satisfaction guarantee seal"
                />
                <div className="text-center mt-8">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">PRODUTO COM RISCO ZERO!</h3>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">O CURSO TEM GARANTIA <br/>INCONDICIONAL DE 30 DIAS</h4>
                    <div className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        <p className="mb-4">Você está sob proteção do <strong>Código de Defesa do Consumidor</strong> – LEI Nº 8.078, de 11 de setembro de 1990.</p>
                        <p className="mb-4">Se por algum motivo você achar que não é para você ou não se adaptar, basta entrar em contato (Email: contato@balaodecora.shop) <b>dentro do prazo de 30 dias</b> e solicitar o reembolso total do valor investido.</p>
                        <p>Você receberá de volta cada centavo que pagou.</p>
                    </div>
                </div>
            </div>
            
            <hr className="border-border my-12" />

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                CLIQUE NO BOTÃO ABAIXO PARA GARANTIR <strong className="text-destructive">O CURSO COM 89% OFF!</strong>
            </h2>

            <div className="mb-8">
                <a href="#plans" className="inline-block">
                  <Button size="lg" className="cta-button shadow-lg text-center h-auto py-4 px-6 md:px-8 text-base md:text-xl">
                    LIBERE SEU ACESSO AO CURSO
                  </Button>
                </a>
            </div>

            <Image 
                src="https://imgur.com/VdsGY9a.png"
                alt="Compra segura, satisfação garantida"
                width={500}
                height={100}
                className="mx-auto max-w-full h-auto"
                data-ai-hint="secure purchase logos"
            />
        </div>
    </section>
  );
}
