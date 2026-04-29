import { motion } from 'framer-motion';
import { Camera, GitBranch, Link, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/vaishnavi-pm', label: 'GitHub' },
    { icon: Link, href: 'https://www.linkedin.com/in/vaishnavi-pm-/', label: 'LinkedIn' },
    { icon: Camera, href: 'https://www.instagram.com/_.vai.shu.__/', label: 'Instagram' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-center">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <div className="text-2xl font-bold gradient-text mb-1">VAISHNAVI PM</div>
            <p className="text-slate-400 text-sm">Full Stack Developer &amp; UI/UX Designer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <link.icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center sm:text-right space-y-1"
          >
            <p className="text-slate-400 text-sm">© 2024 Vaishnavi PM. All rights reserved.</p>
            <p className="text-slate-500 text-xs flex items-center justify-center sm:justify-end gap-1">
              Made with <Heart size={11} className="text-red-500 fill-red-500" /> and lots of ☕
            </p>
          </motion.div>
        </div>
      </div>

      {/* Back to Top — fixed, always visible */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
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