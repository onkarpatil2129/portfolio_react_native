import React from 'react';
import { MapPin, Award, ArrowRight, Download, Cpu, Layers, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="about" className="pt-32 pb-16 relative bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Main Info */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Baner, Pune, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-indigo-600" />
                3+ Years Mobile Exp
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                Sphinx Solution Pvt. Ltd.
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Onkar Patil</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-bold text-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-indigo-600">React Native Developer</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-600">Android & iOS Specialist</span>
              </p>
            </div>

            {/* Profile Bio */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Results-driven mobile developer with 3+ years of experience engineering high-performance mobile applications. Expert in cross-platform UI architecture, real-time background GPS tracking, Redux Toolkit, and reducing JS bundle sizes by up to 25% with stable 60 FPS performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200 w-full grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">60 FPS</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Smooth Rendering</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">-25%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Bundle Size Reduced</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">3+ Years</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">React Native Stack</div>
              </div>
            </div>

          </div>

          {/* Right Column - Profile Card & Code Window */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md space-y-4">

              {/* Profile Avatar Card */}
              <div className="clean-card p-5 flex items-center gap-4 bg-white border border-slate-200 shadow-sm">
                <div className="relative">
                  <img
                    src="/assets/profile.jpg"
                    alt="Onkar Laxman Patil"
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/20"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Onkar Laxman Patil</h3>
                  <p className="text-xs text-slate-500 font-medium">React Native Developer @ Sphinx Solution</p>
                </div>
              </div>

              {/* Code Window */}
              <div className="code-window">
                <div className="code-header">
                  <div className="dot-group">
                    <span className="dot-item dot-red" />
                    <span className="dot-item dot-yellow" />
                    <span className="dot-item dot-green" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">onkar_patil.ts</span>
                  <span className="text-[10px] text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800 font-mono">TypeScript</span>
                </div>
                <div className="p-4 text-xs font-mono text-slate-200 leading-relaxed">
                  <p><span className="text-purple-400">interface</span> <span className="text-yellow-300">Developer</span> &#123;</p>
                  <p className="pl-4"><span className="text-blue-400">name</span>: <span className="text-emerald-400">"Onkar Laxman Patil"</span>;</p>
                  <p className="pl-4"><span className="text-blue-400">role</span>: <span className="text-emerald-400">"React Native Developer"</span>;</p>
                  <p className="pl-4"><span className="text-blue-400">experience</span>: <span className="text-emerald-400">"3+ Years"</span>;</p>
                  <p className="pl-4"><span className="text-blue-400">company</span>: <span className="text-emerald-400">"Sphinx Solution Pvt. Ltd."</span>;</p>
                  <p className="pl-4"><span className="text-blue-400">location</span>: <span className="text-emerald-400">"Baner, Pune, India"</span>;</p>
                  <p className="pl-4"><span className="text-blue-400">coreStack</span>: [<span className="text-amber-300">"React Native"</span>, <span className="text-amber-300">"Redux Toolkit"</span>, <span className="text-amber-300">"Google Maps"</span>, <span className="text-amber-300">"Razorpay"</span>];</p>
                  <p>&#125;</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
