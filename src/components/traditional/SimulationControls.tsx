
import React from 'react';
import { Button } from '@/components/ui/button';

interface SimulationControlsProps {
  startSimulation: () => void;
  toggleEavesdropper: () => void;
  isSimulating: boolean;
  step: number;
  showEavesdropper: boolean;
}

const SimulationControls: React.FC<SimulationControlsProps> = ({ 
  startSimulation, 
  toggleEavesdropper, 
  isSimulating, 
  step, 
  showEavesdropper 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center w-full">
      <Button
        variant="outline"
        onClick={startSimulation}
        className="border-quantum-blue/60 bg-quantum-blue/10 hover:bg-quantum-blue/30"
        disabled={isSimulating && step < 4}
      >
        Start Key Exchange
      </Button>
      <Button
        variant="outline"
        onClick={toggleEavesdropper}
        className={`border-quantum-purple/60 ${
          showEavesdropper ? 'bg-quantum-purple/20' : 'bg-quantum-purple/5'
        } hover:bg-quantum-purple/30`}
        disabled={isSimulating && step < 4}
      >
        {showEavesdropper ? 'Remove' : 'Add'} Eavesdropper
      </Button>
    </div>
  );
};

export default SimulationControls;
