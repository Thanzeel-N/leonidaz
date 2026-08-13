import { Suspense } from 'react';
import ProductsPage from './ProductsPage';

export const metadata = {
  title: 'Products',
  description: 'Browse Leonidaz Pharmaceuticals product catalogue — prescription medicines, OTC medications, dietary supplements, and nutraceuticals across therapeutic categories.',
};

export default function Products() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center text-text-muted">Loading catalogue...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
