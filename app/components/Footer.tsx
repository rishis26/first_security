import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-zinc-950 px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-4">
        <div className="col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.svg"
                alt="First Security Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="relative h-6 w-40">
              <Image
                src="/text_logo.svg"
                alt="First Security"
                width={160}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-muted mb-8 max-w-sm space-y-2 font-mono text-[10px] uppercase leading-loose tracking-widest opacity-40">
            <p>SECURING THE NEXT WAVE OF BOOTSTRAPPED INNOVATION.</p>
            <p>LOCATION: ASHTA, MP, INDIA.</p>
            <p>MISSION: ZERO_COMPROMISE_SECURITY.</p>
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
            System_Nodes
          </h4>
          <ul className="text-muted space-y-4 font-mono text-[10px] uppercase tracking-[0.3em]">
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                ROOT_DIR
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition-colors hover:text-primary">
                PROTOCOL_LOG
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-primary">
                CRYPT_UPLINK
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-8 text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
            Terminal
          </h4>
          <ul className="text-muted space-y-4 font-mono text-[10px] uppercase tracking-[0.3em]">
            <li>UPTIME: 99.99%</li>
            <li>RELAY: @FIRSTSECURITY</li>
            <li>SECURE: HI@FIRSTSEC.COM</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/5 pt-8 font-mono text-[9px] uppercase tracking-[0.6em] text-zinc-800 md:flex-row">
        <span>&copy; 2026 FIRST_SECURITY</span>
        <div className="flex gap-8 tracking-[0.2em] text-primary/10">
          <span>LATENCY: 1ms</span>
          <span>END_OF_TRANSMISSION</span>
        </div>
      </div>
    </footer>
  );
}
