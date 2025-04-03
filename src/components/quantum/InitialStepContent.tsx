
import React from 'react';

const InitialStepContent: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-semibold mb-2 text-quantum-cyan">Quantum Key Distribution</h2>
      <p className="text-quantum-light/80">
        Alice and Bob want to establish a secure encryption key using quantum properties.
      </p>
    </div>
  );
};

export default InitialStepContent;
