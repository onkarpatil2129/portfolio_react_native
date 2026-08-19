import React, { useState } from 'react';
import { Search, Smartphone, Layers, Cpu, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      id: 'core',
      title: 'Core Mobile & Languages',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 'Expert', highlight: 'Primary SDK (3+ Yrs)' },
        { name: 'TypeScript', level: 'Advanced', highlight: 'Strict Type Systems' },
        { name: 'JavaScript (ES6+)', level: 'Expert', highlight: 'Async/Await, ESNext' },
        { name: 'Cross-Platform UI', level: 'Expert', highlight: 'Android & iOS Layouts' },
      ],
    },
    {
      id: 'state',
      title: 'State & API Integration',
      icon: Layers,
      skills: [
        { name: 'Redux Toolkit', level: 'Expert', highlight: 'Global State & Caching' },
        { name: 'React Query', level: 'Advanced', highlight: 'Async State Management' },
        { name: 'Context API', level: 'Expert', highlight: 'Component Scope State' },
        { name: 'REST APIs', level: 'Expert', highlight: 'Fetch / Axios / Endpoints' },
        { name: 'GraphQL', level: 'Advanced', highlight: 'Subscriptions & Queries' },
        { name: 'Firebase', level: 'Advanced', highlight: 'Auth, Firestore, FCM' },
      ],
    },
    {
      id: 'sdks',
      title: 'Mobile Native & SDKs',
      icon: Cpu,
      skills: [
        { name: 'Google Maps API', level: 'Expert', highlight: 'Interactive Maps' },
        { name: 'GPS Location Services', level: 'Expert', highlight: 'Background Tracking' },
        { name: 'Razorpay Gateway', level: 'Expert', highlight: 'Payment Workflows' },
        { name: 'Camera Integration', level: 'Advanced', highlight: 'Media Capture' },
        { name: 'Push Notifications', level: 'Advanced', highlight: 'FCM / APNs' },
      ],
    },
    {
      id: 'tools',
      title: 'Testing & Mobile Tooling',
      icon: ShieldCheck,
      skills: [
        { name: 'Xcode', level: 'Advanced', highlight: 'iOS Builds & Provisioning' },
        { name: 'Android Studio', level: 'Advanced', highlight: 'Gradle & Emulators' },
        { name: 'Jest', level: 'Intermediate', highlight: 'Unit Testing' },
        { name: 'React Native Testing Library', level: 'Intermediate', highlight: 'Component Testing' },
        { name: 'Git & GitHub', level: 'Expert', highlight: 'Branching & Code Review' },
        { name: 'CI/CD Pipelines', level: 'Advanced', highlight: 'Build Automation' },
      ],
    },
    {
      id: 'ai',
      title: 'AI & Developer Tools',
      icon: Sparkles,
      skills: [
        { name: 'Claude AI', level: 'Advanced', highlight: 'Architecture & Refactoring' },
        { name: 'Antigravity', level: 'Advanced', highlight: 'Agentic IDE Workflows' },
        { name: 'Cursor AI', level: 'Advanced', highlight: 'Pair Programming' },
        { name: 'ChatGPT', level: 'Advanced', highlight: 'Problem Solving' },
        { name: 'Google Gemini', level: 'Advanced', highlight: 'AI Productivity' },
      ],
    },
  ];

  const categoriesToDisplay = skillCategories.filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            TECHNICAL STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Core Technologies
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Comprehensive mobile tech stack built around high-performance React Native development.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('core')}
              className={`tab-btn ${activeCategory === 'core' ? 'active' : ''}`}
            >
              Core Mobile
            </button>
            <button
              onClick={() => setActiveCategory('state')}
              className={`tab-btn ${activeCategory === 'state' ? 'active' : ''}`}
            >
              State & APIs
            </button>
            <button
              onClick={() => setActiveCategory('sdks')}
              className={`tab-btn ${activeCategory === 'sdks' ? 'active' : ''}`}
            >
              Native SDKs
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`tab-btn ${activeCategory === 'tools' ? 'active' : ''}`}
            >
              Testing & Tools
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`tab-btn ${activeCategory === 'ai' ? 'active' : ''}`}
            >
              AI Tools
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Redux)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Category Grids */}
        <div className="space-y-6">
          {categoriesToDisplay.map((cat) => {
            const Icon = cat.icon;
            const filteredSkills = cat.skills.filter(s =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.highlight.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredSkills.length === 0) return null;

            return (
              <div key={cat.id} className="clean-card p-6 bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                  <Icon className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-indigo-300 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                          <span className="text-xs font-bold text-slate-900">{skill.name}</span>
                        </div>
                        <span className="text-[11px] text-slate-500 mt-0.5 block pl-6">
                          {skill.highlight}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-white text-indigo-700 border border-indigo-100 text-[10px] font-mono font-semibold shadow-2xs">
                        {skill.level}
                      </span>
                    </div>
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
