
import { useState, useEffect } from 'react';
import { KeyBit, SIMULATION_STEPS } from '@/components/quantum/types';

export const useQuantumSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [simRunning, setSimRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [keyBits, setKeyBits] = useState<KeyBit[]>([]);
  const [finalKey, setFinalKey] = useState<string>('');

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

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(SIMULATION_STEPS.length - 1, prev + 1));
  };

  const pauseSimulation = () => {
    setSimRunning(false);
  };

  return {
    currentStep,
    simRunning,
    progress,
    keyBits,
    finalKey,
    startSimulation,
    handlePreviousStep,
    handleNextStep,
    pauseSimulation,
  };
};
