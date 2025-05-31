"use client";
import React from 'react';

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
        "Developed 15+ responsive websites using React, Next.js, and Tailwind CSS",
        "Integrated Firebase and Supabase for backend services and real-time data",
        "Improved client website performance by 40% through optimization techniques",
        "Maintained 100% client satisfaction rate with on-time project delivery"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase", "JavaScript", "HTML"]
    },
    {
      title: "Mobile App Developer",
      company: "Various Clients",
      location: "Remote",
      period: "2022 – Present",
      type: "Freelance",
      description: "Specialized in cross-platform mobile app development using Flutter, creating intuitive and performant mobile solutions.",
      achievements: [
        "Built 8+ cross-platform mobile applications using Flutter",
        "Implemented complex UI/UX designs with smooth animations",
        "Integrated RESTful APIs and real-time database connections",
        "Delivered apps with 4.5+ star ratings on app stores"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Supabase", "REST APIs"]
    },
    {
      title: "Full Stack Developer",
      company: "Local Tech Startup",
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
      technologies: ["React", "Node.js", "MySQL", "PHP", "JavaScript"]
    }
  ];

  const getTypeColor = () => {
    // All types use black background and white text for a monochrome look
    return 'bg-black text-white';
  };

  return (
    <section id="work-experience" className="py-16 px-2 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block border-2 border-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            Work Experience
          </span>
        </h2>

        <div className="space-y-8 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 top-0 bottom-0 w-1 bg-gray-300 rounded-full z-0 transition-all" />
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row items-center sm:items-start"
            >
              {/* Timeline circle */}
              <div className="z-10 flex-shrink-0">
                <span className="block w-5 h-5 rounded-full bg-black border-4 border-white shadow-lg mt-8 mx-auto sm:mx-0"></span>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-8 flex-1 w-full">
                <div className="bg-white rounded-lg p-4 sm:p-8 duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor()}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-black">{exp.company}</p>
                        <div className="flex items-center gap-4 text-gray-700">
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

                  <p className="text-gray-800 text-lg mb-6 leading-relaxed text-justify">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-800">
                          <span className="text-black text-sm mt-1">✓</span>
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
                          className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
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