'use client';
import { useState, useEffect, useRef } from 'react';

export default function NumberCounter({ endValue = 0, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  
  const valueStr = String(endValue ?? '');
  const targetNumber = typeof endValue === 'number' ? endValue : (parseInt(valueStr.replace(/\D/g, '')) || 0);
  const actualSuffix = suffix || valueStr.replace(/\d/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out function
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOutProgress * targetNumber));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNumber);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration]);

  return (
    <span ref={elementRef}>
      {count}{actualSuffix}
    </span>
  );
}
