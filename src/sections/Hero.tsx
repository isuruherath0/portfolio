'use client';

import { useEffect, useState } from 'react';
import TextType from '@/components/TextType';
import Galaxy from '@/components/Galaxy';
import { FaLinkedin, FaInstagram, FaSnapchat, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {

  const getInitialGlow = () => {
    if (typeof window === 'undefined') return 0.03;

    const theme = localStorage.getItem('theme');
    const isDark =
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return isDark ? 0.1 : 0.03;
  };

  const [glowIntensity, setGlowIntensity] = useState(getInitialGlow);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme =
        localStorage.getItem('theme') ||
        (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

      setGlowIntensity(currentTheme === 'dark' ? 0.1 : 0.03);
    };

    window.addEventListener('storage', handleThemeChange);

    const observer = new MutationObserver(handleThemeChange);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <main
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="absolute inset-0">
        <Galaxy
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={1}
          glowIntensity={glowIntensity}
          saturation={0}
          mouseRepulsion
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          transparent
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-0 gap-6">
        <h1 className="text-5xl h-[7rem] sm:h-[3.5rem] flex items-center justify-center">
          <TextType
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="▎"
            text={["Hi, I'm Isuru Herath", "Let's Get to Know Me Better.!!"]}
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </h1>

        <div className="flex items-center gap-5 mt-16">
          {[
            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/isuruherath0/', label: 'LinkedIn' },
            { icon: <FaInstagram />, href: 'https://www.instagram.com/rexhonz/', label: 'Instagram' },
            { icon: <FaSnapchat />, href: 'https://snapchat.com/t/4CL0trNL', label: 'Snapchat' },
            { icon: <FaGithub />, href: 'https://github.com/isuruherath0', label: 'GitHub' },
            { icon: <FaEnvelope />, href: 'mailto:isuruherath0@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-2xl sm:text-3xl text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
