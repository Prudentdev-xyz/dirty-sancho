import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const BG = "#062B1F";
const ACCENT = "#E6FF3F";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const CARDS = [
  {
    id: "fair-launch",
    label: "01",
    title: "Fair Launch",
    body: "No presale. No dev allocation. No insider advantages. Every wallet enters on equal footing, the way it was always supposed to be.",
    tag: "Pump.fun",
  },
  {
    id: "zero-tax",
    label: "02",
    title: "Zero Tax",
    body: "Buy. Sell. Hold. Move freely without a cut taken on every transaction. Your tokens are yours not a revenue stream for someone else.",
    tag: "0% / tx",
  },
  {
    id: "burned-lp",
    label: "03",
    title: "Burned LP",
    body: "Liquidity locked and burned on Raydium migration. The floor is permanent. The rug is impossible. The exit is gone.",
    tag: "Raydium",
  },
  {
    id: "community-first",
    label: "04",
    title: "Community First",
    body: "No roadmap written by a marketing team. No promises from a Discord mod. The Night Watch moves together always.",
    tag: "Night Watch",
  },
];

function FeatureCard({ card, large = false }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        padding: large ? "36px 28px 28px" : "28px 24px 24px",
        background: hov ? "#0E4A34" : "#0A3D2B",
        borderLeft: `3px solid ${hov ? ACCENT : "#1A5C40"}`,
        transition: "background 0.3s ease, border-color 0.3s ease",
        minHeight: large ? "240px" : "200px",
        boxSizing: "border-box",
      }}
    >
      {/* ghost number — texture only */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-12px",
          right: "10px",
          fontFamily: "'Courier New', monospace",
          fontSize: large ? "100px" : "80px",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: hov ? `${ACCENT}12` : "rgba(255,255,255,0.04)",
          transition: "color 0.3s ease",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {card.label}
      </span>

      {/* top row: chapter number + tag pill */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "auto",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: `${ACCENT}88`,
            flexShrink: 0,
          }}
        >
          {card.label}
        </span>
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "100px",
            color: hov ? ACCENT : `${ACCENT}66`,
            background: hov ? `${ACCENT}14` : `${ACCENT}0A`,
            border: `1px solid ${hov ? `${ACCENT}33` : `${ACCENT}18`}`,
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {card.tag}
        </span>
      </div>

      {/* title */}
      <h3
        style={{
          fontSize: large ? "20px" : "18px",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          margin: "20px 0 10px",
        }}
      >
        {card.title}
      </h3>

      {/* body */}
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.46)",
          lineHeight: 1.72,
          margin: 0,
          maxWidth: "320px",
        }}
      >
        {card.body}
      </p>
    </motion.div>
  );
}

export default function WhyDirtySancho() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why-sancho"
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
      {/* background radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 55% at 50% 65%, ${ACCENT}08 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* top gradient divider */}
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

      {/* content wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "56px",
          boxSizing: "border-box",
        }}
      >
        {/* heading block */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          {/* eyebrow */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div
              style={{
                width: "28px",
                height: "1px",
                background: `${ACCENT}CC`,
              }}
            />
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
              Why $DSANCHO
            </span>
          </motion.div>

          {/* headline — tighter size, controlled */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "580px",
            }}
          >
            Done with adorable dogs
            <br />
            and popping felines.
          </motion.h2>

          {/* subtext */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.46)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "460px",
            }}
          >
            Time for real filth. $DSANCHO is built on principles the meme coin
            space forgot transparency, fairness, and a community that moves
            before the flash hits the world.
          </motion.p>

          {/* inline chain stat — sits below subtext, left-aligned */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'Courier New', monospace",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.22)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: ACCENT,
                flexShrink: 0,
                boxShadow: `0 0 8px ${ACCENT}88`,
              }}
            />
            Solana &nbsp;&middot;&nbsp; Fair Launch &nbsp;&middot;&nbsp; 0% Tax
          </motion.div>
        </motion.div>

        {/* cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          {/* top row */}
          <div className="ds-top-row">
            <FeatureCard card={CARDS[0]} large />
            <FeatureCard card={CARDS[1]} large />
          </div>

          {/* bottom row — left padding indent instead of spacer div */}
          <div className="ds-bottom-row">
            <FeatureCard card={CARDS[2]} />
            <FeatureCard card={CARDS[3]} />
          </div>
        </motion.div>

      </div>

      <style>{`
        .ds-top-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .ds-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          padding-left: 56px;
        }
        @media (max-width: 680px) {
          .ds-top-row,
          .ds-bottom-row {
            grid-template-columns: 1fr;
          }
          .ds-bottom-row {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
