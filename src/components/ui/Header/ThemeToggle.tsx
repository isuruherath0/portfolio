'use client';

import { useState, useEffect } from 'react';

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getInitialTheme());

  // Sync the DOM class on mount and when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      role="switch"
      aria-checked={isDarkMode}
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
        isDarkMode ? 'bg-gray-800' : 'bg-yellow-400'
      }`}
    >
      <span
        className={`absolute left-1 top-1 inline-block h-6 w-6 transform rounded-full bg-white text-lg flex items-center justify-center transition-transform ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
}