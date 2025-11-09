"use client";

import Image from "next/image";
import { AppWindow, Sofa, Layers, Wallpaper } from "lucide-react";

export default function Hero() {
  return (
    <section className="@container">
      {/* Hero Image Section */}
      <div className="relative flex min-h-[400px] h-[70vh] max-h-[600px] flex-col gap-6 @[480px]:gap-8 items-start justify-end px-4 pb-16 @[480px]:px-10 text-left overflow-hidden">
        {/* Next.js Image Component */}
        <Image
          src="/images/hero.png"
          alt="Master Carpenter - Woodworking Craftsmanship"
          fill
          priority
          quality={90}
          className="object-cover object-center -z-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/50 -z-5"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Expert Custom Woodwork for Home & Office
            </h1>
            <h2 className="text-white text-lg hidden md:block font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
              High-quality craftsmanship, clean finishing, and quick delivery.
              Serving all areas in Dubai & Abu Dhabi with guaranteed best
              results.
            </h2>
            <div className="pt-4">
              <a
                href="#contact"
                className="group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-brown text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg hover:bg-opacity-90 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95"
              >
                <span className="truncate group-hover:tracking-wider transition-all duration-300">
                  Get Free Quote
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="bg-beige dark:bg-background-dark py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Shelving Solutions */}
            <div className="group flex flex-col flex-1 gap-4 rounded-lg bg-cream dark:bg-[#2c2216] p-6 text-center items-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <AppWindow className="h-8 w-8 text-[#333333] dark:text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-white text-lg font-bold leading-tight group-hover:text-brown dark:group-hover:text-primary transition-colors duration-300">
                  Curtains
                </h3>
                <p className="text-[#333333] dark:text-white/70 text-sm font-normal leading-normal group-hover:text-text-dark dark:group-hover:text-white transition-colors duration-300">
                  Custom curtains for any window.
                </p>
              </div>
            </div>

            {/* Trim Carpentry */}
            <div className="group flex flex-col flex-1 gap-4 rounded-lg bg-cream dark:bg-[#2c2216] p-6 text-center items-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <Sofa className="h-8 w-8 text-[#333333] dark:text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-white text-lg font-bold leading-tight group-hover:text-brown dark:group-hover:text-primary transition-colors duration-300">
                  Sofa Set
                </h3>
                <p className="text-[#333333] dark:text-white/70 text-sm font-normal leading-normal group-hover:text-text-dark dark:group-hover:text-white transition-colors duration-300">
                  Comfortable sofas designed for your home.
                </p>
              </div>
            </div>

            {/* Frame Construction */}
            <div className="group flex flex-col flex-1 gap-4 rounded-lg bg-cream dark:bg-[#2c2216] p-6 text-center items-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <Layers className="h-8 w-8 text-[#333333] dark:text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-white text-lg font-bold leading-tight group-hover:text-brown dark:group-hover:text-primary transition-colors duration-300">
                  Gypsum Designs
                </h3>
                <p className="text-[#333333] dark:text-white/70 text-sm font-normal leading-normal group-hover:text-text-dark dark:group-hover:text-white transition-colors duration-300">
                  Clean gypsum designs for walls and ceilings.
                </p>
              </div>
            </div>

            {/* Wood Finishing */}
            <div className="group flex flex-col flex-1 gap-4 rounded-lg bg-cream dark:bg-[#2c2216] p-6 text-center items-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <Wallpaper className="h-8 w-8 text-[#333333] dark:text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-dark dark:text-white text-lg font-bold leading-tight group-hover:text-brown dark:group-hover:text-primary transition-colors duration-300">
                  Wallpaper
                </h3>
                <p className="text-[#333333] dark:text-white/70 text-sm font-normal leading-normal group-hover:text-text-dark dark:group-hover:text-white transition-colors duration-300">
                  Stylish wallpapers for a modern look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
