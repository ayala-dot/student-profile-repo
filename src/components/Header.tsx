import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-primary-dark text-white flex items-center justify-between px-6 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <span className="text-primary-dark font-bold text-xl">S</span>
        </div>
        <h1 className="text-lg font-bold">מערכת ניהול פדגוגית</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-left">
          <p className="text-sm font-medium">ישראל ישראלי</p>
          <p className="text-xs opacity-70">מנהל מערכת</p>
        </div>
        <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
