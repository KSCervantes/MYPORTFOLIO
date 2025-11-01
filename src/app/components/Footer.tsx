"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Facebook, Instagram, ArrowUp, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const [atTop, setAtTop] = useState(true);
  // Use our theme context
  const { theme, toggleTheme } = useTheme();

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
      className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[90vw] max-w-xl z-40 transition-opacity animate-fade-in"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="backdrop-blur-md bg-white/70 border border-gray-200 shadow-2xl rounded-xl px-3 py-2 flex flex-col md:flex-row items-center justify-between gap-2 mb-2 footer-blur"
        style={{ pointerEvents: "auto" }}
      >
        {/* Social Icons + Up Arrow */}
        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center w-full">
          {/* Social Links */}
          <a
            href="https://github.com/KSCervantes"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-1 rounded-full text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-cervantes"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-1 rounded-full text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.facebook.com/Cervantes.Kylestone"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-1 rounded-full text-gray-600 hover:bg-[#1877f3] hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              Facebook
            </span>
          </a>
          <a
            href="https://www.instagram.com/_kylcrvnts?igsh=MWI1c3dhcm5uNmJ6cQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-1 rounded-full text-gray-600 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              Instagram
            </span>
          </a>
          {/* Resume Link beside Instagram */}
          <a
            href="/images/Kyle Cervantes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-1 rounded-full text-gray-600 hover:bg-green-600 hover:text-white transition-colors"
            aria-label="View Resume"
          >
            <FileText size={16} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              Resume
            </span>
          </a>
          {/* Theme toggle (beside Resume) */}
          <button
            onClick={toggleTheme}
            className="group relative p-1 rounded-full text-gray-600 hover:bg-gray-900 hover:text-white transition-colors theme-toggle"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
          {/* Up Arrow - responsive margin and padding */}
          <a
            href="#top"
            className="group relative p-1 md:p-2 rounded-full bg-gradient-to-tr from-black via-gray-800 to-gray-600 text-white shadow-lg hover:scale-110 transition-transform duration-200 mt-0 md:mt-0 md:ml-3"
            aria-label="Scroll to top"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
          >
            <ArrowUp size={16} className="animate-bounce" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-[10px] rounded px-1.5 py-0.5 transition-opacity whitespace-nowrap z-10">
              Scroll to top
            </span>
          </a>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1);
        }
      `}} />
    </footer>
  );
}