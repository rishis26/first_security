import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-black/80 px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 transition-all duration-300 group-hover:scale-110">
            <Image
              src="/logo.svg"
              alt="First Security Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="relative hidden h-6 w-40 sm:block">
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
        <div className="hidden gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 md:flex">
          <Link
            href="#services"
            className="group relative transition-colors duration-300 hover:text-primary"
          >
            <span>Services</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#pricing"
            className="group relative transition-colors duration-300 hover:text-primary"
          >
            <span>Pricing</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#guarantees"
            className="group relative transition-colors duration-300 hover:text-primary"
          >
            <span>Guarantees</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="https://calendly.com/your-link"
          className="border-2 border-primary px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]"
        >
          Book Call
        </Link>
      </div>
    </nav>
  );
}
