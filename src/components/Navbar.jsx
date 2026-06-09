import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme';
import resumePdf from '../assets/Vaishnavi resume.pdf';

/**
 * FONTS — add to your global CSS / index.css:
 *
 * @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');
 */

const RESUME_PATH = resumePdf;

/* ─── MagicUI-style Shimmer Button ─────────────────────────────────────── */
function ShimmerButton({ children, href, onClick, colors, ...props }) {
  const Tag = href ? motion.a : motion.button;
  return (
    <Tag
      href={href}
      onClick={onClick}
      className="shimmer-btn"
      style={{
        '--primary-color': colors.primary,
        '--bg-color': '#111111',
      }}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="shimmer-btn__border" />
      <span className="shimmer-btn__bg" />
      <span className="shimmer-btn__label">{children}</span>
    </Tag>
  );
}

/* ─── Resume Link ───────────────────────────────────────────────────────── */
function ResumeLink({ href, jost, onMouseEnter, onMouseLeave, colors }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="resume-link"
      style={{ ...jost, fontWeight: 300, cursor: 'none' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="resume-link__text" style={{ '--primary-color': '#FFFFFF' }}>Resume</span>
      <span className="resume-link__underline" style={{ '--primary-color': '#FFFFFF' }} />
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [cursorPos, setCursorPos]   = useState({ x: -200, y: -200 });
  const [showCursor, setShowCursor] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const onMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const cormorant = { fontFamily: "'Cormorant Garamond', serif" };
  const jost      = { fontFamily: "'Jost', sans-serif" };

  return (
    <>
      <style>{`

        /* ══════════════════════════════════════
           SHIMMER BUTTON  — MagicUI style
           Black pill · white light orbits border
        ══════════════════════════════════════ */

        .shimmer-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          padding: 0;               /* padding lives on __bg */
          cursor: pointer;
          border: none;
          outline: none;
          text-decoration: none;
          background: transparent;
          /* extra glow shadow on the outer box */
          box-shadow: 0 0 18px rgba(255,255,255,0.08), 0 2px 12px rgba(0,0,0,0.1);
          transition: box-shadow 0.3s ease;
          overflow: hidden;
          }

        /*
          Layer 1 — spinning conic gradient
          This IS the shimmer: a white spotlight that orbits continuously.
          We make it bigger than the button so it bleeds to all edges.
        */
        .shimmer-btn__border {
          position: absolute;
          inset: -60%;
          background: conic-gradient(
            from 0deg,
            transparent   0deg,
            transparent  60deg,
            rgba(255,255,255,0.08) 80deg,
            rgba(255,255,255,0.55) 100deg,
            rgba(255,255,255,0.9)  120deg,
            rgba(255,255,255,0.55) 140deg,
            rgba(255,255,255,0.08) 160deg,
            transparent  180deg,
            transparent  360deg
          );
          animation: shimmer-spin 2.6s linear infinite;
          border-radius: 50%;
        }
        @keyframes shimmer-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /*
          Layer 2 — the actual black fill
          Sits on top of the conic-gradient, inset by ~1.5px so only
          the very edge (the "border") shows the rotating white light.
        */
        .shimmer-btn__bg {
          position: absolute;
          inset: 1.5px;
          border-radius: 8.5px;
          background: var(--bg-color);
          /* subtle inner shadow to give depth */
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
        }

        /* Layer 3 — text */
        .shimmer-btn__label {
          position: relative;
          z-index: 2;
          display: block;
          padding: 10px 20px;
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffffff;
          white-space: nowrap;
        }


        /* ══════════════════════════════════════
           RESUME LINK
        ══════════════════════════════════════ */
        .resume-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          text-decoration: none;
        }
        .resume-link__text {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: linear-gradient(90deg, var(--primary-color), var(--primary-color), var(--primary-color));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: resume-shimmer 3s linear infinite;
          transition: letter-spacing 0.3s ease;
        }
        @keyframes resume-shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .resume-link:hover .resume-link__text { letter-spacing: 0.26em; }
        .resume-link__underline {
          display: block;
          height: 1px;
          width: 0%;
          background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
          transition: width 0.4s ease;
          border-radius: 1px;
        }
        .resume-link:hover .resume-link__underline { width: 100%; }
      `}</style>

      {/* ── Custom spinning cursor for Resume ── */}
      <motion.div
        className="fixed z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          left: cursorPos.x, top: cursorPos.y,
          width: 72, height: 72,
          marginLeft: -36, marginTop: -36,
        }}
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ 
            border: `1px solid ${colors.primary}40`,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
          style={{ backgroundColor: '#FFFFFF' }}
        />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
          style={{ backgroundColor: '#FFFFFF' }}
        />
        <span className="text-[9px] tracking-widest uppercase text-center leading-tight" style={{ ...jost, color: '#FFFFFF' }}>
          View<br />PDF
        </span>
      </motion.div>

      {/* ── Navbar wrapper ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-7"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="relative flex items-center w-full max-w-4xl rounded-[14px] overflow-hidden border transition-all duration-700"
          style={{ 
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            backdropFilter: 'none',
            boxShadow: 'none',
          }}
        >
          {/* Logo */}
          <div className="flex items-center h-5 px-20 flex-shrink-0">
            <motion.a
              href="#home"
              className="text-[25px] font-light italic tracking-widest select-none"
              style={{
  fontFamily: "'Cinzel', serif",
  color: '#FFFFFF'
}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Vaishnavi
            </motion.a>
          </div>

          <div className="flex-1" />

          {/* ── Resume ── */}
          <div className="hidden md:flex items-center h-14 px-6">
            <ResumeLink
              href={RESUME_PATH}
              jost={jost}
              onMouseEnter={() => setShowCursor(true)}
              onMouseLeave={() => setShowCursor(false)}
              colors={colors}
            />
          </div>

          {/* ── Let's Connect — MagicUI Shimmer Button ── */}
          <div className="hidden md:flex items-center h-14 px-4">
            <ShimmerButton href="#contact" colors={colors}>
              Let's Connect
            </ShimmerButton>
          </div>

          {/* ── Mobile hamburger ── */}
          <div className="md:hidden flex items-center h-14 px-4">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{
                color: colors.textParagraph,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-[calc(100%+6px)] left-6 right-6 rounded-[12px] overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(10,10,20,0.45)',
                borderColor: 'rgba(168,85,247,0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 30px rgba(168,85,247,0.15)'
              }}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {[
                { label: 'Resume', href: RESUME_PATH, external: true },
                { label: "Let's Connect", href: '#contact', cta: true },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center px-6 py-4 text-[12px] tracking-[0.18em] uppercase transition-all duration-200
                    ${i > 0 ? 'border-t' : ''}
                  `}
                  style={{ 
                    ...jost, 
                    fontWeight: 300,
                    borderTopColor: i > 0 ? colors.border : 'transparent',
                    color: item.cta ? colors.primary : colors.textParagraph,
                  }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {item.label}
                  {item.cta && <span className="ml-auto text-[10px]" style={{ opacity: 0.5 }}>→</span>}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}