
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Shield, Key, Lock } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <Card className="bg-background/50 backdrop-blur-sm border-quantum-purple/20 shadow-lg shadow-quantum-purple/5">
      <CardHeader>
        <CardTitle className="text-center">Quantum vs Traditional Key Distribution</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-quantum-purple/30">
                <th className="text-left p-3 w-1/3">Feature</th>
                <th className="p-3 text-center bg-quantum-purple/10">
                  <div className="flex items-center justify-center gap-2">
                    <Key size={18} className="text-quantum-cyan" />
                    <span>Quantum Key Distribution</span>
                  </div>
                </th>
                <th className="p-3 text-center bg-quantum-blue/10">
                  <div className="flex items-center justify-center gap-2">
                    <Lock size={18} className="text-quantum-light" />
                    <span>Traditional Key Distribution</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Security Basis</td>
                <td className="p-3 text-center bg-quantum-purple/5">Laws of quantum physics</td>
                <td className="p-3 text-center bg-quantum-blue/5">Mathematical complexity</td>
              </tr>
              
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Quantum Computer Resistance</td>
                <td className="p-3 text-center bg-quantum-purple/5">
                  <div className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="p-3 text-center bg-quantum-blue/5">
                  <div className="flex items-center justify-center">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Eavesdropping Detection</td>
                <td className="p-3 text-center bg-quantum-purple/5">
                  <div className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="p-3 text-center bg-quantum-blue/5">
                  <div className="flex items-center justify-center">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                </td>
              </tr>
              
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Implementation Complexity</td>
                <td className="p-3 text-center bg-quantum-purple/5">High (requires specialized hardware)</td>
                <td className="p-3 text-center bg-quantum-blue/5">Low (software-based)</td>
              </tr>
              
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Maturity</td>
                <td className="p-3 text-center bg-quantum-purple/5">Emerging technology</td>
                <td className="p-3 text-center bg-quantum-blue/5">Well-established</td>
              </tr>
              
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Key Distribution Range</td>
                <td className="p-3 text-center bg-quantum-purple/5">Limited (typically &lt; 100km)</td>
                <td className="p-3 text-center bg-quantum-blue/5">Global (internet-based)</td>
              </tr>
              
              <tr className="border-b border-quantum-purple/20">
                <td className="p-3 font-medium">Theoretical Security</td>
                <td className="p-3 text-center bg-quantum-purple/5">Information-theoretic secure</td>
                <td className="p-3 text-center bg-quantum-blue/5">Computationally secure</td>
              </tr>
              
              <tr>
                <td className="p-3 font-medium">Forward Secrecy</td>
                <td className="p-3 text-center bg-quantum-purple/5">
                  <div className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="p-3 text-center bg-quantum-blue/5">Varies by protocol</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-quantum-cyan" />
              Quantum Advantage
            </h3>
            <p className="text-sm">
              Quantum key distribution provides security based on the fundamental laws of physics rather than computational complexity. 
              Any eavesdropping attempt disturbs the quantum state of the particles, revealing the presence of an attacker.
            </p>
          </div>
          
          <div className="p-4 bg-quantum-blue/10 rounded-lg border border-quantum-blue/30">
            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
              <Lock className="h-5 w-5 text-quantum-light" />
              Traditional Methods
            </h3>
            <p className="text-sm">
              Traditional key exchange protocols like RSA and Diffie-Hellman rely on mathematical problems that are difficult to solve. 
              However, they could be broken by sufficiently powerful quantum computers in the future.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonSection;
