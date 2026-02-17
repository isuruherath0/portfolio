'use client';

import ThemeToggle from "../ui/Header/ThemeToggle";
import Image from "next/image";
import me from "@/assets/images/me.jpg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#hero">
            <Image
              width={40}
              height={40}
              src={me.src}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a
            href="#overview"
            className="text-sm md:text-base text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Overview
          </a>
          <a
            href="#about"
            className="text-sm md:text-base text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm md:text-base text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Projects
          </a>
        </nav>

        {/* Theme Toggle */}
        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}