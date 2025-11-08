import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relativeflex min-h-screen w-full flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
}
