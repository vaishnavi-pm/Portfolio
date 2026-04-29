import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Track mouse movement for background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large background circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gray-400/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{ type: "spring", stiffness: 35, damping: 20 }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full"
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 40 }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-gray-300/15 rotate-45"
          animate={{
            x: mousePosition.x * -80,
            y: mousePosition.y * -80,
            rotate: mousePosition.x * 45,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 35 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/25 rounded-full"
          animate={{
            x: mousePosition.x * 120,
            y: mousePosition.y * 120,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 45 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-5 h-5 bg-gray-400/10 rounded-lg"
          animate={{
            x: mousePosition.x * -90,
            y: mousePosition.y * -90,
            rotate: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 90, damping: 38 }}
        />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20 bg-gray-900/30">
          <Skills />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20 bg-gray-900/30">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}