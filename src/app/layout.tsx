import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Curso de Cartões Decorados',
  description: 'Ganhe de US$ 1.200 a US$ 1.800 por mês criando cartões decorados que se vendem sozinhos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/notiflix@2.6.0/dist/notiflix-aio-2.6.0.min.js" async></script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=797399392968384&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />

        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
          async
          defer
        />
        <Script id="meta-pixel-script" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '797399392968384');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="notiflix-sales" strategy="afterInteractive">
          {`
            var position = "right-top";
            var color = "verde";
            var animation = "from-right";
            var product_name = "";
            var phrase = "acabou de comprar";
            var timeout = 4000;
            var type_name = "masc, fem";
            var msg_final = "";
            var min_time = 4;
            var max_time = 20;

            var names_masc = ['Jose', 'Joao', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 'Mateus', 'Andre', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cicero', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 'David', 'Renan', 'Severino', 'Fabricio', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Helio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otavio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'];
            var names_fem = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliane'];
            var option = {
                position: position,
                cssAnimationStyle: animation,
                plainText: false,
                timeout: timeout
            };

            function show_notification() {
                if (typeof Notiflix === 'undefined') {
                    setTimeout(show_notification, 100);
                    return;
                }
                
                if (type_name == "masc") {
                    msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
                } else if (type_name == "fem") {
                    msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
                } else {
                    var array_aux = ["masc", "fem"];
                    if (array_aux[Math.floor(Math.random() * array_aux.length)] == "masc") {
                        msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
                    } else {
                        msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
                    }
                }
                msg_final += " " + phrase + " " + product_name;
                if (color == "verde") {
                    Notiflix.Notify.Success(msg_final, option);
                }
                if (color == "azul") {
                    Notiflix.Notify.Info(msg_final, option);
                }
                if (color == "vermelho") {
                    Notiflix.Notify.Failure(msg_final, option);
                }
                if (color == "amarelo") {
                    Notiflix.Notify.Warning(msg_final, option);
                }
                var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
                setTimeout(show_notification, rand * 1000);
            }
            setTimeout(show_notification, 4 * 1000);
          `}
        </Script>
      </body>
    </html>
  );
}
