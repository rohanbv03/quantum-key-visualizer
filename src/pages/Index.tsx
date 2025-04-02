
import React from 'react';
import NavBar from '@/components/NavBar';
import BB84Visualization from '@/components/BB84Visualization';
import TraditionalKeyDistribution from '@/components/TraditionalKeyDistribution';
import ExplanationCard from '@/components/ExplanationCard';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { Key, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 container py-8 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-quantum-light mb-4 text-glow">
            Quantum Key Distribution
          </h1>
          <p className="text-lg md:text-xl text-quantum-light/80 max-w-2xl mx-auto">
            Secure communication through the fascinating world of quantum mechanics
          </p>
        </div>
        
        {/* Quantum Visualization */}
        <div className="mb-12">
          <BB84Visualization />
        </div>
        
        {/* Traditional Visualization */}
        <div className="mb-12">
          <TraditionalKeyDistribution />
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-quantum-blue/20 backdrop-blur-sm rounded-lg p-6 quantum-border">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-quantum-blue/30 mb-4">
              <Shield className="h-6 w-6 text-quantum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-quantum-light">Quantum Security</h3>
            <p className="text-sm text-quantum-light/70">
              Leverages fundamental properties of quantum mechanics to provide security that cannot be compromised computationally.
            </p>
          </div>
          
          <div className="bg-quantum-purple/20 backdrop-blur-sm rounded-lg p-6 quantum-border">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-quantum-purple/30 mb-4">
              <Key className="h-6 w-6 text-quantum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-quantum-light">BB84 Protocol</h3>
            <p className="text-sm text-quantum-light/70">
              The first quantum cryptographic protocol that uses quantum properties for secure key exchange between two parties.
            </p>
          </div>
          
          <div className="bg-quantum-cyan/20 backdrop-blur-sm rounded-lg p-6 quantum-border">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-quantum-cyan/30 mb-4">
              <Shield className="h-6 w-6 text-quantum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-quantum-light">Eavesdropper Detection</h3>
            <p className="text-sm text-quantum-light/70">
              Any attempt to intercept the quantum communication will disturb the system and be detected by the legitimate users.
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-12">
          <ComparisonSection />
        </div>
        
        {/* Explanation Section */}
        <div className="mb-12">
          <ExplanationCard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
