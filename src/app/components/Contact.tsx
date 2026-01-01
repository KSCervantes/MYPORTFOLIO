"use client";
import React from 'react';

export default function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:kylecervantes2003@gmail.com?subject=Let\'s Connect!&body=Hi Kyle,%0D%0A%0D%0AI would like to discuss...', '_blank');
  };

  const handleResumeDownload = () => {
    const resumeUrl = '/images/Kyle Cervantes.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kyle_Cervantes_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-10 px-4 sm:py-16 sm:px-8 bg-white dark:bg-[#0a192f] grid-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-12 text-center">
          <span className="button-3d button-3d-large">
            <span>Get In Touch</span>
          </span>
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            {/* Action Buttons */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 mt-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Ready to Connect?</h3>

                <div className="flex flex-col gap-4">
                  {/* Gmail Button */}
                  <button
                    onClick={handleEmailClick}
                    className="button-3d mx-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457V18.82c0 .904-.732 1.636-1.636 1.636H1.636C.732 20.456 0 19.724 0 18.82V5.457c0-.904.732-1.636 1.636-1.636h20.728C23.268 3.821 24 4.553 24 5.457zM1.636 5.457l10.364 8.19 10.364-8.19H1.636zm0 1.636L12 15.274l10.364-8.181v11.727H1.636V7.093z"/>
                      </svg>
                      Send Message via Gmail
                    </span>
                  </button>

                  {/* Resume Download Button */}
                  <button
                    onClick={handleResumeDownload}
                    className="button-3d mx-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-3-7v4h-2v-4H9.5L12 9.5 14.5 13H13z"/>
                      </svg>
                      Download My Resume
                    </span>
                  </button>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <p>Click the email button to open Gmail with a pre-filled message, or download my resume to learn more about my background and experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}