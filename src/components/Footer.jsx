import React from "react";

function Footer() {
  return (
    <footer className=" text-black py-6">
      <div className="container mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/TayybaSaveera"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/tayyba_sakhawat/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/tayybasaveera2314/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-center gap-8 mb-4 text-black">
          <a href="#home" className="hover:text-gray-500">
            Home
          </a>

          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-black">
          <p>
            Copyright &copy; 2024; Designed by{" "}
            <span className="font-bold text-black">Tayyba saveera</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
