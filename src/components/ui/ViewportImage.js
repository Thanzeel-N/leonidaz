import Image from 'next/image';

// Render URLs in the initial HTML so native lazy loading can start requests
// ahead of scrolling, without waiting for hydration or an observer callback.
export default function ViewportImage(props) {
  return <Image fill loading="lazy" {...props} />;
}
