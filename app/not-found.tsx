import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="grain" />

      {/* Decorative Corner Elements */}
      <div className="pointer-events-none absolute left-8 top-8 h-32 w-32 border-l-2 border-t-2 border-primary/20" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-32 w-32 border-b-2 border-r-2 border-primary/20" />

      <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="relative h-12 w-12">
            <Image
              src="/logo.svg"
              alt="First Security Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="relative h-8 w-48">
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
        <div className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          ERROR_404_NOT_FOUND
        </div>

        {/* Error Code */}
        <h1 className="text-shadow-primary text-8xl font-black tracking-tighter text-primary md:text-9xl">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">PAGE NOT FOUND</h2>

        {/* Terminal-style Message */}
        <div className="mx-auto max-w-xl space-y-3 font-mono text-sm tracking-wider text-zinc-400 opacity-80">
          <p className="terminal-line">&gt; STATUS: RESOURCE_NOT_LOCATED</p>
          <p className="terminal-line">&gt; ACTION: REDIRECT_TO_HOME</p>
          <p className="terminal-line">&gt; SUGGESTION: CHECK_URL_PATH</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
          <Link
            href="/"
            className="bg-primary px-10 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-primary/90"
          >
            Return Home
          </Link>
          <Link
            href="#services"
            className="border-2 border-zinc-700 px-10 py-4 text-sm font-bold uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
