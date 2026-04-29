import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code,    label: 'Projects Completed', value: '5+' },
    { icon: Zap,     label: 'Years Experience',    value: '2+' },
    { icon: Palette, label: 'Technologies',        value: '15+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">

      {/* ── Marquee keyframes ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Ghost ABOUT marquee scrolling right to left ── */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0"
      >
        <div
          className="flex w-max"
          style={{ animation: 'marquee 18s linear infinite' }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="select-none whitespace-nowrap pr-28"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(280px, 42vw, 520px)',
                color: 'rgba(255,255,255,0.055)',
                lineHeight: 1,
                letterSpacing: '0.04em',
              }}
            >
              ABOUT
            </span>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center"
        >

          {/* Section label */}
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-[0.35em] uppercase text-cyan-400 mb-4"
          >
            My Story
          </motion.p>

          {/* Front headline */}
          <motion.h2
            variants={itemVariants}
            className="font-black uppercase leading-none mb-16 text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(52px, 9vw, 120px)',
              letterSpacing: '0.03em',
            }}
          >
            CRAFTING<br />
            <span
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
                color: 'transparent',
              }}
            >
              DIGITAL
            </span>{' '}
            DREAMS
          </motion.h2>

          {/* Body copy */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 max-w-3xl mb-16"
          >
            <div>
              <div className="w-10 h-0.5 bg-cyan-400 mx-auto mb-5" />
              <p className="text-slate-400 leading-relaxed text-sm">
                I am Vaishnavi PM, a passionate Full-Stack Web Developer who loves building
                modern, fast, and responsive web applications with clean design and smooth
                user experiences. My goal is to create impactful digital solutions that
                solve real-world problems.
              </p>
            </div>
            <div>
              <div className="w-10 h-0.5 bg-cyan-400 mx-auto mb-5" />
              <p className="text-slate-400 leading-relaxed text-sm">
                Skilled in React.js, Tailwind CSS, Framer Motion, frontend development,
                payment integration, and databases. I combine creativity with technology
                and always look forward to learning, growing, and working on exciting
                opportunities.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-2xl w-full"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-6 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm"
              >
                <Icon className="text-cyan-400 w-5 h-5 mb-1" />
                <span
                  className="text-white font-black"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(32px, 5vw, 48px)',
                  }}
                >
                  {value}
                </span>
                <span className="text-slate-500 text-xs tracking-wide text-center">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;