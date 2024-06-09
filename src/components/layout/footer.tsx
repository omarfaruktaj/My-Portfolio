import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Omar Faruk. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
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
    </footer>
  );
}
