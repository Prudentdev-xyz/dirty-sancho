import { useRef } from "react";
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

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const PHASES = [
  {
    number: "01",
    name: "The Awakening",
    status: "Active",
    active: true,
    milestones: [
      "Launch on Pump.fun, fair and open",
      "Contract deployed on Solana",
      "Community channels go live",
      "The Night Watch assembles",
      "Initial liquidity seeded",
    ],
  },
  {
    number: "02",
    name: "The Forge",
    status: "Upcoming",
    active: false,
    milestones: [
      "Raydium migration, LP burned",
      "CoinGecko & CoinMarketCap listing",
      "Community meme campaign launch",
      "First 1,000 Night Watch members",
      "Strategic partnership outreach",
    ],
  },
  {
    number: "03",
    name: "The Unveiling",
    status: "Upcoming",
    active: false,
    milestones: [
      "CEX listing targets",
      "The Dirty Sancho lore expansion",
      "Night Watch governance discussions",
      "Cross-chain visibility push",
      "The legend goes global",
    ],
  },
];

function PhaseCard({ phase }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "28px",
        borderRadius: "14px",
        background: phase.active ? "#0D4430" : "#0A3D2B",
        border: phase.active ? `1px solid ${ACCENT}55` : "1px solid #1B5C3F",
        boxSizing: "border-box",
      }}
    >
      {/* active glow top edge */}
      {phase.active && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "20px",
            right: "20px",
            height: "2px",
            background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)`,
            borderRadius: "0 0 2px 2px",
          }}
        />
      )}

      {/* top row: number + status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: phase.active ? `${ACCENT}99` : "rgba(255,255,255,0.22)",
          }}
        >
          Phase {phase.number}
        </span>

        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "100px",
            color: phase.active ? ACCENT : "rgba(255,255,255,0.28)",
            background: phase.active ? `${ACCENT}14` : "rgba(255,255,255,0.05)",
            border: `1px solid ${phase.active ? `${ACCENT}33` : "rgba(255,255,255,0.10)"}`,
          }}
        >
          {phase.status}
        </span>
      </div>

      {/* divider */}
      <div
        style={{
          height: "1px",
          background: phase.active
            ? `linear-gradient(to right, ${ACCENT}33, transparent)`
            : "#1B5C3F",
        }}
      />

      {/* phase name */}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 900,
          color: phase.active ? "#ffffff" : "rgba(255,255,255,0.55)",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {phase.name}
      </h3>

      {/* milestones */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {phase.milestones.map((m, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: phase.active ? ACCENT : "#1B5C3F",
                flexShrink: 0,
                marginTop: "6px",
                boxShadow: phase.active ? `0 0 6px ${ACCENT}66` : "none",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: phase.active
                  ? "rgba(255,255,255,0.60)"
                  : "rgba(255,255,255,0.28)",
                lineHeight: 1.65,
              }}
            >
              {m}
            </span>
          </div>
        ))}
      </div>

      {/* ghost number texture */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "16px",
          fontFamily: "'Courier New', monospace",
          fontSize: "72px",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: phase.active ? `${ACCENT}10` : "rgba(255,255,255,0.03)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {phase.number}
      </span>
    </motion.div>
  );
}

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="roadmap"
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
          background: `radial-gradient(ellipse 65% 50% at 50% 50%, ${ACCENT}07 0%, transparent 70%)`,
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
          gap: "56px",
          boxSizing: "border-box",
        }}
      >
        {/* heading block */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
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
              Roadmap
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            Three phases.
            <br />
            One destination.
          </motion.h2>

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
            The legend doesn't arrive overnight. Every phase is a step deeper
            into the dark until the flash hits the world and everyone sees
            what The Night Watch already knew.
          </motion.p>
        </motion.div>

        {/* progress indicator bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#0A3D2B",
            border: "1px solid #1B5C3F",
            borderRadius: "100px",
            padding: "14px 24px",
            boxSizing: "border-box",
          }}
        >
          {PHASES.map((phase, i) => (
            <div
              key={phase.number}
              style={{ display: "flex", alignItems: "center", flex: 1 }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: phase.active ? "10px" : "8px",
                    height: phase.active ? "10px" : "8px",
                    borderRadius: "50%",
                    background: phase.active ? ACCENT : "#1B5C3F",
                    flexShrink: 0,
                    boxShadow: phase.active ? `0 0 10px ${ACCENT}88` : "none",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: phase.active ? ACCENT : "rgba(255,255,255,0.28)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {phase.name}
                </span>
              </div>

              {i < PHASES.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    margin: "0 16px",
                    background: phase.active
                      ? `linear-gradient(to right, ${ACCENT}55, rgba(255,255,255,0.10))`
                      : "rgba(255,255,255,0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* phase cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="rm-phases"
        >
          {PHASES.map((phase) => (
            <PhaseCard key={phase.number} phase={phase} />
          ))}
        </motion.div>
      </div>

      <style>{`
        .rm-phases {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 14px;
        }
        @media (max-width: 780px) {
          .rm-phases { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
