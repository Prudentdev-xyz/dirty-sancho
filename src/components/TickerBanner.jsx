const BG = "#0A3D2B";
const ACCENT = "#E6FF3F";

const ROW_ONE = [
  "$DSANCHO",
  "SOLANA",
  "FAIR LAUNCH",
  "ZERO TAX",
  "BURNED LP",
  "THE NIGHT WATCH",
  "PUMP.FUN",
  "1,000,000,000",
  "0% TAX",
  "COMMUNITY FIRST",
];

const ROW_TWO = [
  "SEE IN THE DARK",
  "$DSANCHO",
  "THE GHOST IN THE MACHINE",
  "FAIR LAUNCH",
  "SOLANA",
  "NO PRESALE",
  "BURNED LP",
  "THE LEGEND WAKES",
  "ZERO TAX",
  "NIGHT WATCH",
];

const SEP = "\u00B7"; /* · middle dot */

function TickerRow({ items, reverse = false, speed = 38 }) {
  /* duplicate items so the loop is seamless */
  const full = [...items, ...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "10px 0",
      }}
      className="ticker-row-wrap"
    >
      <div
        className={
          reverse
            ? "ticker-track ticker-reverse"
            : "ticker-track ticker-forward"
        }
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0px",
          width: "max-content",
          animationDuration: `${speed}s`,
        }}
      >
        {full.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              paddingRight: "18px",
              fontFamily: "'Courier New', monospace",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: ACCENT,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item}
            <span
              style={{
                color: "rgba(255,255,255,0.22)",
                fontSize: "10px",
                letterSpacing: 0,
              }}
            >
              {SEP}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TickerBanner() {
  return (
    <div
      className="ticker-banner"
      style={{
        background: BG,
        borderTop: "1px solid #1B5C3F",
        borderBottom: "1px solid #1B5C3F",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
        cursor: "default",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* left fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80px",
          height: "100%",
          background: `linear-gradient(to right, ${BG}, transparent)`,
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      {/* right fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "80px",
          height: "100%",
          background: `linear-gradient(to left, ${BG}, transparent)`,
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      <TickerRow items={ROW_ONE} reverse={false} speed={40} />

      {/* mid divider */}
      <div
        aria-hidden="true"
        style={{
          height: "1px",
          background: "#1B5C3F",
          margin: "0 24px",
        }}
      />

      <TickerRow items={ROW_TWO} reverse={true} speed={34} />

      <style>{`
        @keyframes ticker-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes ticker-rev {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .ticker-track {
          will-change: transform;
        }
        .ticker-forward {
          animation: ticker-fwd linear infinite;
        }
        .ticker-reverse {
          animation: ticker-rev linear infinite;
        }
        .ticker-banner:hover .ticker-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
