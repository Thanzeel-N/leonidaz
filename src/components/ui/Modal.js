import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-text-dark/40 backdrop-blur-sm transition-opacity"></div>
      
      <div 
        className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-bg-alt text-text-muted hover:text-text-dark transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="p-5 sm:p-8 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
