"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaReact, FaCss3Alt, FaPhp, FaHtml5, FaJs } from "react-icons/fa";
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

  const projects = [
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
      image: "/images/Barangay.png",
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:py-16 sm:px-8 bg-gray-50 dark:bg-[#0a192f]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold mb-12 text-center">
          <span className="inline-block border-2 border-black dark:border-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transform transition-all duration-300 animate-fadeIn hover:-translate-y-1"
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
                      className="text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded transition-colors duration-200"
                    >
                      {activeProject === project.id ? 'Hide details' : 'See details'}
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} in a new tab`}
                        className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-900 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-[#112240] hover:bg-gray-50 dark:hover:bg-[#1d3a6b] transition-all duration-200 hover:scale-105"
                      >
                        {project.linkLabel}
                        <span aria-hidden>↗</span>
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