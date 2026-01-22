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
      <section id="services" className="relative py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="flex-1">
                <span className="text-primary font-mono text-xs mb-4 block tracking-wider uppercase opacity-60">
                  Services
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Mission Scopes
                </h2>
              </div>
              <div className="max-w-lg border-l border-zinc-800 pl-6 lg:pb-2">
                <p className="text-zinc-500 text-sm leading-relaxed italic">
                  "We don't just find exploits. We rebuild your defenses from the kernel up."
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Quick Web Scan Card */}
            <div className="group relative bg-black border border-zinc-800 p-8 hover:border-primary/30 transition-all duration-300 flex flex-col">
              
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6 font-mono">
                QUICK_SCAN
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                Quick Web Scan
              </h3>
              
              <p className="text-zinc-500 mb-8 text-sm leading-relaxed">
                Web app vulnerability scan + basic report. Perfect for pre-funding security check.
              </p>
              
              <div className="text-4xl font-bold mb-8 font-mono tracking-tight mt-auto">
                $500
              </div>
              
              <ul className="space-y-3 mb-8 text-xs text-zinc-400">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>48 hour delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>Vulnerability report</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>30-day money-back</span>
                </li>
              </ul>
              
              <button className="w-full border border-zinc-800 py-3 text-xs font-bold uppercase tracking-wider group-hover:border-primary group-hover:text-primary transition-all duration-300 mt-auto">
                Start Scan
              </button>
            </div>

            {/* Full Pentest Card - Featured */}
            <div className="group relative bg-black border-2 border-primary/40 p-8 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 left-0 w-full h-px bg-primary" />
              
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 font-mono">
                RECOMMENDED
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary tracking-tight">
                Full Pentest
              </h3>
              
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                App + APIs + basic infrastructure + detailed remediation guide. Series A ready.
              </p>
              
              <div className="text-4xl font-bold mb-8 font-mono tracking-tight mt-auto">
                $900<span className="text-lg text-zinc-500">-1.2K</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-xs text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>2-3 week delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>Full API coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>Detailed remediation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>30-min explainer call</span>
                </li>
              </ul>
              
              <button className="w-full bg-primary text-black py-3 text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 mt-auto">
                Get Started
              </button>
            </div>

            {/* PTaaS Card */}
            <div className="group relative bg-black border border-zinc-800 p-8 hover:border-primary/30 transition-all duration-300 flex flex-col">
              
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6 font-mono">
                CONTINUOUS
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                PTaaS
              </h3>
              
              <p className="text-zinc-500 mb-8 text-sm leading-relaxed">
                Weekly scans + monthly reports + dashboard. Ongoing peace of mind.
              </p>
              
              <div className="text-4xl font-bold mb-8 font-mono tracking-tight mt-auto">
                $600<span className="text-sm text-zinc-500">/mo</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-xs text-zinc-400">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>Weekly scans</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>Monthly reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span> 
                  <span>Live dashboard</span>
                </li>
              </ul>
              
              <button className="w-full border border-zinc-800 py-3 text-xs font-bold uppercase tracking-wider group-hover:border-primary group-hover:text-primary transition-all duration-300 mt-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
