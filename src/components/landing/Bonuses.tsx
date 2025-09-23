import Image from "next/image";
import imageData from '@/app/lib/placeholder-images.json';

const bonusData = [
  {
    bonusNumber: "#01",
    title: "A Minha Lista Secreta de Fornecedores",
    image: imageData.supplierList,
    price: "19,90€",
  },
  {
    bonusNumber: "#02",
    title: "Moldes Prontos das 5 Medidas Mais Vendidas",
    image: imageData.boxTemplates,
    price: "29,90€",
  },
];

export function Bonuses() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" id="bonuses-section">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-4 text-black font-montserrat">
            E ainda leva estes BÓNUS EXCLUSIVOS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 font-montserrat text-black">
            <span className="bg-yellow-400 text-black px-2 py-1">
              (Valor Total: 49,80€)
            </span>
          </h3>
          <h4 className="text-xl md:text-2xl font-bold uppercase text-green-600 font-montserrat">
            <span>
              Hoje é GRÁTIS!
            </span>
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonusData.map((bonus, index) => (
            <div
              key={index}
              className="p-4 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center text-center"
            >
              {bonus.image && (
                <div className="w-full flex items-center justify-center mb-4">
                    <Image
                      src={bonus.image.src}
                      alt={bonus.image.alt}
                      width={bonus.image.width}
                      height={bonus.image.height}
                      className="w-auto h-auto max-w-full rounded-lg"
                      data-ai-hint={bonus.image.hint}
                    />
                </div>
              )}
                <div className="w-full text-center space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold font-montserrat text-black">
                    BÓNUS {bonus.bonusNumber}:
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold font-montserrat text-orange-500 min-h-[3em]">
                    {bonus.title.toUpperCase()}
                  </h4>
                   <p className="font-montserrat text-base md:text-lg">
                    <span className="text-red-500 line-through font-bold">De: {bonus.price}</span>
                  </p>
                  <p className="font-montserrat text-base md:text-lg font-bold">
                    <span className="text-green-500">Por: GRÁTIS</span>
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
