"use client";
import { useState } from "react";

/* CTA section: 1054×462.45px, bg #F6F8F7 */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", reason: "", phone: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: 400,
    fontSize: "13.1712px",
    lineHeight: "15px",
    color: "#292E3D",
    backgroundColor: "#FFFFFF",
    border: "0.731732px solid #E0E3EB",
    borderRadius: "2.92693px",
    padding: "7.31732px 5.85386px",
    width: "100%",
    height: "29.63px",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const placeholderColor = "#A3AAC2";

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        minHeight: "462.45px",
        backgroundColor: "#F6F8F7",
      }}
    >
      <style>{`
        .cta-input::placeholder { color: ${placeholderColor}; }
        .cta-input:focus { border-color: #2947A9; }
        .cta-select option { color: #292E3D; }
      `}</style>

      <div className="max-w-[1054px] mx-auto px-5 py-12 flex flex-col items-center">

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 700,
            fontSize: "26.3424px",
            lineHeight: "31px",
            color: "#292E3D",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          What can we do for you?
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 400,
            fontSize: "14.6346px",
            lineHeight: "17px",
            color: "#292E3D",
            textAlign: "center",
            marginBottom: "36px",
            maxWidth: "394.4px",
          }}
        >
          We are ready to work on a project of any complexity, whether it&apos;s commercial or residential.
        </p>

        {sent ? (
          <div
            style={{
              backgroundColor: "#0379B9",
              borderRadius: "6px",
              padding: "24px 40px",
              textAlign: "center",
              color: "#FFFFFF",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              maxWidth: "432px",
              width: "100%",
            }}
          >
            Thank you! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", maxWidth: "432px", display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {/* Row 1: Your Name | Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <input
                className="cta-input"
                style={inputStyle}
                placeholder="Your Name*"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="cta-input"
                style={inputStyle}
                type="email"
                placeholder="Email*"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            {/* Row 2: Reason for Contacting | Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {/* Select with dropdown icon */}
              <div style={{ position: "relative" }}>
                <select
                  className="cta-input cta-select"
                  style={{
                    ...inputStyle,
                    color: form.reason ? "#292E3D" : placeholderColor,
                    appearance: "none",
                    WebkitAppearance: "none",
                    paddingRight: "28px",
                    cursor: "pointer",
                  }}
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  required
                >
                  <option value="" disabled>Reason for Contacting*</option>
                  <option value="civil">Civil Construction</option>
                  <option value="hydrology">Hydrology</option>
                  <option value="sanitation">Sanitation</option>
                  <option value="roads">Roads and Transportation</option>
                  <option value="ports">Ports and Waterways</option>
                  <option value="earthworks">Earthworks</option>
                  <option value="other">Other</option>
                </select>
                {/* Dropdown circle icon */}
                <div
                  style={{
                    position: "absolute",
                    right: "6px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    width: "14.63px",
                    height: "14.63px",
                  }}
                >
                  <svg width="14.63" height="14.63" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#2947A9"/>
                    <path d="M4.5 6L7.5 9L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <input
                className="cta-input"
                style={{ ...inputStyle, color: form.phone ? "#292E3D" : placeholderColor }}
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* Row 3: Message textarea */}
            <textarea
              className="cta-input"
              style={{
                ...inputStyle,
                height: "98.78px",
                resize: "none",
                lineHeight: "1.5",
              }}
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* * indicates a required field */}
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 400,
                fontSize: "11.7077px",
                lineHeight: "14px",
                color: "#C40303",
                margin: "0",
              }}
            >
              * indicates a required field
            </p>

            {/* Submit button — centered */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#0379B9",
                  borderRadius: "1.46346px",
                  padding: "11.7077px 14.6346px",
                  height: "38.415px",
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "13.1712px",
                  lineHeight: "15px",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  minWidth: "199px",
                  textAlign: "center",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
