
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { SIMULATION_STEPS } from './types';

interface SimulationControlsProps {
  currentStep: number;
  simRunning: boolean;
  onPreviousStep: () => void;
  onNextStep: () => void;
  onStartSimulation: () => void;
  onPauseSimulation: () => void;
}

const SimulationControls: React.FC<SimulationControlsProps> = ({ 
  currentStep, 
  simRunning, 
  onPreviousStep, 
  onNextStep, 
  onStartSimulation, 
  onPauseSimulation 
}) => {
  return (
    <div className="bg-black p-4 flex justify-between items-center border-t border-quantum-purple/20">
      <div className="text-sm font-medium">
        Step {currentStep + 1}/{SIMULATION_STEPS.length}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onPreviousStep}
          disabled={currentStep === 0 || simRunning}
        >
          Previous
        </Button>
        
        {!simRunning ? (
          <>
            <Button
              variant="outline"
              onClick={onNextStep}
              disabled={currentStep === SIMULATION_STEPS.length - 1 || simRunning}
            >
              Next
            </Button>
            
            <Button 
              onClick={onStartSimulation} 
              className="bg-quantum-purple hover:bg-quantum-purple/90"
            >
              <Shield className="mr-2 h-4 w-4" />
              {currentStep === 0 ? 'Start Simulation' : 'Restart'}
            </Button>
          </>
        ) : (
          <Button 
            variant="outline"
            onClick={onPauseSimulation}
          >
            Pause
          </Button>
        )}
      </div>
    </div>
  );
};

export default SimulationControls;
