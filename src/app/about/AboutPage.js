'use client';

import Link from 'next/link';
import { useRevealAll } from '@/hooks/useReveal';
import { STATS, LEADERSHIP } from '@/data/content';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import NumberCounter from '@/components/ui/NumberCounter';
import Button from '@/components/ui/Button';

const LEADER_PHOTOS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop',
];

export default function AboutPage() {
  useRevealAll();

  return (
    <div className="bg-white text-text-dark selection:bg-brand-navy selection:text-white font-sans min-h-screen" suppressHydrationWarning>

      {/* ═══ 1. HERO SECTION (Our Story Split Grid) ═══ */}
      <section className="pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Copy */}
          <div className="lg:col-span-6 reveal">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-teal font-semibold mb-3 sm:mb-4 block">
              OUR STORY
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-serif text-slate-900 font-normal leading-[1.12] tracking-tight mb-6 sm:mb-8">
              Bridging the gap between quality medicines and <span className="text-brand-navy italic">health</span>.
            </h1>

            <p className="text-slate-600 font-body text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-4 sm:mb-6">
              Leonidaz Pharmaceuticals is a dedicated marketing partner for life sciences and therapeutic healthcare. Established in 2006 in Tirur, Malappuram, we translate complex clinical formulations into compelling market choices that resonate with healthcare professionals across Kerala.
            </p>
          </div>

          {/* Right Column: High-Aspect Vertical Product Display Card */}
          <div className="lg:col-span-6 reveal">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-white border border-slate-200/80 group">
              <img
                src="/images/products_grouped.webp"
                alt="Leonidaz Pharmaceutical Formulations Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase flex items-center justify-between pointer-events-none z-10">
                <span className="font-semibold drop-shadow text-white/90">Leonidaz Product Portfolio</span>
                <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-[10px] font-sans font-medium tracking-normal shadow-sm">WHO-GMP Formulations</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 2. STATS BAR SECTION ═══ */}
      <section className="border-y border-slate-200/80 py-12 md:py-16 bg-slate-50/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <span className="font-display text-4xl sm:text-5xl font-light text-brand-navy tracking-tight mb-2 block">
                <NumberCounter endValue={25} suffix="+" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-medium">
                PCD FRANCHISE PARTNERS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-display text-4xl sm:text-5xl font-light text-brand-navy tracking-tight mb-2 block">
                <NumberCounter endValue={14} />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-medium">
                DISTRICTS COVERED
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-display text-4xl sm:text-5xl font-light text-brand-navy tracking-tight mb-2 block">
                <NumberCounter endValue={80} suffix="+" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-medium">
                FORMULATIONS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-display text-4xl sm:text-5xl font-light text-brand-navy tracking-tight mb-2 block">
                98%
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-medium">
                PARTNER RETENTION RATE
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. MISSION & VISION SECTION ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 reveal">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-navy font-normal mb-4 tracking-tight">
              Our Mission
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              To accelerate the availability of high-quality medical formulations across Kerala by providing clear, compliant, and ethical communication strategies that empower the healthcare community.
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-navy font-normal mb-4 tracking-tight">
              Our Vision
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              To be the benchmark for pharmaceutical marketing excellence, where data-driven clinical insights meet human-centric storytelling to improve patient outcomes state-wide.
            </p>
          </div>

        </div>
      </section>

      {/* ═══ FEATURED PRODUCT RANGE SHOWCASE ═══ */}
      <section className="pb-20 px-4 sm:px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="reveal relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group aspect-[16/9] sm:aspect-[2.2/1] bg-slate-950">
          <img
            src="/images/products_grouped.webp"
            alt="Leonidaz Comprehensive Pharmaceutical Range"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20 flex items-center p-6 sm:p-12 md:p-14">
            <div className="max-w-xl text-white">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-teal font-semibold mb-2 sm:mb-3 block">
                COMPREHENSIVE PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white mb-2 sm:mb-3 leading-snug">
                80+ Certified Formulations across Kerala
              </h3>
              <p className="text-slate-300 font-light text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
                From essential antibiotics to advanced therapeutic nutraceuticals, engineered for clinical precision and WHO-GMP quality compliance.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:shadow-teal-500/20"
              >
                Explore Product Catalog &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. VALUES & EXCELLENCE SECTION ═══ */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="reveal text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-teal font-semibold block mb-2">
              OUR CORE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-navy font-normal tracking-tight">
              Values &amp; Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            
            {/* Card 1 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-brand-navy mb-3 tracking-tight">
                Integrity First
              </h3>
              <p className="font-body text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Maintaining absolute compliance and ethical transparency in every campaign and doctor detailing engagement we execute.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-brand-navy mb-3 tracking-tight">
                Precision Formulations
              </h3>
              <p className="font-body text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Blending scientific accuracy with WHO-GMP certified manufacturing to deliver messaging backed by verified clinical evidence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-brand-navy mb-3 tracking-tight">
                Partner Centric
              </h3>
              <p className="font-body text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                We treat our distributor partners&apos; growth as our own, fostering long-term strategic relationships with exclusive PCD marketing rights.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ═══ 5. LEADERSHIP SECTION ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-navy font-normal tracking-tight mb-3">
            Leadership Team
          </h2>
          <p className="text-slate-500 font-body font-light max-w-2xl mx-auto text-base sm:text-lg">
            Our leadership team brings decades of combined experience from top-tier pharmaceutical marketing and healthcare management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 reveal">
          {LEADERSHIP.map((leader, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-2xl mb-4 relative shadow-sm">
                <img
                  src={LEADER_PHOTOS[idx % LEADER_PHOTOS.length]}
                  alt={leader.role}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-normal text-slate-900 group-hover:text-brand-navy transition-colors">
                {leader.role}
              </h3>
              <p className="text-xs uppercase font-mono text-slate-500 tracking-wider mt-1">
                {idx === 0 ? 'CHIEF EXECUTIVE OFFICER' : idx === 1 ? 'HEAD OF MARKETING STRATEGY' : 'COMPLIANCE OFFICER'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 6. VIBRANT BRAND NAVY CTA BANNER ═══ */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="reveal bg-brand-navy text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 md:p-20 text-center shadow-xl relative overflow-hidden">
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-3 sm:mb-4 tracking-tight">
            Ready to elevate your healthcare narrative?
          </h2>

          <p className="text-white/85 font-body font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Join the 25+ PCD franchise partners across 14 districts in Kerala who trust Leonidaz Pharmaceuticals to deliver their most critical formulations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href="/distributors"
              variant="white"
              icon={true}
              className="w-full sm:w-auto font-semibold px-8 py-3.5"
            >
              Partner With Us
            </Button>
            <Button
              href="/contact"
              variant="outline-white"
              className="w-full sm:w-auto font-semibold px-8 py-3.5"
            >
              Contact Us
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
