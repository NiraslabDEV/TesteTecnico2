/* Services: blocos idênticos ao Figma — cada cartão é um SVG exportado completo (public/services/) */

import Image from "next/image";

/**
 * Ordem Figma:
 * Linha 1: Civil (branco) | Hydrology (azul) | Sanitation (branco)
 * Linha 2: Roads (azul) | Ports (branco) | Earthworks (azul)
 */
const services = [
  {
    id: "civil-construction",
    src: "/services/civil-construction.svg",
    alt: "Civil Construction",
    width: 250,
    height: 184,
  },
  {
    id: "hydrology",
    src: "/services/hydrology.svg",
    alt: "Hydrology",
    width: 250,
    height: 184,
  },
  {
    id: "sanitation",
    src: "/services/sanitation.svg",
    alt: "Sanitation",
    width: 250,
    height: 184,
  },
  {
    id: "roads-transportation",
    src: "/services/roads-transportation.svg",
    alt: "Roads and Transportation",
    width: 250,
    height: 184,
  },
  {
    id: "ports-waterways",
    src: "/services/ports-waterways.svg",
    alt: "Ports and Waterways",
    width: 249,
    height: 184,
  },
  {
    id: "earthworks",
    src: "/services/earthworks.svg",
    alt: "Earthworks",
    width: 249,
    height: 184,
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      style={{
        width: "100%",
        minHeight: "444.89px",
        backgroundColor: "#F6F8F7",
      }}
    >
      <div className="max-w-[1054px] mx-auto px-5 py-10">
        <h2
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 700,
            fontSize: "26.34px",
            lineHeight: "1.173em",
            color: "#292E3D",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Services
        </h2>

        {/* 3×2 — cada célula mostra o SVG do Figma por completo */}
        <div className="mx-auto grid w-full max-w-[820px] grid-cols-1 justify-items-center gap-x-8 gap-y-6 min-[520px]:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex w-full max-w-[250px] justify-center"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="h-auto w-full max-w-[249px]"
                unoptimized
                priority={s.id === "civil-construction"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
