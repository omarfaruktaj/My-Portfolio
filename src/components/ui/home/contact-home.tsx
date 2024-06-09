import Link from "next/link";
import React from "react";

export default function ContactHome() {
  return (
    <section className="contact text-center py-10 bg-gradient-to-r from-blue-500 to-green-400 text-white">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4 text-lg">
        Interested in working together or want to discuss an idea? Feel free to
        reach out!
      </p>
      <Link
        href="/contact"
        className="text-white bg-blue-500 hover:bg-blue-600 mt-4 px-6 py-2 rounded-full inline-block"
      >
        Contact Me
      </Link>
    </section>
  );
}
