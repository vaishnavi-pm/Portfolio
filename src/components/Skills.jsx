import { useEffect, useRef } from "react";

const skillsData = {
  frontend: [
    { name: "React", pct: 75 },
    { name: "JavaScript", pct: 80 },
    { name: "HTML / CSS", pct: 95 },
    { name: "Tailwind CSS", pct: 70 },
  ],
  backend: [
    { name: "PostgreSQL", pct: 70 },
    { name: "Python", pct: 65 },
    { name: "REST APIs", pct: 70 },
  ],
  tools: [
    { name: "Git", pct: 85 },
    { name: "VS Code", pct: 90 },
    { name: "Photoshop", pct: 80 },
    { name: "Illustrator", pct: 50 },
  ],
};

const stats = [
  { num: "∞", label: "Still Learning" },
  { num: "↗", label: "Always Growing" },
  { num: "✦", label: "Future Ready" },
  { num: "⟡", label: "Always Improving" },
];

const marqueeWords = ["SKILLS", "TOOLS", "EXPERTISE", "STACK"];

// SVG icons for outer orbit - Tools
const OuterIcons = [
  // React
  <svg key="react" viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
    <circle cx="12" cy="12" r="2" stroke="#777" strokeWidth="1.5" />
    <path d="M12 2C6.5 5 2 8 2 12s4.5 7 10 10c5.5-3 10-6 10-10s-4.5-7-10-10z" stroke="#777" strokeWidth="1.5" fill="none" />
    <path d="M2 12c3.5 5 6.5 8 10 8s6.5-3 10-8" stroke="#777" strokeWidth="1.5" fill="none" />
  </svg>,
  // JavaScript
  <svg key="javascript" viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#777" strokeWidth="1.5" />
    <path d="M9 14c0 1.5-1 2-2.5 2s-2-1-2-2V9M15 14c0 1.5-1 2-2.5 2s-2-1-2-2V9" stroke="#777" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Python
  <svg key="python" viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
    <path d="M6 2h12c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4z" stroke="#777" strokeWidth="1.5" fill="none" />
    <circle cx="9" cy="9" r="1.5" fill="#777" />
    <circle cx="15" cy="9" r="1.5" fill="#777" />
    <path d="M12 14c-1 1-2 1.5-3 1.5" stroke="#777" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Git
  <svg key="git" viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
    <circle cx="12" cy="12" r="8" stroke="#777" strokeWidth="1.5" fill="none" />
    <path d="M12 6v12M6 12h12" stroke="#777" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

// SVG icons for middle orbit - Frontend Tools
const MiddleIcons = [
  // HTML
  <svg key="html" viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18 }}>
    <path d="M3 3h2v16H3V3zm5 0h2v14H8V3zm5 0h2v16h-2V3zm5 0h2v14h-2V3z" stroke="#888" strokeWidth="1" fill="#888" />
  </svg>,
  // CSS
  <svg key="css" viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18 }}>
    <path d="M3 3l1.5 18L12 22l7.5-1L21 3H3z" stroke="#888" strokeWidth="1.5" fill="none" />
    <path d="M8 8h8M8 12h8M8 16h4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Tailwind
  <svg key="tailwind" viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18 }}>
    <circle cx="12" cy="12" r="9" stroke="#888" strokeWidth="1.5" fill="none" />
    <path d="M8 14c1-1 2-1.5 3-1.5s2 0.5 3 1.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="9" cy="9" r="1" fill="#888" />
    <circle cx="15" cy="9" r="1" fill="#888" />
  </svg>,
];

// SVG icons for inner orbit
const InnerIcons = [
  // Pause-like
  <svg key="inner1" viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16 }}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#666" />
  </svg>,
  // Lightning
  <svg key="inner2" viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16 }}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Code
  <svg key="inner3" viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16 }}>
    <polyline points="16 18 22 12 16 6" stroke="#777" strokeWidth="1.5" strokeLinecap="round" />
    <polyline points="8 6 2 12 8 18" stroke="#777" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

function SkillBar({ name, pct }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${pct / 100})`;
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [pct]);

  return (
    <div style={styles.skillRow}>
      <span style={styles.skillName}>{name}</span>
      <div style={styles.barTrack}>
        <div ref={fillRef} style={styles.barFill} />
      </div>
      <span style={styles.skillPct}>{pct}%</span>
    </div>
  );
}

function SkillCategory({ label, skills }) {
  return (
    <div style={styles.skillCat}>
      <div style={styles.catLabel}>{label}</div>
      <div style={styles.skillBars}>
        {skills.map((s) => (
          <SkillBar key={s.name} name={s.name} pct={s.pct} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const marqueeText = [...marqueeWords, ...marqueeWords, ...marqueeWords].join(
    "\u00a0\u00a0\u00a0\u00a0"
  );

  return (
    <>
      <style>{cssString}</style>
      <div style={styles.root}>
        {/* Marquee background */}
        <div style={styles.marqueeBg}>
          <div className="marquee-track">
            {[...Array(2)].map((_, i) =>
              marqueeWords.map((w) => (
                <span key={`${w}-${i}`} style={styles.marqueeWord}>
                  {w}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Main content row */}
        <div style={styles.contentRow}>
          {/* Left panel */}
          <div style={styles.leftPanel}>
            <div style={styles.sectionLabel}>
              <span className="glow-dot" />
              &nbsp;&nbsp;Technologies I Use
            </div>
            <div style={styles.sectionTitle}>
              SKILLS &amp;
              <br />
              <span style={styles.sectionTitleMuted}>EXPERTISE</span>
            </div>
            <div style={styles.divider} />
            <SkillCategory label="Frontend" skills={skillsData.frontend} />
            <SkillCategory label="Backend" skills={skillsData.backend} />
            <SkillCategory label="Tools" skills={skillsData.tools} />
          </div>

          {/* Right panel */}
          <div style={styles.rightPanel}>
            <div style={styles.floatingTags}>
              <div style={{ ...styles.tag, top: 20, left: 20 }}>Progress</div>
              <div style={{ ...styles.tag, top: 40, right: 20 }}>Learning</div>
              <div style={{ ...styles.tag, bottom: 40, left: 20 }}>Upskilling</div>
              <div style={{ ...styles.tag, bottom: 20, right: 20 }}>Growth</div>
            </div>

            <div style={styles.orbitContainer}>
              {/* Static outer ring */}
              <div style={{ ...styles.orbitRing, width: 320, height: 320, opacity: 0.3 }} />

              {/* Outermost ring - Tools */}
              <div className="ring-outer" style={{ ...styles.orbitRing, width: 340, height: 340 }}>
                {OuterIcons.map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.orbitIcon,
                      ...outerIconPositions[i],
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Middle ring - Frontend/Backend tools */}
              <div className="ring-middle" style={{ ...styles.orbitRing, width: 240, height: 240 }}>
                {MiddleIcons.map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.orbitIcon,
                      width: 34,
                      height: 34,
                      ...middleIconPositions[i],
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Inner ring */}
              <div className="ring-inner" style={{ ...styles.orbitRing, width: 160, height: 160 }}>
                {InnerIcons.map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.orbitIcon,
                      width: 30,
                      height: 30,
                      ...innerIconPositions[i],
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>

              {/* Center */}
              <div style={styles.orbitCenter}>
                <div style={styles.orbitCenterText}>
                  Dev
                  <br />
                  Stack
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={styles.bottomStrip}>
          {stats.map((s) => (
            <div key={s.label} style={styles.statItem}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Outer orbit icon positions (top, right, bottom, left)
const outerIconPositions = [
  { top: -20, left: "50%", transform: "translateX(-50%)" },
  { top: "50%", right: -20, transform: "translateY(-50%)" },
  { bottom: -20, left: "50%", transform: "translateX(-50%)" },
  { top: "50%", left: -20, transform: "translateY(-50%)" },
];

// Middle orbit icon positions (top-right, bottom-right, bottom-left, top-left)
const middleIconPositions = [
  { top: -17, left: "50%", transform: "translateX(-50%)" },
  { top: "50%", right: -17, transform: "translateY(-50%)" },
  { bottom: -17, left: "50%", transform: "translateX(-50%)" },
  { top: "50%", left: -17, transform: "translateY(-50%)" },
];

// Inner orbit icon positions (top, bottom, right)
const innerIconPositions = [
  { top: -14, left: "50%", transform: "translateX(-50%)" },
  { bottom: -14, left: "50%", transform: "translateX(-50%)" },
  { top: "50%", right: -14, transform: "translateY(-50%)" },
];

const styles = {
  root: {
    background: "#0a0a0a",
    color: "#e8e8e8",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
    minHeight: 600,
    position: "relative",
  },
  marqueeBg: {
    position: "absolute",
    top: "15%",
    transform: "translateY(-50%)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.04,
    overflow: "hidden",
    width: "100%",
  },
  marqueeWord: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 140,
    letterSpacing: "0.05em",
    color: "#fff",
    padding: "0 40px",
    display: "inline-block",
  },
  contentRow: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    position: "relative",
    zIndex: 2,
    minHeight: 600,
  },
  leftPanel: {
    flex: "0 0 42%",
    padding: "48px 36px 48px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRight: "1px solid #222",
  },
  rightPanel: {
    flex: "0 0 400px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 500,
  },
  sectionLabel: {
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#555",
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 52,
    lineHeight: 1,
    color: "#fff",
    marginBottom: 6,
  },
  sectionTitleMuted: {
    color: "#3a3a3a",
  },
  divider: {
    width: 40,
    height: 1,
    background: "#333",
    margin: "22px 0",
  },
  skillCat: {
    marginBottom: 24,
  },
  catLabel: {
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#444",
    marginBottom: 10,
  },
  skillBars: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  skillRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  skillName: {
    fontSize: 12,
    color: "#aaa",
    minWidth: 88,
  },
  barTrack: {
    flex: 1,
    height: 2,
    background: "#1f1f1f",
    borderRadius: 1,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    background: "linear-gradient(90deg, #888, #ccc)",
    borderRadius: 1,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 1.2s cubic-bezier(.16,1,.3,1)",
  },
  skillPct: {
    fontSize: 10,
    color: "#555",
    minWidth: 28,
    textAlign: "right",
  },
  rightPanel: {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 500,
  },
  floatingTags: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  tag: {
    fontSize: 9,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#333",
    position: "absolute",
    whiteSpace: "nowrap",
  },
  orbitContainer: {
    position: "relative",
    width: 360,
    height: 360,
  },
  orbitRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    border: "1px solid #1e1e1e",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    height: 340,
  },
  orbitIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    background: "#111",
    border: "1px solid #252525",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  orbitCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 56,
    height: 56,
    background: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  orbitCenterText: {
    fontSize: 9,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#555",
    textAlign: "center",
    lineHeight: 1.3,
  },
  bottomStrip: {
    borderTop: "1px solid #181818",
    padding: "18px 40px",
    display: "flex",
    gap: 32,
    position: "relative",
    zIndex: 2,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  statNum: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 28,
    color: "#888",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 10,
    color: "#3a3a3a",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
};

const cssString = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .marquee-track {
    display: inline-flex;
    animation: marqueeRun 18s linear infinite;
  }
  @keyframes marqueeRun {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .ring-outer {
    animation: spinCW 24s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #1e1e1e;
    border-radius: 50%;
    width: 340px;
    height: 340px;
    transform: translate(-50%, -50%);
  }
  .ring-middle {
    animation: spinCCW 18s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #1e1e1e;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .ring-inner {
    animation: spinCW 14s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #1e1e1e;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  @keyframes spinCW {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  @keyframes spinCCW {
    to { transform: translate(-50%, -50%) rotate(-360deg); }
  }

  .glow-dot {
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #555;
    border-radius: 50%;
    animation: pulse 2.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
`;