"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border dark:border-white/10 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4 text-text-dark dark:text-white group cursor-pointer">
            <div className="size-6 text-brown group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 2H8V8H14V14H20V20H2V2Z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-brown dark:group-hover:text-primary transition-colors duration-300">
              Goleden Carpentery in UAE
            </h2>
          </div>

          {/* Navigation - Hidden on mobile, shown on medium screens and up */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-9">
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#home"
            >
              Home
            </a>
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#services"
            >
              Services
            </a>
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#portfolio"
            >
              Portfolio
            </a>
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-b border-border dark:border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a
                className="px-4 py-2 text-sm font-medium text-text-dark dark:text-white hover:text-brown dark:hover:text-primary hover:bg-brown/5 dark:hover:bg-primary/5 rounded-lg transition-all duration-200"
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="px-4 py-2 text-sm font-medium text-text-dark dark:text-white hover:text-brown dark:hover:text-primary hover:bg-brown/5 dark:hover:bg-primary/5 rounded-lg transition-all duration-200"
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="px-4 py-2 text-sm font-medium text-text-dark dark:text-white hover:text-brown dark:hover:text-primary hover:bg-brown/5 dark:hover:bg-primary/5 rounded-lg transition-all duration-200"
                href="#portfolio"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                className="px-4 py-2 text-sm font-medium text-text-dark dark:text-white hover:text-brown dark:hover:text-primary hover:bg-brown/5 dark:hover:bg-primary/5 rounded-lg transition-all duration-200"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
