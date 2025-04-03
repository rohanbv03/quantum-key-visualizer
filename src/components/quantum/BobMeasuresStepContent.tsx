
import React from 'react';
import Qubit from '../Qubit';
import { KeyBit } from './types';

interface BobMeasuresStepContentProps {
  keyBits: KeyBit[];
}

const BobMeasuresStepContent: React.FC<BobMeasuresStepContentProps> = ({ keyBits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">3. Bob Measures Qubits</h3>
        <p className="text-sm text-quantum-light/80 mb-4">
          Bob randomly chooses measurement bases for each qubit, not knowing which bases Alice used.
        </p>
      </div>
      <div className="border border-quantum-purple/30 rounded-lg p-4 bg-quantum-purple/10">
        <h4 className="text-sm font-medium mb-2">Bob's Measurements:</h4>
        <div className="flex flex-wrap gap-2">
          {keyBits.slice(0, 5).map((bit, index) => (
            <div key={index} className="flex flex-col items-center">
              <Qubit 
                state={bit.bobMeasurement as any} 
                basis={bit.bobBasis} 
                size="sm" 
                measured={true}
              />
              <span className="text-xs mt-1">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BobMeasuresStepContent;
