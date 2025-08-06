// src/ThemeToggler.js
import React, { useContext } from "react";
import styles from './App.module.css';

// Theme context
const ThemeContext = React.createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = React.useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch {}
    
    // Use data-theme attribute instead of classes
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = React.useCallback(() => setDarkMode((prev) => !prev), []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggler() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={styles.themeToggleBtn}
      onClick={toggleTheme}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export { ThemeContext };
export default ThemeToggler;