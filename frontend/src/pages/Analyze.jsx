import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Upload,
  FileText,
  Mic,
  Sparkles,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Calendar,
  Mail,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockMeetings } from '../data/mockMeetings';

export function Analyze() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('notes'); // 'audio' | 'notes' | 'transcript'
  const [notesText, setNotesText] = useState(
    `Meeting Title: Q4 Architecture & Launch Alignment\nDate: September 26, 2026\nParticipants: Kunal Shah, Vansh Sharma, Priya Patel, Sarah Chen\n\nTranscript / Notes:\nKunal: We need to push the target launch date from Sep 30 to October 7 to make sure the Supabase database migration finishes smoothly with zero downtime.\nVansh: Agreed. If Priya finishes the dark UI components by Thursday, I will wire up the WebSocket stream handler.\nPriya: The design system is 90% ready. I'll hand off the tokens today.\nKunal: I will take full ownership of provisioning the AWS ECS cluster and testing database failover pipelines.\nSarah: Great. Let's make sure Kunal runs the 1,000 socket benchmark test before Monday.`
  );
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Analysis process states: 'idle' | 'analyzing' | 'done'
  const [processState, setProcessState] = useState('idle');
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Transcribing audio & normalizing speaker tags...",
    "Applying LLM semantic extraction & confidence scoring...",
    "Detecting priority, multi-owners, and dependency links...",
    "Generating calendar invites, email drafts & project memory diff..."
  ];

  const handleStartAnalyze = () => {
    setProcessState('analyzing');
    setCurrentStep(0);

    let stepCounter = 0;
    const interval = setInterval(() => {
      stepCounter++;
      if (stepCounter < steps.length) {
        setCurrentStep(stepCounter);
      } else {
        clearInterval(interval);
        setProcessState('done');
      }
    }, 1200);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30">
      <Navbar />

      <main className="flex-grow py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <Badge variant="cyan" className="font-mono text-xs uppercase tracking-widest px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-cyan-400 inline" /> AI MEETING INGESTION
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Analyze a Meeting
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Give us the conversation. We'll turn it into execution.
          </p>
        </div>

        {/* State 1: Input Form */}
        {processState === 'idle' && (
          <div className="glass-panel p-6 sm:p-8 border-indigo-500/30 shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] space-y-8">
            
            {/* Input Options Tabs */}
            <div className="flex p-1 bg-slate-900/90 rounded-2xl border border-slate-800 max-w-lg mx-auto">
              <button
                onClick={() => setActiveTab('audio')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'audio'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Mic className="w-4 h-4" /> Upload Audio
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'notes'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" /> Paste Notes
              </button>
              <button
                onClick={() => setActiveTab('transcript')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'transcript'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Upload className="w-4 h-4" /> Upload Transcript
              </button>
            </div>

            {/* Option 1: Upload Audio */}
            {activeTab === 'audio' && (
              <div
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleFileDrop}
                className={`border-2 border-dashed rounded-2xl p-10 text-center space-y-4 transition-all ${
                  dragActive ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto">
                  <Mic className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Drag & Drop your audio file here</h3>
                  <p className="text-xs text-slate-400 mt-1">Supports MP3, WAV, M4A, MP4 up to 500MB</p>
                </div>

                {selectedFile && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono">
                    <span>Selected: {selectedFile.name}</span>
                  </div>
                )}

                <div>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-medium text-slate-200">
                    <Upload className="w-3.5 h-3.5" /> Browse Files
                    <input
                      type="file"
                      accept="audio/*,video/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            )}

            {/* Option 2: Paste Notes */}
            {activeTab === 'notes' && (
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-400">RAW NOTES & TRANSCRIPT PASTE</span>
                  <span className="text-slate-500 font-mono">{notesText.length} characters</span>
                </div>
                <textarea
                  value={notesText}
                  onChange={(e) => setNotesText(e.target.value)}
                  rows={10}
                  placeholder="Paste your meeting notes or transcript here..."
                  className="w-full rounded-2xl bg-slate-950/90 border border-slate-800 p-4 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 leading-relaxed shadow-inner"
                />
              </div>
            )}

            {/* Option 3: Upload Transcript */}
            {activeTab === 'transcript' && (
              <div className="border-2 border-dashed border-slate-800 rounded-2xl p-10 text-center space-y-4 bg-slate-950/60 hover:border-slate-700 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Upload Transcript Document</h3>
                  <p className="text-xs text-slate-400 mt-1">Supports TXT, DOCX, PDF, VTT, SRT files</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-medium text-slate-200 inline-flex items-center gap-2">
                  <Upload className="w-3.5 h-3.5" /> Choose Transcript File
                </button>
              </div>
            )}

            {/* Analyze Trigger CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero retention mode active • Instant AI Parsing</span>
              </div>
              <Button
                variant="primary"
                size="lg"
                icon={Sparkles}
                onClick={handleStartAnalyze}
                className="w-full sm:w-auto px-8 py-3.5 shadow-glow-md"
              >
                Analyze Meeting
              </Button>
            </div>

          </div>
        )}

        {/* State 2: Sophisticated Loading State */}
        {processState === 'analyzing' && (
          <div className="glass-panel p-10 max-w-xl mx-auto border-indigo-500/40 text-center space-y-8 shadow-[0_0_50px_-10px_rgba(99,102,241,0.25)]">
            
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
              <div className="absolute inset-2 rounded-full border-4 border-purple-500/20 border-b-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
              <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">Understanding your meeting...</h3>
              <p className="text-xs text-indigo-300 font-mono">Running LLM Extraction Engine v3.8</p>
            </div>

            {/* Step checklist */}
            <div className="space-y-3 text-left max-w-md mx-auto pt-2">
              {steps.map((stepText, idx) => {
                const isDone = idx < currentStep;
                const isCurrent = idx === currentStep;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-mono transition-all ${
                      isDone
                        ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                        : isCurrent
                        ? 'bg-indigo-950/50 border-indigo-500/50 text-white font-semibold animate-pulse'
                        : 'bg-slate-900/30 border-slate-800 text-slate-500'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 text-indigo-400 animate-spin flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-700 flex-shrink-0" />
                    )}
                    <span>{stepText}</span>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* State 3: Analysis Complete Preview */}
        {processState === 'done' && (
          <div className="space-y-6">
            
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Analysis Complete — 3 Decisions & 4 Action Items Extracted</h3>
                  <p className="text-xs text-emerald-300 font-mono">Overall Confidence Score: 96%</p>
                </div>
              </div>
              
              <Link to="/meeting/m-105">
                <Button variant="primary" size="sm" icon={ArrowRight}>
                  Open Full Intelligence Workspace
                </Button>
              </Link>
            </div>

            {/* Result preview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Extracted Decisions */}
              <Card className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" /> Extracted Decisions
                  </h3>
                  <Badge variant="success" className="text-[10px]">3 Verified</Badge>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-white">Launch target set to Oct 7, 2026</span>
                      <Badge variant="success">98%</Badge>
                    </div>
                    <p className="text-[11px] text-slate-400">Owner: Kunal Shah • Reason: Supabase Migration</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-white">Adopt WebSocket stream for transcription</span>
                      <Badge variant="success">94%</Badge>
                    </div>
                    <p className="text-[11px] text-slate-400">Owner: Vansh Sharma • Sub-300ms threshold</p>
                  </div>
                </div>
              </Card>

              {/* Card 2: Extracted Action Items */}
              <Card className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" /> Extracted Action Items
                  </h3>
                  <Badge variant="cyan" className="text-[10px]">4 Tasks</Badge>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">Provision AWS ECS Cluster & Sync</span>
                      <Badge variant="urgent">P0 Urgent</Badge>
                    </div>
                    <p className="text-[11px] text-slate-400">Assigned to Kunal Shah • Due Oct 2</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">Finish High-Fidelity UI & Theme Tokens</span>
                      <Badge variant="p1">P1 High</Badge>
                    </div>
                    <p className="text-[11px] text-slate-400">Assigned to Vansh + Priya • Due Oct 4</p>
                  </div>
                </div>
              </Card>

            </div>

            <div className="flex justify-between items-center pt-4">
              <Button variant="ghost" size="sm" onClick={() => setProcessState('idle')}>
                ← Analyze Another Meeting
              </Button>
              <Link to="/dashboard">
                <Button variant="secondary" size="md">
                  Go to Team Dashboard →
                </Button>
              </Link>
            </div>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
