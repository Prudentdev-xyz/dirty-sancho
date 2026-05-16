import { motion } from "framer-motion";
import { X, Send, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import logo from "../assets/DirtySanchoLogo.png";

/* ── Brand colors ── */
const BG = "#062B1F";
const ACCENT = "#E6FF3F";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.45)";
const DIMMED = "rgba(255,255,255,0.18)";
const DIVIDER = "rgba(255,255,255,0.07)";

/* ── Links ── */
const LINKS = {
  telegram: "https://t.me/+A4-H5qu-pVRiZjFi",
  twitter: "https://x.com/DirtySan_99",
  email: "mailto:info@dirty-sancho.com",
  pump: "https://pump.fun",
};

const navLinks = [
  { label: "Home", id: "home" },
  { label: "The Legend", id: "the-legend" },
  { label: "Why Sancho", id: "why-sancho" },
  { label: "Tokenomics", id: "tokenomics" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Community", id: "community" },
];

const extLinks = [
  {
    label: "Launch on Pump.fun",
    href: LINKS.pump,
    icon: <ExternalLink size={13} />,
  },
  {
    label: "Follow on X",
    href: LINKS.twitter,
    icon: <ArrowUpRight size={13} />,
  },
  {
    label: "Join Telegram",
    href: LINKS.telegram,
    icon: <ArrowUpRight size={13} />,
  },
  {
    label: "info@dirty-sancho.com",
    href: LINKS.email,
    icon: <Mail size={13} />,
  },
];

/* ── Scroll helper ── */
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ── Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/* ── Shared link style ── */
const linkBase = {
  fontFamily: "Inter, sans-serif",
  fontSize: "0.78rem",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  color: MUTED,
  textDecoration: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  transition: "color 0.2s",
  display: "flex",
  alignItems: "center",
  gap: 7,
};

/* ── Social Button ── */
function SocialBtn({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        borderRadius: 6,
        border: `1px solid ${DIVIDER}`,
        color: MUTED,
        textDecoration: "none",
        transition: "border-color 0.2s, color 0.2s, background 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${ACCENT}80`;
        e.currentTarget.style.color = ACCENT;
        e.currentTarget.style.background = `${ACCENT}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = DIVIDER;
        e.currentTarget.style.color = MUTED;
        e.currentTarget.style.background = "transparent";
      }}
    >
      {icon}
    </motion.a>
  );
}

/* ── Footer ── */
export default function Footer() {
  return (
    <footer
      style={{
        background: BG,
        borderTop: `1px solid ${DIVIDER}`,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Glow top-left */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 600,
          height: 300,
          background: `radial-gradient(ellipse at 0% 0%, ${ACCENT}0D 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />
      {/* Glow bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 400,
          height: 200,
          background: `radial-gradient(ellipse at 100% 100%, ${ACCENT}08 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Main grid ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 32px 48px",
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            justifyItems: "center",
          }}
          className="footer-grid"
        >
          {/* ── Brand col ── */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 20,
              width: "100%",
            }}
            className="footer-brand"
          >
            {/* Logo + wordmark */}
            <button
              onClick={() => scrollTo("home")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img
                src={logo}
                alt="Dirty Sancho"
                style={{
                  width: 36,
                  height: 36,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                  color: WHITE,
                }}
              >
                Dirty&nbsp;
                <span style={{ color: ACCENT }}>Sancho</span>
              </span>
            </button>

            {/* Tagline */}
            <p
              style={{
                color: MUTED,
                fontSize: "0.8rem",
                lineHeight: 1.85,
                maxWidth: 270,
                margin: 0,
              }}
            >
              The ghost in the machine. Community-first meme coin launching on
              Pump.fun. Built in the shadows for those who see in the dark.
            </p>

            {/* Live badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  width: 7,
                  height: 7,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: ACCENT,
                    opacity: 0.5,
                    animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: ACCENT,
                  }}
                />
              </span>
              <span
                style={{
                  color: `${ACCENT}CC`,
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                }}
              >
                Launching Soon on Pump.fun
              </span>
            </div>

            {/* Social buttons */}
            <div style={{ display: "flex", gap: 8 }}>
              <SocialBtn
                href={LINKS.twitter}
                icon={<X size={14} />}
                label="X (Twitter)"
              />
              <SocialBtn
                href={LINKS.telegram}
                icon={<Send size={14} />}
                label="Telegram"
              />
              <SocialBtn
                href={LINKS.email}
                icon={<Mail size={14} />}
                label="Email"
              />
            </div>
          </motion.div>

          {/* ── Navigate col ── */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p
              style={{
                color: DIMMED,
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Navigate
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {navLinks.map((l) => (
                <motion.li key={l.id} variants={fadeUp}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    style={linkBase}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Links col ── */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p
              style={{
                color: DIMMED,
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Links
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {extLinks.map((l) => (
                <motion.li key={l.label} variants={fadeUp}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...linkBase, color: MUTED }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = ACCENT;
                      e.currentTarget.querySelector("span").style.color =
                        ACCENT;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = MUTED;
                      e.currentTarget.querySelector("span").style.color =
                        DIMMED;
                    }}
                  >
                    <span
                      style={{
                        color: DIMMED,
                        display: "flex",
                        transition: "color 0.2s",
                      }}
                    >
                      {l.icon}
                    </span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: 1, background: DIVIDER }} />
      </div>

      {/* ── Bottom bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
        className="footer-bottom"
      >
        <p
          style={{
            color: DIMMED,
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "1.3px",
            margin: 0,
          }}
        >
          © 2026 Dirty Sancho. All rights reserved.
        </p>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: DIMMED,
          }}
        >
          <span style={{ color: `${ACCENT}66` }}>$DSANCHO</span>
          <span>·</span>
          <span>Solana</span>
          <span>·</span>
          <span>Zero Tax</span>
          <span>·</span>
          <span style={{ color: `${ACCENT}66` }}>Community First</span>
        </div>
      </motion.div>

      {/* ── Ping keyframe ── */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            justify-items: center !important;
            text-align: center;
          }
          .footer-brand {
            align-items: center !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-brand {
            grid-column: span 2;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
