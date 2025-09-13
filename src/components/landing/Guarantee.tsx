
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex flex-col items-center">
                <Image 
                    src="https://imgur.com/Iy8hfnH"
                    alt="Selo de Garantia de 30 dias"
                    width={250}
                    height={250}
                    className="mx-auto mix-blend-multiply"
                    data-ai-hint="satisfaction guarantee seal"
                />
                <div className="text-center mt-8">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-destructive uppercase tracking-wide mb-2">¡PRODUCTO CON RIESGO CERO!</h3>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">EL CURSO TIENE GARANTÍA <br/>INCONDICIONAL DE 30 DÍAS</h4>
                    <div className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        <p className="mb-4">Estás protegido por las leyes de protección al consumidor.</p>
                        <p className="mb-4">Si por alguna razón crees que no es para ti o no te adaptas, solo tienes que contactarnos (Email: contato@cartoesdecorativos.shop) <b>dentro del plazo de 30 días</b> y solicitar el reembolso total de tu inversión.</p>
                        <p>Recibirás de vuelta cada centavo que pagaste.</p>
                    </div>
                </div>
            </div>
            
            <hr className="border-border my-12" />

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                ¡HAZ CLIC EN EL BOTÓN DE ABAJO PARA ASEGURAR <strong className="text-destructive">EL CURSO CON 89% DE DESCUENTO!</strong>
            </h2>

            <div className="mb-8">
                <a href="#plans" className="inline-block">
                  <Button size="lg" className="cta-button shadow-lg text-center h-auto py-4 px-6 md:px-8 text-base md:text-xl">
                    LIBERA TU ACCESO AL CURSO
                  </Button>
                </a>
            </div>

            <Image 
                src="https://imgur.com/VdsGY9a.png"
                alt="Compra segura, satisfacción garantizada"
                width={500}
                height={100}
                className="mx-auto max-w-full h-auto"
                data-ai-hint="secure purchase logos"
            />
        </div>
    </section>
  );
}
