"use client";
import React from 'react';
import Image from 'next/image';
import { FaPython, FaReact, FaHtml5, FaPhp, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiFlutter, SiTailwindcss, SiMysql, SiFirebase, SiSupabase, SiLaravel, SiCss3, SiPostman, SiTensorflow, SiGooglecolab, SiRoboflow, SiVuedotjs, SiNuxtdotjs } from "react-icons/si";
import { FaFlask } from 'react-icons/fa6';

export default function About() {
  const information = {
    name: "Kyle Cervantes",
    role: "Web & Mobile Developer",
    address: "Lianga, Surigao del Sur",
    freelance: "Available",
    age: "21 Years",
    nationality: "Filipino",
    languages: ["Filipino", "English"]
  };

  // (soft skills removed - not currently rendered)

  const technicalSkills = [
    { name: "Python", color: "bg-black", icon: <FaPython /> },
    { name: "Flask", color: "bg-black", icon: <FaFlask /> },
    { name: "React", color: "bg-black", icon: <FaReact /> },
    { name: "Next.js", color: "bg-black", icon: <SiNextdotjs /> },
    { name: "Vue.js", color: "bg-black", icon: <SiVuedotjs /> },
    { name: "Nuxt.js", color: "bg-black", icon: <SiNuxtdotjs /> },
    { name: "JavaScript", color: "bg-black", icon: <SiJavascript /> },
    { name: "HTML", color: "bg-black", icon: <FaHtml5 /> },
    { name: "CSS", color: "bg-black", icon: <SiCss3 /> },
    { name: "Bootstrap", color: "bg-black", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", color: "bg-black", icon: <SiTailwindcss /> },
    { name: "PHP", color: "bg-black", icon: <FaPhp /> },
    { name: "Laravel", color: "bg-black", icon: <SiLaravel /> },
    { name: "Flutter", color: "bg-black", icon: <SiFlutter /> },
    { name: "MySQL", color: "bg-black", icon: <SiMysql /> },
    { name: "Firebase", color: "bg-black", icon: <SiFirebase /> },
    { name: "Supabase", color: "bg-black", icon: <SiSupabase /> },
    { name: "TensorFlow", color: "bg-black", icon: <SiTensorflow /> },
    { name: "REST API", color: "bg-black", icon: <SiPostman /> },
    { name: "Google Colab", color: "bg-black", icon: <SiGooglecolab/> },
    { name: "Roboflow", color: "bg-black", icon: <SiRoboflow/> },
    { name: "Git", color: "bg-black", icon: <FaGitAlt /> },
    { name: "GitHub", color: "bg-black", icon: <FaGithub /> }
  ];

  return (
    <section id="about" className="py-10 px-4 sm:py-16 sm:px-8 bg-gray-50 dark:bg-[#0a192f] grid-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-bold mb-8 sm:mb-12 text-center">
          <span className="button-3d">
            <span>About Me</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/profile/profile2-bg.png"
              alt="Kyle Cervantes"
              width={500}
              height={500}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] object-cover shadow-lg"
              priority
            />
          </div>

          {/* Combined Information Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">PERSONAL INFO:</h3>
              <div className="text-gray-700 dark:text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                <div><strong className="text-black dark:text-white">Name:</strong> {information.name}</div>
                <div><strong className="text-black dark:text-white">Role:</strong> {information.role}</div>
                <div><strong className="text-black dark:text-white">Address:</strong> {information.address}</div>
                <div><strong className="text-black dark:text-white">Freelance:</strong> {information.freelance}</div>
                <div><strong className="text-black dark:text-white">Age:</strong> {information.age}</div>
                <div><strong className="text-black dark:text-white">Nationality:</strong> {information.nationality}</div>
                <div className="sm:col-span-2">
                  <strong className="text-black dark:text-white">Languages:</strong> {information.languages.join(", ")}
                </div>
              </div>
            </div>
            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">TECHNICAL EXPERTISE:</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`${skill.color} text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity`}
                  >
                    <span className="text-sm sm:text-lg">{skill.icon}</span>
                    <span className="text-xs sm:text-sm">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}