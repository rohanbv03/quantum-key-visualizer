
import React from 'react';
import { KeyBit, SIMULATION_STEPS } from './types';
import InitialStepContent from './InitialStepContent';
import AlicePreparesStepContent from './AlicePreparesStepContent';
import TransmissionStepContent from './TransmissionStepContent';
import BobMeasuresStepContent from './BobMeasuresStepContent';
import BasisReconciliationStepContent from './BasisReconciliationStepContent';
import KeySiftingStepContent from './KeySiftingStepContent';
import CompleteStepContent from './CompleteStepContent';

interface StepContentRendererProps {
  currentStep: number;
  keyBits: KeyBit[];
  finalKey: string;
  startSimulation: () => void;
}

const StepContentRenderer: React.FC<StepContentRendererProps> = ({ 
  currentStep, 
  keyBits, 
  finalKey,
  startSimulation 
}) => {
  const stepName = SIMULATION_STEPS[currentStep];

  switch (stepName) {
    case 'initial':
      return <InitialStepContent />;
      
    case 'alice_prepares':
      return <AlicePreparesStepContent keyBits={keyBits} />;
      
    case 'quantum_transmission':
      return <TransmissionStepContent />;
      
    case 'bob_measures':
      return <BobMeasuresStepContent keyBits={keyBits} />;
      
    case 'basis_reconciliation':
      return <BasisReconciliationStepContent keyBits={keyBits} />;
      
    case 'key_sifting':
      return <KeySiftingStepContent keyBits={keyBits} />;
      
    case 'complete':
      return <CompleteStepContent finalKey={finalKey} onRestart={startSimulation} />;
      
    default:
      return null;
  }
};

export default StepContentRenderer;
