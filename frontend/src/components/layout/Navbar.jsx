import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  const scrollToLandingSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07080D]/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090A10] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Agree<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 -mt-1">Execution Engine</span>
            </div>
          </Link>

          {/* Center Navigation links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            <button
              onClick={() => scrollToLandingSection('product')}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
            >
              Product
            </button>
            <button
              onClick={() => scrollToLandingSection('how-it-works')}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToLandingSection('intelligence')}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
            >
              Intelligence
            </button>
            <Link
              to="/progress"
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                isCurrent('/progress') ? 'text-white bg-indigo-600/30 border border-indigo-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Progress
            </Link>
            <Link
              to="/dashboard"
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                isCurrent('/dashboard') ? 'text-white bg-indigo-600/30 border border-indigo-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="text-slate-300">
                Sign In
              </Button>
            </Link>
            <Link to="/analyze">
              <Button variant="primary" size="sm" icon={Sparkles}>
                Analyze a Meeting
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090A10]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/analyze"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-indigo-300 font-medium text-sm"
          >
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Analyze a Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 text-center"
            >
              Team Dashboard
            </Link>
            <Link
              to="/progress"
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 text-center"
            >
              Team Progress
            </Link>
            <Link
              to="/diff"
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 text-center"
            >
              Project Memory
            </Link>
            <Link
              to="/meeting/m-105"
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 text-center"
            >
              Sample Meeting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
