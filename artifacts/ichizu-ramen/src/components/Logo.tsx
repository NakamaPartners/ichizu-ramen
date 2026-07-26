import { FC } from 'react';

export const Logo: FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 65C30 65 40 75 50 75C60 75 70 65 70 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M35 55L65 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 45L65 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Abstract steam or noodles */}
    <path d="M40 30C40 20 45 25 45 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 35C50 20 55 25 55 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 30C60 20 65 25 65 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
