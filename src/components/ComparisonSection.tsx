
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Shield, Key, Lock } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const ComparisonSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main comparison card */}
      <Card className="bg-black border-quantum-purple/20 shadow-lg shadow-quantum-purple/5">
        <CardHeader>
          <CardTitle className="text-center">Quantum vs Traditional Key Distribution</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-quantum-purple/30">
                  <TableHead className="text-left p-3 w-1/3">Feature</TableHead>
                  <TableHead className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">
                    <div className="flex items-center justify-center gap-2">
                      <Key size={18} className="text-quantum-cyan" />
                      <span>Quantum Key Distribution</span>
                    </div>
                  </TableHead>
                  <TableHead className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">
                    <div className="flex items-center justify-center gap-2">
                      <Lock size={18} className="text-quantum-light" />
                      <span>Traditional Key Distribution</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Security Basis</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">Laws of quantum physics</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">Mathematical complexity</TableCell>
                </TableRow>
                
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Quantum Computer Resistance</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">
                    <div className="flex items-center justify-center">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Eavesdropping Detection</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">
                    <div className="flex items-center justify-center">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Implementation Complexity</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">High (requires specialized hardware)</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">Low (software-based)</TableCell>
                </TableRow>
                
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Maturity</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">Emerging technology</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">Well-established</TableCell>
                </TableRow>
                
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Key Distribution Range</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">Limited (typically &lt; 100km)</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">Global (internet-based)</TableCell>
                </TableRow>
                
                <TableRow className="border-b border-quantum-purple/20">
                  <TableCell className="p-3 font-medium">Theoretical Security</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">Information-theoretic secure</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">Computationally secure</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="p-3 font-medium">Forward Secrecy</TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-purple/30">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </TableCell>
                  <TableCell className="p-3 text-center bg-black border-l border-r border-quantum-blue/30">Varies by protocol</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-black rounded-lg border border-quantum-purple/30">
              <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-quantum-cyan" />
                Quantum Advantage
              </h3>
              <p className="text-sm">
                Quantum key distribution provides security based on the fundamental laws of physics rather than computational complexity. 
                Any eavesdropping attempt disturbs the quantum state of the particles, revealing the presence of an attacker.
              </p>
            </div>
            
            <div className="p-4 bg-black rounded-lg border border-quantum-blue/30">
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
      
      {/* Traditional key distribution card */}
      <Card className="bg-black border-quantum-blue/20 shadow-lg shadow-quantum-blue/5">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Lock className="h-6 w-6 text-quantum-light" />
            <span>Traditional Key Distribution Methods</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-black rounded-lg border border-quantum-blue/30">
                <h3 className="text-lg font-medium mb-2">RSA Key Exchange</h3>
                <p className="text-sm">
                  RSA uses asymmetric cryptography where each party has a public and private key pair. The public key is used 
                  for encryption, while the private key is used for decryption. Security relies on the computational difficulty 
                  of factoring large prime numbers.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Widely implemented and understood</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Works well with existing infrastructure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Vulnerable to quantum computing attacks</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-black rounded-lg border border-quantum-blue/30">
                <h3 className="text-lg font-medium mb-2">Diffie-Hellman Key Exchange</h3>
                <p className="text-sm">
                  Allows two parties to jointly establish a shared secret key over an insecure channel. It relies on the 
                  discrete logarithm problem for security. Each party generates a private key and exchanges derived public values.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Perfect forward secrecy when implemented correctly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>No need to exchange private keys</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Vulnerable to man-in-the-middle attacks without authentication</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-black rounded-lg border border-quantum-blue/30">
                <h3 className="text-lg font-medium mb-2">Pre-Shared Keys (PSK)</h3>
                <p className="text-sm">
                  Symmetric keys that are exchanged between parties in advance through a secure, out-of-band channel. 
                  Once both parties have the key, they can use it for subsequent secure communications.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Strong security if the key remains secret</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Not vulnerable to computational attacks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Key distribution logistics can be challenging</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-black rounded-lg border border-quantum-blue/30">
                <h3 className="text-lg font-medium mb-2">Certificate-Based Key Exchange</h3>
                <p className="text-sm">
                  Uses digital certificates issued by trusted Certificate Authorities (CAs) to authenticate public keys and 
                  establish secure connections. Common in TLS/SSL protocols used for secure websites.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Provides authentication along with encryption</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Scales well to large systems like the internet</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5" />
                    <span>Reliance on certificate authorities introduces trust issues</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-black rounded-lg border border-quantum-blue/30 mt-4">
                <h3 className="text-lg font-medium mb-2">Post-Quantum Cryptography</h3>
                <p className="text-sm">
                  Cryptographic algorithms designed to be secure against quantum computer attacks. These include 
                  lattice-based, hash-based, and multivariate cryptographic methods currently being standardized.
                </p>
                <div className="mt-2 text-sm">
                  <div className="italic text-quantum-light/80">
                    A bridge between traditional and quantum-resistant cryptography.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComparisonSection;
