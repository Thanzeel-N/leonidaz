import React from 'react';

export default function Input({ label, type = 'text', as = 'input', className = '', ...props }) {
  const baseStyle = "w-full bg-transparent border-b border-border-dark py-4 text-lg font-body text-text-dark transition-colors duration-300 focus:outline-none focus:border-brand-navy";
  
  return (
    <div className="mb-8">
      {label && <label className="block text-xs font-medium tracking-widest uppercase text-text-muted mb-3">{label}</label>}
      {as === 'textarea' ? (
        <textarea 
          suppressHydrationWarning
          className={`${baseStyle} min-h-[120px] resize-y ${className}`} 
          {...props} 
        />
      ) : as === 'select' ? (
        <select suppressHydrationWarning className={`${baseStyle} appearance-none bg-transparent ${className}`} {...props}>
          {props.children}
        </select>
      ) : (
        <input 
          suppressHydrationWarning
          type={type} 
          className={`${baseStyle} ${className}`} 
          {...props} 
        />
      )}
    </div>
  );
}
