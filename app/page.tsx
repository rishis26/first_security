"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available Now
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Security for <br />
            <span className="text-primary">Bootstrapped</span> SaaS
          </h1>

          {/* Subtext */}
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Fast, affordable security testing for startups. Get your vulnerability report in 48
            hours with a 30-day money-back guarantee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="#services"
              className="rounded bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Get Started - $500
            </Link>
            <Link
              href="#services"
              className="rounded border border-gray-700 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Choose the security testing plan that fits your needs
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Quick Web Scan */}
            <div className="rounded-lg border border-gray-800 bg-black p-8 transition-all hover:border-primary/50">
              <div className="mb-4 text-sm text-gray-500">Quick Scan</div>

              <h3 className="mb-3 text-2xl font-bold">Quick Web Scan</h3>

              <p className="mb-6 text-sm text-gray-400">
                Web app vulnerability scan with a basic report. Perfect for pre-funding security
                checks.
              </p>

              <div className="mb-6 text-4xl font-bold">$500</div>

              <ul className="mb-8 space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>48-hour delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Vulnerability report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>

              <button className="w-full rounded border border-gray-700 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                Get Started
              </button>
            </div>

            {/* Full Pentest - Featured */}
            <div className="relative rounded-lg border-2 border-primary bg-black p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                RECOMMENDED
              </div>

              <div className="mb-4 text-sm text-primary">Most Popular</div>

              <h3 className="mb-3 text-2xl font-bold text-primary">Full Pentest</h3>

              <p className="mb-6 text-sm text-gray-300">
                Complete security audit including APIs and infrastructure. Get Series A ready.
              </p>

              <div className="mb-6 text-4xl font-bold">
                $900<span className="text-lg text-gray-500">-1.2K</span>
              </div>

              <ul className="mb-8 space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>2-3 week delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Full API coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Detailed remediation guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>30-min explainer call</span>
                </li>
              </ul>

              <button className="w-full rounded bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                Get Started
              </button>
            </div>

            {/* PTaaS */}
            <div className="rounded-lg border border-gray-800 bg-black p-8 transition-all hover:border-primary/50">
              <div className="mb-4 text-sm text-gray-500">Continuous</div>

              <h3 className="mb-3 text-2xl font-bold">PTaaS</h3>

              <p className="mb-6 text-sm text-gray-400">
                Weekly scans with monthly reports and a live dashboard. Ongoing peace of mind.
              </p>

              <div className="mb-6 text-4xl font-bold">
                $600<span className="text-sm text-gray-500">/mo</span>
              </div>

              <ul className="mb-8 space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Weekly scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Monthly reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✓</span>
                  <span>Live dashboard</span>
                </li>
              </ul>

              <button className="w-full rounded border border-gray-700 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
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
