import Hero from "@/components/ui/home/hero";
import Projects from "@/components/ui/home/projects";
import Skills from "@/components/ui/home/skills";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
