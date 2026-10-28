import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialLinks = [
  {
    id: 'github',
    Icon: GitHubIcon,
    href: 'https://github.com/vaishnavi-pm',
    label: 'GitHub',
    hoverClass: 'hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)]',
  },
  {
    id: 'linkedin',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/vaishnavi-pm-/',
    label: 'LinkedIn',
    hoverClass: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 hover:shadow-[0_8px_20px_rgba(10,102,194,0.25)]',
  },
  {
    id: 'instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/_.vai.shu.__/',
    label: 'Instagram',
    hoverClass: 'hover:text-[#f77737] hover:border-[#e1306c]/40 hover:bg-[#e1306c]/10 hover:shadow-[0_8px_20px_rgba(225,48,108,0.2)]',
  },
];

const SocialLink = ({ Icon, href, label, hoverClass }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="relative bg-[#0f141e]/95 border border-white/10 text-slate-200 text-[0.68rem] font-medium tracking-widest uppercase px-3 py-1.5 rounded-md whitespace-nowrap backdrop-blur-sm">
              {label}
              {/* Arrow */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-white/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon Button */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.12, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className={`
          flex items-center justify-center w-11 h-11 rounded-full
          bg-white/[0.04] border border-white/[0.08]
          text-slate-500 transition-all duration-200
          ${hoverClass}
        `}
      >
        <Icon />
      </motion.a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-center">

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <SocialLink key={link.id} Icon={link.Icon} href={link.href} label={link.label} hoverClass={link.hoverClass} />
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center sm:text-right"
          >
            <p className="text-slate-400 text-sm">© 2024 Vaishnavi PM. All rights reserved.</p>
          </motion.div>

        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 glass p-3 rounded-full text-white hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;