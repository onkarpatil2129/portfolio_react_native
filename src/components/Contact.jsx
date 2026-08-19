import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'onkarpatil.2129@gmail.com';
  const phone = '+91-8855030484';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Open for Senior React Native Developer roles, mobile app consulting, and cross-platform architecture projects.
          </p>
        </div>

        {/* Centered Clean Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Email Card */}
          <div className="clean-card p-6 bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">EMAIL ADDRESS</div>
                <a href={`mailto:${email}`} className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-lg bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="clean-card p-6 bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">PHONE / WHATSAPP</div>
                <a href={`tel:${phone}`} className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                  {phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-2.5 rounded-lg bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Card */}
          <div className="clean-card p-6 bg-white border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">LOCATION</div>
              <div className="text-sm font-bold text-slate-900">Baner, Pune, Maharashtra, India</div>
            </div>
          </div>

          {/* Socials & Resume Actions Card */}
          <div className="clean-card p-6 bg-white border border-slate-200 shadow-sm flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/onkar-patil-4b9063179/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 flex items-center justify-center gap-2 text-xs font-bold border border-slate-200 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-600" />
              LinkedIn
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center border border-slate-200 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a> */}
            <button
              onClick={onOpenResume}
              className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-indigo-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              View Resume
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
