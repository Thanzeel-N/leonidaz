import Image from 'next/image';
import HomeReveal from '@/components/ui/HomeReveal';
import ViewportImage from '@/components/ui/ViewportImage';
import Link from 'next/link';
import { PRODUCTS, DISTRIBUTORS } from '@/data/content';
import { ArrowRight, Pill, Activity, Leaf, FlaskConical, Droplets, Heart, Shield, Star, Users, Truck, ShieldCheck, Clock, UserCheck, MapPin, Building2, Award, CheckCircle2, Sparkles, CheckCircle, Zap, Calendar, TrendingUp, Box } from 'lucide-react';
import Button from '@/components/ui/Button';
import AboutUsSection from '@/components/ui/about-us-section';

const featuredProducts = PRODUCTS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <HomeReveal />
      {/* ═══ 1. HERO SECTION ═══ */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between items-center overflow-hidden bg-[#0A0D14] text-white select-none">

        {/* Background Image Container */}
        <Image
          src="/images/Hero/hero.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center transition-transform duration-1000 scale-105"
        />

        {/* Dark Cinematic Darkening & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/55 to-[#0A0D14]/65 z-0" />
        <div className="absolute inset-0 bg-black/25 z-0" />

        {/* Top Spacer for Overlay Navbar */}
        <div className="pt-20 sm:pt-28 md:pt-32" />

        {/* Main Centered Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">

          {/* Top Sub-Header */}
          <div className="text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-white/80 font-medium mb-4 sm:mb-6">
            LEONIDAZ PHARMACEUTICALS
          </div>

          {/* Headline Quote */}
          <h1 className="text-[32px] sm:text-[52px] md:text-[80px] lg:text-[108px] tracking-tight leading-[1.05] mb-4 sm:mb-6 text-white">
            <span className="block font-jakarta font-light tracking-tight">Where Hurdles</span>
            <span className="block font-cormorant italic font-normal text-white/95 my-1">Don&apos;t Matter.</span>
          </h1>

          {/* Bottom Sub-Header Tag */}
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/70 font-light mb-4 max-w-xs sm:max-w-xl px-2 sm:px-0">
            KERALA&apos;S TRUSTED PHARMACEUTICAL NETWORK SINCE 2006
          </div>

        </div>

        {/* Bottom Scroll Line */}
        <div className="relative z-10 pb-8 sm:pb-10 flex flex-col items-center">
          <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-white/70 via-white/40 to-transparent animate-pulse" />
        </div>

      </section>

      {/* ═══ 2. ABOUT US / PHILOSOPHY & STORY ═══ */}
      <AboutUsSection
        subheading="THE PHILOSOPHY & STORY"
        heading="Delivering Health. Building Trust."
        description="Founded in 2006 on a simple principle: absolute transparency and uncompromising clinical quality. We dedicate our operations to eliminating the friction between advanced medical solutions and the communities across Kerala who rely on them."
        imageSrc="/images/pharmacy.webp"
        imageAlt="Leonidaz Pharmacy & Distribution Center"
        services={[
          {
            icon: <Award className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
            title: "Quality Assurance",
            description: "Every formula in our portfolio undergoes stringent auditing to ensure superior clinical efficacy, purity, and full regulatory adherence.",
            position: "left",
          },
          {
            icon: <ShieldCheck className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
            title: "Ethical Marketing",
            description: "We cultivate enduring relationships with medical professionals through uncompromising integrity, transparent data, and professional distinction.",
            position: "left",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
            title: "Robust Network",
            description: "Our state-of-the-art supply chain spans 14 districts in Kerala, guaranteeing timely and uninterrupted delivery to hospitals and distributors.",
            position: "left",
          },
          {
            icon: <Pill className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
            title: "Therapeutic Range",
            description: "From essential prescription medicines and OTC therapies to cutting-edge nutraceuticals, our diverse range meets comprehensive healthcare demands.",
            position: "right",
          },
          {
            icon: <UserCheck className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
            title: "Community Trust",
            description: "For over 19 years, doctors, healthcare workers, and patients have placed their steadfast confidence in Leonidaz formulations.",
            position: "right",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
            title: "Sustainable Growth",
            description: "We continuously elevate operational benchmarks and expand therapeutic access to build a healthier future for communities.",
            position: "right",
          },
        ]}
        stats={[
          { icon: <Award />, value: 80, label: "Certified Formulations", suffix: "+" },
          { icon: <Users />, value: 25, label: "Distribution Partners", suffix: "+" },
          { icon: <Calendar />, value: 19, label: "Years of Excellence", suffix: "+" },
          { icon: <MapPin />, value: 14, label: "Districts Served", suffix: "" },
        ]}
      />

      {/* ═══ 3. PRODUCTS & MARQUEE SHOWCASE ═══ */}
      <section className="relative py-16 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 w-full bg-[#FAF8F5] text-slate-900 overflow-hidden border-y border-slate-200/80">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

        <div className="max-w-[1500px] mx-auto relative z-10">

          {/* Section Header */}
          <div className="reveal mb-10 sm:mb-16 md:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-teal mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-teal inline-block" /> OUR FORMULATIONS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-navy tracking-tight leading-[1.08] font-light">
                Ethical Formulations. <br />
                <span className="font-serif italic font-normal text-brand-teal">Trusted Quality.</span>
              </h2>
            </div>
            <Button
              href="/products"
              prefetch={false}
              variant="secondary"
              className="!bg-white border-2 border-slate-200/90 !text-brand-navy hover:!border-brand-navy hover:!bg-brand-navy hover:!text-white font-bold tracking-[0.15em] uppercase text-xs rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 shadow-sm shrink-0 self-start sm:self-auto"
            >
              Explore All Products &rarr;
            </Button>
          </div>

          {/* Infinite Marquee Product Scroll Banner */}
          <div className="overflow-hidden relative w-full py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex gap-6 sm:gap-8 md:gap-12 animate-marquee whitespace-nowrap pr-6 sm:pr-12">
              {[...featuredProducts, ...featuredProducts].map((product, i) => (
                <Link prefetch={false}
                  key={`marquee-${product.id}-${i}`}
                  href="/products"
                  className="group flex flex-col items-center text-center shrink-0 w-36 sm:w-44 md:w-52 cursor-pointer"
                >
                  <div className="w-full h-36 sm:h-44 md:h-52 flex items-center justify-center relative mb-3 sm:mb-4 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm border border-slate-200/80 group-hover:border-brand-teal/40 group-hover:shadow-md transition-all duration-300">
                    {product.display_image ? (
                      <ViewportImage
                        sizes="(max-width: 639px) 144px, (max-width: 767px) 176px, 208px"
                        src={product.display_image}
                        alt={product.name}
                        className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-sm border border-slate-200/80 flex flex-col items-center justify-center gap-1 group-hover:scale-105 transition-transform duration-300">
                        <Box size={28} className="text-brand-navy/40" />
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-brand-navy/50 uppercase">Leonidaz</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#0B1E48] font-bold tracking-tight group-hover:text-brand-teal transition-colors">
                    {product.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 4. NETWORK & DISTRIBUTORS ═══ */}
      <section className="w-full bg-[#f8f9fa] text-slate-900 border-t border-slate-200 relative z-20">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row relative">

          {/* Left Side: Visual & Stats */}
          <div className="lg:w-5/12 p-6 sm:p-10 lg:p-20 lg:sticky top-0 lg:h-screen flex flex-col justify-center bg-brand-navy text-white">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)] pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-brand-teal mb-4 sm:mb-6 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-brand-teal inline-block"></span> Our Network
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-white tracking-tighter leading-[1.1] font-light mb-5 sm:mb-8">
                Everywhere <br />
                <span className="font-serif italic text-brand-teal">you need us.</span>
              </h2>
              <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-md">
                We've built one of the most trusted pharmaceutical marketing networks in Kerala, ensuring quality medicines are always within reach — backed by a network of 25+ partners across 14 districts.
              </p>

              <div className="flex gap-8 sm:gap-12">
                <div>
                  <div className="text-4xl sm:text-5xl font-display font-medium text-white mb-2">25+</div>
                  <div className="text-xs font-bold tracking-widest text-brand-teal uppercase">Partners</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-display font-medium text-white mb-2">14</div>
                  <div className="text-xs font-bold tracking-widest text-brand-teal uppercase">Districts</div>
                </div>
              </div>

              <div className="mt-10 sm:mt-16">
                <Button href="/distributors" variant="primary" className="!bg-white !text-brand-navy hover:!bg-brand-teal hover:!text-white hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] font-bold tracking-[0.15em] uppercase text-xs rounded-full px-8 sm:px-10 py-4 sm:py-5 transition-all duration-500">
                  Full Directory &rarr;
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Scrolling List */}
          <div className="lg:w-7/12 p-6 sm:p-10 lg:p-20 bg-white">
            <div className="grid gap-4 sm:gap-6">
              {DISTRIBUTORS.slice(0, 10).map((dist) => (
                <Link prefetch={false} href="/distributors" key={dist.id} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-teal/30 hover:shadow-xl transition-all duration-500">

                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-navy group-hover:bg-brand-teal group-hover:text-white transition-colors duration-500 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-teal uppercase mb-2">
                      {dist.district} &middot; Distribution Partner
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-slate-900 mb-2 group-hover:text-brand-teal transition-colors duration-300 truncate">
                      {dist.name}
                    </h3>
                    <div className="text-slate-500 text-sm mb-3 leading-relaxed">
                      {dist.town} <br /> {dist.address}
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-brand-navy uppercase group-hover:text-brand-teal transition-colors">
                      <span>View Partner Details</span>
                      <ArrowRight size={14} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 5. CTA SECTION ═══ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-24 max-w-[1600px] mx-auto text-center">
        <div className="glass-card bg-brand-navy rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] p-8 sm:p-14 md:p-24 relative overflow-hidden group">
          <ViewportImage
            src="/images/partnership-lab.webp"
            alt=""
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc(100vw - 96px), 1408px"
            className="object-cover object-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-brand-navy to-transparent opacity-80"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6 sm:mb-8">
              Partner with Leonidaz <br /> in Your District.
            </h2>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl font-light mb-8 sm:mb-12">
              We've built one of the most trusted pharmaceutical marketing networks in Kerala, ensuring quality medicines are always within reach.
            </p>
            <Button href="/distributors" variant="secondary" className="!bg-white !text-brand-navy border-none hover:scale-105">
              Explore Full Directory →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
