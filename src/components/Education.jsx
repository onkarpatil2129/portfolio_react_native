import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'PG-Diploma in Mobile Computing',
      institution: 'Sunbeam Institute, Pune',
      year: '2023',
      badge: 'Mobile Specialization',
      highlights: 'Android & iOS engineering, Native C++ / Java bridges, React Native, Mobile Security.',
    },
    {
      degree: 'Master Of Computer Applications (MCA)',
      institution: 'Sinhgad Institute & Management, Pune',
      year: '2017',
      badge: 'Post Graduate Degree',
      highlights: 'Software engineering principles, Data Structures, Algorithms, Enterprise Application Architecture.',
    },
    {
      degree: 'BSc - Computer Science',
      institution: 'The New College, Kolhapur',
      year: '2013',
      badge: 'Bachelor Degree',
      highlights: 'Core Computer Science foundation, C/C++ Programming, Relational Databases, Web Basics.',
    },
  ];

  const keyStrengths = [
    'Cross-Platform Mobile Development',
    'Native Bridge Optimizations',
    'App Store & Play Store Deployment',
    'Clean Component Architecture',
    'Agile Team Collaboration',
    'Real-time GPS Tracking',
    'Redux Toolkit & Offline Caching',
    'Payment SDK Integrations (Razorpay)',
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            ACADEMICS & STRENGTHS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Core Strengths
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Academic qualifications in Mobile Computing and Computer Applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              Academic Degrees
            </h3>

            {educationList.map((edu, idx) => (
              <div key={idx} className="clean-card p-6 bg-white border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-600 block mb-0.5">{edu.badge}</span>
                    <h4 className="text-lg font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    {edu.year}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 pt-3 border-t border-slate-100">
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Key Strengths */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="clean-card p-6 sm:p-8 bg-white border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  Key Strengths
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Core professional capabilities developed across production mobile engineering:
                </p>

                <div className="space-y-2.5">
                  {keyStrengths.map((strength, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner */}
              <div className="mt-6 p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-center">
                <p className="text-xs text-indigo-900 font-mono font-semibold italic">
                  "Performant Mobile Apps. Smooth 60 FPS UI. Clean Architecture."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
