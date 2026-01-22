import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-110">
            <Image 
              src="/logo.svg" 
              alt="First Security Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
          </div>
          <div className="relative w-40 h-6 hidden sm:block">
            <Image 
              src="/text_logo.svg" 
              alt="First Security" 
              width={160} 
              height={24}
              className="object-contain"
            />
          </div>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-500">
          <Link href="#services" className="hover:text-primary transition-colors duration-300 relative group">
            <span>Services</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors duration-300 relative group">
            <span>Pricing</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#guarantees" className="hover:text-primary transition-colors duration-300 relative group">
            <span>Guarantees</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
        
        {/* CTA Button */}
        <Link 
          href="https://calendly.com/your-link" 
          className="border-2 border-primary text-primary px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]"
        >
          Book Call
        </Link>
      </div>
    </nav>
  );
}
