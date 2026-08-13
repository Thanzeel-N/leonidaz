'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  icon = false,
  magnetic = true,
  ...props 
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "inline-flex items-center justify-center gap-2 font-body text-sm font-medium tracking-wide px-8 py-4 rounded-full transition-colors relative overflow-hidden z-10 uppercase";
  
  const variants = {
    primary: "bg-brand-navy text-white hover:bg-brand-teal shadow-lg shadow-brand-navy/20 hover:shadow-brand-teal/30",
    secondary: "bg-white text-brand-navy border border-border-dark hover:border-brand-navy hover:bg-brand-navy hover:text-white",
    white: "bg-white text-brand-navy hover:bg-slate-100 shadow-md",
    "outline-white": "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white",
    text: "bg-transparent text-brand-navy border-b border-brand-navy rounded-none px-0 py-1 hover:text-brand-teal hover:border-brand-teal"
  };

  const transformStyle = magnetic ? { transform: `translate(${position.x}px, ${position.y}px)` } : {};
  // For smooth return transition
  const transitionStyle = magnetic && position.x === 0 ? { transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.2, 1), background-color 0.3s, color 0.3s' } : { transition: 'background-color 0.3s, color 0.3s' };


  const buttonContent = (
    <>
      {children}
      {icon && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...transformStyle, ...transitionStyle }}
        className={`${baseStyle} ${variants[variant]} group ${className}`} 
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button 
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...transformStyle, ...transitionStyle }}
      className={`${baseStyle} ${variants[variant]} group ${className}`} 
      {...props}
    >
      {buttonContent}
    </button>
  );
}
