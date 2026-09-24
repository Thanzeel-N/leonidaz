import distributorRecords from './distributors.json';

/* ═══════════════════════════════════════════════════════════════
   LEONIDAZ — Content Data
   All company info, products, franchise network, and site content
   ═══════════════════════════════════════════════════════════════ */

export const COMPANY = {
  name: 'Leonidaz Pharmaceuticals',
  tagline: "Delivering Health. Building Trust.",
  phone: '+91 9895710087',
  phones: ['+91 9895710087', '+91 9895358734'],
  email: 'leonidazpharma@gmail.com',
  whatsapp: '+919895710087',
  address: 'Leonidaz Pharmaceuticals Pvt Ltd., 19/89-A, Rasiya Building, Opp. Civil Station, Tirur-676101, Malappuram Dist, Kerala',
  founded: '2006',
  website: 'leonidazpharma.com',
  heroText: 'Delivering Health. Building Trust. Leonidaz Pharma is a trusted pharmaceutical marketer committed to delivering quality medicines with care and reliability.',
  heroSubtext: 'Leonidaz Pharma is a trusted pharmaceutical marketer committed to delivering quality medicines with care and reliability.',
  philosophyTitle: "Delivering Health. Building Trust.",
  philosophyBody: 'Founded on a simple principle: absolute transparency and uncompromising quality in everything we represent. We eliminate the friction between life-saving medicines and the people who need them.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Products', href: '/products' },
  { label: 'Distributors Directory', href: '/distributors' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: 'Prescription Medicines', href: '/products?category=prescription' },
  { label: 'OTC Medications', href: '/products?category=otc' },
  { label: 'Dietary Supplements', href: '/products?category=supplements' },
  { label: 'Nutraceuticals', href: '/products?category=nutraceuticals' },
];

export const STATS = [
  { num: '25+', label: 'Distribution Partners', icon: '🤝' },
  { num: '14', label: 'Districts Covered', icon: '📍' },
  { num: '80+', label: 'Products', icon: '💊' },
];

export const MISSION = "Our mission is to make quality healthcare accessible in every corner of Kerala. As marketers, we build trust and demand for every product we represent — prescription, OTC, or nutraceutical — with the same care, wherever it's sold. We exist to close the gap between quality medicines and the people who need them.";

export const VISION = "Our vision is to become Kerala's most trusted name in pharmaceutical marketing — defined not by network size, but by consistency. As healthcare needs grow more complex, we grow with them, without compromising the principle we started with in 2006: quality should never depend on luck, location, or connections.";

export const STORY_PARAGRAPHS = [
  "It started in 2006. Three friends. Six field staff. Five products. No shortcuts, no middlemen games — just a simple bet: that quality medicines, delivered honestly, would win.",
  "Today, that bet has grown into a network of 25+ distribution partners, 80+ products, and a presence across 14 districts in Kerala. But scale was never the whole story."
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', code: 'Quality Management System', icon: '📋' },
  { name: 'WHO-GMP Standards', code: 'Contract Manufacturing Facilities', icon: '🌐' },
  { name: 'CDSCO Compliant', code: 'Central Drugs Standard Control', icon: '🏛️' },
  { name: 'State Drug License', code: 'Verified Pharma Marketing License', icon: '🏭' },
];

export const LEADERSHIP = [
  {
    name: 'Founder & Managing Director',
    role: 'Founder & Managing Director',
    bio: 'The founding force behind Leonidaz since 2006, setting the standard the network still follows.',
  },
  {
    name: 'Head of Operations',
    role: 'Head of Operations',
    bio: 'Ensures every product carrying the Leonidaz name meets the quality it promises.',
  },
  {
    name: 'Head of Business Development',
    role: 'Head of Business Development',
    bio: 'Builds the partner trust that turned a single warehouse into a 14-district presence.',
  },
];

export const VALUES = [
  {
    title: 'Quality First',
    desc: 'Every product meets rigorous manufacturing and quality standards before we put our name behind it. No exceptions, no shortcuts.',
    icon: '🛡️',
  },
  {
    title: 'Trust & Transparency',
    desc: 'We build every partnership the same way: honest marketing practices and verified claims, not empty promises.',
    icon: '🤝',
  },
  {
    title: 'Accessible Healthcare',
    desc: "Quality medicines shouldn't depend on your district. We're closing that gap, one pharmacy at a time.",
    icon: '💊',
  },
  {
    title: 'Innovation',
    desc: 'Healthcare needs evolve. So does our portfolio — continuously expanding to meet the needs our partners feel first.',
    icon: '🔬',
  },
];

export const WHAT_SETS_US_APART = [
  {
    title: 'Full-spectrum portfolio',
    desc: 'Prescription medicines, OTC, supplements, and nutraceuticals under one trusted name.',
    badge: 'Comprehensive Range',
  },
  {
    title: 'Territory-first partnerships',
    desc: 'Exclusive marketing rights, real margins, real support — not just a supplier relationship.',
    badge: 'Territory First',
  },
  {
    title: 'Direct-to-pharmacy reliability',
    desc: 'A network built district by district, so demand never outpaces trust.',
    badge: 'Reliable Distribution',
  },
];

export const PARTNER_BENEFITS = [
  'Exclusive Marketing & Distribution Rights',
  'Glossy Visual Aid & Promotional Material Support',
  'Real Margins & Direct-to-Pharmacy Support',
  'Continuous Portfolio Expansion to Meet Local Needs',
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'prescription',
    name: 'Prescription Medicines',
    desc: "A trusted range across therapeutic categories, marketed for Kerala's pharmacies.",
    icon: '💊',
    actionText: 'Explore →',
    count: 41,
  },
  {
    id: 'otc',
    name: 'OTC Medications',
    desc: 'Fast-moving essentials, always reliable, always in demand.',
    icon: '🏥',
    actionText: 'Explore →',
    count: 11,
  },
  {
    id: 'supplements',
    name: 'Dietary Supplements',
    desc: 'Nutrition for everyday health, marketed to health-conscious customers.',
    icon: '🌿',
    actionText: 'Explore →',
    count: 8,
  },
  {
    id: 'nutraceuticals',
    name: 'Nutraceuticals',
    desc: 'Specialized healthcare formulations and advanced nutritional supplements.',
    icon: '⚗️',
    actionText: 'Explore →',
    count: 10,
  },
];

export const PRODUCTS = [
  { id: 1, name: 'ADOL FORTE', category: 'prescription', composition: 'ADOL FORTE Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ADOL FORTE.webp', image: '/images/products/ADOL FORTE.webp' },
  { id: 2, name: 'ALTIZ-M SYP', category: 'otc', composition: 'ALTIZ M SYP Formulation', form: 'Syrup / Suspension', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/ALTIZ M SYP.webp', image: '/images/products/ALTIZ M SYP.webp' },
  { id: 3, name: 'ALTIZ-M TAB', category: 'otc', composition: 'ALTIZ M TAB Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/ALTIZ M TAB.webp', image: '/images/products/ALTIZ M TAB.webp' },
  { id: 4, name: 'ALTIZ SYP', category: 'otc', composition: 'ALTIZ SYP Formulation', form: 'Syrup / Suspension', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/ALTIZ SYP.webp', image: '/images/products/ALTIZ SYP.webp' },
  { id: 5, name: 'ALTIZ', category: 'otc', composition: 'ALTIZ Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/ALTIZ.webp', image: '/images/products/ALTIZ.webp' },
  { id: 6, name: 'ANTIPROST D', category: 'nutraceuticals', composition: 'ANTIPROST D Formulation', form: 'Protein / Health Supplement', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/ANTIPROST D.webp', image: '/images/products/ANTIPROST D.webp' },
  { id: 7, name: 'ASCOFEROL', category: 'nutraceuticals', composition: 'ASCOFEROL1 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/ASCOFEROL1.webp', image: '/images/products/ASCOFEROL1.webp' },
  { id: 8, name: 'COMBIGLIPT 50', category: 'prescription', composition: 'COMBIGLIPT 50 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/COMBIGLIPT 50.webp', image: '/images/products/COMBIGLIPT 50.webp' },
  { id: 9, name: 'COMBIGLIPT M', category: 'prescription', composition: 'COMBIGLIPT M Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/COMBIGLIPT M.webp', image: '/images/products/COMBIGLIPT M.webp' },
  { id: 10, name: 'DAZERIN-GM', category: 'prescription', composition: 'DAZERIN GM Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/DAZERIN GM.webp', image: '/images/products/DAZERIN GM.webp' },
  { id: 11, name: 'ELCOX-90', category: 'prescription', composition: 'ELCOX 90 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ELCOX 90.webp', image: '/images/products/ELCOX 90.webp' },
  { id: 12, name: 'ELCOX-TH', category: 'prescription', composition: 'ELCOX TH1 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ELCOX TH1.webp', image: '/images/products/ELCOX TH1.webp' },
  { id: 13, name: 'ELPRED-4', category: 'prescription', composition: 'ELPRED 4 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ELPRED 4.webp', image: '/images/products/ELPRED 4.webp' },
  { id: 14, name: 'ELPRED-8', category: 'prescription', composition: 'ELPRED 8 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ELPRED 8.webp', image: '/images/products/ELPRED 8.webp' },
  { id: 15, name: 'ENNESS NASAL DROPS', category: 'otc', composition: 'ENNESS NASAL DROPS Formulation', form: 'Drops', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/ENNESS NASAL DROPS.webp', image: '/images/products/ENNESS NASAL DROPS.webp' },
  { id: 16, name: 'EPIGUD 250', category: 'prescription', composition: 'EPIGUD 250 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/EPIGUD 250.webp', image: '/images/products/EPIGUD 250.webp' },
  { id: 17, name: 'FENTA 250', category: 'prescription', composition: 'FENTA 250 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/FENTA 250.webp', image: '/images/products/FENTA 250.webp' },
  { id: 18, name: 'FERZA-XT', category: 'supplements', composition: 'FERZA XT Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/FERZA XT.webp', image: '/images/products/FERZA XT.webp' },
  { id: 19, name: 'FLUZIN-10', category: 'supplements', composition: 'FLUZIN 10 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/FLUZIN 10.webp', image: '/images/products/FLUZIN 10.webp' },
  { id: 20, name: 'FLUZIN-5', category: 'supplements', composition: 'FLUZIN 5 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/FLUZIN 5.webp', image: '/images/products/FLUZIN 5.webp' },
  { id: 21, name: 'FLUZIN PLUS', category: 'supplements', composition: 'FLUZIN PLUS Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/FLUZIN PLUS.webp', image: '/images/products/FLUZIN PLUS.webp' },
  { id: 22, name: 'FOCAZ', category: 'prescription', composition: 'FOCAZ Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/FOCAZ.webp', image: '/images/products/FOCAZ.webp' },
  { id: 23, name: 'GSM TOTAL', category: 'nutraceuticals', composition: 'GSM TOTAL Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/GSM TOTAL.webp', image: '/images/products/GSM TOTAL.webp' },
  { id: 24, name: 'HISTOUT-M', category: 'supplements', composition: 'HISTOUT M Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/HISTOUT M.webp', image: '/images/products/HISTOUT M.webp' },
  { id: 25, name: 'HISTOUT', category: 'supplements', composition: 'HISTOUT Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/HISTOUT.webp', image: '/images/products/HISTOUT.webp' },
  { id: 26, name: 'LEO-D', category: 'prescription', composition: 'LEO D Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEO D.webp', image: '/images/products/LEO D.webp' },
  { id: 27, name: 'LEO PRO-D', category: 'nutraceuticals', composition: 'LEO PRO D Formulation', form: 'Protein / Health Supplement', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/LEO PRO D.webp', image: '/images/products/LEO PRO D.webp' },
  { id: 28, name: 'LEO PRO', category: 'nutraceuticals', composition: 'LEO PRO Formulation', form: 'Protein / Health Supplement', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/LEO PRO.webp', image: '/images/products/LEO PRO.webp' },
  { id: 29, name: 'LEO', category: 'prescription', composition: 'LEO1 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEO1.webp', image: '/images/products/LEO1.webp' },
  { id: 30, name: 'LEOCORT-6', category: 'prescription', composition: 'LEOCORT 6 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEOCORT 6.webp', image: '/images/products/LEOCORT 6.webp' },
  { id: 31, name: 'LEOPRIDE 1', category: 'prescription', composition: 'LEOPRIDE 1 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEOPRIDE 1.webp', image: '/images/products/LEOPRIDE 1.webp' },
  { id: 32, name: 'LEOPRIDE 1M', category: 'prescription', composition: 'LEOPRIDE 1M Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEOPRIDE 1M.webp', image: '/images/products/LEOPRIDE 1M.webp' },
  { id: 33, name: 'LEOPRIDE 2', category: 'prescription', composition: 'LEOPRIDE 2 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEOPRIDE 2.webp', image: '/images/products/LEOPRIDE 2.webp' },
  { id: 34, name: 'LEOPRIDE 2M', category: 'prescription', composition: 'LEOPRIDE 2M Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LEOPRIDE 2M.webp', image: '/images/products/LEOPRIDE 2M.webp' },
  { id: 35, name: 'LEVA SYRUP', category: 'otc', composition: 'LEVA SYRUP Formulation', form: 'Syrup / Suspension', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/LEVA SYRUP.webp', image: '/images/products/LEVA SYRUP.webp' },
  { id: 36, name: 'LEVODRYL SYRUP', category: 'otc', composition: 'LEVODRYL SYRUP Formulation', form: 'Syrup / Suspension', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/LEVODRYL SYRUP.webp', image: '/images/products/LEVODRYL SYRUP.webp' },
  { id: 37, name: 'LHQ-200', category: 'prescription', composition: 'LHQ 200 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LHQ 200.webp', image: '/images/products/LHQ 200.webp' },
  { id: 38, name: 'LUNGMATE PLUS', category: 'prescription', composition: 'LUNGMATE PLUS Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/LUNGMATE PLUS.webp', image: '/images/products/LUNGMATE PLUS.webp' },
  { id: 39, name: 'MEBO-G 100', category: 'prescription', composition: 'MEBO G 100 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/MEBO G 100.webp', image: '/images/products/MEBO G 100.webp' },
  { id: 40, name: 'MEBOCAL', category: 'nutraceuticals', composition: 'MEBOCAL Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/MEBOCAL.webp', image: '/images/products/MEBOCAL.webp' },
  { id: 41, name: 'MEBOPLUS', category: 'nutraceuticals', composition: 'MEBOPLUS Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/MEBOPLUS.webp', image: '/images/products/MEBOPLUS.webp' },
  { id: 42, name: 'MEBOVITAL-LC', category: 'nutraceuticals', composition: 'MEBOVITAL LC Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/MEBOVITAL LC.webp', image: '/images/products/MEBOVITAL LC.webp' },
  { id: 43, name: 'MOON SUSP', category: 'otc', composition: 'MOON SUSP Formulation', form: 'Syrup / Suspension', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/MOON SUSP.webp', image: '/images/products/MOON SUSP.webp' },
  { id: 44, name: 'MULTIBEC', category: 'nutraceuticals', composition: 'MULTIBEC Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/MULTIBEC.webp', image: '/images/products/MULTIBEC.webp' },
  { id: 45, name: 'NUTRACT', category: 'nutraceuticals', composition: 'NUTRACT Formulation', form: 'Protein / Health Supplement', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Nutraceuticals', display_image: '/images/products/NUTRACT.webp', image: '/images/products/NUTRACT.webp' },
  { id: 46, name: 'ORENAC-TH', category: 'prescription', composition: 'ORENAC TH Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ORENAC TH.webp', image: '/images/products/ORENAC TH.webp' },
  { id: 47, name: 'OREPAN-40', category: 'prescription', composition: 'OREPAN 40 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/OREPAN 40.webp', image: '/images/products/OREPAN 40.webp' },
  { id: 48, name: 'OREPAN-D', category: 'prescription', composition: 'OREPAN D1 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/OREPAN D1.webp', image: '/images/products/OREPAN D1.webp' },
  { id: 49, name: 'OREWIC-E', category: 'supplements', composition: 'OREWIC E Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/OREWIC E.webp', image: '/images/products/OREWIC E.webp' },
  { id: 50, name: 'OTOFIT EAR DROPS', category: 'otc', composition: 'OTOFIT EAR DROPS Formulation', form: 'Drops', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/OTOFIT EAR DROPS.webp', image: '/images/products/OTOFIT EAR DROPS.webp' },
  { id: 51, name: 'PREGANO-PLUS', category: 'supplements', composition: 'PREGANO PLUS Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Supplements', display_image: '/images/products/PREGANO PLUS.webp', image: '/images/products/PREGANO PLUS.webp' },
  { id: 52, name: 'PROFINAL LINIMENT', category: 'otc', composition: 'PROFINAL LINIMENT Formulation', form: 'Liniment', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/PROFINAL LINIMENT.webp', image: '/images/products/PROFINAL LINIMENT.webp' },
  { id: 53, name: 'PROFINAL', category: 'otc', composition: 'PROFINAL Formulation', form: 'Protein / Health Supplement', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Otc', display_image: '/images/products/PROFINAL.webp', image: '/images/products/PROFINAL.webp' },
  { id: 54, name: 'QUIKTEL 40', category: 'prescription', composition: 'QUIKTEL 40 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/QUIKTEL 40 copy.webp', image: '/images/products/QUIKTEL 40 copy.webp' },
  { id: 55, name: 'QUIKTEL-CL', category: 'prescription', composition: 'QUIKTEL CL Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/QUIKTEL CL.webp', image: '/images/products/QUIKTEL CL.webp' },
  { id: 56, name: 'QUIKTEL-H40', category: 'prescription', composition: 'QUIKTEL H40 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/QUIKTEL H40.webp', image: '/images/products/QUIKTEL H40.webp' },
  { id: 57, name: 'ROLIPTA 10', category: 'prescription', composition: 'ROLIPTA 10 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ROLIPTA 10.webp', image: '/images/products/ROLIPTA 10.webp' },
  { id: 58, name: 'ROLIPTA 5', category: 'prescription', composition: 'ROLIPTA 5 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ROLIPTA 5.webp', image: '/images/products/ROLIPTA 5.webp' },
  { id: 59, name: 'STIL-5', category: 'prescription', composition: 'STIL 51 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/STIL 51.webp', image: '/images/products/STIL 51.webp' },
  { id: 60, name: 'STIL MD', category: 'prescription', composition: 'STIL MD Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/STIL MD.webp', image: '/images/products/STIL MD.webp' },
  { id: 61, name: 'SUGAFLOZIN-10', category: 'prescription', composition: 'SUGAFLOZIN 10 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/SUGAFLOZIN 10.webp', image: '/images/products/SUGAFLOZIN 10.webp' },
  { id: 62, name: 'TOLZO-P', category: 'prescription', composition: 'TOLZO P Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/TOLZO P.webp', image: '/images/products/TOLZO P.webp' },
  { id: 63, name: 'TRIGGER 4G', category: 'prescription', composition: 'TRIGGER 40 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/TRIGGER 40.webp', image: '/images/products/TRIGGER 40.webp' },
  { id: 64, name: 'ZADNAC-P', category: 'prescription', composition: 'ZADNAC P Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZADNAC P.webp', image: '/images/products/ZADNAC P.webp' },
  { id: 65, name: 'ZATRIL-10', category: 'prescription', composition: 'ZATRIL 10 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZATRIL 10.webp', image: '/images/products/ZATRIL 10.webp' },
  { id: 66, name: 'ZEFIX-200', category: 'prescription', composition: 'ZEFIX 200 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZEFIX 200.webp', image: '/images/products/ZEFIX 200.webp' },
  { id: 67, name: 'ZEFIX DLX-200', category: 'prescription', composition: 'ZEFIX DLX 200 Formulation', form: 'Tablet / Capsule', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZEFIX DLX 200.webp', image: '/images/products/ZEFIX DLX 200.webp' },
  { id: 68, name: 'ZOLAR DSR', category: 'prescription', composition: 'ZOLAR DSR Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZOLAR DSR.webp', image: '/images/products/ZOLAR DSR.webp' },
  { id: 69, name: 'ZOLAR', category: 'prescription', composition: 'ZOLAR Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZOLAR.webp', image: '/images/products/ZOLAR.webp' },
  { id: 70, name: 'ZOLNAC', category: 'prescription', composition: 'ZOLNAC Formulation', form: 'Formulation', pack: 'Standard Pack', indication: 'Therapeutic Care', therapeutic: 'Prescription', display_image: '/images/products/ZOLNAC.webp', image: '/images/products/ZOLNAC.webp' },
];

export const DISTRICTS_COVERED = [
  'Kozhikode', 'Malappuram', 'Kannur', 'Thrissur', 'Palakkad',
  'Ernakulam', 'Kollam', 'Thiruvananthapuram', 'Wayanad', 'Kottayam',
  'Alappuzha', 'Kasaragod', 'Idukki', 'Pathanamthitta',
];

// Source: LEONIDAZ DISTRIBUTORS.xlsx, Sheet1; preserve workbook order.
export const FRANCHISE_PARTNERS = distributorRecords;

export const DISTRIBUTORS = FRANCHISE_PARTNERS;
export const DISTRIBUTOR_DISTRICTS = [...new Set(DISTRIBUTORS.map(({ district }) => district))];

export const QUALITY_PROCESSES = [
  {
    title: 'Rigorous Quality Standards',
    desc: 'Every product meets rigorous manufacturing and quality standards before we put our name behind it. No exceptions, no shortcuts.',
    icon: '🔬',
  },
  {
    title: 'Verified Marketing Claims',
    desc: 'We build every partnership with honest marketing practices and verified claims, not empty promises.',
    icon: '⚙️',
  },
  {
    title: 'Finished Formulation Excellence',
    desc: 'Comprehensive quality assurance of final tablets, capsules, syrups, and nutraceuticals like LeoPro.',
    icon: '✅',
  },
  {
    title: 'Direct-to-Pharmacy Reliability',
    desc: 'A distribution network built district by district, ensuring demand never outpaces trust.',
    icon: '❄️',
  },
];

export const CAREER_OPENINGS = [
  { id: 1, title: 'Medical Representative', location: 'Malappuram / Tirur', type: 'Full-time', experience: '1-3 years' },
  { id: 2, title: 'Area Sales Manager', location: 'Thrissur', type: 'Full-time', experience: '3-5 years' },
  { id: 3, title: 'Quality Assurance Officer', location: 'Tirur', type: 'Full-time', experience: '2-4 years' },
  { id: 4, title: 'Warehouse Executive', location: 'Tirur', type: 'Full-time', experience: '1-2 years' },
];



