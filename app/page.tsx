"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="scanline" />
      <div className="grain" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 min-h-screen">
        <div className="w-full max-w-6xl mx-auto space-y-16 py-32">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-primary/30 text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.2)]">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#00ff41]" />
            SYSTEM_SCAN_ONLINE
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-shadow-glow">
              SECURE YOUR
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
              <span className="text-primary italic font-black text-shadow-primary">BOOTSTRAP</span>
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-shadow-glow">
              EMPIRE
            </h1>
          </div>
          
          {/* Terminal-style Subtext */}
          <div className="max-w-2xl mx-auto text-sm md:text-base text-zinc-400 space-y-4 font-mono tracking-[0.15em] opacity-80">
            <p className="terminal-line">&gt; TARGET: BOOTSTRAPPED_SAAS_FOUNDERS</p>
            <p className="terminal-line">&gt; DELIVERY: 48_HOURS_FIXED_SCOPE</p>
            <p className="terminal-line">&gt; GUARANTEE: 30_DAY_MONEY_BACK</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link 
              href="#services" 
              className="group relative bg-primary text-black px-12 py-5 text-sm font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,65,0.6)]"
            >
              <span className="relative z-10">INITIALIZE_SCAN ($500)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-green-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              href="#services" 
              className="border-2 border-zinc-700 text-zinc-300 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
            >
              VIEW_PROTOCOL
            </Link>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-32 left-8 w-24 h-24 border-t-2 border-l-2 border-primary/20 pointer-events-none hidden md:block" />
        <div className="absolute bottom-32 right-8 w-24 h-24 border-b-2 border-r-2 border-primary/20 pointer-events-none hidden md:block" />
      </section>

      {/* Ticker Bar */}
      <div className="relative border-y border-zinc-800 py-6 overflow-hidden bg-zinc-950/50 backdrop-blur-sm">
        <div className="flex animate-ticker gap-20 text-[11px] font-mono uppercase tracking-[0.4em] text-primary/40 whitespace-nowrap">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="inline-block">
              VULNERABILITY_DETECTION // RAPID_PENTESTING // FOUNDER_FRIENDLY // 48HR_DELIVERY // ZERO_BULLSHIT
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="relative py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-32 relative">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
              <div className="relative flex-1">
                <span className="text-primary font-mono text-[11px] mb-8 block tracking-[0.4em] uppercase">
                  -- PROTOCOL_SELECTION --
                </span>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-shadow-glow">
                  MISSION<br/>SCOPES
                </h2>
                <div className="absolute -top-8 -left-8 w-20 h-20 border-t-2 border-l-2 border-primary/30 hidden md:block" />
              </div>
              <div className="max-w-lg border-l-2 border-primary/30 pl-8 lg:pb-4">
                <p className="text-zinc-400 font-mono text-sm leading-relaxed italic tracking-wide">
                  "We don't just find exploits. We rebuild your defenses from the kernel up."
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Web Scan Card */}
            <div className="group relative bg-zinc-950/50 border border-zinc-800 p-10 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm flex flex-col">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20" />
              
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/50 mb-8 font-mono">
                QUICK_SCAN
              </div>
              
              <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                QUICK WEB SCAN
              </h3>
              
              <p className="text-zinc-500 mb-10 text-sm font-mono leading-relaxed uppercase tracking-wider">
                Web app vulnerability scan + basic report. Perfect for pre-funding security check.
              </p>
              
              <div className="text-5xl font-black mb-10 font-mono tracking-tighter mt-auto">
                $500
                <span className="text-xs text-primary ml-3 font-bold uppercase tracking-widest opacity-70">
                  FIXED
                </span>
              </div>
              
              <ul className="space-y-5 mb-10 text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>48 HOUR DELIVERY</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>VULNERABILITY REPORT</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>30-DAY MONEY-BACK</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>ASYNC DELIVERY</span>
                </li>
              </ul>
              
              <button className="w-full border-2 border-zinc-700 py-4 text-[11px] font-black uppercase tracking-[0.3em] group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 mt-auto">
                START_SCAN
              </button>
            </div>

            {/* Full Pentest Card - Featured */}
            <div className="group relative bg-zinc-900 border-2 border-primary/60 p-10 transition-all duration-500 backdrop-blur-sm flex flex-col shadow-[0_0_40px_rgba(0,255,65,0.15)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_#00ff41]" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/40" />
              
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-8 font-mono flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                RECOMMENDED
              </div>
              
              <h3 className="text-3xl font-black mb-6 text-primary tracking-tight">
                FULL PENTEST
              </h3>
              
              <p className="text-zinc-300 mb-10 text-sm font-mono leading-relaxed uppercase tracking-wider">
                App + APIs + basic infrastructure + detailed remediation guide. Series A ready.
              </p>
              
              <div className="text-5xl font-black mb-10 font-mono tracking-tighter mt-auto text-primary">
                $900
                <span className="text-xs text-primary ml-3 font-bold uppercase tracking-widest opacity-70">
                  - $1.2K
                </span>
              </div>
              
              <ul className="space-y-5 mb-10 text-[11px] uppercase tracking-wider font-bold text-zinc-300">
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">#</span> 
                  <span>2-3 WEEK DELIVERY</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">#</span> 
                  <span>FULL API COVERAGE</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">#</span> 
                  <span>DETAILED REMEDIATION</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">#</span> 
                  <span>30-MIN EXPLAINER CALL</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">#</span> 
                  <span>100% FINDINGS GUARANTEE</span>
                </li>
              </ul>
              
              <button className="w-full bg-primary text-black py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:shadow-[0_0_40px_rgba(0,255,65,0.6)] transition-all duration-300 mt-auto">
                GET_STARTED
              </button>
            </div>

            {/* PTaaS Card */}
            <div className="group relative bg-zinc-950/50 border border-zinc-800 p-10 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm flex flex-col">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20" />
              
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/50 mb-8 font-mono">
                CONTINUOUS
              </div>
              
              <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                PTAAS
              </h3>
              
              <p className="text-zinc-500 mb-10 text-sm font-mono leading-relaxed uppercase tracking-wider">
                Weekly scans + monthly reports + dashboard. Ongoing peace of mind.
              </p>
              
              <div className="text-5xl font-black mb-10 font-mono tracking-tighter mt-auto">
                $600
                <span className="text-xs text-primary ml-3 font-bold uppercase tracking-widest opacity-70">
                  /MONTH
                </span>
              </div>
              
              <ul className="space-y-5 mb-10 text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>WEEKLY SCANS</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>MONTHLY REPORTS</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>LIVE DASHBOARD</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-primary text-base">&gt;</span> 
                  <span>3-MONTH MINIMUM</span>
                </li>
              </ul>
              
              <button className="w-full border-2 border-zinc-700 py-4 text-[11px] font-black uppercase tracking-[0.3em] group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 mt-auto">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
