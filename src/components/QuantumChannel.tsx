
import React, { useEffect, useState } from 'react';
import Qubit from './Qubit';
import { cn } from '@/lib/utils';

interface QuantumChannelProps {
  sending?: boolean;
  className?: string;
}

const QuantumChannel: React.FC<QuantumChannelProps> = ({ sending = false, className }) => {
  const [qubits, setQubits] = useState<Array<{id: number, position: number, type: '0' | '1' | '+' | '-', basis: 'computational' | 'diagonal'}>>([]);
  
  useEffect(() => {
    if (sending) {
      const interval = setInterval(() => {
        // Generate random qubit types and basis
        const types: Array<'0' | '1' | '+' | '-'> = ['0', '1', '+', '-'];
        const bases: Array<'computational' | 'diagonal'> = ['computational', 'diagonal'];
        
        const newQubit = {
          id: Date.now(),
          position: 0,
          type: types[Math.floor(Math.random() * types.length)],
          basis: bases[Math.floor(Math.random() * bases.length)]
        };
        
        setQubits(prev => [...prev, newQubit]);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [sending]);
  
  useEffect(() => {
    if (qubits.length === 0) return;
    
    const interval = setInterval(() => {
      setQubits(prev => 
        prev.map(q => {
          if (q.position >= 100) {
            return q; // Stop at the end
          }
          return { ...q, position: q.position + 1 };
        }).filter(q => q.position <= 110) // Remove qubits that have gone too far
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, [qubits]);

  return (
    <div className={cn("relative h-20 w-full border-t border-b border-quantum-cyan/30", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan/5 via-quantum-cyan/10 to-quantum-cyan/5"></div>
      
      {/* Dotted line in the middle */}
      <div className="absolute top-1/2 w-full h-0 border-t border-dashed border-quantum-cyan/50 transform -translate-y-1/2"></div>
      
      {/* Qubits moving across */}
      {qubits.map((qubit) => (
        <div 
          key={qubit.id}
          className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-50 ease-linear"
          style={{ left: `${qubit.position}%` }}
        >
          <Qubit 
            state={qubit.type} 
            basis={qubit.basis} 
            size="sm" 
            className="transform -translate-y-1/2 shadow-lg shadow-quantum-cyan/20"
          />
        </div>
      ))}
    </div>
  );
};

export default QuantumChannel;
