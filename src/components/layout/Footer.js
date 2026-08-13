'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COMPANY, FOOTER_QUICK_LINKS } from '@/data/content';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white text-zinc-900 pt-12 sm:pt-20 md:pt-28 pb-6 md:pb-8 border-t border-zinc-200/80 relative overflow-hidden font-body mt-12 sm:mt-20">
      {/* Top Section: Two Columns (Description + Contact | Newsletter) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-12 sm:mb-20 md:mb-28">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-24">

          {/* Left Column: Brand Bio & Contact */}
          <div className="w-full lg:max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              {COMPANY.name}
            </div>
            <p className="font-display text-zinc-800 text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed mb-6 sm:mb-8 tracking-tight max-w-lg">
              Experience premier pharmaceutical marketing across Kerala — <span className="text-brand-navy font-semibold italic">"{COMPANY.tagline}"</span>.
            </p>
            <div className="flex flex-col gap-2.5 sm:gap-3 text-zinc-700 font-medium text-sm md:text-base">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 w-fit hover:text-brand-navy hover:translate-x-1 transition-all group py-0.5 sm:py-1"
              >
                <span className="text-brand-navy/70 group-hover:text-brand-navy transition-colors">
                  <Mail size={18} strokeWidth={2} />
                </span>
                <span className="break-all">{COMPANY.email}</span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 w-fit hover:text-brand-navy hover:translate-x-1 transition-all group py-0.5 sm:py-1"
              >
                <span className="text-brand-navy/70 group-hover:text-brand-navy transition-colors">
                  <Phone size={18} strokeWidth={2} />
                </span>
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div className="w-full lg:max-w-md flex flex-col justify-between pt-2">
            <h3 className="font-display text-brand-navy text-lg md:text-xl font-bold tracking-tight mb-6">
              Stay informed with our network & healthcare updates
            </h3>
            <form onSubmit={handleSubscribe} suppressHydrationWarning className="relative flex items-center border-b-2 border-zinc-300/80 focus-within:border-brand-navy transition-colors py-2">
              <input
                type="email"
                required
                suppressHydrationWarning
                placeholder="Email address here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm md:text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none pr-10 py-1"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                suppressHydrationWarning
                className="absolute right-0 text-brand-navy/70 hover:text-brand-navy hover:translate-x-1 transition-all p-1"
              >
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </form>
            {subscribed ? (
              <p className="text-xs text-brand-teal font-semibold mt-2.5">
                ✓ Thank you! You have been subscribed to our updates.
              </p>
            ) : (
              <span className="text-xs text-transparent select-none mt-2.5 block">Spacer</span>
            )}
          </div>

        </div>
      </div>

      {/* Middle Section: Brand Roots (Navigation) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-20 md:mb-24 flex flex-col items-center">
        {/* Navigation Links matched to site roots */}
        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 text-xs sm:text-sm md:text-base font-bold tracking-wide text-zinc-800 font-display">
          {FOOTER_QUICK_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-brand-navy transition-all inline-block relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-navy hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright Row */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8 md:mb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-500 font-body">
        <div>
          &copy; {currentYear} {COMPANY.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/quality" className="hover:text-brand-navy transition-colors">Quality Policy</Link>
          <Link href="#" className="hover:text-brand-navy transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-brand-navy transition-colors">Terms</Link>
        </div>
      </div>

      {/* Bottom Section: Giant Brand Typography with Ambient Navy Drop Shadow */}
      <div className="w-full px-2 md:px-6 overflow-hidden pt-4 pb-2 flex justify-center items-center select-none pointer-events-none relative">
        {/* Deep ambient shadow blur in brand navy */}
        <span
          className="absolute font-display font-black tracking-[-0.04em] text-[15.5vw] md:text-[16vw] leading-none uppercase text-brand-navy/35 blur-[25px] sm:blur-[40px] translate-y-4 sm:translate-y-8 select-none w-full text-center block whitespace-nowrap"
          aria-hidden="true"
        >
          LEONIDAZ
        </span>

        {/* Sharper directional contact shadow in brand navy */}
        <span
          className="absolute font-display font-black tracking-[-0.04em] text-[15.5vw] md:text-[16vw] leading-none uppercase text-brand-navy/55 blur-[10px] sm:blur-[18px] translate-y-2 sm:translate-y-4 select-none w-full text-center block whitespace-nowrap"
          aria-hidden="true"
        >
          LEONIDAZ
        </span>

        {/* Crisp foreground brand typography in Brand Navy */}
        <span className="relative z-10 font-display font-black tracking-[-0.04em] text-[15.5vw] md:text-[16vw] leading-none uppercase text-brand-navy w-full text-center block whitespace-nowrap">
          LEONIDAZ
        </span>
      </div>
    </footer>
  );
}

