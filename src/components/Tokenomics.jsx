import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BG     = "#062B1F";
const ACCENT = "#E6FF3F";

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

const fadeRight = {
  hidden: { opacity: 0, x: 24, filter: "blur(4px)" },
  show: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const STATS = [
  {
    label: "Total Supply",
    value: "1,000,000,000",
    sub: "$DSANCHO",
    accent: false,
  },
  {
    label: "Buy / Sell Tax",
    value: "0%",
    sub: "Always. No exceptions.",
    accent: true,
  },
  {
    label: "Liquidity",
    value: "100% Burned",
    sub: "Locked on Raydium migration",
    accent: false,
  },
  {
    label: "Network",
    value: "Solana",
    sub: "Fast. Cheap. Final.",
    accent: false,
  },
  {
    label: "Launch Platform",
    value: "Pump.fun",
    sub: "Fair launch — no presale",
    accent: false,
  },
];

const TRUST = [
  { label: "Fair Launch", detail: "No presale. No whitelist. No dev bag." },
  { label: "Zero Tax", detail: "0% buy. 0% sell. Every single transaction." },
  { label: "Burned LP", detail: "Liquidity is gone. The rug is impossible." },
];

/* SVG donut — pure, no library */
function DonutChart({ inView }) {
  const size       = 260;
  const stroke     = 18;
  const r          = (size - stroke) / 2;
  const circ       = 2 * Math.PI * r;
  /* single segment — 100% community */
  const dash       = circ;
  const gap        = 0;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        {/* accent fill — animates in */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={ACCENT}
          strokeWidth={stroke}
          strokeLinecap="butt"
          strokeDasharray={`${dash} ${gap}`}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: circ }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ filter: `drop-shadow(0 0 10px ${ACCENT}66)` }}
        />
      </svg>

      {/* center label */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          Supply
        </span>
        <span
          style={{
            fontSize: "32px",
            fontWeight: 900,
            color: ACCENT,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            textShadow: `0 0 32px ${ACCENT}55`,
          }}
        >
          100%
        </span>
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          Community
        </span>
      </div>
    </div>
  );
}

/* single stat row */
function StatRow({ stat, isLast }) {
  return (
    <motion.div variants={fadeUp}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "24px",
          padding: "20px 0",
        }}
      >
        {/* label + sub */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.32)",
            }}
          >
            {stat.label}
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.22)",
              lineHeight: 1.5,
            }}
          >
            {stat.sub}
          </span>
        </div>

        {/* value */}
        <span
          style={{
            fontSize: stat.accent ? "26px" : "20px",
            fontWeight: 900,
            letterSpacing: stat.accent ? "-0.04em" : "-0.02em",
            color: stat.accent ? ACCENT : "#ffffff",
            textShadow: stat.accent ? `0 0 24px ${ACCENT}44` : "none",
            whiteSpace: "nowrap",
            lineHeight: 1,
            paddingTop: "2px",
          }}
        >
          {stat.value}
        </span>
      </div>

      {/* row divider */}
      {!isLast && (
        <div
          style={{
            height: "1px",
            background: "#1B5C3F",
          }}
        />
      )}
    </motion.div>
  );
}

export default function Tokenomics() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="tokenomics"
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
          gap: "64px",
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
              Tokenomics
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
            Numbers don't lie.<br />
            Ours never will.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.46)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "440px",
            }}
          >
            No hidden allocations. No team tokens. No VC bags waiting to dump
            on you. Every number here is locked in the chain permanent and
            public.
          </motion.p>
        </motion.div>

        {/* main content — stats left, donut right */}
        <div className="tk-main">
          {/* left: stat rows */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              border: "1px solid #1B5C3F",
              borderRadius: "14px",
              padding: "8px 28px",
              background: "#0A3D2B",
              boxSizing: "border-box",
            }}
          >
            {STATS.map((stat, i) => (
              <StatRow
                key={stat.label}
                stat={stat}
                isLast={i === STATS.length - 1}
              />
            ))}
          </motion.div>

          {/* right: donut + legend */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              flexShrink: 0,
            }}
          >
            <DonutChart inView={inView} />

            {/* legend rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
                maxWidth: "260px",
              }}
            >
              {[
                { label: "Community", pct: "100%", color: ACCENT },
                { label: "Dev Allocation", pct: "0%", color: "rgba(255,255,255,0.14)" },
                { label: "Team / VCs", pct: "0%", color: "rgba(255,255,255,0.14)" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "2px",
                        background: row.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.46)",
                      }}
                    >
                      {row.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: row.color === ACCENT ? ACCENT : "rgba(255,255,255,0.22)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {row.pct}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* trust strip */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            border: "1px solid #1B5C3F",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "14px 28px",
              borderBottom: "1px solid #1B5C3F",
              background: "#0A3D2B",
            }}
          >
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              Verified Parameters
            </span>
          </div>

          <div className="tk-trust">
            {TRUST.map((t, i) => (
              <div
                key={t.label}
                style={{
                  padding: "24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  borderRight: i < TRUST.length - 1
                    ? "1px solid #1B5C3F"
                    : "none",
                  background: "#0D4430",
                  boxSizing: "border-box",
                }}
                className="tk-trust-item"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: ACCENT,
                      flexShrink: 0,
                      boxShadow: `0 0 6px ${ACCENT}88`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.38)",
                    margin: 0,
                    lineHeight: 1.6,
                    paddingLeft: "14px",
                  }}
                >
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .tk-main {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 32px;
        }
        .tk-trust {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 780px) {
          .tk-main {
            flex-direction: column;
            align-items: center;
          }
          .tk-main > *:first-child {
            width: 100%;
          }
          .tk-trust {
            grid-template-columns: 1fr;
          }
          .tk-trust-item {
            border-right: none !important;
            border-bottom: 1px solid #1B5C3F;
          }
          .tk-trust-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}