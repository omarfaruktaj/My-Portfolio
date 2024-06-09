import Image from "next/image";

export default function Skills() {
  const skillsImages = [
    {
      src: "/icons/react.png",
      alt: "React",
    },
    {
      src: "/icons/nextjs.png",
      alt: "Nextjs",
    },
    {
      src: "/icons/node.png",
      alt: "Node",
    },
    {
      src: "/icons/mongodb.png",
      alt: "MongoDB",
    },
    {
      src: "/icons/prisma.png",
      alt: "Prisma",
    },
  ];
  return (
    <section className="skills text-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex justify-center mt-4 space-x-6">
        {skillsImages.map(({ src, alt }) => (
          <Image
            key={src}
            src={src}
            width="100"
            height="100"
            alt={alt}
            className="w-16 h-16"
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ul className="mt-6 text-lg space-y-2 text-left">
          <li>✔ Expertise in developing SPAs and SSR applications</li>
          <li>✔ Skilled in building robust backend systems</li>
          <li>
            ✔ Proficient in performance optimization and scalable solutions
          </li>
        </ul>
      </div>
    </section>
  );
}
