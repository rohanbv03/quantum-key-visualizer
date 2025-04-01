
import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-2">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-quantum-cyan" />
          <span className="text-sm font-semibold text-quantum-cyan">Quantum Key Distributor</span>
        </div>
        <p className="text-xs text-quantum-light/60 text-center">
          A visualization of quantum key distribution algorithms for educational purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
