
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Key, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Person from '@/components/Person';

const TraditionalKeyDistribution: React.FC = () => {
  const [step, setStep] = useState(0);
  const [showEavesdropper, setShowEavesdropper] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [aliceKey, setAliceKey] = useState('');
  const [bobKey, setBobKey] = useState('');
  const [interceptedKey, setInterceptedKey] = useState('');
  
  // Generate a random key
  const generateRandomKey = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  // Reset the simulation
  const resetSimulation = () => {
    setStep(0);
    setAliceKey('');
    setBobKey('');
    setInterceptedKey('');
    setIsSimulating(false);
  };

  // Start the simulation
  const startSimulation = () => {
    resetSimulation();
    setIsSimulating(true);
    const newKey = generateRandomKey();
    setAliceKey(newKey);
    simulateKeyExchange(newKey);
  };

  // Simulate the key exchange process
  const simulateKeyExchange = (key: string) => {
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setStep(currentStep);
      
      if (currentStep === 2) {
        // Eve intercepts if eavesdropper is shown
        if (showEavesdropper) {
          setInterceptedKey(key);
        }
      }
      
      if (currentStep === 3) {
        // Bob receives the key
        setBobKey(showEavesdropper ? key : key);
      }
      
      if (currentStep >= 4) {
        clearInterval(timer);
      }
    }, 1500);
  };

  // Toggle the eavesdropper
  const toggleEavesdropper = () => {
    setShowEavesdropper(!showEavesdropper);
    resetSimulation();
  };

  return (
    <Card className="bg-background/50 backdrop-blur-sm border-quantum-blue/20 shadow-lg shadow-quantum-blue/5">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          <Lock className="h-6 w-6 text-quantum-light" />
          <span>Traditional Key Distribution Simulation</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col items-center space-y-6">
          {/* Controls */}
          <div className="flex flex-wrap gap-3 justify-center w-full">
            <Button
              variant="outline"
              onClick={startSimulation}
              className="border-quantum-blue/40 hover:bg-quantum-blue/20"
              disabled={isSimulating && step < 4}
            >
              Start Key Exchange
            </Button>
            <Button
              variant="outline"
              onClick={toggleEavesdropper}
              className={`border-quantum-purple/40 ${
                showEavesdropper ? 'bg-quantum-purple/20' : ''
              } hover:bg-quantum-purple/20`}
              disabled={isSimulating && step < 4}
            >
              {showEavesdropper ? 'Remove' : 'Add'} Eavesdropper
            </Button>
          </div>
          
          {/* Visualization Area */}
          <div className="w-full relative py-12">
            {/* Visualization Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Lock className="w-40 h-40" />
            </div>

            {/* Alice and Bob */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <Person name="Alice" role="sender" />
                {aliceKey && (
                  <div className="mt-4 bg-quantum-blue/20 p-2 rounded border border-quantum-blue/30">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-quantum-light" />
                      <span className="font-mono">{aliceKey}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Middle section with transmission visualization */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-20 w-full flex items-center justify-center">
                  {/* Key in transit */}
                  {step >= 1 && step < 3 && (
                    <div 
                      className={`absolute flex items-center p-2 bg-quantum-blue/20 rounded border border-quantum-blue/30 transform ${
                        step === 1 ? 'left-0 translate-x-[20%]' : 'left-1/3 translate-x-[100%]'
                      } transition-all duration-1000`}
                    >
                      <div className="flex items-center gap-2">
                        <Key className="h-4 w-4 text-quantum-light" />
                        <span className="font-mono text-sm">{aliceKey}</span>
                      </div>
                    </div>
                  )}
                
                  {/* Transmission line */}
                  <div className="h-1 bg-gradient-to-r from-quantum-blue/30 via-quantum-blue/50 to-quantum-blue/30 w-full"></div>
                  
                  {/* Eve position */}
                  {showEavesdropper && (
                    <div className="absolute flex flex-col items-center">
                      <Person name="Eve" role="eavesdropper" />
                      {step >= 2 && interceptedKey && (
                        <div className="mt-2 bg-red-500/20 p-2 rounded border border-red-500/30">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-red-400" />
                            <span className="font-mono text-sm">{interceptedKey}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Person name="Bob" role="receiver" />
                {step >= 3 && bobKey && (
                  <div className="mt-4 bg-quantum-blue/20 p-2 rounded border border-quantum-blue/30">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-quantum-light" />
                      <span className="font-mono">{bobKey}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Status Area */}
          <div className="w-full max-w-2xl bg-quantum-dark/50 border border-quantum-blue/20 rounded-lg p-4">
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
          
          {/* Educational Note */}
          <div className="w-full max-w-2xl bg-quantum-blue/10 border border-quantum-blue/30 rounded-lg p-4">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-quantum-light" />
              How Traditional Key Distribution Works
            </h3>
            <p className="text-sm">
              In traditional key distribution systems like RSA, keys are encrypted using mathematical algorithms 
              and sent over standard communication channels. The security relies on computational difficulty rather 
              than physical laws. While mathematical encryption is strong, it cannot detect eavesdroppers who might 
              intercept the key during transmission. This is a fundamental difference from quantum key distribution, 
              which can detect eavesdropping attempts through quantum properties.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TraditionalKeyDistribution;
