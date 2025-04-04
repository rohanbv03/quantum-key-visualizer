
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const ExplanationCard: React.FC = () => {
  return (
    <Card className="bg-black backdrop-blur-sm border-quantum-purple/20 shadow-lg shadow-quantum-purple/5">
      <CardHeader>
        <CardTitle className="text-white">Understanding Quantum Key Distribution</CardTitle>
        <CardDescription className="text-white/70">
          Secure communication through quantum mechanics
        </CardDescription>
      </CardHeader>
      
      <Separator className="bg-quantum-purple/20" />
      
      <CardContent className="pt-6">
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3 bg-black/80 text-white">
            <TabsTrigger value="overview" className="data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="bb84" className="data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-white">BB84 Protocol</TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-white">Security Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4 space-y-4 text-white">
            <p>
              Quantum Key Distribution (QKD) is a secure communication method that uses principles of quantum mechanics to encrypt information. Unlike traditional encryption, which relies on mathematical complexity, QKD's security is based on the fundamental laws of physics.
            </p>
            <p>
              The key advantage of QKD is the ability to detect any eavesdropping attempt. This is possible because, according to quantum mechanics, the act of measuring a quantum system disturbs it in a detectable way.
            </p>
            <div className="mt-4 p-4 bg-quantum-blue/10 rounded-lg border border-quantum-blue/30">
              <h3 className="text-lg font-medium mb-2 text-white">Key Principles</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-white">
                <li>No-cloning theorem: Quantum states cannot be copied exactly</li>
                <li>Heisenberg's uncertainty principle: Measuring certain pairs of properties introduces uncertainty</li>
                <li>Quantum superposition: Qubits can exist in multiple states simultaneously</li>
                <li>Entanglement: Quantum particles can be correlated regardless of distance</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="bb84" className="mt-4 space-y-4 text-white">
            <p>
              The BB84 protocol, named after its inventors Charles Bennett and Gilles Brassard in 1984, was the first quantum cryptography protocol. It allows two parties to establish a shared random secret key using quantum properties.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
                <h4 className="text-sm font-medium text-white">1. Qubit Preparation</h4>
                <p className="text-xs text-white">Alice randomly generates bits and encodes them using randomly chosen bases (rectilinear or diagonal).</p>
              </div>
              <div className="p-3 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
                <h4 className="text-sm font-medium text-white">2. Quantum Transmission</h4>
                <p className="text-xs text-white">Alice sends the qubits to Bob through a quantum channel.</p>
              </div>
              <div className="p-3 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
                <h4 className="text-sm font-medium text-white">3. Measurement</h4>
                <p className="text-xs text-white">Bob measures each qubit using a randomly chosen basis.</p>
              </div>
              <div className="p-3 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
                <h4 className="text-sm font-medium text-white">4. Basis Reconciliation</h4>
                <p className="text-xs text-white">Alice and Bob publicly share which basis they used for each qubit (but not the bit values).</p>
              </div>
              <div className="p-3 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
                <h4 className="text-sm font-medium text-white">5. Key Sifting</h4>
                <p className="text-xs text-white">They keep only the bits where they used the same basis, forming the sifted key.</p>
              </div>
              <div className="p-3 bg-quantum-purple/10 rounded-lg border border-quantum-purple/30">
                <h4 className="text-sm font-medium text-white">6. Error Estimation & Privacy Amplification</h4>
                <p className="text-xs text-white">They check for errors (which could indicate eavesdropping) and apply privacy amplification to increase security.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="mt-4 space-y-4 text-white">
            <p>
              QKD provides security through fundamental physical principles rather than mathematical complexity, making it theoretically immune to computational advances.
            </p>
            <div className="mt-4 p-4 bg-quantum-cyan/10 rounded-lg border border-quantum-cyan/30">
              <h3 className="text-lg font-medium mb-2 text-white">Security Features</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-white">
                <li><span className="font-medium text-white">Eavesdropping Detection:</span> Any attempt to measure a qubit disturbs its state, revealing the presence of an eavesdropper</li>
                <li><span className="font-medium text-white">Forward Secrecy:</span> Even if the encryption is broken in the future, past communications remain secure</li>
                <li><span className="font-medium text-white">Quantum-Safe:</span> Not vulnerable to quantum computing algorithms like Shor's algorithm</li>
                <li><span className="font-medium text-white">Information-Theoretic Security:</span> Security based on the laws of physics, not computational hardness</li>
              </ul>
            </div>
            <p className="text-sm text-white">
              Despite its theoretical security, practical implementations of QKD may have vulnerabilities in the physical devices used. These "side-channel attacks" target weaknesses in the implementation rather than the protocol itself.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ExplanationCard;
