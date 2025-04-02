
import React from 'react';
import NavBar from '@/components/NavBar';
import BB84Visualization from '@/components/BB84Visualization';
import TraditionalKeyDistribution from '@/components/TraditionalKeyDistribution';
import ExplanationCard from '@/components/ExplanationCard';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import { Key, Shield, Database, Server, CreditCard, Wallet } from 'lucide-react';

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
        
        {/* Server and Banking Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-quantum-blue/10 backdrop-blur-sm rounded-lg p-6 quantum-border flex items-center">
            <div className="mr-6">
              <Server className="h-20 w-20 text-quantum-cyan animate-pulse-glow" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-quantum-light">Secure Server Infrastructure</h3>
              <p className="text-quantum-light/70">
                Quantum cryptography enhances traditional server security with unbreakable encryption protocols.
              </p>
            </div>
          </div>
          
          <div className="bg-quantum-purple/10 backdrop-blur-sm rounded-lg p-6 quantum-border flex items-center">
            <div className="mr-6">
              <CreditCard className="h-20 w-20 text-quantum-cyan animate-pulse-glow" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-quantum-light">Financial Security</h3>
              <p className="text-quantum-light/70">
                Banking systems worldwide are investing in quantum technologies to safeguard financial transactions.
              </p>
            </div>
          </div>
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
              <Database className="h-6 w-6 text-quantum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-quantum-light">Data Protection</h3>
            <p className="text-sm text-quantum-light/70">
              Keep sensitive data secure with quantum-resistant encryption methods that guard against future attack vectors.
            </p>
          </div>
          
          <div className="bg-quantum-cyan/20 backdrop-blur-sm rounded-lg p-6 quantum-border">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-quantum-cyan/30 mb-4">
              <Wallet className="h-6 w-6 text-quantum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-quantum-light">Banking Applications</h3>
            <p className="text-sm text-quantum-light/70">
              Next-generation security for financial transactions and sensitive customer data in the banking industry.
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
