// src/ThemeToggler.js
import React, { useState, useEffect } from "react";
import styles from './App.module.css';

/**
 * ThemeToggler component allows users to toggle between dark and light mode.
 * @returns {JSX.Element} The rendered ThemeToggler button.
 */
function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to light mode
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Add or remove the dark class on the body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  /**
   * Toggles the theme between dark and light mode.
   * @returns {void}
   */
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button 
      className={styles.themeToggleBtn}
      onClick={toggleTheme}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggler;