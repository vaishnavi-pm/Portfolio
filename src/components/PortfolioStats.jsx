/**
 * Portfolio Statistics Counter Component
 * 
 * Displays beautiful animated statistics showing:
 * - Portfolio Views
 * - Projects Completed
 * - Certifications Earned
 * - Internship Experiences
 * 
 * Uses Framer Motion for smooth animations
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme';

// Counter component with animated increment
const AnimatedCounter = ({ 
  end = 0, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  isVisible = false 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return (
    <span>
      {prefix}{count.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

// Individual stat card component
const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  suffix = '', 
  description = '',
  index = 0,
  isVisible = false,
  colors 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`, opacity: 0.1 }}
      />

      {/* Card content */}
      <div
        className="relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300"
        style={{
          backgroundColor: colors.isDark 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)',
          borderColor: colors.isDark 
            ? 'rgba(100, 116, 139, 0.3)' 
            : 'rgba(226, 232, 240, 0.5)',
          color: colors.text,
        }}
      >
        {/* Icon container */}
        <div className="flex justify-between items-start mb-4">
          <motion.div
            className="p-3 rounded-xl"
            style={{ backgroundColor: colors.accent + '20' }}
            whileHover={{ rotate: 10 }}
          >
            {Icon && <Icon size={28} style={{ color: colors.accent }} />}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-xs px-2 py-1 rounded-full"
            style={{
              backgroundColor: colors.accent + '30',
              color: colors.accent,
            }}
          >
            Active
          </motion.div>
        </div>

        {/* Title */}
        <h3 
          className="text-sm font-medium mb-2 opacity-75"
          style={{ color: colors.textSecondary }}
        >
          {title}
        </h3>

        {/* Counter value */}
        <div className="mb-3">
          <p 
            className="text-3xl font-bold mb-1"
            style={{ color: colors.accent }}
          >
            <AnimatedCounter 
              end={value} 
              duration={2.5}
              suffix={suffix}
              isVisible={isVisible}
            />
          </p>
        </div>

        {/* Description */}
        {description && (
          <p 
            className="text-xs"
            style={{ color: colors.textSecondary + '80' }}
          >
            {description}
          </p>
        )}

        {/* Bottom accent line */}
        <motion.div
          className="mt-4 h-1 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100%' } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          style={{ backgroundColor: colors.accent }}
        />
      </div>
    </motion.div>
  );
};

// Main component
const PortfolioStats = ({ 
  stats = null,
  className = '',
  showTitle = true,
  title = 'Portfolio Statistics',
  subtitle = 'Here\'s what I\'ve accomplished so far'
}) => {
  const { isDark, colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Default stats (customize these with your actual data)
  const defaultStats = [
    {
      icon: '👁️',
      title: 'Portfolio Views',
      value: 2500,
      suffix: '+',
      description: 'Total visitors to this portfolio'
    },
    {
      icon: '🚀',
      title: 'Projects Completed',
      value: 15,
      suffix: '',
      description: 'Successfully delivered projects'
    },
    {
      icon: '📜',
      title: 'Certifications',
      value: 8,
      suffix: '',
      description: 'Professional certifications earned'
    },
    {
      icon: '💼',
      title: 'Internships',
      value: 3,
      suffix: '',
      description: 'Internship experiences'
    }
  ];

  const displayStats = stats || defaultStats;

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const parseIcon = (icon) => {
    if (typeof icon === 'string') {
      // Return emoji as is
      return null;
    }
    return icon;
  };

  return (
    <div
      ref={containerRef}
      className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}
      style={{
        backgroundColor: isDark 
          ? 'rgba(15, 23, 42, 0.4)' 
          : 'rgba(241, 245, 250, 0.6)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              {title}
            </h2>
            <p 
              className="text-lg"
              style={{ color: colors.textSecondary }}
            >
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => (
            <StatCard
              key={index}
              icon={parseIcon(stat.icon)}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
              index={index}
              isVisible={isVisible}
              colors={colors}
            />
          ))}
        </div>

        {/* Bottom accent element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 h-1 w-24 rounded-full mx-auto"
          style={{ backgroundColor: colors.accent }}
        />
      </div>
    </div>
  );
};

export default PortfolioStats;

// Export for customization
export { AnimatedCounter, StatCard };
