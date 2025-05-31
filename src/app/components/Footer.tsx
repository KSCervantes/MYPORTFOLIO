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
    <footer
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-3xl z-40 transition-opacity animate-fade-in"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="backdrop-blur-md bg-white/70 border border-gray-200 shadow-2xl rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-4"
        style={{ pointerEvents: "auto" }}
      >
        {/* Social Icons + Up Arrow */}
        <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center w-full">
          {/* Social Links */}
          <a
            href="https://github.com/KSCervantes"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 rounded-full text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
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
            className="group relative p-2 rounded-full text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors"
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
            className="group relative p-2 rounded-full text-gray-600 hover:bg-[#1877f3] hover:text-white transition-colors"
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
            className="group relative p-2 rounded-full text-gray-600 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:text-white transition-colors"
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
            className="group relative p-2 rounded-full text-gray-600 hover:bg-green-600 hover:text-white transition-colors"
            aria-label="View Resume"
          >
            <FileText size={22} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
              Resume
            </span>
          </a>
          {/* Up Arrow - responsive margin and padding */}
          <a
            href="#top"
            className="group relative p-2 md:p-3 rounded-full bg-gradient-to-tr from-black via-gray-800 to-gray-600 text-white shadow-lg hover:scale-110 transition-transform duration-200 mt-0 md:mt-0 md:ml-6"
            aria-label="Scroll to top"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
          >
            <ArrowUp size={22} className="animate-bounce" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-10">
              Scroll to top
            </span>
          </a>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </footer>
  );
}