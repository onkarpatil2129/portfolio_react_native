import React from 'react';
import { ArrowUp, Heart, Zap } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 relative">
      <div className="container">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">

          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900">Onkar Patil</span>
              <span className="text-xs text-slate-500 font-mono block">React Native Developer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#specializations" className="hover:text-indigo-600 transition-colors">Specializations</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-indigo-600 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-indigo-600 transition-colors font-semibold">Resume</button>
          </div>

          {/* Socials & Top Scroll Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/onkar-patil-4b9063179/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a> */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Onkar Laxman Patil. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>React Native & React.js</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
