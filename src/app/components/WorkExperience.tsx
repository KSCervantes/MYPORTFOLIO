"use client";
import React from 'react';
import type { ReactNode } from 'react';
import { FaReact, FaLaravel, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaGit, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiSupabase, SiJavascript, SiMysql, SiFlutter, SiDart, SiCplusplus, SiStrapi } from "react-icons/si";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Self-Employed",
      location: "Lianga, Surigao del Sur",
      period: "2021 – Present",
      type: "Freelance",
      description: "Built and deployed modern websites for small businesses and startups, focusing on responsive design and optimal user experience.",
      achievements: [
        "Developed 5+ responsive websites using React, Next.js, Laravel, and Tailwind CSS",
        "Integrated Firebase and Supabase for backend services and real-time data",
        "Improved client website performance by 40% through optimization techniques",
        "Maintained 100% client satisfaction rate with on-time project delivery"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase", "JavaScript", "HTML", "Laravel"]
    },
    {
      title: "Mobile App Developer",
      company: "Various Clients",
      location: "Remote",
      period: "2022 – Present",
      type: "Freelance",
      description: "Specialized in cross-platform mobile app development using Flutter, creating intuitive and performant mobile solutions.",
      achievements: [
        "Built 4+ cross-platform mobile applications using Flutter",
        "Implemented complex UI/UX designs with smooth animations",
        "Integrated RESTful APIs and real-time database connections",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Supabase", "REST APIs"]
    },
    {
      title: "Full Stack Developer",
      company: "Web Development Projects",
      location: "Surigao del Sur",
      period: "2023 – 2024",
      type: "Contract",
      description: "Led the development of a comprehensive web application for inventory management, handling both frontend and backend development.",
      achievements: [
        "Architected and developed a full-stack inventory management system",
        "Implemented user authentication and role-based access control",
        "Optimized database queries resulting in 60% faster load times",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Next JS", "Laravel", "MySQL", "PHP", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Supabase", "Firebase", "REST APIs", "Python", "C++", "Java"]
    }
  ];

  const techIcons: Record<string, ReactNode> = {
    "React": <FaReact />,
    "Next.js": <SiNextdotjs />,
    "Next JS": <SiNextdotjs />,
    "Laravel": <FaLaravel />,
    "MySQL": <SiMysql />,
    "PHP": <FaPhp />,
    "JavaScript": <SiJavascript />,
    "HTML": <FaHtml5 />,
    "CSS": <FaCss3Alt />,
    "Tailwind CSS": <SiTailwindcss />,
    "Bootstrap": <FaBootstrap />,
    "Git": <FaGit />,
    "GitHub": <FaGithub />,
    "Supabase": <SiSupabase />,
    "Firebase": <SiFirebase />,
    "REST APIs": <SiStrapi />, // Using SiStrapi as a placeholder for REST APIs
    "Python": <FaPython />,
    "C++": <SiCplusplus />,
    "Java": <FaJava />,
    "Flutter": <SiFlutter />,
    "Dart": <SiDart />,
  };

  const getTypeColor = () => {
    // All types use black background and white text for a monochrome look
    return 'bg-black text-white';
  };

  return (
    <section id="work-experience" className="py-16 px-2 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block border-2 border-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            Work Experience
          </span>
        </h2>

        <div className="space-y-8 relative">
          {/* Vertical timeline line - consistent positioning */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 rounded-full z-0" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-start"
            >
              {/* Timeline circle - consistent positioning */}
              <div className="z-10 flex-shrink-0">
                <span className="block w-5 h-5 rounded-full bg-black border-4 border-white shadow-lg mt-8"></span>
              </div>

              {/* Content card */}
              <div className="ml-8 flex-1">
                <div className="bg-white rounded-lg p-4 sm:p-8 duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-black">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor()} self-start`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-black">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-700">
                          <span className="flex items-center gap-1">
                            <span className="text-sm">📍</span>
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-sm">📅</span>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-800 text-base sm:text-lg mb-6 leading-relaxed text-justify">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-800 text-sm sm:text-base">
                          <span className="text-black text-sm mt-1 flex-shrink-0">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 hover:bg-gray-800 transition-colors"
                        >
                          <span className="text-xs sm:text-sm">
                            {techIcons[tech] || null}
                          </span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}