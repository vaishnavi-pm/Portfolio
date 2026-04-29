import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, GitBranch, Star, ArrowUpRight } from 'lucide-react';

// ── Project Data ─────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description:
      'A responsive online store built with React and Node.js. Features product catalog, shopping cart, and payment integration.',
    emoji: '🛒',
    glowColor: 'rgba(34,211,238,0.08)',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'full-stack',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A productivity app for managing daily tasks with drag-and-drop functionality and local storage.',
    emoji: '📋',
    glowColor: 'rgba(168,85,247,0.08)',
    tags: ['React', 'JavaScript', 'Local Storage'],
    category: 'frontend',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'A weather application that displays current conditions and forecasts using a public API.',
    emoji: '🌤️',
    glowColor: 'rgba(96,165,250,0.08)',
    tags: ['React', 'API Integration', 'CSS'],
    category: 'frontend',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Blog Platform',
    description:
      'A content management system for creating and publishing blog posts with a clean, modern interface.',
    emoji: '📝',
    glowColor: 'rgba(34,197,94,0.08)',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'full-stack',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'This responsive portfolio website showcasing my projects and skills, built with modern web technologies.',
    emoji: '💼',
    glowColor: 'rgba(244,114,182,0.08)',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 6,
    title: 'API Development',
    description:
      'RESTful API for a social media application with user authentication and data management.',
    emoji: '🔗',
    glowColor: 'rgba(251,146,60,0.08)',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    category: 'backend',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
];

const FILTERS = [
  { label: 'All',        value: 'all' },
  { label: 'Full Stack', value: 'full-stack' },
  { label: 'Frontend',   value: 'frontend' },
  { label: 'Backend',    value: 'backend' },
];

// ── Filter Tabs ───────────────────────────────────────────────────
function FilterTabs({ active, onChange }) {
  return (
    <div className="proj-filter">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          className={`filt-btn${active === f.value ? ' active' : ''}`}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

// ── Single Project Card ───────────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      className="proj-card"
    >
      {/* Thumbnail */}
      <div className="proj-thumb">
        <span style={{ fontSize: '3rem', zIndex: 1, position: 'relative' }}>
          {project.emoji}
        </span>

        {/* Colour glow on hover */}
        <div
          className="proj-glow"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.glowColor}, transparent 70%)`,
          }}
        />

        {/* Overlay with links */}
        <div className="proj-overlay">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-overlay-btn"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            title="Live Demo"
          >
            <ArrowUpRight size={16} />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-overlay-btn"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            title="GitHub"
          >
            <GitBranch size={16} />
          </motion.a>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        {/* Featured badge */}
        {project.featured && (
          <div className="proj-featured-badge">
            <Star size={9} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Tech tags */}
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
        </div>

        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>

        {/* Links */}
        <div className="proj-links">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="pl prim"
          >
            <ExternalLink size={13} />
            Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pl"
          >
            <GitBranch size={13} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section Header ────────────────────────────────────────────────
function SectionHeader({ headerRef, isInView }) {
  return (
    <motion.div
      ref={headerRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ marginBottom: '1rem' }}
    >
      <div className="sec-eye">
        <span className="sec-eye-line" />
        Portfolio
        <span className="sec-eye-line" />
      </div>
      <h2 className="sec-h">
        Selected <span className="hl">Projects</span>
      </h2>
      <p className="sec-p">
        A curated collection of things I've built — from full-stack apps to interactive UIs.
      </p>
    </motion.div>
  );
}

// ── View More ─────────────────────────────────────────────────────
function ViewMore() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{ textAlign: 'center', marginTop: '2.5rem' }}
    >
      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.96 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.72rem 1.8rem',
          borderRadius: '99px',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'transparent',
          color: '#94a3b8',
          textDecoration: 'none',
          fontSize: '0.84rem',
          fontFamily: 'var(--font-b)',
          cursor: 'none',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)';
          e.currentTarget.style.color = '#60a5fa';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          e.currentTarget.style.color = '#94a3b8';
        }}
      >
        <GitBranch size={16} />
        View all on GitHub
      </motion.a>
    </motion.div>
  );
}

// ── Main Export ───────────────────────────────────────────────────
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-80px' });

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="sec">
      <SectionHeader headerRef={headerRef} isInView={isInView} />

      <FilterTabs active={activeFilter} onChange={setActiveFilter} />

      <motion.div layout className="proj-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ViewMore />
    </section>
  );
};

export default Projects;