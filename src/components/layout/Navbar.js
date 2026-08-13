'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, COMPANY } from '@/data/content';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Setup scrolled state
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 sm:py-4' : 'py-5 sm:py-6'}`}>
        <div className={`mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-24 transition-all duration-500 ${isScrolled ? 'px-3 sm:px-4 lg:px-12' : ''}`}>

          <div className={`relative flex items-center justify-between rounded-full transition-all duration-500 overflow-hidden ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-5 sm:px-6 py-3 sm:py-4'
            : 'bg-transparent px-2 py-2'
            }`}>

            {/* Scroll Progress Bar at the bottom of the sticky nav */}
            {isScrolled && (
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-brand-navy transition-all duration-75"
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            )}

            <Link href="/" className="flex items-center group relative z-10 py-1" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 flex items-center bg-white/20 p-1.5 sm:p-2 rounded-lg lg:bg-transparent lg:p-0 lg:rounded-none">
                <img src="/images/Leonidaz_Logo.png" alt="Leonidaz" className="h-full w-auto object-contain group-hover:scale-105 transition-transform origin-left drop-shadow-sm" />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 relative z-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                const isOverDarkHero = !isScrolled && pathname === '/';

                const textStyle = isOverDarkHero
                  ? (isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white')
                  : (isActive ? 'text-brand-navy font-semibold' : 'text-slate-600 hover:text-brand-navy');

                const lineStyle = isOverDarkHero ? 'bg-white' : 'bg-brand-navy';

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-body text-sm font-medium tracking-wide transition-all relative group ${textStyle}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-px ${lineStyle} transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                );
              })}
            </nav>

            <div className="lg:hidden flex items-center relative z-10">
              <button
                className={`p-2 rounded-full transition-colors ${!isScrolled && pathname === '/' ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Menu */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-display text-4xl sm:text-5xl tracking-tight transition-colors ${isActive ? 'text-brand-navy' : 'text-text-dark hover:text-brand-teal'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Subtle decorative background for mobile menu */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
      </div>
    </>
  );
}
