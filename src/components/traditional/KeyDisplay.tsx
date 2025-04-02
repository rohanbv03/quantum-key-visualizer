
import React from 'react';
import { Key, AlertCircle } from 'lucide-react';

interface KeyDisplayProps {
  keyValue: string;
  isIntercepted?: boolean;
}

const KeyDisplay: React.FC<KeyDisplayProps> = ({ keyValue, isIntercepted = false }) => {
  return (
    <div className={`mt-4 ${isIntercepted ? 'bg-red-500/20 border-red-500/30' : 'bg-quantum-blue/20 border-quantum-blue/30'} p-2 rounded border`}>
      <div className="flex items-center gap-2">
        {isIntercepted ? (
          <AlertCircle className="h-4 w-4 text-red-400" />
        ) : (
          <Key className="h-4 w-4 text-quantum-light" />
        )}
        <span className="font-mono">{keyValue}</span>
      </div>
    </div>
  );
};

export default KeyDisplay;
