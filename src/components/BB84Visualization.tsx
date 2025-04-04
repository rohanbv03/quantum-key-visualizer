import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Person from './Person';
import StepContentRenderer from './quantum/StepContentRenderer';
import SimulationControls from './quantum/SimulationControls';
import { useQuantumSimulation } from '@/hooks/useQuantumSimulation';
const BB84Visualization: React.FC = () => {
  const {
    currentStep,
    simRunning,
    progress,
    keyBits,
    finalKey,
    startSimulation,
    handlePreviousStep,
    handleNextStep,
    pauseSimulation
  } = useQuantumSimulation();
  return <Card className="bg-gradient-to-br from-black/80 via-quantum-cyan/10 to-black/90 border-quantum-purple/20 shadow-lg shadow-quantum-purple/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-glow">
          BB84 Quantum Key Distribution
        </CardTitle>
        <CardDescription className="text-stone-950">
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
          <div className="min-h-[300px] border border-quantum-cyan/20 rounded-lg bg-gradient-to-b from-black/70 to-quantum-blue/10 backdrop-blur-sm">
            <StepContentRenderer currentStep={currentStep} keyBits={keyBits} finalKey={finalKey} startSimulation={startSimulation} />
          </div>
        </div>
        
        {/* Controls */}
        <SimulationControls currentStep={currentStep} simRunning={simRunning} onPreviousStep={handlePreviousStep} onNextStep={handleNextStep} onStartSimulation={startSimulation} onPauseSimulation={pauseSimulation} />
      </CardContent>
    </Card>;
};
export default BB84Visualization;