
import React from 'react';
import { cn } from '@/lib/utils';

type QubitState = '0' | '1' | '+' | '-';
type QubitBasis = 'computational' | 'diagonal';

interface QubitProps {
  state: QubitState;
  basis: QubitBasis;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  measured?: boolean;
}

const Qubit: React.FC<QubitProps> = ({ state, basis, className, size = 'md', measured = false }) => {
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  // Colors based on the state
  const stateColors = {
    '0': 'bg-quantum-blue/80',
    '1': 'bg-quantum-purple/80',
    '+': 'bg-quantum-cyan/80',
    '-': 'bg-quantum-light/80',
  };

  // Rotation based on the basis
  const basisRotation = basis === 'computational' ? '' : 'rotate-45';

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center rounded-full",
        sizeClasses[size],
        stateColors[state],
        basisRotation,
        measured ? "ring-2 ring-quantum-cyan ring-offset-2 ring-offset-quantum-dark" : "",
        className
      )}
    >
      <span className={cn(
        "text-quantum-dark font-bold",
        size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
      )}>
        {state}
      </span>
      {measured && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-quantum-cyan rounded-full animate-pulse-glow flex items-center justify-center text-[10px] text-quantum-dark font-bold">
          M
        </div>
      )}
      <div className="absolute inset-0 border-2 border-transparent rounded-full animate-spin-slow opacity-50"></div>
    </div>
  );
};

export default Qubit;
