"use client";
import React from 'react';

export default function Learning() {
  const learningItems = [
    {
      title: "Improving my AI model accuracy using TensorFlow",
      description: "Deep diving into machine learning optimization techniques",
      icon: "🤖",
      color: "bg-white border-black",
      borderStyle: "border-solid"
    },
    {
      title: "Learning advanced Flutter animations",
      description: "Mastering complex UI animations and transitions",
      icon: "📱",
      color: "bg-white border-black",
      borderStyle: "border-solid"
    },
    {
      title: "Exploring backend scalability with Supabase",
      description: "Understanding real-time database and authentication systems",
      icon: "⚡",
      color: "bg-white border-black",
      borderStyle: "border-solid"
    },
    {
      title: "Mastering Django Framework",
      description: "Building robust web applications with Django's architecture",
      icon: "🔄",
      color: "bg-white border-black",
      borderStyle: "border-solid"
    },
    {
      title: "Advanced Node.js Development",
      description: "Exploring microservices architecture and scalable backend solutions",
      icon: "🟢",
      color: "bg-white border-black",
      borderStyle: "border-solid"
    },
    {
      title: "C++ Programming Excellence",
      description: "Deep diving into memory management and performance optimization",
      icon: "⚙️",
      color: "bg-white border-black",
      borderStyle: "border-solid"
    }
  ];

  return (
    <section id="learning" className="py-10 px-4 sm:py-16 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center">
          <span className="inline-block border-2 border-black px-3 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            Still Learning.....
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-8 sm:mt-12 bg-white rounded-lg p-6 sm:p-10">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">My Learning Philosophy</h3>
            <p className="text-sm sm:text-md text-gray-800 max-w-6xl leading-relaxed text-justify">
              I believe in continuous growth and staying updated with the latest technologies. Each day brings new opportunities to learn, experiment, and push the boundaries
              of what&#39;s possible in software development. My commitment to learning ensures. I can deliver cutting-edge solutions that meet modern challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}