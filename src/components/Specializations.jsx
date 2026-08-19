import React from 'react';
import { Smartphone, Layers, CheckCircle2 } from 'lucide-react';

export default function Specializations() {
  const specs = [
    {
      id: '01',
      title: 'Mobile UI & Native Performance Engineering',
      icon: Smartphone,
      description: 'Delivering fluid, production-ready cross-platform mobile experiences with React Native for Android and iOS.',
      points: [
        'React Native 0.70+ architecture with TypeScript & ES6+',
        'JS Bundle Size Reduction by 25% through lazy loading & asset optimization',
        'Stable 60 FPS frame rate using React Native Reanimated & gesture handlers',
        'Native bridging between JS thread & Android Studio / Xcode native modules',
      ],
      skills: ['React Native', 'TypeScript', 'JavaScript (ES6+)', 'Xcode', 'Android Studio', 'Native Bridges'],
    },
    {
      id: '02',
      title: 'State, APIs & Real-time Integration',
      icon: Layers,
      description: 'Architecting resilient offline data caching, real-time tracking, and secure payment processing APIs.',
      points: [
        'Redux Toolkit, Context API, and React Query for offline caching & state',
        'Background GPS location tracking with Google Maps API integration',
        'Razorpay Payment SDK integration for seamless user checkout',
        'GraphQL subscriptions & RESTful API integration with Firebase',
      ],
      skills: ['Redux Toolkit', 'React Query', 'Google Maps API', 'GPS Services', 'Razorpay', 'GraphQL', 'Firebase'],
    },
  ];

  return (
    <section id="specializations" className="py-20 bg-slate-50 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            CORE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Engineering Domains
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Focused on cross-platform mobile architecture, native SDK integrations, real-time location services, and high-performance React Native development.
          </p>
        </div>

        {/* Specialization Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div key={spec.id} className="clean-card p-8 flex flex-col justify-between bg-white border border-slate-200">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-mono font-extrabold text-slate-300">{spec.id}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {spec.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {spec.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {spec.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {spec.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
