import { useTheme } from '../context/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: colors.glassBg,
        borderColor: colors.glassBorder,
        color: colors.primary,
      }}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {isDark ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
