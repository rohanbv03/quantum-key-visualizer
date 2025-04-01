
import React from 'react';
import { Key, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Key className="h-6 w-6 text-quantum-cyan animate-pulse-glow" />
          <span className="text-xl font-bold text-quantum-light text-glow">Quantum Key Distributor</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm" className="quantum-border">
            <Shield className="mr-2 h-4 w-4" />
            Learn more
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
