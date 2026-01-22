import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="grain" />
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-primary/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-primary/20 pointer-events-none" />
      
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative w-12 h-12">
            <Image 
              src="/logo.svg" 
              alt="First Security Logo" 
              width={48} 
              height={48}
              className="object-contain"
            />
          </div>
          <div className="relative w-48 h-8">
            <Image 
              src="/text_logo.svg" 
              alt="First Security" 
              width={192} 
              height={32}
              className="object-contain"
            />
          </div>
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 border border-primary/30 text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 backdrop-blur-sm">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          ERROR_404_NOT_FOUND
        </div>
        
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-primary text-shadow-primary">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          PAGE NOT FOUND
        </h2>
        
        {/* Terminal-style Message */}
        <div className="max-w-xl mx-auto text-sm text-zinc-400 space-y-3 font-mono tracking-wider opacity-80">
          <p className="terminal-line">&gt; STATUS: RESOURCE_NOT_LOCATED</p>
          <p className="terminal-line">&gt; ACTION: REDIRECT_TO_HOME</p>
          <p className="terminal-line">&gt; SUGGESTION: CHECK_URL_PATH</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/" 
            className="bg-primary text-black px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
          >
            Return Home
          </Link>
          <Link 
            href="#services" 
            className="border-2 border-zinc-700 text-zinc-300 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
