import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-green-500 flex items-center justify-center font-bold text-green-500 text-sm">
            FG
          </div>
          <span className="text-lg font-bold">
            FounderGuard
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>
        
        {/* CTA Button */}
        <Link 
          href="https://calendly.com/your-link" 
          className="border border-green-500 text-green-500 px-4 py-2 text-sm font-semibold rounded hover:bg-green-500 hover:text-black transition-all"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}
