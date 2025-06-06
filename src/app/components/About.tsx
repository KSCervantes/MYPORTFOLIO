"use client";
import React from 'react';
import Image from 'next/image';
import { FaPython, FaReact, FaHtml5, FaPhp, FaJava, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiFlutter, SiTailwindcss, SiMysql, SiFirebase, SiSupabase, SiLaravel, SiCplusplus, SiCss3, SiPostman } from "react-icons/si";

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

  const softSkills = [
    { name: "Leadership", percentage: 50, color: "bg-black" },
    { name: "Teamwork", percentage: 75, color: "bg-black" },
    { name: "Communication", percentage: 75, color: "bg-black" },
    { name: "Problem Solving", percentage: 85, color: "bg-black" }
  ];

  const technicalSkills = [
    { name: "Python", color: "bg-black", icon: <FaPython /> },
    { name: "React", color: "bg-black", icon: <FaReact /> },
    { name: "Next.js", color: "bg-black", icon: <SiNextdotjs /> },
    { name: "JavaScript", color: "bg-black", icon: <SiJavascript /> },
    { name: "HTML", color: "bg-black", icon: <FaHtml5 /> },
    { name: "CSS", color: "bg-black", icon: <SiCss3 /> },
    { name: "Bootstrap", color: "bg-black", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", color: "bg-black", icon: <SiTailwindcss /> },
    { name: "PHP", color: "bg-black", icon: <FaPhp /> },
    { name: "Laravel", color: "bg-black", icon: <SiLaravel /> },
    { name: "Java", color: "bg-black", icon: <FaJava /> },
    { name: "C++", color: "bg-black", icon: <SiCplusplus /> },
    { name: "Flutter", color: "bg-black", icon: <SiFlutter /> },
    { name: "MySQL", color: "bg-black", icon: <SiMysql /> },
    { name: "Firebase", color: "bg-black", icon: <SiFirebase /> },
    { name: "Supabase", color: "bg-black", icon: <SiSupabase /> },
    { name: "REST API", color: "bg-black", icon: <SiPostman /> },
    { name: "Git", color: "bg-black", icon: <FaGitAlt /> },
    { name: "GitHub", color: "bg-black", icon: <FaGithub /> }
  ];

  return (
    <section id="about" className="py-10 px-4 sm:py-16 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block border-2 border-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/KAyeL.png"
              alt="Kyle Cervantes"
              width={500}
              height={500}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-xl object-cover shadow-lg border-4 border-white"
              priority
            />
          </div>

          {/* Combined Information Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-bold text-black mb-4">PERSONAL INFO:</h3>
              <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                <div><strong>Name:</strong> {information.name}</div>
                <div><strong>Role:</strong> {information.role}</div>
                <div><strong>Address:</strong> {information.address}</div>
                <div><strong>Freelance:</strong> {information.freelance}</div>
                <div><strong>Age:</strong> {information.age}</div>
                <div><strong>Nationality:</strong> {information.nationality}</div>
                <div className="sm:col-span-2">
                  <strong>Languages:</strong> {information.languages.join(", ")}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-bold text-black mb-4">SOFT SKILLS:</h3>
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          className="text-gray-200"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.percentage / 100)}`}
                          className={skill.color.replace('bg-', 'text-')}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-800">{skill.percentage}%</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-800 text-xs sm:text-sm">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-bold text-black mb-4">TECHNICAL EXPERTISE:</h3>
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