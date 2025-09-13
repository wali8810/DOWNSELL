
import Image from "next/image";

const bonusData = [
  {
    bonusNumber: "#01",
    title: "Kit de Estampas Listas: 100 diseños probados para usar ¡ahora mismo!",
    image: "https://imgur.com/ggAJSGi.png",
    alt: "Bônus de Kit de Estampas",
    price: "$47.000",
  },
  {
    bonusNumber: "#02",
    title: "Mini Guía de Precios Inteligentes",
    image: "https://imgur.com/hdbzMRu.png",
    alt: "Bônus manual de vendas",
    price: "$37.000",
  },
  {
    bonusNumber: "#03",
    title: "Checklist de Impresión Perfecta",
    image: "https://imgur.com/Q5sChOg.png",
    alt: "Bônus guia de inspiração",
    price: "$57.000",
  },
    {
    bonusNumber: "#04",
    title: "Guía Rápida de Aplicación con Plancha",
    image: "https://imgur.com/P07oK5g.png",
    alt: "Bônus aplicação com prancha",
    price: "$27.000",
  },
];

export function Bonuses() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" id="bonuses-section">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-4 text-black font-montserrat">
            BONO POR <br />
            <u className="text-black underline" style={{textDecorationColor: 'black'}}>PRIMERA VISITA</u>...
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 font-montserrat text-black">
            <span className="bg-yellow-400 text-black px-2 py-1">
              4 bonos exclusivos
            </span>{" "}
            para quienes compren el CURSO EN ESTA PÁGINA
          </h3>
          <h4 className="text-xl md:text-2xl font-bold uppercase text-destructive font-montserrat">
            <span style={{ color: "#FF0845" }}>
              (<u>¡TERMINA HOY!</u>)
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
                      src={bonus.image}
                      alt={bonus.alt}
                      width={300}
                      height={300}
                      className="w-auto h-auto max-w-full rounded-lg"
                      priority
                    />
                </div>
              )}
                <div className="w-full text-center space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold font-montserrat text-black">
                    BONO {bonus.bonusNumber}:
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
