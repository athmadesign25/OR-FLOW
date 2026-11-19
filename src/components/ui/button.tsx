import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className = '',
  type = 'button',
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-[#1677FF] hover:bg-[#1557B0] text-white shadow-sm',
    outline: 'border border-[#1677FF] text-[#1677FF] bg-white hover:bg-blue-50',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900',
    ghost: 'hover:bg-slate-100 text-slate-700',
  }[variant];

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-md',
    md: 'px-4 py-2 text-xs font-semibold rounded-lg',
    lg: 'px-5 py-2.5 text-sm font-semibold rounded-lg',
  }[size];

  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 select-none cursor-pointer',
        variantStyles,
        sizeStyles,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
