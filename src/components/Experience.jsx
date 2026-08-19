import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const accomplishments = [
    {
      id: 1,
      category: 'arch',
      text: 'Engineered high-quality cross-platform mobile apps using React Native, reducing launch bundle size by 25% and improving frame rates to a stable 60 FPS.',
      metrics: '25% Bundle Reduction • 60 FPS',
      tags: ['React Native', 'Performance', 'Bundle Size'],
    },
    {
      id: 2,
      category: 'arch',
      text: 'Architected robust state management systems utilizing Redux Toolkit and Context API to manage complex offline data caching.',
      metrics: 'Offline Data Caching',
      tags: ['Redux Toolkit', 'Context API', 'State Management'],
    },
    {
      id: 3,
      category: 'api',
      text: 'Integrated GraphQL endpoints, REST APIs, Firebase services, and Razorpay payment SDKs for seamless, low-latency transaction handling.',
      metrics: 'Razorpay Gateway • GraphQL',
      tags: ['GraphQL', 'REST API', 'Razorpay', 'Firebase'],
    },
    {
      id: 4,
      category: 'api',
      text: 'Implemented background GPS location tracking and dynamic mapping using Google Maps API for real-time app notifications.',
      metrics: 'Real-time GPS Tracking',
      tags: ['Google Maps API', 'GPS Location', 'Push Notifications'],
    },
    {
      id: 5,
      category: 'deploy',
      text: 'Managed build distribution, provisioning profiles, and store deployment pipelines across Android Studio and Xcode environments.',
      metrics: 'Play Store & App Store',
      tags: ['Xcode', 'Android Studio', 'App Store Deployment'],
    },
  ];

  const filteredItems = filter === 'all'
    ? accomplishments
    : accomplishments.filter(item => item.category === filter);

  return (
    <section id="experience" className="py-20 bg-white border-t border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            WORK HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Work Experience
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            3+ years of hands-on mobile engineering experience delivering production iOS and Android apps.
          </p>
        </div>

        {/* Work Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="clean-card p-8 sm:p-10 bg-white border border-slate-200 shadow-sm">
            
            {/* Role Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold block mb-1">
                  CURRENT POSITION
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">React Native Developer</h3>
                <h4 className="text-base font-bold text-indigo-600 mt-0.5">Sphinx Solution Pvt. Ltd.</h4>
              </div>
              <div className="flex flex-col md:items-end text-xs text-slate-600 gap-1.5">
                <span className="flex items-center gap-1.5 font-semibold px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  July 2023 – Present
                </span>
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Baner, Pune, India
                </span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 my-6">
              <span className="text-xs text-slate-500 font-mono font-semibold mr-1">Filter:</span>
              <button
                onClick={() => setFilter('all')}
                className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
              >
                All ({accomplishments.length})
              </button>
              <button
                onClick={() => setFilter('arch')}
                className={`tab-btn ${filter === 'arch' ? 'active' : ''}`}
              >
                Architecture & Performance
              </button>
              <button
                onClick={() => setFilter('api')}
                className={`tab-btn ${filter === 'api' ? 'active' : ''}`}
              >
                API & GPS Maps
              </button>
              <button
                onClick={() => setFilter('deploy')}
                className={`tab-btn ${filter === 'deploy' ? 'active' : ''}`}
              >
                Store Deployment
              </button>
            </div>

            {/* Accomplishment List */}
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {item.text}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded bg-white text-indigo-700 text-[11px] font-mono border border-indigo-100 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {item.metrics && (
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold shrink-0 self-start sm:self-center">
                      ⚡ {item.metrics}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
