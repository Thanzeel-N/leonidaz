'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';

export default function AboutUsSection({
  subheading = 'DISCOVER OUR STORY',
  heading = 'About Us',
  description = 'We are a passionate team dedicated to creating reliable, high-quality pharmaceutical and healthcare solutions that elevate everyday life. With attention to clinical precision and a commitment to absolute excellence, we transform visions of healthcare accessibility into reality.',
  imageSrc = '/images/pharmacy.webp',
  imageAlt = 'Leonidaz Pharmacy & Distribution Center',
  services: customServices,
  stats: customStats,
}) {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const defaultServices = [
    {
      icon: <Award className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
      title: 'Quality Assurance',
      description:
        'Every formulation undergoes stringent quality auditing to ensure high clinical efficacy, safety, and full regulatory compliance.',
      position: 'left',
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
      title: 'Ethical Marketing',
      description:
        'We foster trust with medical practitioners through uncompromising integrity, transparent communication, and evidence-based medicine.',
      position: 'left',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
      title: 'Robust Supply',
      description:
        'Our highly resilient supply chain guarantees continuous delivery of essential formulations across medical institutions and pharmacies.',
      position: 'left',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
      title: 'Therapeutic Range',
      description:
        'From critical prescription drugs to advanced nutraceuticals and OTC daily care, our broad portfolio answers varied healthcare needs.',
      position: 'right',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
      title: 'Trusted Heritage',
      description:
        'Established in 2006, our unwavering adherence to standard operating protocols has earned nearly two decades of widespread regional reliance.',
      position: 'right',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#0D9488]" />,
      title: 'Future Growth',
      description:
        'We continuously expand our distribution network and technological capabilities to make modern therapeutic discoveries accessible to all.',
      position: 'right',
    },
  ];

  const defaultStats = [
    { icon: <Award className="w-6 h-6" />, value: 80, label: 'Certified Formulations', suffix: '+' },
    { icon: <Users className="w-6 h-6" />, value: 25, label: 'Distribution Partners', suffix: '+' },
    { icon: <Calendar className="w-6 h-6" />, value: 19, label: 'Years of Excellence', suffix: '+' },
    { icon: <TrendingUp className="w-6 h-6" />, value: 14, label: 'Districts Served', suffix: '' },
  ];

  const services = customServices || defaultServices;
  const stats = customStats || defaultStats;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] text-[#0F172A] overflow-hidden relative border-y border-slate-200/60"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#1E2A78]/5 blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#0D9488]/5 blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#1E2A78]/20 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#0D9488]/25 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="max-w-[1440px] mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-10" variants={itemVariants}>
          <motion.span
            className="text-[#0D9488] font-bold mb-3 flex items-center gap-2 tracking-[0.25em] uppercase text-xs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
            {subheading}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-5 text-center text-[#1E2A78] tracking-tight">{heading}</h2>
          <motion.div
            className="w-20 h-[3px] bg-[#0D9488] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-20 text-slate-600 leading-relaxed text-lg md:text-xl font-light" variants={itemVariants}>
          {description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative items-center">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-16 order-2 md:order-1">
            {services
              .filter((service) => service.position === 'left')
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
            <motion.div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-xs lg:max-w-sm" variants={itemVariants}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-white border border-slate-200/80"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 border-2 border-[#1E2A78]/25 rounded-2xl -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#1E2A78]/10 pointer-events-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#0D9488]/15 pointer-events-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 md:space-y-16 order-3">
            {services
              .filter((service) => service.position === 'right')
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-4 mb-3"
        initial={{ x: direction === 'left' ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#1E2A78] bg-[#1E2A78]/5 border border-[#1E2A78]/10 p-3.5 rounded-xl transition-all duration-300 group-hover:bg-[#1E2A78] group-hover:text-white relative shadow-sm"
          whileHover={{ rotate: [0, -8, 8, -4, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl md:text-2xl font-display font-medium text-[#0F172A] group-hover:text-[#1E2A78] transition-colors duration-300 tracking-tight">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm md:text-base text-slate-600 leading-relaxed pl-0 md:pl-16 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.2 });
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId = null;
    const duration = 1400;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCurrentCount(Math.floor(easeOutProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCurrentCount(value);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animateCount);
    }, (delay || 0) * 1000);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, delay]);

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-slate-50 transition-colors duration-300 shadow-md border border-slate-200/80 hover:border-[#1E2A78]/20"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-2xl bg-[#0D9488]/10 border border-[#0D9488]/20 flex items-center justify-center mb-5 text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300 shadow-sm"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <div ref={countRef} className="text-4xl md:text-5xl font-display font-medium text-[#1E2A78] flex items-center tracking-tight">
        <span>{currentCount}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] mt-2 font-medium">{label}</p>
      <motion.div className="w-12 h-[3px] bg-[#0D9488] rounded-full mt-5 group-hover:w-20 transition-all duration-300" />
    </motion.div>
  );
}
