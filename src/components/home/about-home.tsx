import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function AboutHome() {
  return (
    <section className="about text-center py-10">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        I&apos;m Omar Faruk, a passionate and dedicated developer eager to build
        innovative and efficient web applications. Currently enhancing my skills
        in full-stack development.
      </p>
      <Button variant={"outline"} className="mt-4">
        <Link href="/about">Read more</Link>
      </Button>
    </section>
  );
}
