
import React from 'react';
import { KeyBit } from './types';

interface KeySiftingStepContentProps {
  keyBits: KeyBit[];
}

const KeySiftingStepContent: React.FC<KeySiftingStepContentProps> = ({ keyBits }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">5. Key Sifting</h3>
      <p className="text-sm text-quantum-light/80 mb-4">
        They keep only the bits where they used the same basis, discarding the others.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="border-b border-quantum-cyan/30">
              <th className="py-2 px-3 text-left text-sm">Qubit</th>
              <th className="py-2 px-3 text-left text-sm">Same Basis?</th>
              <th className="py-2 px-3 text-left text-sm">Alice's Bit</th>
              <th className="py-2 px-3 text-left text-sm">Bob's Bit</th>
              <th className="py-2 px-3 text-left text-sm">Keep?</th>
            </tr>
          </thead>
          <tbody>
            {keyBits.map((bit, index) => (
              <tr 
                key={index} 
                className={
                  bit.aliceBasis === bit.bobBasis 
                    ? "border-b border-green-500/30 bg-green-500/10" 
                    : "border-b border-quantum-cyan/10 opacity-50"
                }
              >
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3">
                  {bit.aliceBasis === bit.bobBasis ? (
                    <span className="text-green-500">Yes</span>
                  ) : (
                    <span className="text-red-500">No</span>
                  )}
                </td>
                <td className="py-2 px-3">{bit.aliceBit}</td>
                <td className="py-2 px-3">{bit.bobMeasurement}</td>
                <td className="py-2 px-3">
                  {bit.aliceBasis === bit.bobBasis ? (
                    <span className="text-green-500">✓</span>
                  ) : (
                    <span className="text-red-500">✗</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeySiftingStepContent;
