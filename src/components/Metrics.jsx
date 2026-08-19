import React from 'react';
import { Gauge, Zap, Smartphone, ShieldCheck } from 'lucide-react';

export default function Metrics() {
  const metrics = [
    {
      icon: Gauge,
      value: '3+ Years',
      label: 'Mobile Development',
      description: 'Building Android & iOS apps with React Native, TypeScript & Redux',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: Zap,
      value: '-25%',
      label: 'Bundle Size Reduction',
      description: 'Engineered native bridge & asset loading optimizations for mobile apps',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      icon: Smartphone,
      value: '60 FPS',
      label: 'Stable UI Frame Rate',
      description: 'Native re-renders optimization, reanimated, and smooth gesture control',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: ShieldCheck,
      value: 'Store Ready',
      label: 'App & Play Store Deployment',
      description: 'Xcode & Android Studio store publishing pipelines & build management',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="clean-card p-6 flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${m.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{m.value}</div>
                  <div className="text-sm font-bold text-slate-800 mb-2">{m.label}</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{m.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
