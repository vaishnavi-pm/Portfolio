import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only show on pointer devices (desktop/laptop)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    // Smooth cursor with lerp (linear interpolation)
    const smoothCursor = () => {
      const dx = mouseRef.current.x - smoothMouseRef.current.x;
      const dy = mouseRef.current.y - smoothMouseRef.current.y;
      
      // Smoothing factor (0 = no movement, 1 = instant). Lower = smoother
      const smoothFactor = 0.15;
      
      smoothMouseRef.current.x += dx * smoothFactor;
      smoothMouseRef.current.y += dy * smoothFactor;
      
      setSmoothMouse({ 
        x: smoothMouseRef.current.x, 
        y: smoothMouseRef.current.y 
      });
      
      rafRef.current = requestAnimationFrame(smoothCursor);
    };

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onOver = (e) => {
      setIsHovering(
        e.target.closest('button, a, input, textarea, [role="button"], [data-cursor-hover]') !== null
      );
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);
    
    rafRef.current = requestAnimationFrame(smoothCursor);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Outer glow ring - smoothest motion */}
          <motion.div
            key="cursor-glow"
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{
              x: smoothMouse.x - 32,
              y: smoothMouse.y - 32,
            }}
          >
            <div className="w-16 h-16 border border-cyan-400/20 rounded-full blur-sm" />
          </motion.div>

          {/* Middle ring */}
          <motion.div
            key="cursor-ring"
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.8 : 0.4,
            }}
            style={{
              x: smoothMouse.x - 20,
              y: smoothMouse.y - 20,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="w-10 h-10 border border-cyan-400/60 rounded-full" />
          </motion.div>

          {/* Inner dot - center cursor */}
          <motion.div
            key="cursor-dot"
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 1 : 0.8,
            }}
            style={{
              x: smoothMouse.x - 5,
              y: smoothMouse.y - 5,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-lg shadow-cyan-400/50" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;