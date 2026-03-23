export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden w-full"
      style={{ height: "474px" }}
    >
      {/* Imagem clean: edifício moderno com céu claro, tons claros */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Degrade suave só na faixa do texto para legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.45) 38%, rgba(255,255,255,0) 62%)",
        }}
      />

      {/* Wrapper centralizado */}
      <div
        className="relative h-full"
        style={{ maxWidth: "1054px", margin: "0 auto" }}
      >
        {/* Bloco de texto — specs exactas do Figma */}
        <div
          style={{
            position: "absolute",
            left: "82px",
            top: "168px",
            width: "500px",
            height: "114px",
          }}
        >
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 300,
              fontSize: "32px",
              lineHeight: "38px",
              color: "#000000",
              margin: 0,
            }}
          >
            Quality, Innovation, Professionalism, and guaranteed excellence in
            every build.
          </p>
        </div>

        {/* Botão — specs do Figma */}
        <div
          style={{
            position: "absolute",
            left: "82px",
            top: "310px",
          }}
        >
          <button
            style={{
              backgroundColor: "#E4791A",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
              padding: "11.7077px 14.6346px",
              width: "190px",
              height: "38.42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7.32px",
              cursor: "pointer",
              border: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "13.17px",
              lineHeight: "1.173em",
              color: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            Request your quotation
          </button>
        </div>
      </div>
    </section>
  );
}
