import React, { useEffect } from 'react';
import { X, Printer, Download, Smartphone } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto modal-overlay animate-fadeIn">
      
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-2xl overflow-hidden flex flex-col my-auto border border-slate-200 shadow-2xl">
        
        {/* Header Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">Curriculum Vitae — Onkar Laxman Patil</h3>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="/Onkar_Laxman_Patil_Resume.html"
              download="Onkar_Laxman_Patil_Resume.html"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
            >
              <Printer className="w-4 h-4 text-indigo-600" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Clean CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-800 space-y-6 print:p-0 print:overflow-visible">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-200">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Onkar Laxman Patil</h1>
            <p className="text-xs font-semibold text-slate-600 mt-1">
              Email: <a href="mailto:onkarpatil.2129@gmail.com" className="text-indigo-600 hover:underline">onkarpatil.2129@gmail.com</a> | Phone: <a href="tel:+918855030484" className="text-indigo-600 hover:underline">+91-8855030484</a> | Location: Baner, Pune, India
            </p>
            <p className="text-xs font-semibold text-indigo-600 mt-1 flex items-center justify-center gap-2">
              <a href="https://www.linkedin.com/in/onkar-patil-4b9063179/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>|</span>
              <a href="https://portfolio-alpha-coral-jpkpij5nl6.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Portfolio
              </a>
            </p>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-1.5 pb-1 border-b border-indigo-100">
              Profile Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              React Native Developer with 3+ years of experience building and deploying cross-platform mobile applications for Android and iOS. Experienced in TypeScript/JavaScript, Redux Toolkit, React Query, Firebase, REST/GraphQL APIs, Google Maps, GPS tracking, payment integration, and mobile performance optimization. Proven experience reducing application bundle size by up to 25%, building reusable mobile architectures, and managing Android/iOS builds through deployment.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-2 pb-1 border-b border-indigo-100">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              <p><strong>Mobile Development:</strong> React Native, JavaScript (ES6+), TypeScript</p>
              <p><strong>State & Backend Integration:</strong> Redux Toolkit, React Query, Context API, REST APIs, GraphQL, Firebase</p>
              <p><strong>Mobile APIs & SDKs:</strong> Google Maps API, GPS Location Services, Camera Integration, Razorpay, Push Notifications</p>
              <p><strong>Testing & Tooling:</strong> Xcode, Android Studio, Jest, React Native Testing Library, Git, CI/CD</p>
              <p><strong>AI & Developer Tools:</strong> Claude AI, Antigravity, Cursor AI, ChatGPT, Google Gemini</p>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-1.5 pb-1 border-b border-indigo-100">
              Core Competencies
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Cross-Platform Mobile Development • Reusable Component Architecture • API Integration • State Management • Offline Data Caching • GPS & Maps • Payment Integration • Mobile Performance Optimization • Android & iOS Deployment
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-2 pb-1 border-b border-indigo-100">
              Work Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xs font-bold text-slate-900">React Native Developer — Sphinx Solution Pvt. Ltd.</h3>
                  <span className="text-xs font-mono text-slate-500">July 2023 – Present | Pune, India</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                  <li>Developed and optimized cross-platform mobile applications using React Native, reducing application bundle size by 25% and improving runtime performance to a stable 60 FPS.</li>
                  <li>Designed reusable state-management architecture using Redux Toolkit and Context API to support complex application state and offline data caching.</li>
                  <li>Integrated REST APIs, GraphQL endpoints, Firebase services, and Razorpay payment SDKs to support application workflows and transaction handling.</li>
                  <li>Implemented background GPS location tracking and dynamic mapping with Google Maps API for location-aware mobile experiences and real-time notifications.</li>
                  <li>Managed Android and iOS build, distribution, and deployment workflows using Android Studio and Xcode.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-2 pb-1 border-b border-indigo-100">
              Projects
            </h2>
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Sarwa - AI-Powered Delivery & Shopping App</h3>
                <ul className="list-disc list-inside space-y-0.5 pl-1 mt-0.5">
                  <li>Built a cross-platform delivery application for groceries, food, and essentials with real-time location tracking.</li>
                  <li>Implemented checkout workflows with Razorpay and streamlined address detection using Google Maps API.</li>
                  <li className="list-none text-indigo-700 font-mono text-[11px] font-semibold">Tech Stack: React Native, Firebase, REST APIs, Razorpay, Google Maps API, Redux Toolkit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Multiply - Creator Engagement App</h3>
                <ul className="list-disc list-inside space-y-0.5 pl-1 mt-0.5">
                  <li>Developed a mobile community platform enabling creators to interact with followers, publish updates, and earn rewards.</li>
                  <li>Integrated GraphQL subscriptions and Firebase to support real-time interactions and application updates.</li>
                  <li className="list-none text-indigo-700 font-mono text-[11px] font-semibold">Tech Stack: React Native, GraphQL, Firebase, REST APIs, React Query</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-2 pb-1 border-b border-indigo-100">
              Education
            </h2>
            <div className="space-y-1 text-xs text-slate-700">
              <p><strong>PG-Diploma in Mobile Computing</strong> | Sunbeam Institute, Pune | 2023</p>
              <p><strong>Master Of Computer Applications</strong> | Sinhgad Institute & Management, Pune | 2017</p>
              <p><strong>BSc - Computer Science</strong> | The New College, Kolhapur | 2013</p>
            </div>
          </div>

          {/* Key Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-1.5 pb-1 border-b border-indigo-100">
              Key Strengths
            </h2>
            <p className="text-xs text-slate-700">
              Cross-Platform Mobile Development • Native Bridge Optimizations • App Store & Play Store Deployment • Clean Component Architecture • Agile Team Collaboration
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
