import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  className = '',
  ...props 
}) => {
  // Ajustado: px-6 py-3 no mobile, px-8 py-4 no desktop
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base font-bold transition-all duration-300 transform hover:-translate-y-1 rounded-full shadow-lg";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-yellow-300 hover:shadow-yellow-500/30 border border-transparent",
    outline: "bg-transparent border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    white: "bg-white text-brand-dark hover:bg-stone-100 hover:shadow-xl border border-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};