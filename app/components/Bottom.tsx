import Image from "next/image";

const quickLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about-us" },
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#projects" },
];

const labelStyle: React.CSSProperties = {
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: 700,
  fontSize: "10.24px",
  lineHeight: "12px",
  color: "#0379B9",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  flexShrink: 0,
};

const valueStyle: React.CSSProperties = {
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: 400,
  fontSize: "12.19px",
  lineHeight: "1.5em",
  color: "#292E3D",
};

export default function Bottom() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E0E3EB",
      }}
    >
      <div
        style={{
          maxWidth: "1054px",
          margin: "0 auto",
          padding: "36px 40px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1.2fr 1.8fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* ── Col 1: Logo + description + social ── */}
        <div>
          <div style={{ marginBottom: "14px" }}>
            <Image
              src="/logo-bottom.svg"
              alt="ETTIC Construction"
              width={147}
              height={81}
              priority
            />
          </div>

          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "12.19px",
              lineHeight: "1.65em",
              color: "#4A5568",
              marginBottom: "20px",
              maxWidth: "280px",
            }}
          >
            Ettic Construction is a leading civil construction company delivering quality, innovation, and professionalism in every project.
          </p>

          {/* Social icons — dark circles */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" style={{ display: "flex" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#2D3748"/>
                <path d="M17.5 10.5h2.5V7.5H17.5C15.567 7.5 14 9.067 14 11v2H11.5v3.5H14V24h3.5v-7.5H20l.5-3.5h-3V11c0-.276.224-.5.5-.5h.5z" fill="#FFFFFF"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" style={{ display: "flex" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#2D3748"/>
                <rect x="8.5" y="13" width="3" height="10" fill="#FFFFFF"/>
                <circle cx="10" cy="10" r="1.75" fill="#FFFFFF"/>
                <path d="M14.5 13v10H17.5V18.5a3 3 0 116 0V23H26.5v-4.5a5.5 5.5 0 00-11 0z" fill="#FFFFFF"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter" style={{ display: "flex" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#2D3748"/>
                <path d="M8 9l6 7.8L8 23h2l4.8-6.3L19.5 23H24l-6.3-8.1L23.2 9H21l-4.4 5.8L12.5 9H8z" fill="#FFFFFF"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div>
          <h3
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "17.56px",
              lineHeight: "1.173em",
              color: "#292E3D",
              marginBottom: "20px",
            }}
          >
            Quick Links
          </h3>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "12.19px",
                    lineHeight: "14.3px",
                    color: "#0379B9",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Contact ── */}
        <div>
          <h3
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "17.56px",
              lineHeight: "1.173em",
              color: "#292E3D",
              marginBottom: "20px",
            }}
          >
            Contact
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Address */}
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={labelStyle}>ADDRESS:</span>
              <span style={valueStyle}>
                Av. Vladimir Lenine, Nº 5467 R/C,<br />
                Maputo-Moçambique
              </span>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={labelStyle}>PHONE:</span>
              <span style={valueStyle}>(+258) 84 954 0417</span>
            </div>

            {/* Email */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={labelStyle}>EMAIL:</span>
              <span style={valueStyle}>info@ettic.co.mz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
