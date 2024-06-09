import AboutHome from "@/components/home/about-home";
import ContactHome from "@/components/home/contact-home";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <main className="container mx-auto p-4 py-20">
      <Hero />
      <Skills />
      <Projects />
      <AboutHome />
      <ContactHome />
    </main>
  );
}
