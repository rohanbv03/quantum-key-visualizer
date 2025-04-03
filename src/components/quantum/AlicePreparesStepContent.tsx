
import React from 'react';
import Qubit from '../Qubit';
import { KeyBit } from './types';

interface AlicePreparesStepContentProps {
  keyBits: KeyBit[];
}

const AlicePreparesStepContent: React.FC<AlicePreparesStepContentProps> = ({ keyBits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">1. Alice Prepares Qubits</h3>
        <p className="text-sm text-quantum-light/80 mb-4">
          Alice randomly chooses bits (0 or 1) and encoding bases (computational or diagonal) for each qubit.
        </p>
      </div>
      <div className="border border-quantum-blue/30 rounded-lg p-4 bg-quantum-blue/10">
        <h4 className="text-sm font-medium mb-2">Alice's Qubits:</h4>
        <div className="flex flex-wrap gap-2">
          {keyBits.slice(0, 5).map((bit, index) => (
            <div key={index} className="flex flex-col items-center">
              <Qubit 
                state={bit.aliceBit === '0' ? '0' : '1'} 
                basis={bit.aliceBasis} 
                size="sm" 
              />
              <span className="text-xs mt-1">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlicePreparesStepContent;
