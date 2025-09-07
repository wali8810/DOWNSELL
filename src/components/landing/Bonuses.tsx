
import Image from "next/image";

const bonusData = [
  {
    bonusNumber: "#01",
    title: "Como vender nas redes sociais",
    description: "Roteiros e exemplos para postar no Instagram, WhatsApp e marketplaces para atrair e fechar sua primeira venda em até 48 horas.",
    image: "https://imgur.com/E0QxgBv.png",
    alt: "Bônus sobre vendas nas redes sociais",
    price: "R$47,00",
  },
  {
    bonusNumber: "#02",
    title: "Manual de Vendas Pronto para Usar",
    description: "Guia rápido para oferecer suas criações sem sofrer na tentativa.",
    image: "https://imgur.com/hdbzMRu.png",
    alt: "Bônus manual de vendas",
    price: "R$37,00",
  },
  {
    bonusNumber: "#03",
    title: "Guia rápido para encontrar inspiração e vender no mesmo dia",
    description: "Acesso a uma variedade de ideias para criar novos designs.",
    image: "https://imgur.com/eIcZkRK.png",
    alt: "Bônus guia de inspiração",
    price: "R$57,00",
  },
  {
    bonusNumber: "#04",
    title: "Mini curso de publicidade e vendas",
    description: "Aprenda como promover facilmente seus produtos usando publicidade online.",
    image: "https://imgur.com/0jFdKVH.png",
    alt: "Bônus mini curso de publicidade e vendas",
    price: "R$67,00",
  },
];

export function Bonuses() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" id="bonus">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-4 text-black font-montserrat">
            BÔNUS PARA <br />
            <u className="text-black underline" style={{textDecorationColor: 'black'}}>PRIMEIRA VISITA</u>...
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 font-montserrat text-black">
            <span className="bg-yellow-400 text-black px-2 py-1">
              4 Bônus exclusivos
            </span>{" "}
            para quem adquirir o CURSO NESTA PÁGINA
          </h3>
          <h4 className="text-xl md:text-2xl font-bold uppercase text-destructive font-montserrat">
            <span style={{ color: "#FF0845" }}>
              (<u>ISSO TERMINA HOJE!</u>)
            </span>
          </h4>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {bonusData.map((bonus, index) => (
            <div
              key={index}
              className="p-4 border-2 border-dashed border-gray-300 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-2">
                <div className="md:w-1/2 text-left space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-black">
                    BÔNUS {bonus.bonusNumber}:
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold font-montserrat text-orange-500">
                    {bonus.title.toUpperCase()}
                  </h4>
                  <p className="text-base md:text-lg text-foreground/80 mt-2">{bonus.description}</p>
                   <p className="font-montserrat text-base md:text-lg">
                    <span className="text-red-500 line-through font-bold">De: {bonus.price}</span>
                  </p>
                  <p className="font-montserrat text-base md:text-lg font-bold">
                    <span className="text-green-500">Por: GRÁTIS</span>
                  </p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <Image
                    src={bonus.image}
                    alt={bonus.alt}
                    width={350}
                    height={450}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
