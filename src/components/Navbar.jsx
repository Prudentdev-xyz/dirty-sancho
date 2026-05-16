import { useState, useEffect } from "react";
import logo from "../assets/SanchoLogo.jpg";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "The Legend", id: "the-legend" },
  { label: "Why Sancho", id: "why-sancho" },
  { label: "Tokenomics", id: "tokenomics" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Community", id: "community" },
];

const NAV_H = 72;

/* ── NavLink ── */
function NavLink({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "relative",
        padding: "4px 0",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        color: hovered ? "#E6FF3F" : "rgba(255,255,255,0.8)",
        transition: "color 0.2s",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "#E6FF3F",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.2s ease",
        }}
      />
    </button>
  );
}

/* ── Buy Button ── */
function BuyButton({ href, fullWidth = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : "auto",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.72rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        textDecoration: "none",
        color: hovered ? "#ffffff" : "#062B1F",
        background: hovered ? "#062B1F" : "#E6FF3F",
        border: "2px solid #E6FF3F",
        borderRadius: 3,
        padding: "10px 22px",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(230,255,63,0.25)" : "none",
        whiteSpace: "nowrap",
      }}
    >
      Buy $SANCHO
    </a>
  );
}

/* ── Hamburger ── */
function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      style={{
        background: "none",
        border: "1px solid rgba(230,255,63,0.3)",
        borderRadius: 4,
        cursor: "pointer",
        padding: "9px 11px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: "block",
            width: 22,
            height: 2,
            background: "#E6FF3F",
            borderRadius: 2,
            transition: "all 0.25s",
            transform: open
              ? i === 0
                ? "rotate(45deg) translate(5px, 5px)"
                : i === 2
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "scaleX(0)"
              : "none",
            opacity: open && i === 1 ? 0 : 1,
          }}
        />
      ))}
    </button>
  );
}

/* ── Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: NAV_H,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          background: scrolled ? "rgba(6,43,31,0.96)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(230,255,63,0.12)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.4)" : "none",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img
            src={logo}
            alt="Dirty Sancho Logo"
            style={{
              height: 40,
              width: 40,
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid rgba(230,255,63,0.25)",
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 900,
              color: "#ffffff",
              whiteSpace: "nowrap",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Dirty <span style={{ color: "#E6FF3F" }}>Sancho</span>
          </span>
        </button>

        {/* Desktop Links */}
        {!isMobile && (
          <ul
            style={{
              display: "flex",
              gap: 32,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <NavLink label={l.label} onClick={() => scrollTo(l.id)} />
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && <BuyButton href="https://pump.fun" />}

        {/* Mobile Hamburger */}
        {isMobile && <Hamburger open={open} onClick={() => setOpen(!open)} />}
      </nav>

      {/* Mobile Drawer */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: NAV_H,
            left: 0,
            right: 0,
            zIndex: 999,
            background: "rgba(6,43,31,0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: open ? "1px solid rgba(230,255,63,0.1)" : "none",
            maxHeight: open ? 500 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            padding: open ? "20px 32px 28px" : "0 32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6FF3F")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
              }
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(230,255,63,0.08)",
                cursor: "pointer",
                color: "rgba(255,255,255,0.85)",
                textAlign: "left",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "14px 0",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: 18 }}>
            <BuyButton href="https://pump.fun" fullWidth />
          </div>
        </div>
      )}
    </>
  );
}
