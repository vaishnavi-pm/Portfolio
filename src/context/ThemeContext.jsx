import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }, []);

  const colors = {
    background: '#0F172A',
    card: '#1E293B',
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    textHeading: '#F8FAFC',
    textParagraph: '#CBD5E1',
    border: '#334155',
    glassOpacity: 0.7,
    glassBg: 'rgba(30, 41, 59, 0.7)',
    glassBorder: 'rgba(51, 65, 85, 0.2)',
    hover: 'rgba(255,255,255,0.1)',
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        colors,
        toggleTheme: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};