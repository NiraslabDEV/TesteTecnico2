"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    /* Navbar: height 58.54px, white bg */
    <header className="bg-white sticky top-0 z-50 shadow-sm" style={{ height: "58.54px" }}>
      <div className="max-w-[1054px] mx-auto px-5 h-full flex items-center justify-between">

        {/* Logo navbar — 76×42 */}
        <a href="#home" className="flex items-center">
          <Image
            src="/logo-navbar.svg"
            alt="ETTIC Construction"
            width={76}
            height={42}
            priority
          />
        </a>

        {/* Desktop NavItems — gap 36.59px, x:548.39 right-aligned */}
        <nav className="hidden md:flex items-center" style={{ gap: "36.59px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 400,
                fontSize: "13.17px",
                color: "#14171F",
                lineHeight: "1.173em",
              }}
              className="hover:text-[#2947A9] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Contact Us — weight 600, color #F9995D */}
          <a
            href="#contact"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 600,
              fontSize: "13.17px",
              color: "#F9995D",
              lineHeight: "1.173em",
            }}
            className="hover:text-[#e08040] transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#292E3D]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg px-5 py-4 z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[#14171F] text-sm hover:text-[#2947A9]"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-2 font-semibold hover:text-[#e08040]"
            style={{ fontFamily: "'Work Sans', sans-serif", color: "#F9995D" }}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
