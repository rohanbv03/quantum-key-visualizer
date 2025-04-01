
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Key, Lock, Shield, Shield as ShieldLock } from 'lucide-react';

import Person from './Person';
import QuantumChannel from './QuantumChannel';
import Qubit from './Qubit';

const SIMULATION_STEPS = [
  'initial',
  'alice_prepares',
  'quantum_transmission',
  'bob_measures',
  'basis_reconciliation',
  'key_sifting',
  'complete'
];

interface KeyBit {
  aliceBit: '0' | '1' | null;
  aliceBasis: 'computational' | 'diagonal';
  bobBasis: 'computational' | 'diagonal';
  bobMeasurement: '0' | '1' | '+' | '-' | null;
  keep: boolean;
}

const BB84Visualization: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [simRunning, setSimRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [keyBits, setKeyBits] = useState<KeyBit[]>([]);
  const [finalKey, setFinalKey] = useState<string>('');

  const stepName = SIMULATION_STEPS[currentStep];

  useEffect(() => {
    if (simRunning) {
      const timer = setTimeout(() => {
        if (currentStep < SIMULATION_STEPS.length - 1) {
          setCurrentStep(prev => prev + 1);
          setProgress(((currentStep + 1) / (SIMULATION_STEPS.length - 1)) * 100);
        } else {
          setSimRunning(false);
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [simRunning, currentStep]);
  
  const startSimulation = () => {
    // Generate random key bits
    const newKeyBits: KeyBit[] = [];
    for (let i = 0; i < 10; i++) {
      const aliceBit = Math.random() < 0.5 ? '0' as const : '1' as const;
      const aliceBasis = Math.random() < 0.5 ? 'computational' as const : 'diagonal' as const;
      const bobBasis = Math.random() < 0.5 ? 'computational' as const : 'diagonal' as const;
      
      let bobMeasurement = null;
      if (bobBasis === aliceBasis) {
        // If same basis, get the same result
        bobMeasurement = aliceBit;
      } else {
        // If different basis, randomly get 0 or 1
        bobMeasurement = Math.random() < 0.5 ? '0' as const : '1' as const;
      }
      
      newKeyBits.push({
        aliceBit,
        aliceBasis,
        bobBasis,
        bobMeasurement,
        keep: aliceBasis === bobBasis
      });
    }
    
    setKeyBits(newKeyBits);
    setCurrentStep(0);
    setProgress(0);
    setSimRunning(true);
    
    // Generate final key
    const key = newKeyBits
      .filter(bit => bit.aliceBasis === bit.bobBasis)
      .map(bit => bit.aliceBit)
      .join('');
    setFinalKey(key);
  };

  const renderStepContent = () => {
    switch (stepName) {
      case 'initial':
        return (
          <div className="text-center p-4">
            <h2 className="text-xl font-semibold mb-2 text-quantum-cyan">Quantum Key Distribution</h2>
            <p className="text-quantum-light/80">
              Alice and Bob want to establish a secure encryption key using quantum properties.
            </p>
          </div>
        );
        
      case 'alice_prepares':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">1. Alice Prepares Qubits</h3>
              <p className="text-sm text-quantum-light/80 mb-4">
                Alice randomly chooses bits (0 or 1) and encoding bases (computational or diagonal) for each qubit.
              </p>
            </div>
            <div className="border border-quantum-blue/30 rounded-lg p-4 bg-quantum-blue/10">
              <h4 className="text-sm font-medium mb-2">Alice's Qubits:</h4>
              <div className="flex flex-wrap gap-2">
                {keyBits.slice(0, 5).map((bit, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Qubit 
                      state={bit.aliceBit === '0' ? '0' : '1'} 
                      basis={bit.aliceBasis} 
                      size="sm" 
                    />
                    <span className="text-xs mt-1">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'quantum_transmission':
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">2. Quantum Transmission</h3>
            <p className="text-sm text-quantum-light/80 mb-4">
              Alice sends the qubits to Bob through a quantum channel. The quantum state cannot be copied or measured without disturbing it (no-cloning theorem).
            </p>
            <div className="flex items-center justify-center my-4">
              <QuantumChannel sending={true} className="w-full max-w-lg" />
            </div>
          </div>
        );
        
      case 'bob_measures':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">3. Bob Measures Qubits</h3>
              <p className="text-sm text-quantum-light/80 mb-4">
                Bob randomly chooses measurement bases for each qubit, not knowing which bases Alice used.
              </p>
            </div>
            <div className="border border-quantum-purple/30 rounded-lg p-4 bg-quantum-purple/10">
              <h4 className="text-sm font-medium mb-2">Bob's Measurements:</h4>
              <div className="flex flex-wrap gap-2">
                {keyBits.slice(0, 5).map((bit, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Qubit 
                      state={bit.bobMeasurement as any} 
                      basis={bit.bobBasis} 
                      size="sm" 
                      measured={true}
                    />
                    <span className="text-xs mt-1">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'basis_reconciliation':
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">4. Basis Reconciliation</h3>
            <p className="text-sm text-quantum-light/80 mb-4">
              Alice and Bob publicly share which basis they used for each qubit, but not the actual bit values.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr className="border-b border-quantum-cyan/30">
                    <th className="py-2 px-3 text-left text-sm">Qubit</th>
                    <th className="py-2 px-3 text-left text-sm">Alice's Basis</th>
                    <th className="py-2 px-3 text-left text-sm">Bob's Basis</th>
                    <th className="py-2 px-3 text-left text-sm">Match?</th>
                  </tr>
                </thead>
                <tbody>
                  {keyBits.map((bit, index) => (
                    <tr key={index} className="border-b border-quantum-cyan/10">
                      <td className="py-2 px-3">{index + 1}</td>
                      <td className="py-2 px-3">{bit.aliceBasis === 'computational' ? '+' : 'x'}</td>
                      <td className="py-2 px-3">{bit.bobBasis === 'computational' ? '+' : 'x'}</td>
                      <td className="py-2 px-3">
                        {bit.aliceBasis === bit.bobBasis ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 'key_sifting':
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-quantum-cyan">5. Key Sifting</h3>
            <p className="text-sm text-quantum-light/80 mb-4">
              They keep only the bits where they used the same basis, discarding the others.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr className="border-b border-quantum-cyan/30">
                    <th className="py-2 px-3 text-left text-sm">Qubit</th>
                    <th className="py-2 px-3 text-left text-sm">Same Basis?</th>
                    <th className="py-2 px-3 text-left text-sm">Alice's Bit</th>
                    <th className="py-2 px-3 text-left text-sm">Bob's Bit</th>
                    <th className="py-2 px-3 text-left text-sm">Keep?</th>
                  </tr>
                </thead>
                <tbody>
                  {keyBits.map((bit, index) => (
                    <tr 
                      key={index} 
                      className={
                        bit.aliceBasis === bit.bobBasis 
                          ? "border-b border-green-500/30 bg-green-500/10" 
                          : "border-b border-quantum-cyan/10 opacity-50"
                      }
                    >
                      <td className="py-2 px-3">{index + 1}</td>
                      <td className="py-2 px-3">
                        {bit.aliceBasis === bit.bobBasis ? (
                          <span className="text-green-500">Yes</span>
                        ) : (
                          <span className="text-red-500">No</span>
                        )}
                      </td>
                      <td className="py-2 px-3">{bit.aliceBit}</td>
                      <td className="py-2 px-3">{bit.bobMeasurement}</td>
                      <td className="py-2 px-3">
                        {bit.aliceBasis === bit.bobBasis ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 'complete':
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
                onClick={startSimulation} 
                className="mt-4 quantum-border"
              >
                <Key className="mr-2 h-4 w-4" />
                Generate New Key
              </Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="bg-background/50 backdrop-blur-sm border-quantum-purple/20 shadow-lg shadow-quantum-purple/5 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-glow">
          BB84 Quantum Key Distribution
        </CardTitle>
        <CardDescription>
          A visualization of the BB84 protocol for quantum key distribution.
        </CardDescription>
      </CardHeader>
      
      <Separator className="bg-quantum-purple/20" />
      
      <CardContent className="p-0">
        <div className="p-6">
          {/* Protocol participants */}
          <div className="flex justify-between items-center mb-6">
            <Person name="Alice" role="sender" />
            <div className="flex-1 mx-4">
              <Progress value={progress} className="h-2 bg-muted" />
            </div>
            <Person name="Bob" role="receiver" />
          </div>
          
          {/* Step visualization */}
          <div className="min-h-[300px] border border-quantum-cyan/20 rounded-lg bg-black/30 backdrop-blur-sm">
            {renderStepContent()}
          </div>
        </div>
        
        {/* Controls */}
        <div className="bg-muted p-4 flex justify-between items-center">
          <div className="text-sm font-medium">
            Step {currentStep + 1}/{SIMULATION_STEPS.length}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0 || simRunning}
            >
              Previous
            </Button>
            
            {!simRunning ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(prev => Math.min(SIMULATION_STEPS.length - 1, prev + 1))}
                  disabled={currentStep === SIMULATION_STEPS.length - 1 || simRunning}
                >
                  Next
                </Button>
                
                <Button 
                  onClick={startSimulation} 
                  className="bg-quantum-purple hover:bg-quantum-purple/90"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  {currentStep === 0 ? 'Start Simulation' : 'Restart'}
                </Button>
              </>
            ) : (
              <Button 
                variant="outline"
                onClick={() => setSimRunning(false)}
              >
                Pause
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BB84Visualization;
