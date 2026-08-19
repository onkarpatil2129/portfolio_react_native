import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Menu, X, Zap } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Header({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'specializations', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Specializations', href: '#specializations' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'light-nav py-3 shadow-sm' : 'bg-slate-50/90 backdrop-blur-md py-4 border-b border-slate-200/60'}`}>
      <div className="container flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                Onkar Patil
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                Available
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono block">React Native Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-200/70 p-1.5 rounded-full border border-slate-300/60">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeSection === item.href.substring(1)
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://www.linkedin.com/in/onkar-patil-4b9063179/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 flex items-center justify-center border border-slate-200 transition-colors shadow-sm"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center border border-slate-200 transition-colors shadow-sm"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a> */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-200 transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white text-slate-700 hover:text-indigo-600 border border-slate-200 shadow-sm"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 py-4 px-6 mt-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${activeSection === item.href.substring(1)
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                  }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200 mt-2">
              <a
                href="https://www.linkedin.com/in/onkar-patil-4b9063179/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center gap-2 text-xs font-semibold border border-slate-200"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-600" />
                LinkedIn
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 rounded-xl bg-indigo-600 text-white flex items-center justify-center gap-2 text-xs font-semibold shadow-md shadow-indigo-200"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
