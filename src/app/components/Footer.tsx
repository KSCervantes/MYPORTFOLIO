"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Facebook, Instagram, ArrowUp, FileText } from "lucide-react";

export default function Footer() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (atTop) return null; // Hide footer when at the top

  return (
    <footer className="py-4 mt-8 bg-transparent sticky bottom-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
        <div className="flex-1 hidden md:block" />
        <div className="flex flex-row items-center justify-between w-full md:w-auto">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6 px-4 md:px-8 py-2 md:py-3 rounded-full bg-white shadow-md">
            <a
              href="https://github.com/KSCervantes"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/kyle-cervantes"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.facebook.com/Cervantes.Kylestone"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
                Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/_kylcrvnts?igsh=MWI1c3dhcm5uNmJ6cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
                Instagram
              </span>
            </a>
            {/* Resume Link beside Instagram */}
            <a
              href="/images/Kyle Cervantes.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="View Resume"
            >
              <FileText size={22} />
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
                Resume
              </span>
            </a>
          </div>
          {/* Up Arrow */}
          <a
            href="#top"
            className="group relative ml-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors"
            aria-label="Scroll to top"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
          >
            <ArrowUp size={22} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
              Scroll to top
            </span>
          </a>
        </div>
        <div className="flex-1 hidden md:block" />
      </div>
    </footer>
  );
}