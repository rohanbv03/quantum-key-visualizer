
import React from 'react';
import QuantumChannel from '../QuantumChannel';

const TransmissionStepContent: React.FC = () => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">2. Quantum Transmission</h3>
      <p className="text-sm text-quantum-light/80 mb-4">
        Alice sends the qubits to Bob through a quantum channel. The quantum state cannot be copied or measured without disturbing it (no-cloning theorem).
      </p>
      <div className="flex items-center justify-center my-4">
        <QuantumChannel sending={true} className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default TransmissionStepContent;
