"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface PortfolioImage {
  src: string;
  alt: string;
  caption: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface PortfolioShowcaseProps {
  images: PortfolioImage[];
  steps: Step[];
  testimonial: Testimonial;
}

export default function PortfolioShowcase({ images }: PortfolioShowcaseProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex, images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="portfolio" className=" py-2 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - How I Work */}
        <div className="mb-4 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 lg:gap-12">
          {/* Left: Heading and Subtext */}
          <div className="">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              How I Work on a Project
            </h2>
            <p className="text-lg hidden md:block text-amber-100 leading-relaxed">
              Every project is a journey of craftsmanship and dedication. Here's
              my proven process to bring your vision to life with precision and
              care.
            </p>
          </div>
        </div>

        {/* Middle Section - Image Gallery */}
        <div className="">
          <div className="relative max-w-4xl mx-auto">
            {/* Image Container */}
            <div className="relative aspect-16/10 mb-0 md:mb-6 rounded-lg overflow-hidden ">
              {images.length > 0 && (
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
              )}

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-amber-900"
              >
                <svg
                  className="w-6 h-6 text-amber-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-amber-900"
              >
                <svg
                  className="w-6 h-6 text-amber-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Caption */}
            {images.length > 0 && (
              <p className="text-center text-amber-100 font-medium mb-4">
                {images[currentImageIndex].caption}
              </p>
            )}

            {/* Pagination Dots */}
            <div
              className="flex justify-center gap-2"
              role="tablist"
              aria-label="Image navigation"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-selected={currentImageIndex === index}
                  role="tab"
                  className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-amber-900 ${
                    currentImageIndex === index
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
