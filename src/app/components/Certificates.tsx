"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="certificates" className="py-10 px-2 sm:py-16 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block border-2 border-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            Achievements
          </span>
        </h2>

        <div className="space-y-8 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-200 rounded-full z-0" />

          <div className="relative flex items-start">
            {/* Timeline circle */}
            <div className="z-10">
              <span className="block w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black border-4 border-white shadow-lg mt-8"></span>
            </div>

            <div className="ml-6 sm:ml-8 flex-1">
              <div className="bg-white rounded-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Laravel Training</h3>
                    <div className="space-y-1">
                      <p className="text-base sm:text-lg font-semibold text-blue-600">NEMSU- Lianga</p>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span className="flex items-center gap-1">
                          <span className="text-sm">📅</span>
                          May 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Certificate Details:</h4>
                  <div className="text-gray-700 leading-relaxed">
                    <div className="flex items-start gap-2 text-justify">
                      <span className="text-green-500 text-sm mt-1">✓</span>
                      <span className="text-xs sm:text-base">
                        Successfully completed an intensive 2-day Laravel training workshop organized by the Department of Computer Studies at NEMSU-Lianga in a Preparation for our OJT. The comprehensive program covered essential Laravel framework concepts including MVC architecture, database migrations, and Eloquent ORM. Gained hands-on experience in building secure web applications, and working with Laravel&lsquo;s powerful features like Blade templating. The workshop included practical exercises and real-world project implementation, enhancing skills in modern PHP development and web application security best practices.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="mt-6">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-400 max-w-xs sm:max-w-xl mx-auto">
                    <Image
                      src="/images/1000010704.jpg"
                      alt="Laravel Training Certificate - Kyle S. Cervantes"
                      width={640}
                      height={480}
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => setIsModalOpen(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for full view */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src="/images/1000010704.jpg"
                alt="Laravel Training Certificate - Kyle S. Cervantes"
                width={1000}
                height={750}
                className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}