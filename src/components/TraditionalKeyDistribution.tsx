
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import SimulationControls from './traditional/SimulationControls';
import KeyTransmission from './traditional/KeyTransmission';
import StatusDisplay from './traditional/StatusDisplay';
import EducationalNote from './traditional/EducationalNote';

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
        setBobKey(key);
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
    <Card className="bg-gradient-to-br from-black/90 via-quantum-purple/10 to-quantum-blue/5 border-quantum-blue/20 shadow-lg shadow-quantum-blue/10">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2 text-white">
          <Lock className="h-6 w-6 text-quantum-light" />
          <span>Traditional Key Distribution Simulation</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col items-center space-y-6 text-white">
          {/* Controls */}
          <SimulationControls 
            startSimulation={startSimulation}
            toggleEavesdropper={toggleEavesdropper}
            isSimulating={isSimulating}
            step={step}
            showEavesdropper={showEavesdropper}
          />
          
          {/* Visualization Area */}
          <KeyTransmission
            step={step}
            aliceKey={aliceKey}
            bobKey={bobKey}
            interceptedKey={interceptedKey}
            showEavesdropper={showEavesdropper}
          />

          {/* Status Area */}
          <StatusDisplay step={step} showEavesdropper={showEavesdropper} />
          
          {/* Educational Note */}
          <EducationalNote />
        </div>
      </CardContent>
    </Card>
  );
};

export default TraditionalKeyDistribution;
