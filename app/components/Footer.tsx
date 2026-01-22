import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 px-4 md:px-8 border-t border-white/5 bg-zinc-950 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.svg" 
                alt="First Security Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-6">
              <Image 
                src="/text_logo.svg" 
                alt="First Security" 
                width={160} 
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-muted font-mono text-[10px] max-w-sm mb-8 leading-loose opacity-40 space-y-2 uppercase tracking-widest">
            <p>SECURING THE NEXT WAVE OF BOOTSTRAPPED INNOVATION.</p>
            <p>LOCATION: ASHTA, MP, INDIA.</p> 
            <p>MISSION: ZERO_COMPROMISE_SECURITY.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold mb-8 uppercase tracking-[0.4em] text-primary">
            System_Nodes
          </h4>
          <ul className="space-y-4 text-[10px] font-mono text-muted uppercase tracking-[0.3em]">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                ROOT_DIR
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary transition-colors">
                PROTOCOL_LOG
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                CRYPT_UPLINK
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold mb-8 uppercase tracking-[0.4em] text-primary">
            Terminal
          </h4>
          <ul className="space-y-4 text-[10px] font-mono text-muted uppercase tracking-[0.3em]">
            <li>UPTIME: 99.99%</li>
            <li>RELAY: @FIRSTSECURITY</li>
            <li>SECURE: HI@FIRSTSEC.COM</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 font-mono text-[9px] uppercase tracking-[0.6em] text-zinc-800 flex flex-col md:flex-row justify-between gap-4">
        <span>&copy; 2026 FIRST_SECURITY</span>
        <div className="flex gap-8 text-primary/10 tracking-[0.2em]">
          <span>LATENCY: 1ms</span>
          <span>END_OF_TRANSMISSION</span>
        </div>
      </div>
    </footer>
  );
}
