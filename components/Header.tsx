"use client";

export default function Header() {
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
              Carpenter Logo
            </h2>
          </div>

          {/* Navigation - Hidden on mobile, shown on medium screens and up */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-9">
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#"
            >
              Home
            </a>
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#"
            >
              Services
            </a>
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#"
            >
              Portfolio
            </a>
            <a
              className="relative text-sm font-medium leading-normal hover:text-brown dark:hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brown dark:after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              href="#"
            >
              Contact
            </a>
          </nav>

          {/* WhatsApp Button */}
          <div className="flex items-center justify-end">
            <a 
              href="https://wa.me/971543121715"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-brown text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-in-out active:scale-95 animate-pulse hover:animate-none"
            >
              <span className="truncate group-hover:tracking-wide transition-all duration-300">
                WhatsApp: +971 54 312 1715
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
