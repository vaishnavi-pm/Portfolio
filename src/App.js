import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Animation wrapper for smooth page transitions
const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 font-sans">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Hero />
              </AnimatedPage>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            }
          />
          <Route
            path="/projects"
            element={
              <AnimatedPage>
                <Projects />
              </AnimatedPage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
