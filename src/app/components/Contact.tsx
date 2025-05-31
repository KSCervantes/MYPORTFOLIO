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
    <section id="contact" className="py-10 px-4 sm:py-16 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-12 text-center">
          <span className="inline-block px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-black text-white">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let&#39;s Connect!</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                I&#39;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                Click the email button to reach out directly or download my resume to learn more about my experience!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">kylecervantes2003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Response Time</h4>
                  <p className="text-gray-600">Usually within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Lianga, Surigao Del Sur, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mt-8 lg:mt-0">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Connect?</h3>

              {/* Gmail Button */}
              <button
                onClick={handleEmailClick}
                className="w-full py-4 px-6 rounded-lg font-semibold bg-black text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457V18.82c0 .904-.732 1.636-1.636 1.636H1.636C.732 20.456 0 19.724 0 18.82V5.457c0-.904.732-1.636 1.636-1.636h20.728C23.268 3.821 24 4.553 24 5.457zM1.636 5.457l10.364 8.19 10.364-8.19H1.636zm0 1.636L12 15.274l10.364-8.181v11.727H1.636V7.093z"/>
                </svg>
                Send Email via Gmail
              </button>

              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className="w-full py-4 px-6 rounded-lg font-semibold bg-black hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-3-7v4h-2v-4H9.5L12 9.5 14.5 13H13z"/>
                </svg>
                Download Resume
              </button>

              <div className="text-sm text-gray-500 mt-4">
                <p>Click the email button to open Gmail with a pre-filled message, or download my resume to learn more about my background and experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}