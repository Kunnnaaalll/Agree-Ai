import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/landing/Hero';
import { HowItWorks } from '../components/landing/HowItWorks';
import { IntelligenceGrid } from '../components/landing/IntelligenceGrid';
import { AudioPipeline } from '../components/landing/AudioPipeline';
import { ExecutionSection } from '../components/landing/ExecutionSection';
import { ProjectMemory } from '../components/landing/ProjectMemory';
import { TeamDashboardPreview } from '../components/landing/TeamDashboardPreview';
import { FinalCTA } from '../components/landing/FinalCTA';

export function Landing() {
  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <IntelligenceGrid />
        <AudioPipeline />
        <ExecutionSection />
        <ProjectMemory />
        <TeamDashboardPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
