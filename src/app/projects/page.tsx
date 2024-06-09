import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Parts Master",
      description:
        "This is a full-Stack project. you can display data, add data, delete data ,You can also update data. There is a profile page. There is a blogs page. You can order parts of car etc.",
      image: "/projects/parts-master.png",
      github: "https://github.com/omar-faruk11/manufacturer-website",
      live: "https://parts-master.web.app/",
    },
    {
      id: 2,
      title: "Dream Photography",
      description: "Description of Project 2",
      image: "/projects/dream-photography.png",
      github: "https://github.com/your-project2-github",
      live: "https://react-firebase-assignmen-6de9d.web.app/",
    },
  ];
  return (
    <div>
      <main className="container mx-auto p-4 h-screen">
        <section className="projects text-center py-20">
          <h1 className="text-5xl font-bold text-gray-800">Projects</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            Here are some of the projects I have worked on. Feel free to explore
            them and check out the code on GitHub or view live demos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
              >
                <Image
                  src={project.image}
                  width={600}
                  height={600}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                  <div className="mt-4 flex gap-4 ">
                    {project.github && (
                      <Button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant={"outline"}>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
