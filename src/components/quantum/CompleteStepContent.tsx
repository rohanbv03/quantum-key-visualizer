
import React from 'react';
import { Button } from '@/components/ui/button';
import { Key } from 'lucide-react';

interface CompleteStepContentProps {
  finalKey: string;
  onRestart: () => void;
}

const CompleteStepContent: React.FC<CompleteStepContentProps> = ({ finalKey, onRestart }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">Secure Key Established!</h3>
      <p className="text-sm text-quantum-light/80 mb-4">
        Alice and Bob now share a secure key that can be used for encryption.
      </p>
      
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-center p-4 border border-quantum-cyan/30 rounded-lg bg-quantum-blue/10 w-full max-w-md">
          <h4 className="text-sm font-medium mb-2">Final Shared Key:</h4>
          <div className="flex items-center justify-center space-x-1 text-xl font-mono">
            {finalKey.split('').map((bit, i) => (
              <span key={i} className="w-8 h-8 flex items-center justify-center bg-quantum-cyan/20 rounded">
                {bit}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-quantum-light/70">
            Key length: {finalKey.length} bits
          </p>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onRestart} 
          className="mt-4 quantum-border"
        >
          <Key className="mr-2 h-4 w-4" />
          Generate New Key
        </Button>
      </div>
    </div>
  );
};

export default CompleteStepContent;
