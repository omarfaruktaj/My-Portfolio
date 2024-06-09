import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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
    <section className="projects py-10 mt-5">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map(({ id, title, description, image, github, live }) => (
          <div
            key={title}
            className="project bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              height={600}
              width={600}
              src={image}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-gray-700">{description}</p>
              <div className="mt-4 flex gap-4 ">
                {github && (
                  <Button>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                )}
                {live && (
                  <Button variant={"outline"}>
                    <a href={live} target="_blank" rel="noopener noreferrer">
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
  );
}
