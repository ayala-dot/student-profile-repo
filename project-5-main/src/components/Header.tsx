import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#0D1B2A] to-[#1B2A3B] text-white flex items-center justify-between px-6 py-3 shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Logo Image */}
        <img 
          src="/logo/לוגו של בוקסבוים.jpeg" 
          alt="SmartApp Logo" 
          className="h-14 flex-shrink-0"
        />

        <div className="flex flex-col">
          <h1 className="text-lg font-bold leading-tight">SmartApp</h1>
          <h1 className="text-xs leading-tight text-center">and</h1>
          <p className="text-xs opacity-80 text-center">משרד החינוך</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-left">
          <p className="text-sm font-medium">ישראל ישראלי</p>
          <p className="text-xs opacity-70">מנהל מערכת</p>
        </div>
        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
