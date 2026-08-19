import React, { useEffect } from 'react';
import { X, CheckCircle2, Zap, Smartphone } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto modal-overlay animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col my-auto border border-slate-200 shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-mono font-bold">
              {project.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              {project.title}
            </h3>
            <p className="text-xs text-indigo-600 font-mono font-semibold mt-1">{project.category}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          
          {/* Screenshot Preview */}
          <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100 border border-slate-200 shadow-sm">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Problem */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              The Challenge & Requirements
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-indigo-600" />
              Technical Solution & Mobile Architecture
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.caseStudy.solution}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Key Deliverables & Performance Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-xs text-slate-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs font-mono font-bold text-slate-500 mb-3 uppercase tracking-wider">
              Technologies & SDKs Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-mono border border-indigo-100 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono font-semibold">React Native Mobile Architecture</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
}
