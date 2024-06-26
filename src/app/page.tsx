'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

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


  const [version, setVersion] = useState<Version>(Version.dela);
  const testimonyRef = useRef<HTMLParagraphElement>(null);

  const onChangeTestimony = () => {

    setVersion(prevState => prevState === Version.dele ? Version.dela : Version.dele)

    if (testimonyRef.current) {
      testimonyRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }

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
        <span>Confesso que o começo não foi o dos mais fáceis (nunca uma feijoada foi tão difícil de comer kkkk), mas com o passar do tempo fomos nos entendendo e decidimos juntos dar um passo em direção a construção da nossa história.
        </span>
        <br />
        <span>Estou ansioso pra viver mais esse capítulo da minha vida ao lado dela, e espero você lá para prestigiar esse momento que Deus preparou pra nós!</span>
        <br />
      </>
    )
  }

  return (
    <main className="caontainer bg-white py-6 md:py-12 px-12 flex flex-col gap-16">
      <article id="header">
        <nav className="flex items-center justify-between">
          <ul className="flex space-x-6 text-black max-sm:hidden mb-4">
            <li>
              <Link className="hover:underline font-bold" href="#">
                É Padrinho/Madrinha? Clique aqui.
              </Link>
            </li>
          </ul>
        </nav>
        <section id="sobre-o-evento">
          <div className="flex flex-col lg:gap-16">
            <div className="flex flex-col max-sm:gap-6 max-sm:mb-6">
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
          </div>
        </section>
      </article>
      <Divider />
      <article id="historia">
        <section className="flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h2 ref={testimonyRef} className="text-3xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem] md:tracking-tighter">
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
              <p className="text-base flex flex-col md:text-xl xl:text-xl italic">
                {VersionMap[version]}
              </p>
              <strong className="text-bold text-lg">
                Por {version === Version.dele ? 'Hugo César' : 'Laura Dupin'}
              </strong>
              <p className="hover:underline cursor-pointer text-base" onClick={() => onChangeTestimony()}>
                Clique para ler na versão {version === Version.dele ? 'dela' : 'dele'}
              </p>
            </div>
          </div>
        </section>
      </article>
      <Divider />
      <article>
        <div className="grid gap-12 lg:gap-16">
          <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem] md:tracking-tighter">
            Onde vai ser?
          </h2>
          <div className="flex gap-8 max-sm:flex-col w-full justify-between">
            <div className="flex flex-col max-sm:gap-8 sm:w-1/2">
              <p className="text-xl leading-7 md:text-2xl xl:text-3xl mb-4">
                Celebre conosco essa nova etapa em nossas vidas!
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide uppercase">Detalhes do Evento </h2>
                <p className="text-[1.25rem] leading-6 md:text-base">
                  <span className="font-semibold">Recepção
                  </span> - 10:00 (manhã)
                  <br />
                  <span className="font-semibold">
                    Cerimônia
                  </span> - 10:30 (manhã)
                  <br />
                  <span className="font-semibold">
                    Festa
                  </span> - 12:00 (meio-dia)
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-10">
              <p className="text-base text-center leading-7 md:text-xl xl:text-2xl">
                Nossa cerimônia acontecerá no ESPAÇO REIS RECEPÇÕES. Veja no mapa abaixo como chegar!
              </p>

              <section className="rounded-md flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.886792527264!2d-46.8456741237206!3d-23.751416078669603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfb2be522a60e9%3A0x55d5ecf0d9532700!2zUmVpcyBSZWNlcMOnw7Vlcw!5e0!3m2!1sen!2sbr!4v1711751216620!5m2!1sen!2sbr&hl=pt-BR"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>

              </section>
              <div className="flex flex-col items-center justify-start gap-4 text-sm md:gap-2 object-cover">
                <figure>
                  <Image src="https://cdn0.casamentos.com.br/vendor/8896/original/1280/jpg/a58bd74a-404a-44a1-b9a5-52ac8a6dc3df_13_228896-161209763381320.webp" alt="Foto do lugar" width={450} height={120} lang="pt" />
                </figure>
                <p className="text-xs text-gray-800">Imagem do local</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Divider />
      <article id="píx">
        <section className="flex flex-col gap-12 lg:gap-16 mb-4">
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
    </main>
  );
}
