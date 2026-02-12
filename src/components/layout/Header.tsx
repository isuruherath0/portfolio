import ThemeToggle from "../ui/Header/ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a
            href="#hero"
            className="text-gray-800 hover:text-blue-500 font-medium transition-colors"
          >
            Hero
          </a>
          <a
            href="#overview"
            className="text-gray-800 hover:text-blue-500 font-medium transition-colors"
          >
            Overview
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-500 font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-blue-500 font-medium transition-colors"
          >
            Projects
          </a>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}