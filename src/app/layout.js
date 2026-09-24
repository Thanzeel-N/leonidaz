import { Outfit, Inter, Playfair_Display, Syne, Space_Mono, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const outfit = Outfit({
  preload: false,
  subsets: ["latin"],
  variable: '--font-outfit',
});

const inter = Inter({
  preload: false,
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  preload: false,
  subsets: ["latin"],
  variable: '--font-playfair',
});

const syne = Syne({
  preload: false,
  subsets: ["latin"],
  variable: '--font-syne',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-space-mono',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  italics: ['italic'],
  subsets: ["latin"],
  variable: '--font-cormorant',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata = {
  title: {
    default: 'Leonidaz Pharmaceuticals | Where Hurdles Don\'t Matter',
    template: '%s | Leonidaz Pharmaceuticals',
  },
  description: 'Leonidaz Pharmaceuticals — Premier Pharmaceutical Marketing Company in Kerala. Exclusive district PCD pharma franchise rights, WHO-GMP certified formulations, prescription medicines, and OTC healthcare.',
  keywords: ['Leonidaz Pharmaceuticals', 'Pharmaceutical Marketing Company Kerala', 'PCD Pharma Franchise Kozhikode', 'Pharma Marketing Company Kerala', 'PCD Franchise Rights India'],
  authors: [{ name: 'Leonidaz Pharmaceuticals' }],
  openGraph: {
    title: 'Leonidaz Pharmaceuticals | Ethical Pharma Marketing & PCD Franchise',
    description: 'Premier Pharmaceutical Marketing Company across Kerala. Trusted by 25+ PCD franchise partners across all 14 districts.',
    url: 'https://leonidazpharma.com',
    siteName: 'Leonidaz Pharmaceuticals',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonidaz Pharmaceuticals',
    description: 'Premier Pharmaceutical Marketing & PCD Franchise Company across Kerala.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Leonidaz Pharmaceuticals',
              url: 'https://leonidazpharma.com',
              logo: 'https://leonidazpharma.com/images/Leonidaz_Logo.webp',
              description: 'Premier Pharmaceutical Marketing & PCD Franchise Company across Kerala',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '19/89-A, Rasiya Building, Opp. Civil Station',
                addressLocality: 'Tirur, Malappuram',
                postalCode: '676101',
                addressRegion: 'Kerala',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Malayalam'],
              },
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${playfair.variable} ${syne.variable} ${spaceMono.variable} ${cormorant.variable} ${jakarta.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
