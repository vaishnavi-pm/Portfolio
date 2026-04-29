import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronDown, GitBranch, Link, Sparkles } from 'lucide-react';
import { useState, useMemo, useCallback, memo, useEffect } from 'react';
import { AuroraText } from "@/registry/magicui/aurora-text"

// ─── Global Styles ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=DM+Sans:wght@300;400&display=swap');

    /* ── Flowing shimmer beam across the name ── */
    @keyframes shimmerSweep {
      0%   { background-position: -250% center; }
      100% { background-position: 250% center; }
    }

    /* ── Soft halo breath on the wrapper ── */
    @keyframes haloPulse {
      0%, 100% { opacity: 0.55; }
      50%       { opacity: 1;    }
    }

    /* ── Floating particle pulse ── */
    @keyframes dotPulse {
      0%, 100% { opacity: 0.15; transform: scale(1);   }
      50%       { opacity: 0.55; transform: scale(1.4); }
    }

    /* ── Cursor blink ── */
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }

    /*
      NAME EFFECT:
      - color: transparent  →  black fill (nothing shows through from below)
      - background gradient →  a narrow white beam sweeping left→right
      - background-clip:text → clips gradient to letter shapes only
      - filter: drop-shadow  →  glowing white halo blooming outside the letters
    */
    .name-shimmer {
      color: transparent;
      background: linear-gradient(
        105deg,
        rgba(255,255,255,0.06) 0%,
        rgba(255,255,255,0.06) 28%,
        rgba(255,255,255,0.55) 40%,
        rgba(255,255,255,1)    50%,
        rgba(255,255,255,0.55) 60%,
        rgba(255,255,255,0.06) 72%,
        rgba(255,255,255,0.06) 100%
      );
      background-size: 250% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmerSweep 2.6s linear infinite;

      /* Outer luminous halo */
      filter:
        drop-shadow(0 0 12px rgba(255,255,255,0.80))
        drop-shadow(0 0 32px rgba(255,255,255,0.40))
        drop-shadow(0 0 70px rgba(255,255,255,0.18));
    }

    .name-halo {
      display: inline-block;
      animation: haloPulse 3.5s ease-in-out infinite;
    }

    .dot-pulse   { animation: dotPulse 2.2s ease-in-out 0.00s infinite; }
    .dot-pulse-2 { animation: dotPulse 2.2s ease-in-out 0.55s infinite; }
    .dot-pulse-3 { animation: dotPulse 2.2s ease-in-out 1.10s infinite; }
    .dot-pulse-4 { animation: dotPulse 2.2s ease-in-out 1.65s infinite; }

    .cursor-blink { animation: cursorBlink 0.9s step-end infinite; }

    @keyframes scrollBounce {
      0%, 100% { transform: translateY(0);   }
      50%       { transform: translateY(8px); }
    }
    .scroll-bounce { animation: scrollBounce 1.6s ease-in-out infinite; }

    /* Aurora text animation */
    @keyframes aurora {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    /* Glass dock */
    .glass-dock {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.10);
      backdrop-filter: blur(10px);
    }

    /* Icon button */
    .glass-icon {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(8px);
      transition: background 0.2s;
    }
    .glass-icon:hover { background: rgba(255,255,255,0.14); }

    /* Primary CTA */
    .btn-primary {
      background: #ffffff;
      color: #000000;
      font-weight: 600;
      transition: background 0.2s, box-shadow 0.2s;
    }
    .btn-primary:hover {
      background: #e8e8e8;
      box-shadow: 0 0 28px rgba(255,255,255,0.22);
    }

    /* Ghost CTA */
    .btn-ghost {
      background: transparent;
      color: rgba(255,255,255,0.70);
      border: 1px solid rgba(255,255,255,0.22);
      transition: background 0.2s, color 0.2s;
    }
    .btn-ghost:hover {
      background: rgba(255,255,255,0.07);
      color: #ffffff;
    }

    /* Greeting badge */
    .tag-badge {
      border: 1px solid rgba(255,255,255,0.18);
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.80);
    }

    /* Subtle grid */
    .bg-grid {
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 52px 52px;
    }
  `}</style>
);

// ─── Typewriter Hook ──────────────────────────────────────────────────────────
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [index,    setIndex]    = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text,     setText]     = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(p => (p + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSubIndex(p => p + (deleting ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, speed, pause]);

  return text;
};

// ─── Social Button ────────────────────────────────────────────────────────────
const SocialButton = memo(({ button, index, hoveredIndex, tooltipIndex, onMouseEnter, onMouseLeave }) => {
  const Icon     = button.icon;
  const distance = hoveredIndex === null ? null : Math.abs(index - hoveredIndex);
  const scale    = distance === null ? 1 : distance === 0 ? 1.3 : distance === 1 ? 1.1 : 1;

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.a
        href={button.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={button.label}
        className="glass-icon p-4 rounded-full text-white flex items-center justify-center"
        animate={{ scale }}
        transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.5 }}
        whileTap={{ scale: scale * 0.9 }}
      >
        <Icon size={22} />
      </motion.a>

      <AnimatePresence>
        {tooltipIndex === index && (
          <motion.div
            key="tip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-white text-sm whitespace-nowrap pointer-events-none glass-dock"
          >
            {button.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
SocialButton.displayName = 'SocialButton';

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tooltipIndex, setTooltipIndex] = useState(null);

  const roles     = useMemo(() => ['Full Stack Developer', 'UI/UX Enthusiast', 'Creative Coder', 'Open Source Contributor'], []);
  const typedRole = useTypewriter(roles);

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const socialButtons = useMemo(() => [
    { href: 'https://www.linkedin.com/in/vaishnavi-pm-/', icon: Link,     label: 'LinkedIn'  },
    { href: 'https://github.com/vaishnavi-pm',           icon: GitBranch, label: 'GitHub'    },
    { href: 'https://www.instagram.com/_.vai.shu.__/',   icon: Camera,    label: 'Instagram' },
  ], []);

  const handleDockLeave = useCallback(() => { setHoveredIndex(null); setTooltipIndex(null); }, []);
  const handleBtnEnter  = useCallback(i  => { setHoveredIndex(i);    setTooltipIndex(i);    }, []);
  const handleBtnLeave  = useCallback(()  => { setTooltipIndex(null);                        }, []);

  return (
    <>
      <GlobalStyles />

      <section
        id="home"
        style={{ backgroundColor: '#000000', minHeight: '100vh' }}
        className="flex items-center justify-center relative overflow-hidden"
      >
        {/* Grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />

        {/* Radial vignette for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* White floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="dot-pulse   absolute bg-white rounded-full w-1.5 h-1.5" style={{ top: '12%',  left: '8%'  }} />
          <span className="dot-pulse-2 absolute bg-white rounded-full w-1   h-1"   style={{ top: '31%',  right: '14%'}} />
          <span className="dot-pulse-3 absolute bg-white rounded-full w-1.5 h-1.5" style={{ bottom: '23%', left: '21%'}} />
          <span className="dot-pulse-4 absolute bg-white rounded-full w-1   h-1"   style={{ top: '55%',  right: '30%'}} />
          <span className="dot-pulse   absolute bg-white rounded-full w-1   h-1"   style={{ bottom: '36%', right: '9%', animationDelay: '0.9s' }} />
          <span className="dot-pulse-2 absolute bg-white rounded-full w-1   h-1"   style={{ top: '70%',  left: '44%' }} />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >

            {/* Greeting badge */}
            <motion.div variants={itemVariants}>
              <span className="tag-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm tracking-widest uppercase font-medium">
                <Sparkles size={13} style={{ opacity: 0.65 }} />
                Hello, I'm
              </span>
            </motion.div>

            {/* ── VAISHNAVI — black fill · white shimmer sweep · luminous halo ── */}
            <motion.div variants={itemVariants}>
              <span className="name-halo">
                <h1
                  className="name-shimmer"
                  style={{
                    fontFamily:    "'Dancing Script', cursive",
                    fontWeight:    700,
                    fontSize:      'clamp(3.8rem, 11vw, 7.5rem)',
                    letterSpacing: '0.02em',
                    lineHeight:    1.15,
                    display:       'inline-block',
                  }}
                >
                  <AuroraText>Vaishnavi</AuroraText>
                </h1>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontWeight:    300,
                letterSpacing: '0.01em',
                color:         'rgba(255,255,255,0.48)',
                fontSize:      'clamp(1.05rem, 2.4vw, 1.55rem)',
              }}
            >
              Where imagination meets implementation.
            </motion.p>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="flex items-center justify-center h-8">
              <span style={{
                fontFamily:    'monospace',
                fontSize:      '1rem',
                color:         'rgba(255,255,255,0.60)',
                letterSpacing: '0.03em',
              }}>
                {typedRole}
                <span className="cursor-blink" style={{ color: '#ffffff' }}>|</span>
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a href="#projects" className="btn-primary px-8 py-3 rounded-full text-sm tracking-wide">
                View My Work
              </a>
              <a href="#contact" className="btn-ghost px-8 py-3 rounded-full text-sm tracking-wide">
                Get In Touch
              </a>
            </motion.div>

            {/* Dock */}
            <motion.div variants={itemVariants} className="flex justify-center pt-1">
              <div
                className="glass-dock flex items-center gap-3 px-5 py-3 rounded-2xl"
                onMouseLeave={handleDockLeave}
              >
                {socialButtons.map((btn, i) => (
                  <SocialButton
                    key={btn.label}
                    button={btn}
                    index={i}
                    hoveredIndex={hoveredIndex}
                    tooltipIndex={tooltipIndex}
                    onMouseEnter={() => handleBtnEnter(i)}
                    onMouseLeave={handleBtnLeave}
                  />
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce"
        >
          <div className="flex flex-col items-center gap-1" style={{ color: 'rgba(255,255,255,0.22)' }}>
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Scroll</span>
            <ChevronDown size={16} />
          </div>
        </motion.div>

      </section>
    </>
  );
};

export default Hero;