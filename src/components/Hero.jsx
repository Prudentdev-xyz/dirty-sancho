import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown, Copy, Check } from "lucide-react";
import logo from "../assets/DirtySanchoLogo.png";

/* ── Design tokens ── */
const BG = "#062B1F";
const ACCENT = "#E6FF3F";

/* ── Links ── */
const LINKS = {
  telegram: "https://t.me/+A4-H5qu-pVRiZjFi",
  twitter: "https://x.com/DirtySan_99",
  pump: "https://pump.fun",
};

/* ── Animation variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Stats ── */
const STATS = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Tax", value: "0%" },
  { label: "Liquidity", value: "Burned" },
  { label: "Network", value: "Solana" },
];

/* ── CA Copy Box ── */
function CABox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={fadeUp}
      style={{
        display: "flex",
        alignItems: "stretch",
        border: `1px solid ${ACCENT}25`,
        borderRadius: 6,
        overflow: "hidden",
        width: "100%",
        maxWidth: 480,
        background: `${ACCENT}06`,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          padding: "14px 18px",
          borderRight: `1px solid ${ACCENT}18`,
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: "0.52rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.28)",
            marginBottom: 4,
            margin: "0 0 4px",
          }}
        >
          Contract Address
        </p>
        <p
          style={{
            fontSize: "0.68rem",
            fontFamily: "'Courier New', monospace",
            color: `${ACCENT}99`,
            letterSpacing: "1px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          REVEALING AT LAUNCH
        </p>
      </div>

      <motion.button
        onClick={handleCopy}
        whileTap={{ scale: 0.96 }}
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "14px 20px",
          fontSize: "0.62rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: copied ? ACCENT : "rgba(255,255,255,0.38)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          flexShrink: 0,
          transition: "color 0.2s",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          if (!copied) e.currentTarget.style.color = ACCENT;
        }}
        onMouseLeave={(e) => {
          if (!copied) e.currentTarget.style.color = "rgba(255,255,255,0.38)";
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Check size={13} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Copy size={13} />
            </motion.span>
          )}
        </AnimatePresence>
        {copied ? "Soon™" : "Copy CA"}
      </motion.button>
    </motion.div>
  );
}

/* ── Scroll indicator ── */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      style={{
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          fontSize: "0.5rem",
          textTransform: "uppercase",
          letterSpacing: "3px",
          color: "rgba(255,255,255,0.18)",
          fontWeight: 600,
        }}
      >
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        <ChevronDown size={15} />
      </motion.div>
    </motion.div>
  );
}

/* ── Background ── */
function HeroBG() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 90% 65% at 50% 55%, ${ACCENT}0E 0%, transparent 68%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 600,
          height: 600,
          background: `radial-gradient(ellipse at 0% 0%, ${ACCENT}09 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 500,
          height: 400,
          background: `radial-gradient(ellipse at 100% 100%, ${ACCENT}06 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${ACCENT}44 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />
      {/* Scanning line */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${ACCENT}1C, transparent)`,
          pointerEvents: "none",
        }}
        animate={{ top: ["8%", "92%", "8%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 180,
          background: `linear-gradient(to bottom, transparent, ${BG})`,
          pointerEvents: "none",
        }}
      />
    </>
  );
}

/* ── CTA Button ── */
function CTABtn({ href, children, primary = false }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 22px",
        fontSize: "0.68rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        textDecoration: "none",
        borderRadius: 4,
        fontFamily: "inherit",
        border: primary
          ? `2px solid ${ACCENT}`
          : "1px solid rgba(255,255,255,0.14)",
        background: primary
          ? hov
            ? "transparent"
            : ACCENT
          : hov
            ? "rgba(255,255,255,0.07)"
            : "transparent",
        color: primary
          ? hov
            ? ACCENT
            : BG
          : hov
            ? "#fff"
            : "rgba(255,255,255,0.65)",
        boxShadow: primary && hov ? `0 8px 32px ${ACCENT}44` : "none",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {children}
    </motion.a>
  );
}

/* ── Hero ── */
export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "88px 24px 80px",
        overflow: "hidden",
        background: BG,
        fontFamily: "'DM Sans', 'Syne', system-ui, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <HeroBG />

      {/* ── Content — always show, animate in on mount ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          width: "100%",
          maxWidth: 860,
        }}
      >
        {/* Floating logo */}
        <motion.div
          variants={fadeIn}
          animate={{ y: [0, -12, 0] }}
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ marginBottom: 4 }}
        >
          <img
            src={logo}
            alt="Dirty Sancho"
            style={{
              width: "clamp(80px, 12vw, 120px)",
              height: "clamp(80px, 12vw, 120px)",
              objectFit: "contain",
              filter: `drop-shadow(0 0 40px ${ACCENT}33)`,
              display: "block",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(3.6rem, 14vw, 9rem)",
              color: "#ffffff",
              letterSpacing: "-2px",
              margin: 0,
              lineHeight: 0.87,
            }}
          >
            Dirty
          </h1>
          <h1
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(3.6rem, 14vw, 9rem)",
              color: ACCENT,
              letterSpacing: "-2px",
              margin: 0,
              lineHeight: 0.87,
              textShadow: `0 0 100px ${ACCENT}44`,
            }}
          >
            Sancho
          </h1>
        </motion.div>

        {/* Ticker */}
        <motion.div variants={fadeUp}>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            $DSANCHO
          </span>
        </motion.div>

        {/* Subline */}
        <motion.p
          variants={fadeUp}
          style={{
            color: "rgba(255,255,255,0.46)",
            fontSize: "clamp(0.88rem, 2.4vw, 1.05rem)",
            lineHeight: 1.85,
            maxWidth: 520,
            margin: 0,
            fontWeight: 400,
          }}
        >
          The ghost in the machine. Born from tragedy, resurrected as a legend.
          Community-first meme coin for those who{" "}
          <span style={{ color: `${ACCENT}CC`, fontWeight: 600 }}>
            see in the dark
          </span>{" "}
          before the flash hits the world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginTop: 4,
          }}
        >
          <CTABtn href={LINKS.pump} primary>
            {" "}
            Launch on Pump.fun
          </CTABtn>
          <CTABtn href={LINKS.telegram}>
            <Send size={13} /> Join Telegram
          </CTABtn>
          <CTABtn href={LINKS.twitter}>
            <X size={13} /> Follow on X
          </CTABtn>
        </motion.div>

        {/* CA Box */}
        <motion.div
          variants={fadeUp}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <CABox />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px 40px",
            marginTop: 8,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            width: "100%",
            maxWidth: 560,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <span
                style={{
                  fontSize: "0.57rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                  color: "rgba(255,255,255,0.2)",
                  fontWeight: 700,
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.82)",
                  letterSpacing: "-0.2px",
                }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Read the legend */}
        <motion.button
          variants={fadeUp}
          onClick={() => scrollTo("the-legend")}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 4,
            fontSize: "0.62rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.25)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
          }
        >
          <span
            style={{
              display: "block",
              width: 28,
              height: 1,
              background: "currentColor",
            }}
          />
          Read the legend
          <span
            style={{
              display: "block",
              width: 28,
              height: 1,
              background: "currentColor",
            }}
          />
        </motion.button>
      </motion.div>

      <ScrollIndicator />

      <style>{`
        @keyframes heroPing {
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
        @media (max-width: 480px) {
          #home { padding-top: 100px !important; padding-bottom: 80px !important; }
        }
      `}</style>
    </section>
  );
}
