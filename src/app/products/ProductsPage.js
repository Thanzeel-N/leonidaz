'use client';
import { useEffect, useState } from 'react';
import { useRevealAll } from '@/hooks/useReveal';
import { PRODUCTS } from '@/data/content';
import { Box, X, Pill, FlaskConical, Tags } from 'lucide-react';

export default function ProductsPage() {
  useRevealAll('.reveal', 0.1, []);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const details = selected
    ? [
        { icon: Pill, label: 'Composition', value: selected.composition },
        { icon: FlaskConical, label: 'Form', value: selected.form },
        { icon: Tags, label: 'Category', value: selected.category },
      ]
    : [];

  return (
    <>
      <section className="pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[2px] uppercase text-text-light mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-text-light inline-block"></span> Catalogue
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-dark tracking-tight">
            Our Products
          </h1>
          <p className="font-body text-lg sm:text-xl text-text-muted mt-4 sm:mt-6 max-w-2xl font-light">
            A curated portfolio of high-quality formulations designed to meet rigorous clinical standards. Click any product to view its composition.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto pb-20 sm:pb-32">
        <div className="w-full">
          <div className="mb-6 sm:mb-8 flex justify-between items-end border-b border-border-subtle pb-4">
            <h2 className="font-display text-xl sm:text-2xl text-text-dark">All Formulations</h2>
            <span className="text-xs sm:text-sm font-medium tracking-[1px] uppercase text-text-light bg-bg-alt px-3 py-1 rounded-full">
              {PRODUCTS.length} Products
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-10 sm:gap-y-14 gap-x-4 sm:gap-x-6 xl:gap-x-10 py-4 sm:py-6">
            {PRODUCTS.map((product, i) => (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                className={`reveal reveal-delay-${(i % 5) * 1} group flex flex-col items-center text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-2xl`}
              >
                {/* Product Image */}
                <div className="w-full h-36 sm:h-44 md:h-48 lg:h-52 flex items-center justify-center relative mb-3 sm:mb-4">
                  {product.display_image || product.image ? (
                    <img
                      src={product.display_image || product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl shadow-md border border-border-subtle flex flex-col items-center justify-center gap-1 group-hover:scale-105 transition-transform duration-300">
                      <Box size={28} className="text-brand-navy/40" />
                      <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-brand-navy/50 uppercase">Leonidaz</span>
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h3 className="font-display text-sm sm:text-base md:text-lg text-[#0B1E48] font-bold tracking-tight group-hover:text-brand-teal transition-colors">
                  {product.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Composition Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white px-6 sm:px-8 py-6 sm:py-8">
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center p-2 shrink-0">
                  {selected.display_image || selected.image ? (
                    <img
                      src={selected.display_image || selected.image}
                      alt={selected.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <Box size={32} className="text-brand-navy/40" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    {selected.name}
                  </h3>
                  <span className="inline-block mt-2 text-[10px] sm:text-xs font-medium tracking-[1px] uppercase text-brand-teal">
                    {selected.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="space-y-5">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs font-medium tracking-[1px] uppercase text-text-light mb-0.5">
                        {label}
                      </div>
                      <div className="font-body text-sm sm:text-base text-text-dark leading-relaxed">
                        {value || '—'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
