'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

enum Version {
  dele = "dele",
  dela = "dela"
}

const Divider = () => (
  <div className="w-full min-h-4 flex flex-col justify-center items-center">
    <div className=" border-b-2 self-center border-theme-green min-w-32" />
  </div>
)

export default function Home() {

  const [version, setVersion] = useState<Version>(Version.dela)
  const VersionMap = {
    dela: (
      <>
        <span> “Eu e o Hugo nos encontramos algumas vezes na igreja A Casa e nos cultos do Outside (grupo de jovens da igreja). Trocamos mensagens por um tempo e saímos. Com 1 mês que havíamos nos conhecido, começamos a namorar.</span>
        <br />
        <span>Viajamos juntos, nos alegramos, passamos por algumas situações desafiadoras e muitas mudanças, e no dia 23 de Novembro de 2024 iremos caminhar juntos como família com o amor de Deus e bençãos sem medidas sobre nós. Esteja com a gente nessa nova etapa das nossas vidas.”</span>
        <br />
      </>
    ),
    dele: (
      <>
        <span>Mesmo antes de eu pensar em conhecer a Laura, mal sabia que tinha todo um trabalho rolando no backstage pra que eu e ela pudéssemos nos conhecer e (quem sabe) construir algo juntos, e isso pra mim foi muito maluco!</span>
        <br />
        <span>Desde o primeiro “Oi” no chat do Instagram até o dia de hoje, passamos por diversas situações que nos amadureceram mais rápido do que pensamos, mas que bom que nos permitimos viver um dia de cada vez até chegarmos a decisão de formar a nossa família
        </span>
        <br />
        <span>Confesso que o começo não foi o dos mais fáceis (nunca uma feijoada foi tão difícil de comer pra mim kkkk), mas com o passar do tempo fomos nos entendendo, entendendo o contexto de cada um e decidimos juntos dar um passo em direção a construção da nossa história.
        </span>
        <br />
        <span>Estou ansioso pra viver mais esse capítulo da minha vida ao lado dela, e espero você lá para prestigiar esse momento que Deus preparou pra nós!</span>
        <br />
      </>
    )
  }

  return (
    <main className="caontainer bg-gray-1000 py-6 md:py-12 px-12 flex flex-col gap-16">
      <article id="header">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">O casamento de Laura & Hugo</h1>
          <ul className="flex space-x-6 text-black max-sm:hidden">
            <li>
              <Link className="hover:underline font-bold" href="#">
                É Padrinho/Madrinha? Clique aqui.
              </Link>
            </li>
          </ul>
        </nav>
        <section id="sobre-o-evento">
          <div className="flex flex-col lg:gap-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem] md:tracking-tighter">
                O casamento de{" "}
                <br className="md:hidden" />
                Laura & Hugo{"\n                    "}
              </h2>
              <p id="data-do-evento" className="text-gray-500">
                <strong>SAVE THE DATE - </strong>
                23/11/2024</p>
              <ul className="flex space-x-6 text-black sm:hidden">
                <li>
                  <Link className="underline font-bold" href="#">
                    É Padrinho/Madrinha? Clique aqui.
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-8 w-full justify-between">
              <div className="w-1/2">
                <p className="text-xl leading-7 md:text-2xl xl:text-3xl">

                  Join us as we celebrate our love and commitment to each other. #TEXTO1
                </p>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide uppercase lg:text-2xl">Detalhes do Evento #TEXTO2 </h2>
                  <p className="text-sm leading-6 md:text-base">
                    Cerimônia: 4:00 PM  #TEXTO3
                    <br />
                    Recepção: 5:30 PM  #TEXTO4
                    <br />
                    Festa: 6:30 PM  #TEXTO5
                    <br />
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-4 text-sm md:gap-2 object-cover">
                <figure>
                  <Image src="https://cdn0.casamentos.com.br/vendor/8896/original/1280/jpg/a58bd74a-404a-44a1-b9a5-52ac8a6dc3df_13_228896-161209763381320.webp" alt="Foto do lugar" width={450} height={120} />
                </figure>
                <p className="text-xs text-gray-800">Imagens do local</p>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Divider />
      <article id="historia">
        <section className="flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem] md:tracking-tighter">
              Nossa história
            </h2>
            <div className="flex flex-col items-center gap-1.5 md:gap-1">
              <Image
                alt="Foto do casal"
                className="aspect-[0.85] max-w-[22.5rem] rounded-lg object-cover"
                src="/foto-casal.jpg"
                height="450"
                width="500"
              />
              <p className="text-xs text-gray-500">Laura e Hugo</p>
            </div>
          </div>
          <div className="grid items-start gap-4 text-sm md:gap-2">
            <div className="flex flex-col">
              <p className="text-base flex flex-col leading-7 md:text-xl xl:text-2xl italic">
                {VersionMap[version]}
              </p>
              <strong className="text-bold text-lg">
                Por {version === Version.dele ? 'Hugo César' : 'Laura Dupin'}
              </strong>
              <p className="hover:underline cursor-pointer text-base" onClick={() => setVersion(prevState => prevState === Version.dele ? Version.dela : Version.dele)}>
                Clique para ler na versão {version === Version.dele ? 'dela' : 'dele'}
              </p>
            </div>
          </div>
        </section>
      </article>
      <Divider />
      <article id="píx">
        <section className="flex flex-col gap-12 lg:gap-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem] md:tracking-tighter">
            Ajude-nos no pix!
          </h2>
        </section>
        <section className="grid items-start gap-4 text-sm md:gap-2" id="pix">
          <div className="space-y-4">
            <section className="flex flex-col items-center gap-4">
              <p className="text-base flex text-center flex-col leading-7 md:text-xl xl:text-2xl">
                <span> Ajude esse casal de jovens a se casar fazendo um Pix, qualquer valor é bem vindo.</span>
                <span>Aponte seu celular para o QR code na tela COM O APP DO SEU BANCO!</span>
              </p>
              <figure>
                <Image src='QRCode.svg' alt="QRCode" width={360} height={360} />
              </figure>
            </section>
          </div>
        </section>
      </article>
      <Divider />
      <article>
        <div className="grid gap-12 lg:gap-16">
          <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem] md:tracking-tighter">
            Onde vai ser?
          </h2>
          <div className="grid items-start gap-4 text-sm md:gap-2">
            <div className="space-y-4">
              <p className="text-base leading-7 md:text-xl xl:text-2xl">
                Our wedding will take place at the beautiful Rosewood Manor. The historic charm of the venue and the
                picturesque gardens provide the perfect backdrop for our special day.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
