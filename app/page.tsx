import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PortfolioShowcase from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relativeflex min-h-screen w-full flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <PortfolioShowcase
          images={[
            {
              src: "/images/sofa.jpeg",
              alt: "Kitchen renovation",
              caption: "Sofa set work",
            },
            {
              src: "/images/ol kind.jpeg",
              alt: "Custom wardrobes",
              caption: "Ol kind of acrylic work",
            },
            {
              src: "/images/flooring.jpeg",
              alt: "Custom wardrobes",
              caption: "Flooring solution",
            },
          ]}
          steps={[
            {
              number: 1,
              title: "Consultation",
              description: "We discuss your vision and requirements",
            },
            {
              number: 2,
              title: "Design",
              description: "Create detailed plans and 3D renders",
            },
            {
              number: 3,
              title: "Crafting",
              description: "Precise execution with quality materials",
            },
            {
              number: 4,
              title: "Installation",
              description: "Professional setup and final touches",
            },
          ]}
          testimonial={{
            name: "Ahmed Al-Mansoori",
            role: "Homeowner, Dubai",
            quote:
              "The craftsmanship is outstanding. Every detail was perfect!",
            avatar: "/images/testimonial-avatar.jpg",
          }}
        />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
