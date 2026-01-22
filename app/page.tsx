"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 py-32 min-h-screen">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 text-xs font-medium text-green-500 bg-green-500/5 rounded">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available Now
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Security for <br />
            <span className="text-green-500">Bootstrapped</span> SaaS
          </h1>
          
          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Fast, affordable security testing for startups. Get your vulnerability report in 48 hours with a 30-day money-back guarantee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="#services" 
              className="bg-green-500 text-black px-8 py-4 text-sm font-semibold rounded hover:bg-green-400 transition-colors"
            >
              Get Started - $500
            </Link>
            <Link 
              href="#services" 
              className="border border-gray-700 text-white px-8 py-4 text-sm font-semibold rounded hover:border-green-500 hover:text-green-500 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the security testing plan that fits your needs
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Quick Web Scan */}
            <div className="bg-black border border-gray-800 rounded-lg p-8 hover:border-green-500/50 transition-all">
              <div className="text-sm text-gray-500 mb-4">Quick Scan</div>
              
              <h3 className="text-2xl font-bold mb-3">
                Quick Web Scan
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm">
                Web app vulnerability scan with a basic report. Perfect for pre-funding security checks.
              </p>
              
              <div className="text-4xl font-bold mb-6">
                $500
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>48-hour delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>Vulnerability report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>
              
              <button className="w-full border border-gray-700 py-3 text-sm font-semibold rounded hover:border-green-500 hover:text-green-500 transition-colors">
                Get Started
              </button>
            </div>

            {/* Full Pentest - Featured */}
            <div className="bg-black border-2 border-green-500 rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black px-4 py-1 text-xs font-bold rounded-full">
                RECOMMENDED
              </div>
              
              <div className="text-sm text-green-500 mb-4">Most Popular</div>
              
              <h3 className="text-2xl font-bold mb-3 text-green-500">
                Full Pentest
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm">
                Complete security audit including APIs and infrastructure. Get Series A ready.
              </p>
              
              <div className="text-4xl font-bold mb-6">
                $900<span className="text-lg text-gray-500">-1.2K</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>2-3 week delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>Full API coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>Detailed remediation guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>30-min explainer call</span>
                </li>
              </ul>
              
              <button className="w-full bg-green-500 text-black py-3 text-sm font-semibold rounded hover:bg-green-400 transition-colors">
                Get Started
              </button>
            </div>

            {/* PTaaS */}
            <div className="bg-black border border-gray-800 rounded-lg p-8 hover:border-green-500/50 transition-all">
              <div className="text-sm text-gray-500 mb-4">Continuous</div>
              
              <h3 className="text-2xl font-bold mb-3">
                PTaaS
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm">
                Weekly scans with monthly reports and a live dashboard. Ongoing peace of mind.
              </p>
              
              <div className="text-4xl font-bold mb-6">
                $600<span className="text-sm text-gray-500">/mo</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>Weekly scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>Monthly reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> 
                  <span>Live dashboard</span>
                </li>
              </ul>
              
              <button className="w-full border border-gray-700 py-3 text-sm font-semibold rounded hover:border-green-500 hover:text-green-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
