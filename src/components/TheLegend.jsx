import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Design tokens ── */
const BG = "#062B1F";
const ACCENT = "#E6FF3F";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Scroll reveal wrapper ── */
function Reveal({ children, delay = 0, variant = fadeUp, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Chapter data ── */
const chapters = [
  {
    number: "01",
    tag: "The Innocent",
    title: "Before the Filth",
    body: "Meet the Tarsier. Tiny, silent, with golden moon eyes that saw everything. Dirty Sancho wasn't dirty then. He was the forest's quiet spirit a nighttime hunter, a daytime dreamer. He just wanted to exist in the shadows. But the world doesn't like shadows.",
    side: "left",
  },
  {
    number: "02",
    tag: "The Blinding Light",
    title: "They Came With Flashes",
    body: "Then came the humans. With flashes, selfie sticks, and greed disguised as curiosity. The first camera flash hit Sancho like a dagger. It blinded his massive eyes. The roar of voices shattered his mind. He was trapped by their light held captive by the very thing that was supposed to celebrate him.",
    side: "right",
  },
  {
    number: "03",
    tag: "The Tragic Escape",
    title: "He Chose Death Over Chains",
    body: "In pure desperation, Sancho tried to escape the blinding light. But there was nowhere to hide. The Tarsier's skull is thin as paper. To stop the fear, to stop the flash, he slammed his head against the tree. Again. And again. The final echo was silent. He died rather than being held captive by the light.",
    side: "left",
    accent: true,
  },
  {
    number: "04",
    tag: "The Resurrection",
    title: "Legends Never Stay Buried",
    body: "But they forgot one thing, legends never stay buried. Out of the sorrow, the meme was born. Out of the fragility, a coin was forged. Sancho returned. But he wasn't innocent anymore. This time, he was Dirty. $DSANCHO is the ghost in the machine that learned to survive the crash.",
    side: "right",
  },
  {
    number: "05",
    tag: "The Awakening",
    title: "The Empire Is Coming",
    body: "Sancho is no longer a victim. He is an awakening. He isn't out in the wild yet he's waiting in the shadows, watching the charts, building his army. We are the ones who see in the dark before the flash hits the world. The legend is waking up.",
    side: "left",
  },
];

/* ── Section label ── */
function SectionLabel({ text }) {
  return (
    <span
      style={{
        display: "block",
        fontSize: "0.58rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "3px",
        color: `${ACCENT}99`,
        marginBottom: 12,
      }}
    >
      {text}
    </span>
  );
}

/* ── Chapter card ── */
function Chapter({ chapter, index }) {
  const isLeft = chapter.side === "left";

  return (
    <Reveal delay={0.05} variant={isLeft ? fadeLeft : fadeRight}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 48px 1fr",
          alignItems: "start",
          gap: "0 0",
          position: "relative",
        }}
      >
        {/* Left column */}
        <div
          style={{
            gridColumn: isLeft ? 1 : 3,
            gridRow: 1,
            padding: isLeft ? "0 40px 0 0" : "0 0 0 40px",
            textAlign: isLeft ? "right" : "left",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: isLeft ? "flex-end" : "flex-start",
              maxWidth: 420,
            }}
          >
            {/* Chapter tag */}
            <span
              style={{
                fontSize: "0.55rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                color: chapter.accent ? ACCENT : "rgba(255,255,255,0.25)",
                marginBottom: 10,
                display: "block",
              }}
            >
              {chapter.tag}
            </span>

            {/* Chapter title */}
            <h3
              style={{
                fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                fontWeight: 800,
                color: chapter.accent ? ACCENT : "#ffffff",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
                margin: "0 0 14px",
                textShadow: chapter.accent ? `0 0 40px ${ACCENT}44` : "none",
              }}
            >
              {chapter.title}
            </h3>

            {/* Body */}
            <p
              style={{
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.46)",
                lineHeight: 1.82,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {chapter.body}
            </p>
          </div>
        </div>

        {/* Center spine — number + dot + line */}
        <div
          style={{
            gridColumn: 2,
            gridRow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 4,
          }}
        >
          {/* Number */}
          <span
            style={{
              fontSize: "0.52rem",
              fontWeight: 700,
              letterSpacing: "1px",
              color: chapter.accent ? ACCENT : "rgba(255,255,255,0.18)",
              marginBottom: 8,
              fontFamily: "'Courier New', monospace",
            }}
          >
            {chapter.number}
          </span>

          {/* Dot */}
          <div
            style={{
              width: chapter.accent ? 12 : 8,
              height: chapter.accent ? 12 : 8,
              borderRadius: "50%",
              background: chapter.accent ? ACCENT : "rgba(255,255,255,0.2)",
              flexShrink: 0,
              boxShadow: chapter.accent ? `0 0 16px ${ACCENT}88` : "none",
              marginBottom: 0,
            }}
          />

          {/* Connector line (not on last item) */}
          {index < chapters.length - 1 && (
            <div
              style={{
                width: 1,
                flex: 1,
                minHeight: 60,
                background: `linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.04))`,
                marginTop: 8,
              }}
            />
          )}
        </div>

        {/* Right column — empty opposite side */}
        <div
          style={{
            gridColumn: isLeft ? 3 : 1,
            gridRow: 1,
          }}
        />
      </div>
    </Reveal>
  );
}

/* ── Mobile chapter card ── */
function ChapterMobile({ chapter }) {
  return (
    <Reveal delay={0.05}>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
        }}
      >
        {/* Left spine */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: 0,
            paddingTop: 4,
          }}
        >
          <span
            style={{
              fontSize: "0.5rem",
              fontWeight: 700,
              color: chapter.accent ? ACCENT : "rgba(255,255,255,0.2)",
              fontFamily: "'Courier New', monospace",
              marginBottom: 8,
            }}
          >
            {chapter.number}
          </span>
          <div
            style={{
              width: chapter.accent ? 10 : 7,
              height: chapter.accent ? 10 : 7,
              borderRadius: "50%",
              background: chapter.accent ? ACCENT : "rgba(255,255,255,0.2)",
              flexShrink: 0,
              boxShadow: chapter.accent ? `0 0 14px ${ACCENT}88` : "none",
            }}
          />
        </div>

        {/* Content */}
        <div style={{ flex: 1, paddingBottom: 36 }}>
          <span
            style={{
              fontSize: "0.52rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: chapter.accent ? ACCENT : "rgba(255,255,255,0.25)",
              display: "block",
              marginBottom: 8,
            }}
          >
            {chapter.tag}
          </span>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: chapter.accent ? ACCENT : "#ffffff",
              letterSpacing: "-0.4px",
              lineHeight: 1.2,
              margin: "0 0 10px",
              textShadow: chapter.accent ? `0 0 40px ${ACCENT}44` : "none",
            }}
          >
            {chapter.title}
          </h3>
          <p
            style={{
              fontSize: "0.86rem",
              color: "rgba(255,255,255,0.44)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {chapter.body}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ── TheLegend ── */
export default function TheLegend() {
  return (
    <section
      id="the-legend"
      style={{
        position: "relative",
        background: BG,
        padding: "120px 24px 100px",
        overflow: "hidden",
      }}
    >
      {/* Subtle top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1,
          height: 80,
          background: `linear-gradient(to bottom, ${ACCENT}33, transparent)`,
          pointerEvents: "none",
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          background: `radial-gradient(ellipse at center, ${ACCENT}07 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <Reveal style={{ textAlign: "center", marginBottom: 80 }}>
          <SectionLabel text="The Legend" />
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              margin: "0 0 20px",
            }}
          >
            What Is Dirty Sancho?
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            You keep asking. The truth behind $DSANCHO is darker than any dip.
            It starts in the misty jungles of Bohol, with a creature that was
            too pure for this world.
          </p>
        </Reveal>

        {/* Desktop timeline — hidden on mobile */}
        <div className="ds-desktop">
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            {chapters.map((chapter, i) => (
              <Chapter key={chapter.number} chapter={chapter} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile timeline — hidden on desktop */}
        <div className="ds-mobile">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {chapters.map((chapter) => (
              <ChapterMobile key={chapter.number} chapter={chapter} />
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <Reveal delay={0.1} style={{ marginTop: 80, textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              maxWidth: 560,
            }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: `${ACCENT}44`,
              }}
            />
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.65,
                fontStyle: "italic",
                margin: 0,
                letterSpacing: "-0.2px",
              }}
            >
              "Be part of the origin. Join the shadows before the light finds
              us."
            </p>
            <div
              style={{
                width: 40,
                height: 1,
                background: `${ACCENT}44`,
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: `${ACCENT}88`,
                fontFamily: "'Courier New', monospace",
              }}
            >
              $DSANCHO
            </span>
          </div>
        </Reveal>
      </div>

      {/* Responsive styles */}
      <style>{`
        .ds-desktop { display: block; }
        .ds-mobile  { display: none;  }
        @media (max-width: 680px) {
          .ds-desktop { display: none;  }
          .ds-mobile  { display: block; }
        }
      `}</style>
    </section>
  );
}
