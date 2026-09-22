'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Keep the parent's reserved geometry, but don't give the browser a media URL
// until this below-the-fold image approaches the viewport.
export default function ViewportImage(props) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setReady(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="absolute inset-0">
      {ready && <Image {...props} fill loading="lazy" />}
      <noscript><Image {...props} fill loading="lazy" /></noscript>
    </span>
  );
}
