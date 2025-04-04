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
  return <div className="bg-gradient-to-r from-black to-black/90 p-4 flex justify-between items-center border-t border-quantum-purple/20">
      <div className="text-sm font-medium bg-slate-50">
        Step {currentStep + 1}/{SIMULATION_STEPS.length}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onPreviousStep} disabled={currentStep === 0 || simRunning} className="border-quantum-cyan/40 hover:bg-quantum-cyan/20 text-green-400">
          Previous
        </Button>
        
        {!simRunning ? <>
            <Button variant="outline" onClick={onNextStep} disabled={currentStep === SIMULATION_STEPS.length - 1 || simRunning} className="border-quantum-cyan/40 hover:bg-quantum-cyan/20 text-amber-400">
              Next
            </Button>
            
            <Button onClick={onStartSimulation} className="bg-gradient-to-r from-quantum-purple/90 to-quantum-cyan/70 hover:from-quantum-purple hover:to-quantum-cyan">
              <Shield className="mr-2 h-4 w-4" />
              {currentStep === 0 ? 'Start Simulation' : 'Restart'}
            </Button>
          </> : <Button variant="outline" onClick={onPauseSimulation} className="border-quantum-purple/40 hover:bg-quantum-purple/20">
            Pause
          </Button>}
      </div>
    </div>;
};
export default SimulationControls;