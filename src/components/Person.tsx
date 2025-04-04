
import React from 'react';
import { cn } from '@/lib/utils';

interface PersonProps {
  name: string;
  role: 'sender' | 'receiver' | 'eavesdropper';
  className?: string;
}

const Person: React.FC<PersonProps> = ({ name, role, className }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Avatar */}
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center mb-2 animate-float",
        role === 'sender' ? "bg-quantum-blue quantum-border" : 
        role === 'receiver' ? "bg-quantum-purple quantum-border" : 
        "bg-quantum-dark border border-red-500"
      )}>
        <span className="text-2xl font-bold">
          {role === 'sender' ? 'A' : role === 'receiver' ? 'B' : 'E'}
        </span>
      </div>
      
      {/* Name */}
      <div className="text-lg font-semibold text-quantum-light">{name}</div>
      
      {/* Role - Updated for better visibility */}
      <div className={cn(
        "text-sm font-bold px-3 py-1.5 rounded-md mt-1 uppercase tracking-wide shadow-md",
        role === 'sender' ? "bg-quantum-blue/50 text-white border border-quantum-blue/70" : 
        role === 'receiver' ? "bg-quantum-purple/50 text-white border border-quantum-purple/70" : 
        "bg-red-500/50 text-white border border-red-500/70"
      )}>
        {role === 'sender' ? 'Sender' : role === 'receiver' ? 'Receiver' : 'Eavesdropper'}
      </div>
    </div>
  );
};

export default Person;
