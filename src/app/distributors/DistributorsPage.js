'use client';
import { useState, useMemo } from 'react';
import { useRevealAll } from '@/hooks/useReveal';
import { DISTRIBUTORS, DISTRICTS_COVERED, PARTNER_BENEFITS } from '@/data/content';
import { MapPin, Phone, Mail, Check, TrendingUp, Search, Filter } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function DistributorsPage() {
  useRevealAll();
  const [activeDistrict, setActiveDistrict] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return DISTRIBUTORS.filter((d) => {
      const matchDistrict = activeDistrict === 'All' || d.district === activeDistrict;
      const matchSearch = !searchQuery ||
        (d.name && d.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (d.town && d.town.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (d.district && d.district.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (d.address && d.address.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchDistrict && matchSearch;
    });
  }, [activeDistrict, searchQuery]);

  return (
    <>
      {/* ═══ HEADER ═══ */}
      <section className="pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto bg-bg-alt rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem] mb-8 sm:mb-12 shadow-sm border-b border-border-subtle">
        <div className="reveal px-2 lg:px-8">
          <span className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-text-light inline-block"></span> Our Network
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-dark tracking-tight leading-tight">
            Everywhere you need us.
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-text-muted mt-4 sm:mt-6 max-w-2xl font-light">
            We've built one of the most trusted pharmaceutical marketing networks in Kerala, ensuring quality medicines are always within reach — backed by a network of 25+ partners across 14 districts.
          </p>
        </div>
      </section>

      {/* ═══ NETWORK DIRECTORY (TWO COLUMN LAYOUT) ═══ */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto pb-20 sm:pb-32">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">

          {/* ── Sidebar Filters ── */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-32 self-start z-20">
            <div className="bg-bg-alt rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-sm">
              <div
                className="flex items-center justify-between mb-6 sm:mb-8 cursor-pointer lg:cursor-default"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              >
                <div className="flex items-center gap-3 text-text-dark font-display text-xl font-medium">
                  <Filter size={20} className="text-brand-navy" /> Filters
                </div>
                <div className="lg:hidden text-xs uppercase tracking-widest font-bold text-text-muted bg-white px-3 py-1 rounded-full shadow-sm">
                  {isMobileFilterOpen ? "Hide" : "Show"}
                </div>
              </div>

              <div className={`space-y-8 transition-all duration-300 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <h3 className="text-xs uppercase tracking-[2px] font-semibold text-text-light mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="text"
                      suppressHydrationWarning
                      placeholder="Agency, town, district..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-border-dark rounded-full py-3 pl-12 pr-4 text-sm font-body text-text-dark focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* District Filter with Scroll Option Inside */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs uppercase tracking-[2px] font-semibold text-text-light">District Area</h3>
                    <span className="text-[10px] text-brand-teal font-semibold uppercase tracking-wider bg-brand-teal/10 px-2 py-0.5 rounded-full">Scrollable &darr;</span>
                  </div>
                  <ul className="space-y-2 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border-dark hover:scrollbar-thumb-brand-teal scrollbar-track-transparent transition-colors">
                    <li>
                      <button
                        onClick={() => setActiveDistrict('All')}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left text-sm transition-all duration-300 ${activeDistrict === 'All' ? 'bg-brand-navy text-white shadow-md scale-[1.02]' : 'hover:bg-white text-text-muted hover:text-text-dark hover:shadow-sm'}`}
                      >
                        All Districts
                        {activeDistrict === 'All' && <Check size={16} className="shrink-0" />}
                      </button>
                    </li>
                    {DISTRICTS_COVERED.map((district) => (
                      <li key={district}>
                        <button
                          onClick={() => setActiveDistrict(district)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left text-sm transition-all duration-300 ${activeDistrict === district ? 'bg-brand-navy text-white shadow-md scale-[1.02]' : 'hover:bg-white text-text-muted hover:text-text-dark hover:shadow-sm'}`}
                        >
                          <span className="truncate pr-2">{district}</span>
                          {activeDistrict === district && <Check size={16} className="shrink-0" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          {/* ── Distribution Partners Grid ── */}
          <div className="flex-1">
            <div className="mb-8 flex justify-between items-end border-b border-border-subtle pb-4">
              <div>
                <h2 className="font-display text-2xl text-text-dark">Distribution Partners</h2>
                {activeDistrict !== 'All' && (
                  <p className="text-sm text-brand-teal font-medium mt-1">Showing partners in {activeDistrict} district</p>
                )}
              </div>
              <span className="text-sm font-medium tracking-[1px] uppercase text-text-light bg-bg-alt px-3 py-1 rounded-full">
                {filtered.length} Partner{filtered.length !== 1 && 's'}
              </span>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((dist, i) => (
                  <div key={dist.id} className={`reveal reveal-delay-${(i % 3) * 1} bg-white border border-border-subtle rounded-3xl p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-brand-teal/30 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1`}>
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-bg-alt rounded-2xl flex items-center justify-center text-brand-teal shadow-inner">
                          <MapPin size={22} />
                        </div>
                        <span className="text-xs uppercase tracking-[1.5px] font-bold text-brand-navy bg-brand-navy/5 px-3 py-1 rounded-full border border-brand-navy/10">
                          {dist.district}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl text-text-dark mb-1 group-hover:text-brand-navy transition-colors">{dist.name}</h3>
                      <p className="font-body text-brand-teal font-medium text-sm mb-6">{dist.town}</p>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3 text-sm text-text-dark">
                          <Phone size={15} className="text-text-light shrink-0" /> <span className="font-body">{dist.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-text-dark">
                          <Mail size={15} className="text-text-light shrink-0" /> <span className="font-body break-all">{dist.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-border-subtle mt-auto">
                      <p className="text-xs text-text-muted font-light leading-relaxed">{dist.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 bg-bg-alt rounded-3xl border border-dashed border-border-dark text-center px-6">
                <Search size={48} className="text-border-dark mb-6" />
                <h3 className="font-display text-2xl text-text-dark mb-2">No partners found</h3>
                <p className="text-text-muted font-light mb-8 max-w-md">
                  We couldn&apos;t find any partners matching &quot;{searchQuery || activeDistrict}&quot;.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="secondary" onClick={() => { setActiveDistrict('All'); setSearchQuery(''); }}>
                    Clear All Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ PARTNER SECTION ═══ */}
      <section id="become-distributor" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto border-t border-border-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          <div className="reveal">
            <span className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-text-light inline-block"></span> Growth
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-text-dark tracking-tight mb-6 sm:mb-8">
              Partner with Leonidaz.
            </h2>
            <p className="font-body text-lg sm:text-xl text-text-muted font-light leading-relaxed mb-8 sm:mb-12 max-w-lg">
              We offer exclusive territory-first partnerships, real margins, and direct-to-pharmacy support to help your network thrive.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {PARTNER_BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-text-dark font-medium text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                    <Check size={16} />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border-subtle relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-navy rounded-xl sm:rounded-2xl flex items-center justify-center text-white shrink-0">
                  <TrendingUp size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-text-dark">Partnership Inquiry</h3>
                  <p className="text-xs sm:text-sm text-text-muted">Fill out the form below to initiate.</p>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-2 relative z-10">
                <Input label="Agency Name" placeholder="Your Business Name" />
                <Input label="Contact Person" placeholder="Full Name" />
                <Input type="tel" label="Phone / WhatsApp" placeholder="+91" />

                <Input as="select" label="Target District">
                  <option value="">Select District</option>
                  {DISTRICTS_COVERED.map(d => <option key={d} value={d}>{d}</option>)}
                </Input>

                <div className="pt-4 sm:pt-6">
                  <Button variant="primary" icon className="w-full">Submit Inquiry</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


