import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function ContactHome() {
  return (
    <section className="contact text-center py-10 ">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4 text-lg">
        Interested in working together or want to discuss an idea? Feel free to
        reach out!
      </p>
      <Button variant={"default"} className="mt-4">
        <Link href="/contact">Read more</Link>
      </Button>
    </section>
  );
}
