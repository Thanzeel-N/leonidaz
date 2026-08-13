'use client';
import { useRevealAll } from '@/hooks/useReveal';
import { PRODUCTS } from '@/data/content';
import { Box } from 'lucide-react';

export default function ProductsPage() {
  useRevealAll('.reveal', 0.1, []);

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
            A curated portfolio of high-quality formulations designed to meet rigorous clinical standards.
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
              <div
                key={product.id}
                className={`reveal reveal-delay-${(i % 5) * 1} group flex flex-col items-center text-center`}
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
                <h3 className="font-display text-sm sm:text-base md:text-lg text-[#0B1E48] font-bold tracking-tight">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
