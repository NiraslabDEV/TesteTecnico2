"use client";
import { useState } from "react";

const categories = ["All", "Commercial", "Residential", "Other"];

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
}

const projects: Project[] = [
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

export default function Projects() {
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(0);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const isAll = active === "All";
  /** Em "All" mostra todos os projetos; com filtro, um por página. */
  const safePage = isAll
    ? 0
    : Math.min(page, Math.max(0, filtered.length - 1));
  const visible = isAll
    ? filtered
    : filtered.length
      ? [filtered[safePage]]
      : [];
  const showPagination = !isAll && filtered.length > 1;

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        minHeight: "803.44px",
        backgroundColor: "#FFFFFF",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1054px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* ── Left Sidebar ── */}
        <div style={{ width: "260px", flexShrink: 0 }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "26.34px",
              lineHeight: "1.173em",
              color: "#292E3D",
              marginBottom: "36px",
            }}
          >
            Projects
          </h2>

          {/* Filter list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setPage(0);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "12px",
                }}
              >
                {/* Blue left-border indicator */}
                <div
                  style={{
                    width: "2.93px",
                    height: "20.49px",
                    flexShrink: 0,
                    backgroundColor:
                      active === cat ? "#2947A9" : "transparent",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: active === cat ? 600 : 400,
                    fontSize: "13.17px",
                    lineHeight: "1.173em",
                    color: active === cat ? "#2947A9" : "#C2C7D6",
                  }}
                >
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Content ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* 2 × 2 Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {visible.map((project) => (
              <div
                key={project.id}
                style={{
                  borderRadius: "2.93px",
                  overflow: "hidden",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    width: "100%",
                    height: "180.74px",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#B0C4D8",
                  }}
                />

                {/* Blue banner */}
                <div
                  style={{
                    backgroundColor: "#0379B9",
                    padding: "10px 14.63px",
                    height: "61.27px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "14.63px",
                      lineHeight: "1.2em",
                      color: "#FFFFFF",
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "11.71px",
                      lineHeight: "1.2em",
                      color: "#FFFFFF",
                      marginTop: "2px",
                    }}
                  >
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação só com filtro (não em "All") e com 2+ projetos */}
          {showPagination && (
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                marginTop: "24px",
                height: "46.83px",
              }}
            >
              <button
                aria-label="Back"
                onClick={() => setPage(Math.max(0, safePage - 1))}
                style={{
                  flex: "0 0 215.86px",
                  backgroundColor: "#292E3D",
                  color: "#FFFFFF",
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "13.17px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span>←</span>
                <span>Back</span>
              </button>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "23.4px",
                }}
              >
                {Array.from({ length: filtered.length }).map((_, i) => (
                  <div
                    key={i}
                    data-testid="pagination-dot"
                    data-active={safePage === i ? "true" : "false"}
                    onClick={() => setPage(i)}
                    style={{
                      width: "11.71px",
                      height: "11.71px",
                      borderRadius: "50%",
                      backgroundColor: safePage === i ? "#2947A9" : "#F6F8F7",
                      border: safePage === i ? "none" : "1px solid #E0E3EB",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() =>
                  setPage(Math.min(filtered.length - 1, safePage + 1))
                }
                style={{
                  flex: "0 0 215.86px",
                  backgroundColor: "#292E3D",
                  color: "#FFFFFF",
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "13.17px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span>Next</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
