"use client";
import { useState, useMemo } from "react";

const categories = ["All", "Commercial", "Residential", "Other"];

/** 4 cartões por página = grelha 2×2 (Figma) */
const PAGE_SIZE = 4;

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
}

const baseProjects: Project[] = [
  {
    id: 1,
    title: "Radisson Hotel",
    location: "Av.Marginal",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    id: 2,
    title: "Baia Mall – Game",
    location: "Av. Marginal",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    id: 3,
    title: "Southern Sun",
    location: "Av. da Marginal, Maputo",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  },
  {
    id: 4,
    title: "AGHA KHAN",
    location: "Av.",
    category: "Other",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80",
  },
];

/** Imagens reutilizadas (Unsplash) para projetos extra — 16 itens → 5 páginas em “All” (4 por página) */
const ROTATING_IMAGES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
];

const projects: Project[] = [
  ...baseProjects,
  ...Array.from({ length: 16 }, (_, i) => {
    const n = i + 5;
    const cat = ["Commercial", "Residential", "Other"][i % 3] as
      | "Commercial"
      | "Residential"
      | "Other";
    return {
      id: n,
      title: `Project ${n}`,
      location: "Maputo",
      category: cat,
      image: ROTATING_IMAGES[i % ROTATING_IMAGES.length],
    };
  }),
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const pageSlice = useMemo(
    () =>
      filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE),
    [filtered, safePage]
  );

  const showPagination = totalPages > 1;

  const goBack = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const setFilter = (cat: string) => {
    setActive(cat);
    setPage(0);
  };

  return (
    <section id="projects" className="w-full bg-white py-16">
      <div className="max-w-[1054px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-6">
        {/* ── Sidebar Figma ── */}
        <div className="w-full md:w-[260px] shrink-0">
          <h2
            className="font-bold text-[#292E3D] mb-6 md:mb-9"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "26.34px",
              lineHeight: "1.173em",
            }}
          >
            Projects
          </h2>

          <div className="flex flex-row md:flex-col gap-4 md:gap-5 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <div
                key={cat}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setFilter(cat);
                }}
                onClick={() => setFilter(cat)}
                className="flex items-center cursor-pointer gap-3 bg-transparent border-none p-0 whitespace-nowrap"
                aria-label={`Filter by ${cat}`}
                aria-pressed={active === cat}
              >
                <div
                  className="shrink-0 hidden md:block"
                  style={{
                    width: "2.93px",
                    height: "20.49px",
                    backgroundColor: active === cat ? "#2947A9" : "transparent",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "13.17px",
                    lineHeight: "1.173em",
                  }}
                  className={`${active === cat ? "font-semibold text-[#2947A9] border-b-2 border-[#2947A9] md:border-none" : "font-normal text-[#C2C7D6]"}`}
                >
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grelha 2×2 + paginação Figma ── */}
        <div className="flex-1 min-w-0">
          <div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2"
            data-testid="projects-grid"
          >
            {pageSlice.map((project) => (
              <article
                key={project.id}
                className="rounded-sm overflow-hidden shadow-md flex flex-col"
                style={{
                  borderRadius: "2.93px",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-full relative bg-[#E2E8F0]"
                  style={{
                    height: "180.74px",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div
                  className="bg-[#0379B9] px-4 py-2 flex flex-col justify-center"
                  style={{ height: "61.27px", boxSizing: "border-box" }}
                >
                  <div
                    className="text-white font-bold"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "14.63px",
                      lineHeight: "1.2em",
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    className="text-white font-normal mt-1"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "11.71px",
                      lineHeight: "1.2em",
                    }}
                  >
                    {project.location}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {showPagination && (
            <>
              <div
                className="flex items-stretch mt-8 md:mt-10"
                style={{ height: "46.83px" }}
              >
                <button
                  type="button"
                  aria-label="Back"
                  disabled={safePage <= 0}
                  onClick={goBack}
                  className="bg-[#292E3D] text-white border-none flex items-center justify-center gap-2 flex-1 md:flex-none md:w-[215.86px] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "13.17px",
                  }}
                >
                  <span aria-hidden>←</span>
                  <span>Back</span>
                </button>

                <div className="flex-1 hidden md:flex items-center justify-center gap-6 px-4">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-testid="pagination-dot"
                      data-active={safePage === i ? "true" : "false"}
                      aria-label={`Página ${i + 1} de ${totalPages}`}
                      aria-current={safePage === i ? "true" : undefined}
                      onClick={() => setPage(i)}
                      className="rounded-full shrink-0 cursor-pointer p-0 border-0"
                      style={{
                        width: "11.71px",
                        height: "11.71px",
                        backgroundColor:
                          safePage === i ? "#2947A9" : "#F6F8F7",
                        border:
                          safePage === i
                            ? "none"
                            : "1px solid #E0E3EB",
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Next"
                  disabled={safePage >= totalPages - 1}
                  onClick={goNext}
                  className="bg-[#292E3D] text-white border-none flex items-center justify-center gap-2 flex-1 md:flex-none md:w-[215.86px] md:ml-0 ml-4 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "13.17px",
                  }}
                >
                  <span>Next</span>
                  <span aria-hidden>→</span>
                </button>
              </div>

              {/* Bolinhas no mobile (abaixo dos botões) */}
              <div className="flex md:hidden items-center justify-center gap-4 mt-6">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={`m-${i}`}
                    type="button"
                    data-testid="pagination-dot-mobile"
                    aria-label={`Página ${i + 1}`}
                    onClick={() => setPage(i)}
                    className="rounded-full shrink-0 cursor-pointer p-0 border-0"
                    style={{
                      width: "11.71px",
                      height: "11.71px",
                      backgroundColor:
                        safePage === i ? "#2947A9" : "#F6F8F7",
                      border:
                        safePage === i ? "none" : "1px solid #E0E3EB",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
