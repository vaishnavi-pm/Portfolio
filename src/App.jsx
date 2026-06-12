import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Service from "./components/service";
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import { useTheme } from './context/useTheme';
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { isDark, colors } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const PortfolioLayout = useMemo(() => (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: 'transparent',
        color: colors.textParagraph,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >

      <NeuralNetworkBackground />

      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20" style={{
          backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(37, 99, 235, 0.02)',
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <Skills />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="contact" className="py-20" style={{
          backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(37, 99, 235, 0.02)',
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  ), [mousePosition, isDark, colors]);

  return (
    <Routes>
      <Route path="/" element={PortfolioLayout} />
      <Route path="/project/ecommerce" element={<h1 style={{ color: '#fff', background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>Ecommerce Page</h1>} />
      <Route path="/project/task"      element={<h1 style={{ color: '#fff', background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>Task App</h1>} />
      <Route path="/service" element={<Service />} />
      <Route path="/services/web" element={<Service />} />
      <Route path="/project/service" element={<Service />} />
      <Route path="/project/weather"   element={<h1 style={{ color: '#fff', background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>Weather App</h1>} />
      <Route path="/project/blog"      element={<h1 style={{ color: '#fff', background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>Blog Platform</h1>} />
    </Routes>
  );
};

export default App;