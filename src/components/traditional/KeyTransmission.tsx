
import React from 'react';
import Person from '@/components/Person';
import KeyDisplay from './KeyDisplay';

interface KeyTransmissionProps {
  step: number;
  aliceKey: string;
  bobKey: string;
  interceptedKey: string;
  showEavesdropper: boolean;
}

const KeyTransmission: React.FC<KeyTransmissionProps> = ({ 
  step, 
  aliceKey, 
  bobKey, 
  interceptedKey, 
  showEavesdropper 
}) => {
  return (
    <div className="w-full relative py-12">
      {/* Visualization Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-40 h-40">🔒</div>
      </div>

      {/* Alice and Bob */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Person name="Alice" role="sender" />
          {aliceKey && <KeyDisplay keyValue={aliceKey} />}
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
                <KeyDisplay keyValue={aliceKey} />
              </div>
            )}
          
            {/* Transmission line */}
            <div className="h-1 bg-gradient-to-r from-quantum-blue/30 via-quantum-blue/50 to-quantum-blue/30 w-full"></div>
            
            {/* Eve position */}
            {showEavesdropper && (
              <div className="absolute flex flex-col items-center">
                <Person name="Eve" role="eavesdropper" />
                {step >= 2 && interceptedKey && (
                  <KeyDisplay keyValue={interceptedKey} isIntercepted={true} />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Person name="Bob" role="receiver" />
          {step >= 3 && bobKey && <KeyDisplay keyValue={bobKey} />}
        </div>
      </div>
    </div>
  );
};

export default KeyTransmission;
