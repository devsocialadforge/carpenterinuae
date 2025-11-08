"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappNumber = "971543121715"; // +971 54 312 1715
    const message = `Hello! I'm interested in your carpentry services.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="w-full relative">
      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative h-[350px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%), url('https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop')`,
              }}
            >
              {/* Warm accent overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-brown/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative wood accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary via-brown to-primary"></div>
          </div>

          {/* Right Side - Form Card */}
          <div className="relative">
            <div className="bg-cream dark:bg-[#3a3128] rounded-2xl shadow-xl p-6 lg:p-8 transform transition-all duration-300 hover:shadow-2xl">
              {/* Headline */}
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-black text-text-dark dark:text-white leading-tight mb-2">
                  Have a suggestion?
                </h2>
                <h3 className="text-xl lg:text-2xl font-black text-brown dark:text-primary leading-tight">
                  Get in touch!
                </h3>
                <p className="mt-3 text-[#666] dark:text-white/70 text-sm">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-text-dark dark:text-white mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-[#2a2420] border border-border dark:border-[#4a3d30] text-text-dark dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-text-dark dark:text-white mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-[#2a2420] border border-border dark:border-[#4a3d30] text-text-dark dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-text-dark dark:text-white mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-[#2a2420] border border-border dark:border-[#4a3d30] text-text-dark dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-text-dark dark:text-white mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-[#2a2420] border border-border dark:border-[#4a3d30] text-text-dark dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                    placeholder="What can we help you with?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-text-dark dark:text-white mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-[#2a2420] border border-border dark:border-[#4a3d30] text-text-dark dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-4 h-4 rounded border border-border dark:border-[#4a3d30] text-primary focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs text-[#666] dark:text-white/70 cursor-pointer leading-relaxed"
                  >
                    I agree to the processing of my personal data and consent to
                    be contacted regarding my inquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 rounded-full h-11 px-6 bg-brown dark:bg-primary text-white text-base font-bold hover:bg-opacity-90 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 ease-in-out"
                  >
                    <span className="truncate group-hover:tracking-wider transition-all duration-300">
                      Send Message
                    </span>
                    <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">
                      send
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-[#3a3128] bg-[#1f1b18]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tagline Block */}
            <div className="text-center md:text-left">
              <h4 className="text-base font-bold text-white mb-2">
                Master Carpenter
              </h4>
              <p className="text-white/70 text-xs leading-relaxed">
                Crafting excellence in wood since 1995. Your vision, our
                craftsmanship.
              </p>
            </div>

            {/* Address Block */}
            <div className="text-center md:text-left">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">
                  location_on
                </span>
                Visit Us
              </h4>
              <p className="text-white/70 text-xs leading-relaxed">
                123 Carpenter Street,
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>

            {/* Say Hello Block */}
            <div className="text-center md:text-left">
              <h4 className="text-sm font-bold text-white mb-2">Say Hello</h4>
              <div className="space-y-1.5 text-xs text-white/70">
                <a
                  href="mailto:info@mastercarpenter.ae"
                  className="flex items-center justify-center md:justify-start gap-1.5 hover:text-primary transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-base">
                    email
                  </span>
                  info@mastercarpenter.ae
                </a>
                <a
                  href="https://wa.me/971543121715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-1.5 hover:text-primary transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-base">
                    call
                  </span>
                  +971 54 312 1715
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start gap-2.5 mt-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#3a3128] flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#3a3128] flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/971543121715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#3a3128] flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-[#3a3128] text-center">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Master Carpenter UAE. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
