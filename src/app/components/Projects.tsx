"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaReact, FaCss3Alt, FaPhp, FaHtml5, FaJs, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiSupabase, SiDart, SiFlutter, SiFirebase, SiMysql } from "react-icons/si";

const techIcons: { [key: string]: React.ReactElement } = {
  React: <FaReact className="text-blue-600 dark:text-blue-300" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-600 dark:text-teal-300" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  JavaScript: <FaJs className="text-yellow-600 dark:text-yellow-300" />,
  Supabase: <SiSupabase className="text-green-600 dark:text-green-300" />,
  Dart: <SiDart className="text-blue-600 dark:text-blue-300" />,
  Flutter: <SiFlutter className="text-blue-600 dark:text-blue-300" />,
  Firebase: <SiFirebase className="text-yellow-600 dark:text-yellow-300" />,
  PHP: <FaPhp className="text-indigo-600 dark:text-indigo-300" />,
  HTML: <FaHtml5 className="text-orange-600 dark:text-orange-300" />,
  CSS: <FaCss3Alt className="text-blue-600 dark:text-blue-300" />,
  MySQL: <SiMysql className="text-blue-600 dark:text-blue-300" />,
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Array<{
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    tech: string[];
    icon: string;
    status: string;
    features: string[];
    link: string;
    linkLabel: string;
    image: string;
  }> = [
    {
      id: 1,
      title: "Booking Website",
      shortDescription: "Modern booking platform with seamless user experience",
      fullDescription:
        "A comprehensive booking website built with React and Tailwind CSS, featuring responsive design, smooth animations, and intuitive user interface. Deployed on Vercel for optimal performance and global accessibility.",
      tech: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
      icon: "🏨",
      status: "Live",
      features: ["Responsive Design", "Real-time Availability", "Payment Integration", "User Authentication"],
      link: "https://kyle-services.vercel.app/",
      linkLabel: "View Project",
      image: "/images/Project1.png",
    },
    {
      id: 2,
      title: "Community Bulletin App",
      shortDescription: "Real-time community engagement platform",
      fullDescription:
        "A full-stack community bulletin application leveraging Supabase for backend services, featuring real-time updates, collaborative posting, and lightweight authentication. Built mobile-first for local communities.",
      tech: ["Supabase", "Dart", "Flutter", "Firebase"], // normalized to 'Flutter'
      icon: "📢",
      status: "Development",
      features: ["Real-time Updates", "Dark mode", "Realtime Notifications", "Mobile Responsive"],
      link: "https://drive.google.com/file/d/1OYuRqjbYosS77LGPX_n5vXXeMyNB_pRR/view",
      linkLabel: "Download APK",
      image: "/images/BULLETIN.png",
    },
    {
      id: 3,
      title: "Barangay Health",
      shortDescription: "Barangay health management system",
      fullDescription:
        "A web system that allows users to check schedules of the doctors, manage appointments, and keep track of health records for local clinics.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      icon: "🖼️",
      status: "Live",
      features: ["Live Preview", "Theme Customization", "Easy Deployment", "Export Options"],
      link: "https://github.com/KSCervantes/barangay_health/tree/master",
      linkLabel: "View on GitHub",
      image: "/images/Barangay.jpg",
    },
  ];

  // Carousel ref and helpers for small screens
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = projects.length;
  const activeIndexRef = useRef<number>(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Infinite scroll: duplicate items for seamless looping
  const duplicatedProjects = [
    ...projects.slice(-Math.min(3, cardCount)),
    ...projects,
    ...projects.slice(0, Math.min(3, cardCount))
  ];
  const offset = Math.min(3, cardCount);

  // Scroll to a specific card index (accounting for cloned items offset)
  const scrollToIndex = useCallback((index: number, smooth: boolean = true) => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const domIndex = index + offset;
    const child = children[domIndex];
    if (!child) return;
    const left = Math.max(0, child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2);
    el.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }, [offset]);

  const scrollByCard = (direction: 'next' | 'prev') => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;
    const next = direction === 'next' ? (activeIndex + 1) % cardCount : (activeIndex - 1 + cardCount) % cardCount;
    scrollToIndex(next);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  // Handle scroll to detect when we're at cloned items and jump to real ones
  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el || isScrollingRef.current) return;

    const scrollLeft = el.scrollLeft;
    const children = Array.from(el.children) as HTMLElement[];

    let currentIndex = -1;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childLeft = child.offsetLeft;
      const childWidth = child.offsetWidth;
      const containerWidth = el.clientWidth;
      const center = childLeft + childWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;

      if (Math.abs(center - containerCenter) < childWidth / 2) {
        currentIndex = i;
        break;
      }
    }

    if (currentIndex >= 0) {
      let logicalIndex = currentIndex - offset;

      if (currentIndex >= offset + cardCount) {
        logicalIndex = currentIndex - offset - cardCount;
        isScrollingRef.current = true;
        scrollToIndex(logicalIndex, false);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
      else if (currentIndex < offset) {
        logicalIndex = currentIndex - offset + cardCount;
        isScrollingRef.current = true;
        scrollToIndex(logicalIndex, false);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
      else {
        setActiveIndex(logicalIndex);
      }
    }
  }, [offset, cardCount, scrollToIndex]);

  // Initialize carousel at first real item
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      scrollToIndex(0, false);
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollToIndex]);

  // Track which slide is active using IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            const idx = children.indexOf(entry.target as HTMLElement);
            if (idx >= 0) {
              let logicalIndex = idx - offset;
              if (idx >= offset + cardCount) {
                logicalIndex = idx - offset - cardCount;
              }
              else if (idx < offset) {
                logicalIndex = idx - offset + cardCount;
              }
              if (logicalIndex >= 0 && logicalIndex < cardCount) {
                setActiveIndex(logicalIndex);
              }
            }
          }
        });
      },
      { root: el, threshold: [0.5, 0.75, 0.9] }
    );

    children.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [containerRef, cardCount, offset]);

  // Add scroll event listener for infinite scroll handling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let scrollTimeout: number | null = null;
    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        handleScroll();
      }, 50);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Keep ref for active index
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <section id="projects" className="py-12 px-4 sm:py-16 sm:px-8 bg-gray-50 dark:bg-[#0a192f] grid-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold mb-12 text-center">
          <span className="button-3d">
            <span>Featured Projects</span>
          </span>
        </h2>

        {/* Desktop / tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transform transition-all duration-300 animate-fadeIn hover:-translate-y-1 h-auto"
            >
              {/* image / header */}
              <div className="relative h-40 sm:h-48 bg-gray-50 dark:bg-gray-900">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" />
                <div className="absolute left-4 bottom-4 flex items-center gap-3">
                  <span className="text-2xl bg-white/90 dark:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md">{project.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white drop-shadow-md">{project.title}</h3>
                    <span className="text-xs text-white drop-shadow-md font-medium bg-black/40 dark:bg-black/60 px-2 py-0.5 rounded-full">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="p-5 sm:p-6">
                <p className="text-base text-gray-700 dark:text-gray-100 mb-4 min-h-[48px] font-medium leading-relaxed">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-50 dark:bg-[#112240] text-sm text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700/50 hover:bg-gray-100 dark:hover:bg-[#1d3a6b] transition-all duration-200 font-medium shadow-sm group">
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">{techIcons[t] || null}</span>
                      <span className="relative top-px tracking-wide">{t}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                      aria-expanded={activeProject === project.id}
                      aria-controls={`project-details-${project.id}`}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline"
                    >
                      {activeProject === project.id ? 'Hide details' : 'See details'}
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} in a new tab`}
                        className="button-3d text-sm"
                      >
                        <span>
                          {project.linkLabel}
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{project.features.length} features</div>
                </div>

                {activeProject === project.id && (
                  <div id={`project-details-${project.id}`} className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                    <p className="text-sm text-gray-600 dark:text-gray-200 mb-3 leading-relaxed">{project.fullDescription}</p>
                    <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-white">Key features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-200">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-600" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Mobile carousel (small screens) */}
        <div className="sm:hidden relative group">
          <button
            onClick={() => scrollByCard('prev')}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-800/80 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          >
            <FaChevronLeft className="text-lg text-gray-800 dark:text-white" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-4 px-4 py-2 overflow-x-auto snap-x snap-mandatory touch-pan-x scroll-smooth scrollbar-hide"
            role="list"
          >
            {duplicatedProjects.map((project, i) => {
              let logicalIndex = i - offset;
              if (i >= offset + cardCount) {
                logicalIndex = i - offset - cardCount;
              } else if (i < offset) {
                logicalIndex = i - offset + cardCount;
              }

              return (
                <article
                  key={`mobile-${i}-${logicalIndex >= 0 ? logicalIndex : i}`}
                  role="listitem"
                  className={`snap-start flex-shrink-0 w-[90%] group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transform transition-all duration-300 ${
                    activeIndex === logicalIndex && logicalIndex >= 0 && logicalIndex < cardCount ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
                  }`}
                >
                  {/* image / header */}
                  <div className="relative h-40 bg-gray-50 dark:bg-gray-900">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="90vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" />
                    <div className="absolute left-4 bottom-4 flex items-center gap-3">
                      <span className="text-2xl bg-white/90 dark:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md">{project.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-white drop-shadow-md">{project.title}</h3>
                        <span className="text-xs text-white drop-shadow-md font-medium bg-black/40 dark:bg-black/60 px-2 py-0.5 rounded-full">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* body */}
                  <div className="p-5">
                    <p className="text-base text-gray-700 dark:text-gray-100 mb-4 min-h-[48px] font-medium leading-relaxed">{project.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-50 dark:bg-[#112240] text-sm text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700/50 hover:bg-gray-100 dark:hover:bg-[#1d3a6b] transition-all duration-200 font-medium shadow-sm group">
                          <span className="text-lg group-hover:scale-110 transition-transform duration-200">{techIcons[t] || null}</span>
                          <span className="relative top-px tracking-wide">{t}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveProject(activeProject === project.id ? null : project.id);
                          }}
                          aria-expanded={activeProject === project.id}
                          aria-controls={`project-details-mobile-${project.id}-${i}`}
                          className="text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline"
                        >
                          {activeProject === project.id ? 'Hide details' : 'See details'}
                        </button>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title} in a new tab`}
                            className="button-3d text-sm"
                          >
                            <span>{project.linkLabel}</span>
                          </a>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{project.features.length} features</div>
                    </div>

                    {activeProject === project.id && (
                      <div id={`project-details-mobile-${project.id}-${i}`} className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                        <p className="text-sm text-gray-600 dark:text-gray-200 mb-3 leading-relaxed">{project.fullDescription}</p>
                        <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-white">Key features</h4>
                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700 dark:text-gray-200">
                          {project.features.map((f, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-indigo-600" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <button
            onClick={() => scrollByCard('next')}
            aria-label="Next project"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-800/80 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          >
            <FaChevronRight className="text-lg text-gray-800 dark:text-white" />
          </button>

          {/* Pagination dots */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: cardCount }).map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeIndex === idx
                      ? 'bg-indigo-500 dark:bg-indigo-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  } focus:outline-none`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{activeIndex + 1} / {cardCount}</div>
          </div>

          <span className="sr-only" aria-live="polite">Project {activeIndex + 1} of {cardCount}</span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.28s ease-out; }
      `}} />
    </section>
  );
}