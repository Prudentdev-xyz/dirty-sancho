import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const BG     = "#062B1F";
const ACCENT = "#E6FF3F";

const LINKS = {
  telegram: "https://t.me/+A4-H5qu-pVRiZjFi",
  twitter:  "https://x.com/DirtySan_99",
  pump:     "https://pump.fun",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

/* reusable CTA button — matches Hero pattern */
function CTABtn({ href, children, primary = false }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "13px 26px",
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        textDecoration: "none",
        borderRadius: "6px",
        fontFamily: "inherit",
        border: primary
          ? `2px solid ${ACCENT}`
          : "1px solid rgba(255,255,255,0.14)",
        background: primary
          ? hov ? "transparent" : ACCENT
          : hov ? "rgba(255,255,255,0.07)" : "transparent",
        color: primary
          ? hov ? ACCENT : BG
          : hov ? "#ffffff" : "rgba(255,255,255,0.65)",
        boxShadow: primary && hov ? `0 8px 32px ${ACCENT}44` : "none",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      {children}
    </motion.a>
  );
}

/* platform card */
function PlatformCard({ platform }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px",
        background: hov ? "#0D4430" : "#0A3D2B",
        border: `1px solid ${hov ? `${ACCENT}44` : "#1B5C3F"}`,
        transition: "background 0.3s ease, border-color 0.3s ease",
        boxSizing: "border-box",
      }}
    >
      {/* top accent line on hover */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "20px",
          right: "20px",
          height: "2px",
          background: hov
            ? `linear-gradient(to right, transparent, ${ACCENT}, transparent)`
            : "transparent",
          transition: "background 0.3s ease",
        }}
      />

      {/* platform label */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "100px",
            color: hov ? ACCENT : `${ACCENT}66`,
            background: hov ? `${ACCENT}14` : `${ACCENT}08`,
            border: `1px solid ${hov ? `${ACCENT}30` : `${ACCENT}15`}`,
            transition: "all 0.3s ease",
          }}
        >
          {platform.label}
        </span>
      </div>

      {/* action headline */}
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {platform.headline}
      </h3>

      {/* description */}
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.44)",
          lineHeight: 1.72,
          margin: 0,
          flex: 1,
        }}
      >
        {platform.description}
      </p>

      {/* link button */}
      <motion.a
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          textDecoration: "none",
          color: hov ? ACCENT : `${ACCENT}88`,
          fontFamily: "'Courier New', monospace",
          transition: "color 0.2s ease",
          cursor: "pointer",
        }}
      >
        {platform.cta}
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "1px",
            background: "currentColor",
          }}
        />
      </motion.a>

      {/* ghost label texture */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "8px",
          right: "16px",
          fontFamily: "'Courier New', monospace",
          fontSize: "64px",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: hov ? `${ACCENT}10` : "rgba(255,255,255,0.03)",
          userSelect: "none",
          pointerEvents: "none",
          transition: "color 0.3s ease",
        }}
      >
        {platform.ghost}
      </span>
    </motion.div>
  );
}

const PLATFORMS = [
  {
    label: "Twitter / X",
    headline: "Follow the shadow.",
    description:
      "Updates, lore drops, and market moves all from the dark. Follow @DirtySan_99 before the flash hits and the crowd catches on.",
    href: LINKS.twitter,
    cta: "Follow on X",
    ghost: "X",
  },
  {
    label: "Telegram",
    headline: "Join the Night Watch.",
    description:
      "The inner circle. Real-time updates, community calls, and the people who moved before the light found them. The door is open for now.",
    href: LINKS.telegram,
    cta: "Join Telegram",
    ghost: "TG",
  },
];

export default function Community() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="community"
      ref={ref}
      style={{
        background: BG,
        padding: "120px 24px 100px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${ACCENT}09 0%, transparent 68%)`,
          pointerEvents: "none",
        }}
      />

      {/* top divider */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1000px",
          height: "1px",
          background: `linear-gradient(to right, transparent, ${ACCENT}33, transparent)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
          boxSizing: "border-box",
        }}
      >
        {/* zone 1 — big CTA headline block */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          {/* eyebrow */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div style={{ width: "28px", height: "1px", background: `${ACCENT}CC` }} />
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: `${ACCENT}CC`,
                textTransform: "uppercase",
              }}
            >
              Community
            </span>
            <div style={{ width: "28px", height: "1px", background: `${ACCENT}CC` }} />
          </motion.div>

          {/* headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              margin: 0,
              maxWidth: "680px",
            }}
          >
            Be part of the origin.<br />
            <span style={{ color: ACCENT, textShadow: `0 0 60px ${ACCENT}44` }}>
              Join the shadows.
            </span>
          </motion.h2>

          {/* subtext */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.46)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "480px",
            }}
          >
            The Night Watch doesn't wait for permission. They move before the
            flash, before the crowd, before the world catches on. The door is
            open but not forever.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            <CTABtn href={LINKS.telegram} primary>
              Join the Night Watch
            </CTABtn>
            <CTABtn href={LINKS.twitter}>
              Follow on X
            </CTABtn>
          </motion.div>
        </motion.div>

        {/* zone 2 — platform cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="cm-cards"
        >
          {PLATFORMS.map((p) => (
            <PlatformCard key={p.label} platform={p} />
          ))}
        </motion.div>

        {/* zone 3 — closing statement */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
            padding: "48px 24px",
            borderRadius: "14px",
            background: "#0A3D2B",
            border: "1px solid #1B5C3F",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* subtle inner glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${ACCENT}07 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              width: "40px",
              height: "1px",
              background: `${ACCENT}44`,
            }}
          />

          <p
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: "clamp(16px, 2.2vw, 22px)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.6,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            "The legend is waking up. The empire is coming."
          </p>

          <div
            style={{
              width: "40px",
              height: "1px",
              background: `${ACCENT}44`,
            }}
          />

          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: `${ACCENT}88`,
            }}
          >
            $DSANCHO — The Night Watch
          </span>
        </motion.div>
        </div>

      <style>{`
        .cm-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 680px) {
          .cm-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}