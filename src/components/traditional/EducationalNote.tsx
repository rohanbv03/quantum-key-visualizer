
import React from 'react';
import { Shield } from 'lucide-react';

const EducationalNote: React.FC = () => {
  return (
    <div className="w-full max-w-2xl bg-black border border-quantum-blue/30 rounded-lg p-4">
      <h3 className="font-medium mb-2 flex items-center gap-2">
        <Shield className="h-5 w-5 text-quantum-light" />
        How Traditional Key Distribution Works
      </h3>
      <p className="text-sm">
        In traditional key distribution systems like RSA, keys are encrypted using mathematical algorithms 
        and sent over standard communication channels. The security relies on computational difficulty rather 
        than physical laws. While mathematical encryption is strong, it cannot detect eavesdroppers who might 
        intercept the key during transmission. This is a fundamental difference from quantum key distribution, 
        which can detect eavesdropping attempts through quantum properties.
      </p>
    </div>
  );
};

export default EducationalNote;
