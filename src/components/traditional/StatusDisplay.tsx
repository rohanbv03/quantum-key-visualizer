
import React from 'react';

interface StatusDisplayProps {
  step: number;
  showEavesdropper: boolean;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ step, showEavesdropper }) => {
  return (
    <div className="w-full max-w-2xl bg-black border border-quantum-blue/20 rounded-lg p-4">
      <h3 className="font-medium mb-2 text-quantum-light/90">Status:</h3>
      <div className="space-y-2 text-sm">
        {step === 0 && (
          <p>Press "Start Key Exchange" to begin the simulation.</p>
        )}
        {step === 1 && (
          <p>Alice generates a cryptographic key and begins transmitting it to Bob.</p>
        )}
        {step === 2 && !showEavesdropper && (
          <p>The key is being transmitted securely over the internet...</p>
        )}
        {step === 2 && showEavesdropper && (
          <p className="text-red-400">
            Eve has intercepted the key! In traditional key distribution, this interception cannot be detected.
          </p>
        )}
        {step === 3 && !showEavesdropper && (
          <p>Bob has received the key successfully!</p>
        )}
        {step === 3 && showEavesdropper && (
          <p>
            Bob has received the key, but is unaware that Eve has also obtained a copy.
          </p>
        )}
        {step === 4 && !showEavesdropper && (
          <p className="text-green-400">
            Key exchange completed successfully. Alice and Bob now share a secret key they can use for encrypted communication.
          </p>
        )}
        {step === 4 && showEavesdropper && (
          <p className="text-red-400">
            Key exchange completed, but Eve now has the secret key. Any communications between Alice and Bob can be decrypted by Eve.
          </p>
        )}
      </div>
    </div>
  );
};

export default StatusDisplay;
