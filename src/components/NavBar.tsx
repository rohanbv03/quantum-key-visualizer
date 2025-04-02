
import React from 'react';
import { ShieldCheck, Lock, Menu, Search, User, CreditCard, DollarSign, HelpCircle, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-7 w-7 text-bank-navy" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-bank-navy">SecureBank</span>
            <span className="text-xs text-bank-gray/70">Quantum Protection</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-bank-gray hover:text-bank-blue flex items-center">
            <CreditCard className="mr-1 h-4 w-4" />
            Services
          </a>
          <a href="#" className="text-sm font-medium text-bank-gray hover:text-bank-blue flex items-center">
            <DollarSign className="mr-1 h-4 w-4" />
            Investments
          </a>
          <a href="#" className="text-sm font-medium text-bank-gray hover:text-bank-blue flex items-center">
            <Lock className="mr-1 h-4 w-4" />
            Security
          </a>
          <a href="#" className="text-sm font-medium text-bank-gray hover:text-bank-blue flex items-center">
            <HelpCircle className="mr-1 h-4 w-4" />
            Support
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4 text-bank-gray" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex relative">
            <Bell className="h-4 w-4 text-bank-gray" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-bank-gold rounded-full"></span>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex border-bank-blue text-bank-blue hover:bg-bank-blue hover:text-white">
            <User className="mr-2 h-4 w-4" />
            Account
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5 text-bank-gray" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
