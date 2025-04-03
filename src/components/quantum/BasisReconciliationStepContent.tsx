
import React from 'react';
import { KeyBit } from './types';

interface BasisReconciliationStepContentProps {
  keyBits: KeyBit[];
}

const BasisReconciliationStepContent: React.FC<BasisReconciliationStepContentProps> = ({ keyBits }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">4. Basis Reconciliation</h3>
      <p className="text-sm text-quantum-light/80 mb-4">
        Alice and Bob publicly share which basis they used for each qubit, but not the actual bit values.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="border-b border-quantum-cyan/30">
              <th className="py-2 px-3 text-left text-sm">Qubit</th>
              <th className="py-2 px-3 text-left text-sm">Alice's Basis</th>
              <th className="py-2 px-3 text-left text-sm">Bob's Basis</th>
              <th className="py-2 px-3 text-left text-sm">Match?</th>
            </tr>
          </thead>
          <tbody>
            {keyBits.map((bit, index) => (
              <tr key={index} className="border-b border-quantum-cyan/10">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3">{bit.aliceBasis === 'computational' ? '+' : 'x'}</td>
                <td className="py-2 px-3">{bit.bobBasis === 'computational' ? '+' : 'x'}</td>
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

export default BasisReconciliationStepContent;
