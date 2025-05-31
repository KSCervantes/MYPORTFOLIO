"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Booking Website",
      shortDescription: "Modern booking platform with seamless user experience",
      fullDescription: "A comprehensive booking website built with React and Tailwind CSS, featuring responsive design, smooth animations, and intuitive user interface. Deployed on Vercel for optimal performance and global accessibility.",
      tech: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
      icon: "🏨",
      gradient: "", // Remove gradient
      bgColor: "bg-white", // Use white background
      borderColor: "border-gray-300", // Use gray border
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
      fullDescription: "A full-stack community bulletin application leveraging Supabase for backend services, featuring real-time updates, user authentication, and collaborative posting capabilities. Perfect for neighborhood communities and organizations.",
      tech: ["Supabase", "Dart", "FLutter", "Firebase"],
      icon: "📢",
      gradient: "",
      bgColor: "bg-white",
      borderColor: "border-gray-300",
      status: "Development",
      features: ["Real-time Updates", "User Profiles", "Comment System", "Mobile Responsive"],
      link: "https://drive.google.com/file/d/1OYuRqjbYosS77LGPX_n5vXXeMyNB_pRR/view",
      linkLabel: "Download APK",
      image: "/images/BULLETIN.png",
    },
    {
      id: 3,
      title: "Barangay Health",
      shortDescription: "A Barangay Health Web System.",
      fullDescription: "A web system that allows users to check schedules of the doctors, and can have appointment .",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      icon: "🖼️",
      gradient: "",
      bgColor: "bg-white",
      borderColor: "border-gray-300",
      status: "Live",
      features: ["Live Preview", "Theme Customization", "Easy Deployment", "Export Options"],
      link: "https://github.com/KSCervantes/barangay_health/tree/master",
      linkLabel: "View on GitHub",
      image: "/images/Barangay.png",
    },
  ];

  return (
    <section id="projects" className="py-10 px-2 sm:py-16 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 sm:mb-8 text-center">
          <span className="inline-block border-2 border-black px-3 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.bgColor} ${project.borderColor} border-2 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group`}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              {/* Project Header */}
              <div className={`bg-gray-100 p-4 sm:p-6 text-black relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0"></div>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={160}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4 border-2 border-gray-200 shadow-lg"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">{project.icon}</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 bg-gray-800 text-white">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl group-hover:rotate-180 transition-transform duration-300">
                    {activeProject === project.id ? '−' : '+'}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-800 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {activeProject === project.id ? project.fullDescription : project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-gray-400 rounded-full text-xs font-medium text-gray-800 hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Features */}
                {activeProject === project.id && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 animate-fadeIn">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Link Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 sm:mt-4 px-4 sm:px-5 py-2 border-2 border-black rounded-lg text-black font-semibold hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-base"
                  >
                    {project.linkLabel || "View Project"}
                  </a>
                )}
              </div>

              {/* Interactive Bottom Bar */}
              <div className="bg-gray-300 h-1 group-hover:h-2 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}