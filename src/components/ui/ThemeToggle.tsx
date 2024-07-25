'use client';

import React, { useEffect, useState } from 'react';

type ThemeToggleProps = {
  onThemeChange: (loading: boolean) => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      onThemeChange(false); // Turn off loading after theme is loaded
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      onThemeChange(false); // Turn off loading after theme is loaded
    } else {
      setTheme('light');
      onThemeChange(false); // Turn off loading after theme is loaded
    }
  }, [onThemeChange]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    onThemeChange(true); // Turn on loading before theme change
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setTimeout(() => onThemeChange(false), 500); // Simulate loading delay
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
