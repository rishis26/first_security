import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="text-2xl font-bold mb-4 text-green-500">
            FounderGuard
          </div>
          <p className="text-gray-400 text-sm max-w-sm mb-6">
            Security made simple for bootstrapped SaaS. Fast, affordable, and founder-friendly security testing.
          </p>
          <p className="text-gray-500 text-xs">
            Based in Ashta, MP, India
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4">Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Email: hi@founderguard.com</li>
            <li>Twitter: @founderguard</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; 2026 FounderGuard. All rights reserved.</p>
      </div>
    </footer>
  );
}
