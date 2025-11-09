"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const whatsappNumber = "971543121715"; // +971 54 312 1715
    const message = `Hello! I'm interested in your carpentry services.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
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
    <section id="contact" className="w-full relative">
      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative hidden md:block h-[350px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl group">
            <div
              className="absolute  inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
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
    </section>
  );
}
