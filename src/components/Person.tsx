
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
      
      {/* Role */}
      <div className={cn(
        "text-sm px-2 py-1 rounded-md mt-1",
        role === 'sender' ? "bg-quantum-blue/20 text-quantum-cyan" : 
        role === 'receiver' ? "bg-quantum-purple/20 text-quantum-cyan" : 
        "bg-red-500/20 text-red-400"
      )}>
        {role === 'sender' ? 'Sender' : role === 'receiver' ? 'Receiver' : 'Eavesdropper'}
      </div>
    </div>
  );
};

export default Person;
