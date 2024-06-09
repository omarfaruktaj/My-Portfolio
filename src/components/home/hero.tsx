import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero text-center py-2 mb-10">
      <Image
        src="/omarfaruk.jpg"
        height="600"
        width="600"
        alt="Omar Faruk"
        className="mx-auto rounded-full w-32 h-32 border-4 border-white shadow-lg"
      />
      <h1 className="text-5xl font-extrabold mt-4">Hi, I&apos;m Omar Faruk</h1>
      <p className="text-2xl mt-2">
        Aspiring Full-Stack Developer with a passion for learning and building
        web applications
      </p>
    </section>
  );
}
