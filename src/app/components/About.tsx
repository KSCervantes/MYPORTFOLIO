"use client";
import React from 'react';
import Image from 'next/image';

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
    { name: "Python", color: "bg-black" },
    { name: "React", color: "bg-black" },
    { name: "Next.js", color: "bg-black" },
    { name: "JavaScript", color: "bg-black" },
    { name: "HTML", color: "bg-black" },
    { name: "PHP", color: "bg-black" },
    { name: "Flutter", color: "bg-black" },
    { name: "Tailwind CSS", color: "bg-black" },
    { name: "MySQL", color: "bg-black" },
    { name: "Firebase", color: "bg-black" },
    { name: "Supabase", color: "bg-black" }
  ];

  return (
    <section id="about" className="py-10 px-4 sm:py-16 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block border-2 border-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Profile Image Circular */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/profile.webp"
              alt="Kyle Cervantes"
              width={240}
              height={240}
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-90 lg:h-90 rounded-full object-cover shadow-lg border-4 border-white"
              priority
            />
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg p-4 sm:p-8 mb-6 lg:mb-0">
            <div className="text-gray-700 space-y-1">
              <div><strong>Name:</strong> {information.name}</div>
              <div><strong>Role:</strong> {information.role}</div>
              <div><strong>Address:</strong> {information.address}</div>
              <div><strong>Freelance:</strong> {information.freelance}</div>
              <div><strong>Age:</strong> {information.age}</div>
              <div><strong>Nationality:</strong> {information.nationality}</div>
              <div>
                <strong>Languages:</strong> {information.languages.join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills & Technical Skills Side by Side */}
        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row gap-8 sm:gap-12">
          {/* Soft Skills */}
          <div className="bg-white rounded-xl p-6 flex-1">
            <div className="flex items-center gap-2 mb-8">
              <h3 className="text-2xl font-bold text-black">SOFT SKILLS:</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
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
                  <h4 className="font-medium text-gray-800 text-xs">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white rounded-xl p-6 flex-1">
            <div className="flex items-center gap-2 mb-8">
              <h3 className="text-2xl font-bold text-black">TECHNICAL EXPERTISE:</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.color} text-white px-4 py-2 rounded-full text-xs font-medium hover:opacity-80 transition-opacity`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}