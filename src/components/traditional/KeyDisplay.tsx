
import React from 'react';
import { Key, AlertCircle, LockKeyhole, ShieldAlert } from 'lucide-react';

interface KeyDisplayProps {
  keyValue: string;
  isIntercepted?: boolean;
}

const KeyDisplay: React.FC<KeyDisplayProps> = ({ keyValue, isIntercepted = false }) => {
  return (
    <div className={`mt-4 ${isIntercepted ? 'bg-destructive/10 border-destructive/30' : 'bg-bank-blue/10 border-bank-blue/30'} 
      p-3 rounded-md border shadow-sm`}>
      <div className="flex items-center gap-2 relative">
        {isIntercepted ? (
          <div className="flex items-center">
            <ShieldAlert className="h-5 w-5 text-destructive animate-pulse" />
            <span className="text-xs font-medium text-destructive ml-1">COMPROMISED</span>
          </div>
        ) : (
          <div className="flex items-center">
            <LockKeyhole className="h-5 w-5 text-bank-green" />
            <span className="text-xs font-medium text-bank-green ml-1">SECURE</span>
          </div>
        )}
        <span className="font-mono text-sm bg-white/70 py-1 px-2 rounded ml-auto border border-gray-200 tracking-wider">{keyValue}</span>
      </div>
      <div className="mt-2 border-t border-dashed border-bank-gray/20 pt-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-bank-gray/60">Transaction Key</span>
          <span className="text-xs text-bank-gray/60">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default KeyDisplay;
