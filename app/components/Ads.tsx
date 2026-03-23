/* Ads / CTA Banner — 1054×219.52px (Figma) */
export default function Ads() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "219.52px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background kitchen photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 70% black overlay (matches Figma fill-opacity 0.7) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.70)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-[1054px] mx-auto px-10 w-full flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left: headline + sub-line */}
        <div className="flex flex-col gap-1">
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "1.2",
              color: "#FFFFFF",
            }}
          >
            Free consultation with exceptional quality
          </h2>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#FFFFFF",
              textDecoration: "underline",
            }}
          >
            Just one call away:{" "}
            <a
              href="tel:+258849540417"
              style={{ color: "#FFFFFF", textDecoration: "underline" }}
            >
              (+258) 849 540 417
            </a>
          </p>
        </div>

        {/* Right: outlined CTA button */}
        <button
          style={{
            border: "1px solid #FFFFFF",
            background: "transparent",
            padding: "12px 24px",
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#FFFFFF",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Get your consultation
        </button>
      </div>
    </section>
  );
}
