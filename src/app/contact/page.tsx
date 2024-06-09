"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="container mx-auto p-4">
        <section className="contact text-center py-20">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            I’d love to hear from you! Whether you have a question, a project
            proposal, or just want to connect, feel free to get in touch.
          </p>
          <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-left text-lg font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-left text-lg font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-left text-lg font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && (
                <p className="mt-4 text-green-500">
                  Message sent successfully!
                </p>
              )}
              {error && <p className="mt-4 text-red-500">{error}</p>}
            </form>
          </div>
          <div className="mt-12">
            <p className="text-lg">Or connect with me on social media:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
