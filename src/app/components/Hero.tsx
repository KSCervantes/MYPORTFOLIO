'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

// Roles to cycle through with typing effect
const ROLES = [
  'Full-Stack Developer',
  'Mobile Developer',
  'Freelance Developer/Consultant',
  'UX/UI Designer',
];

export default function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState(() => ROLES[0].slice(0, 1));
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = ROLES[roleIndex % ROLES.length];

    if (!isDeleting && typed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typed === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setTyped((prev) => {
          const next = isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1);
          return next;
        });
      }, isDeleting ? 60 : 120);
    }

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, roleIndex]);

  return (
    <section className={`min-h-screen relative overflow-hidden grid-background ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#03070e] to-[#070c17]'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
          className={`absolute top-6 left-1 w-28 h-28 sm:top-20 sm:left-20 sm:w-72 sm:h-72 rounded-full blur-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-gray-400/20 to-gray-400/20'
              : 'bg-gradient-to-r from-gray-500/30 to-gray-500/30'
          }`}
        />
        <div
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
          className={`absolute bottom-6 right-1 w-36 h-36 sm:bottom-20 sm:right-20 sm:w-96 sm:h-96 rounded-full blur-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-l from-gray-400/20 to-gray-400/20'
              : 'bg-gradient-to-l from-gray-500/30 to-gray-500/30'
          }`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-2">
                <p className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Hi, I am</p>
                <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Kyle S. Cervantes
                </h1>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
                  {/* role text with modern background highlight */}
                  <span
                    className={`inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-gray-700/80 via-gray-600/80 to-gray-700/80 text-white shadow-lg shadow-gray-900/50 border border-gray-600/30'
                        : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-lg shadow-gray-400/30 border border-gray-300/50'
                    } backdrop-blur-sm`}
                    role="status"
                    aria-live="polite"
                  >
                    {typed || '\u00A0'}
                    <span
                      className="inline-block ml-1 animate-blink"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  </span>
                </h2>
              </div>

              <p className={`text-lg max-w-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Crafting digital experiences with clean code and creative solutions. Passionate about building fast,
                scalable, and user-friendly applications.
              </p>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 pt-4">
                <a
                  href="#projects"
                  className="button-3d text-sm w-full sm:w-auto inline-flex"
                >
                  <span>View My Work</span>
                </a>
                <a
                  href="#contact"
                  className="button-3d button-3d-secondary text-sm w-full sm:w-auto inline-flex"
                >
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-tr blur-2xl opacity-20 animate-pulse ${
                  theme === 'dark'
                    ? 'from-gray-400/20 to-gray-400/20'
                    : 'from-gray-500 to-gray-500'
                }`}></div>
                <div className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl ${
                  theme === 'dark' ? 'border-gray-800' : 'border-white'
                }`}>
                  <Image
                    src="/images/profile/resume.png"
                    alt="Kyle S. Cervantes"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-4 shadow-lg flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-800'
                    : 'bg-white border-white'
                }`}>
                  <span className="text-3xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
