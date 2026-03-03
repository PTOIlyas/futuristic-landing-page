import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = "px-11.5 py-5.5 rounded-full font-medium transition-all duration-300 cursor-pointer text-sm md:text-base border-2";
  
  const variants = {
    primary: "bg-transparent border-purple-500 text-white hover:bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    secondary: "bg-transparent border-gray-600 text-white hover:border-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};