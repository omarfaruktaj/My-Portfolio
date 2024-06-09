"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const handleDownload = () => {
    const pdfUrl = "/resume/omar-faruk-resume.pdf";
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.href = pdfUrl;
    downloadAnchorNode.download = "omar-resume.pdf";
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    document.body.removeChild(downloadAnchorNode);
  };

  return (
    <nav className="bg-gray-400 p-4 fixed w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Omar faruk</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects{" "}
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact{" "}
          </Link>
          <Button variant="secondary" onClick={handleDownload}>
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
