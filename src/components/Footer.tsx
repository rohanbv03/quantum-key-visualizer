
import React from 'react';
import { ShieldCheck, Facebook, Twitter, Instagram, Youtube, CreditCard, Lock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-10 border-t border-gray-200 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-bank-navy" />
              <span className="text-lg font-bold text-bank-navy">SecureBank</span>
            </div>
            <p className="text-sm text-bank-gray/70 mb-4">
              Providing secure banking solutions with quantum-grade protection for your financial assets.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-bank-gray/60 hover:text-bank-blue">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-bank-gray/60 hover:text-bank-blue">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-bank-gray/60 hover:text-bank-blue">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-bank-gray/60 hover:text-bank-blue">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-bank-gray mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Personal Banking</a></li>
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Business Accounts</a></li>
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Investments</a></li>
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Loans & Mortgages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-bank-gray mb-4">Security</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Online Protection</a></li>
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Fraud Prevention</a></li>
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Privacy Policy</a></li>
              <li><a href="#" className="text-bank-gray/70 hover:text-bank-blue">Security Measures</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-bank-gray mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-bank-gray/70">
                <Phone className="h-4 w-4 mr-2 text-bank-blue" />
                1-800-SECURE-BANK
              </li>
              <li className="flex items-center text-bank-gray/70">
                <CreditCard className="h-4 w-4 mr-2 text-bank-blue" />
                Card Support: 24/7
              </li>
              <li className="flex items-center text-bank-gray/70">
                <Lock className="h-4 w-4 mr-2 text-bank-blue" />
                Security Team: 9am-5pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 text-center text-xs text-bank-gray/60">
          <p>© 2023 SecureBank. All rights reserved. FDIC Insured.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-bank-blue">Terms</a> · 
            <a href="#" className="hover:text-bank-blue ml-2">Privacy</a> · 
            <a href="#" className="hover:text-bank-blue ml-2">Cookies</a> · 
            <a href="#" className="hover:text-bank-blue ml-2">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
