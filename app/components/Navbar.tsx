import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-primary flex items-center justify-center font-mono font-black text-primary text-sm shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:shadow-[0_0_25px_rgba(0,255,65,0.6)] transition-all duration-300">
            FG
          </div>
          <span className="text-xl font-black tracking-tight font-mono">
            FOUNDERGUARD<span className="animate-pulse text-primary">_</span>
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-500">
          <Link href="#services" className="hover:text-primary transition-colors duration-300 relative group">
            <span>01_SERVICES</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors duration-300 relative group">
            <span>02_PRICING</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#guarantees" className="hover:text-primary transition-colors duration-300 relative group">
            <span>03_GUARANTEES</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
        
        {/* CTA Button */}
        <Link 
          href="https://calendly.com/your-link" 
          className="border-2 border-primary text-primary px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]"
        >
          CONNECT_SESSION
        </Link>
      </div>
    </nav>
  );
}