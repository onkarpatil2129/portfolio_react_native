import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Specializations from './components/Specializations';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Metrics />
        <Specializations />
        <Experience />
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <Skills />
        <Education />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Modals */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}
    </div>
  );
}
