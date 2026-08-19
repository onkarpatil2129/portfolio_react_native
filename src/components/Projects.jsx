import React from 'react';
import { FileText, Zap } from 'lucide-react';

export default function Projects({ onOpenCaseStudy }) {
  const projects = [
    {
      id: 'sarwa',
      title: 'Sarwa - AI Delivery & Shopping App',
      category: 'Cross-Platform Mobile App (Android & iOS)',
      image: '/assets/sarwa.jpg',
      badge: 'Production Delivery Platform',
      description: 'Built a cross-platform delivery app for ordering groceries, food, and essentials with real-time background location tracking, interactive maps, and automated payment gateway.',
      highlights: [
        'Implemented secure checkout workflows with Razorpay Gateway',
        'Streamlined address detection & courier tracking via Google Maps API',
        'Redux Toolkit state synchronization for offline cart persistence',
      ],
      techStack: ['React Native', 'Firebase', 'REST APIs', 'Razorpay', 'Google Maps API', 'Redux Toolkit'],
      caseStudy: {
        problem: 'Delivery apps require ultra-precise GPS tracking, quick checkout under 3 clicks, and offline cart state persistence to prevent loss during network drops.',
        solution: 'Engineered a React Native mobile application utilizing background location listeners, Razorpay native bridge integration, and Redux Toolkit with local storage fallback.',
        deliverables: [
          'Live interactive map with courier movement updates',
          'Razorpay payment integration supporting UPI, Cards & Netbanking',
          'Push notifications for order stage transitions',
          'Optimized bundle leading to sub-2 second cold startup',
        ],
      },
    },
    {
      id: 'multiply',
      title: 'Multiply - Creator Engagement App',
      category: 'Real-Time Social Platform',
      image: '/assets/multiply.jpg',
      badge: 'Real-Time Community Network',
      description: 'Engineered a mobile community platform allowing digital creators to interact with followers, publish live updates, stream content, and earn monetization rewards.',
      highlights: [
        'Integrated low-latency GraphQL subscriptions for instant chat & live reactions',
        'Firebase real-time database handling thousands of daily active users',
        'React Query for optimistic UI updates and instant feed loading',
      ],
      techStack: ['React Native', 'GraphQL', 'Firebase', 'REST APIs', 'React Query', 'TypeScript'],
      caseStudy: {
        problem: 'High concurrency during creator live broadcasts caused UI lag, frame drops, and delayed comment delivery on mobile devices.',
        solution: 'Architected GraphQL subscription listeners with React Query optimistic updates and lightweight virtualized flatlists to maintain 60 FPS rendering during live events.',
        deliverables: [
          'Low-latency chat & reaction stream overlay',
          'Creator analytics dashboard with engagement metrics',
          'Monetization tip & reward payout workflow',
          'Seamless social feed with video & media caching',
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mobile Apps Engineered & Delivered
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            High-impact React Native mobile applications built for scale, performance, and seamless user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="clean-card overflow-hidden flex flex-col justify-between bg-white border border-slate-200 shadow-sm">
              
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-indigo-700 border border-slate-200 text-xs font-bold shadow-sm">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Action */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-100">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-mono border border-indigo-100 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Detailed Case Study</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
