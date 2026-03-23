"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(value: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(value / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(start);
          }, 25);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return { count, ref };
}

/* ── Colorful flat icons ── */
const IconProjects = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect width="52" height="52" rx="10" fill="#EEF3FF" fillOpacity="0"/>
    <rect x="10" y="8" width="26" height="34" rx="3" fill="#DDEEFF" stroke="#4A90E2" strokeWidth="1.5"/>
    <line x1="16" y1="16" x2="30" y2="16" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="22" x2="30" y2="22" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="28" x2="24" y2="28" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="38" cy="38" r="10" fill="#FF6B35"/>
    <line x1="35" y1="38" x2="41" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="38" y1="35" x2="38" y2="41" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconClients = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <path d="M8 28 C8 20 16 14 26 14 C36 14 44 20 44 28" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M14 30 C12 27 12 24 14 21 C17 17 22 16 26 16 C30 16 35 17 38 21 C40 24 40 27 38 30" fill="#DDEEFF" stroke="#4A90E2" strokeWidth="1.5"/>
    <path d="M8 30 Q12 36 20 36 Q24 40 26 42 Q28 40 32 36 Q40 36 44 30" fill="#4A90E2" fillOpacity="0.3" stroke="#4A90E2" strokeWidth="1.5"/>
    <circle cx="20" cy="25" r="4" fill="#FF6B35"/>
    <circle cx="32" cy="25" r="4" fill="#4A90E2"/>
    <path d="M16 36 Q20 42 26 44 Q32 42 36 36" fill="#FF6B35" fillOpacity="0.4"/>
  </svg>
);

const IconAwards = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <path d="M20 40 L32 40 L30 46 L22 46 Z" fill="#F5A623" stroke="#E8920A" strokeWidth="1"/>
    <rect x="18" y="38" width="16" height="4" rx="2" fill="#F5A623"/>
    <path d="M26 6 C18 6 12 12 12 20 C12 28 18 34 26 34 C34 34 40 28 40 20 C40 12 34 6 26 6Z" fill="#FFD700" stroke="#F5A623" strokeWidth="1.5"/>
    <path d="M26 10 L28 16 L34 16 L29 20 L31 26 L26 22 L21 26 L23 20 L18 16 L24 16 Z" fill="#F5A623"/>
    <path d="M10 14 C6 14 4 17 4 20 C4 23 6 26 10 26 L12 26" stroke="#F5A623" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M42 14 C46 14 48 17 48 20 C48 23 46 26 42 26 L40 26" stroke="#F5A623" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const IconBlueprint = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="6" y="10" width="40" height="32" rx="3" fill="#2947A9" stroke="#1E3A8A" strokeWidth="1.5"/>
    <line x1="14" y1="10" x2="14" y2="42" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <line x1="22" y1="10" x2="22" y2="42" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <line x1="30" y1="10" x2="30" y2="42" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <line x1="38" y1="10" x2="38" y2="42" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <line x1="6" y1="18" x2="46" y2="18" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <line x1="6" y1="26" x2="46" y2="26" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <line x1="6" y1="34" x2="46" y2="34" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
    <rect x="16" y="20" width="20" height="14" rx="1" fill="none" stroke="#4FC3F7" strokeWidth="1.5"/>
    <line x1="24" y1="20" x2="24" y2="34" stroke="#4FC3F7" strokeWidth="1" strokeDasharray="2 2"/>
    <line x1="16" y1="27" x2="36" y2="27" stroke="#4FC3F7" strokeWidth="1" strokeDasharray="2 2"/>
    <circle cx="41" cy="41" r="8" fill="#FF6B35"/>
    <line x1="38" y1="41" x2="44" y2="41" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M41 38 L41 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ── Single stat card ── */
interface CardProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  iconPosition: "top-left" | "top-right" | "bottom-right";
  style?: React.CSSProperties;
}

function StatCard({ value, label, icon, iconPosition, style }: CardProps) {
  const { count, ref } = useCountUp(value);

  const iconOffset: React.CSSProperties =
    iconPosition === "top-left"
      ? { top: "-22px", left: "-14px" }
      : iconPosition === "top-right"
      ? { top: "-22px", right: "-14px" }
      : { bottom: "-22px", right: "-14px" };

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: "0 6px 28px rgba(41,46,61,0.12)",
        padding: "18px 22px 16px 20px",
        width: "200px",
        ...style,
      }}
    >
      {/* Floating icon */}
      <div style={{ position: "absolute", zIndex: 2, ...iconOffset }}>{icon}</div>

      {/* Number */}
      <span
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 700,
          fontSize: "42px",
          lineHeight: "1.1",
          color: "#14171F",
          display: "block",
        }}
      >
        {count}
      </span>

      {/* Orange bar + label */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
        <div
          style={{
            width: "4px",
            height: "20px",
            backgroundColor: "#F9995D",
            borderRadius: "2px",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            color: "#858EAD",
            lineHeight: "1.3",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function MobileCard({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#FFF",
        borderRadius: "10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        padding: "18px 20px",
      }}
    >
      <span style={{ fontFamily: "'Work Sans'", fontWeight: 700, fontSize: "36px", color: "#14171F", display: "block" }}>{count}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" }}>
        <div style={{ width: "4px", height: "18px", backgroundColor: "#F9995D", borderRadius: "2px" }} />
        <span style={{ fontSize: "12px", color: "#858EAD" }}>{label}</span>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      style={{ width: "100%", backgroundColor: "#FFFFFF", padding: "60px 0 80px" }}
    >
      <div
        className="max-w-[1054px] mx-auto px-5"
        style={{ display: "flex", alignItems: "center", gap: "40px" }}
      >
        {/* ── Left: staggered cards ── */}
        <div
          style={{
            position: "relative",
            width: "530px",
            minWidth: "530px",
            height: "400px",
          }}
          className="hidden md:block"
        >
          {/* Card 1: 123 Projects Completed */}
          <StatCard
            value={123}
            label="Projects Completed"
            icon={<IconProjects />}
            iconPosition="top-left"
            style={{ top: "90px", left: "0px" }}
          />
          {/* Card 2: 84 Happy Clients */}
          <StatCard
            value={84}
            label="Happy Clients"
            icon={<IconClients />}
            iconPosition="top-right"
            style={{ top: "10px", left: "240px" }}
          />
          {/* Card 3: 37 Awards Win */}
          <StatCard
            value={37}
            label="Awards Win"
            icon={<IconAwards />}
            iconPosition="top-right"
            style={{ top: "205px", left: "215px" }}
          />
          {/* Card 4: 30 Years in Business */}
          <StatCard
            value={30}
            label="Years in Business"
            icon={<IconBlueprint />}
            iconPosition="bottom-right"
            style={{ top: "300px", left: "15px" }}
          />
        </div>

        {/* Mobile: simple grid */}
        <div className="md:hidden grid grid-cols-2 gap-4 w-full">
          <MobileCard value={123} label="Projects Completed" />
          <MobileCard value={84} label="Happy Clients" />
          <MobileCard value={37} label="Awards Win" />
          <MobileCard value={30} label="Years in Business" />
        </div>

        {/* ── Right: 30 Years Experience ── */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h2
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "52px",
              lineHeight: "1.1",
              color: "#0379B9",
              margin: 0,
            }}
          >
            30 Years<br />Experience
          </h2>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#858EAD",
              marginTop: "20px",
              maxWidth: "340px",
            }}
          >
            Our company has been the leading provided construction services to clients throughout the USA since 1988.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: "28px",
              backgroundColor: "#0379B9",
              color: "#FFFFFF",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
