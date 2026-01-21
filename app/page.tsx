import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-background overflow-x-hidden">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5 px-8 py-5 flex justify-between items-center animate-in">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-primary flex items-center justify-center font-mono font-bold text-primary shadow-[0_0_15px_rgba(0,255,65,0.3)]">
            FG
          </div>
          <span className="text-xl font-bold tracking-tighter font-mono">FOUNDERGUARD<span className="animate-pulse">_</span></span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
          <Link href="#services" className="transition-all hover:text-primary hover:tracking-[0.3em]">01_Services</Link>
          <Link href="#pricing" className="transition-all hover:text-primary hover:tracking-[0.3em]">02_Pricing</Link>
          <Link href="#guarantees" className="transition-all hover:text-primary hover:tracking-[0.3em]">03_Guarantees</Link>
        </div>
        <Link 
          href="https://calendly.com/your-link" 
          className="border border-primary text-primary px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-background transition-all shadow-[0_0_10px_rgba(0,255,65,0.2)]"
        >
          System_Access
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-60 pb-32 px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center relative">
        <div className="inline-flex items-center gap-3 px-4 py-1 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-12 animate-in bg-primary/5" style={{ animationDelay: '0.1s' }}>
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          Status: Scanning_Vulnerabilities...
        </div>
        
        <h1 className="text-6xl md:text-[10rem] font-black mb-8 tracking-tighter leading-[0.8] animate-in" style={{ animationDelay: '0.2s' }}>
          SECURE YOUR <br />
          <span className="text-primary italic">BOOTSTRAP</span> <br />
          EMPIRE
        </h1>
        
        <div className="max-w-xl text-sm md:text-base text-muted mb-12 animate-in space-y-2 font-mono opacity-80" style={{ animationDelay: '0.3s' }}>
          <p>&gt; EXECUTING: Rapid vulnerability assessment for SaaS founders.</p>
          <p>&gt; TIME: 48 hours.</p>
          <p>&gt; RESULT: Pure, uncompromised security.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 animate-in" style={{ animationDelay: '0.4s' }}>
          <Link href="#pricing" className="bg-primary text-background px-10 py-5 text-sm font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all">
            Initialize_Scan ($500)
          </Link>
          <Link href="#services" className="border border-white/10 px-10 py-5 text-sm font-black uppercase tracking-widest hover:border-primary/50 transition-all text-muted hover:text-foreground">
            View_Protocol
          </Link>
        </div>
      </section>

      {/* Ticker Bar */}
      <div className="border-y border-white/5 py-4 overflow-hidden whitespace-nowrap bg-zinc-950/50 backdrop-blur-sm">
        <div className="flex animate-ticker gap-12 text-[10px] font-mono uppercase tracking-[0.4em] text-primary/40">
          {[...Array(10)].map((_, i) => (
            <span key={i}>VULNERABILITY_DETECTION // RAPID_PENTESTING // FOUNDER_FRIENDLY // 48HR_DELIVERY // ZERO_BULLSHIT //</span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-40 px-8 max-w-7xl mx-auto w-full relative">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="relative">
            <span className="text-primary font-mono text-xs mb-4 block tracking-[0.3em]">-- PROTOCOL_SELECTION --</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Mission Scopes</h2>
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/20" />
          </div>
          <p className="max-w-md text-muted font-mono text-sm leading-relaxed opacity-60 italic border-l border-primary/20 pl-6">
            "We don't just find bugs. We provide the architectural blueprint to eliminate them from your source."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/10">
          {/* Quick Scan */}
          <div className="group p-12 bg-background hover:bg-zinc-950 transition-all flex flex-col relative cyber-border min-h-[500px]">
            <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-8 font-mono opacity-60">Tier_01</div>
            <h3 className="text-4xl font-black mb-4 leading-none group-hover:text-primary transition-colors">Quick Scan</h3>
            <p className="text-muted mb-12 text-sm font-mono leading-relaxed opacity-70">Automated + Manual hybrid scan of core application logic.</p>
            <div className="text-6xl font-black mb-12 leading-none font-mono tracking-tighter mt-auto">$500<span className="text-xs text-primary ml-2 uppercase tracking-widest">Fixed</span></div>
            <ul className="space-y-6 mb-12 text-[11px] uppercase tracking-widest font-bold text-muted">
              <li className="flex items-center gap-3"><span className="text-primary">&gt;</span> 48hr turnaround</li>
              <li className="flex items-center gap-3"><span className="text-primary">&gt;</span> Top 10 vulnerabilities</li>
              <li className="flex items-center gap-3"><span className="text-primary">&gt;</span> Executive summary</li>
            </ul>
            <button className="w-full border border-white/10 py-5 text-[10px] font-black uppercase tracking-[0.2em] group-hover:border-primary group-hover:text-primary transition-all">Secure_Now</button>
          </div>

          {/* Full Pentest */}
          <div className="group p-12 bg-zinc-950 flex flex-col relative overflow-hidden cyber-border min-h-[500px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_20px_rgba(0,255,65,1)]" />
            <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-8 font-mono">Tier_02 (Recommended)</div>
            <h3 className="text-4xl font-black mb-4 leading-none text-primary">Full Pentest</h3>
            <p className="text-zinc-500 mb-12 text-sm font-mono leading-relaxed">Comprehensive deep-dive into APIs, Infra, and Logic.</p>
            <div className="text-6xl font-black mb-12 leading-none font-mono tracking-tighter mt-auto text-white">1.2K<span className="text-xs text-primary ml-2 uppercase tracking-widest">Per_Audit</span></div>
            <ul className="space-y-6 mb-12 text-[11px] uppercase tracking-widest font-bold text-zinc-400">
              <li className="flex items-center gap-3"><span className="text-primary italic">#</span> API endpoints audit</li>
              <li className="flex items-center gap-3"><span className="text-primary italic">#</span> RBAC bypass testing</li>
              <li className="flex items-center gap-3"><span className="text-primary italic">#</span> Remediation report</li>
              <li className="flex items-center gap-3"><span className="text-primary italic">#</span> 1-on-1 CTO session</li>
            </ul>
            <button className="w-full bg-primary text-background py-5 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(0,255,65,0.4)]">Deploy_Full_Guard</button>
          </div>

          {/* PTaaS */}
          <div className="group p-12 bg-background hover:bg-zinc-950 transition-all flex flex-col relative cyber-border min-h-[500px]">
            <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-8 font-mono opacity-60">Tier_03</div>
            <h3 className="text-4xl font-black mb-4 leading-none group-hover:text-primary transition-colors">Shield+</h3>
            <p className="text-muted mb-12 text-sm font-mono leading-relaxed opacity-70">Continuous security as a service for evolving products.</p>
            <div className="text-6xl font-black mb-12 leading-none font-mono tracking-tighter mt-auto">$600<span className="text-xs text-primary ml-2 uppercase tracking-widest">Monthly</span></div>
            <ul className="space-y-6 mb-12 text-[11px] uppercase tracking-widest font-bold text-muted">
              <li className="flex items-center gap-3"><span className="text-primary">&gt;</span> Weekly delta scans</li>
              <li className="flex items-center gap-3"><span className="text-primary">&gt;</span> CI/CD integration</li>
              <li className="flex items-center gap-3"><span className="text-primary">&gt;</span> Priority Slack line</li>
            </ul>
            <button className="w-full border border-white/10 py-5 text-[10px] font-black uppercase tracking-[0.2em] group-hover:border-primary group-hover:text-primary transition-all">Enable_Continuous</button>
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="py-32 px-8 border-t border-white/5 bg-zinc-950 relative mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 relative z-10">
          <div className="col-span-2">
            <div className="text-3xl font-black mb-8 font-mono tracking-tight text-primary uppercase">FounderGuard_v2.0</div>
            <div className="text-muted font-mono text-xs max-w-sm mb-12 leading-loose opacity-60 space-y-1">
              <p>[SYSTEM_INFO]: SECURING THE NEXT WAVE OF BOOTSTRAPPED INNOVATION.</p>
              <p>[LOCATION]: ASHTA, MP, INDIA.</p> 
              <p>[MISSION]: ZERO COMPROMISE.</p>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.3em] text-primary">Internal_Nodes</h4>
            <ul className="space-y-6 text-[10px] font-mono text-muted uppercase tracking-widest">
              <li><Link href="#" className="hover:text-primary transition-colors">Root</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services_Log</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Encrypted_Comm</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.3em] text-primary">Uplink</h4>
            <ul className="space-y-6 text-[10px] font-mono text-muted uppercase tracking-widest">
              <li>Uptime: 99.9%</li>
              <li>Public: @FounderGuard</li>
              <li>Secure: hi@fg.security</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-700 flex flex-col md:flex-row justify-between gap-4">
          <span>&copy; 2026 FounderGuard_Terminal</span>
          <div className="flex gap-8">
            <span className="text-primary/30">LATEST_SCAN: 2ms_AGO</span>
            <span>End_of_Transmission</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
