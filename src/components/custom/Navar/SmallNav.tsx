"use client"
import React, { useState } from 'react';
import { Home, Luggage, Building2, Plane } from 'lucide-react';

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { 
      icon: <Home size={24} />, 
      label: 'Home'
    },
    { 
      icon: <Luggage size={24} />, 
      label: 'Packages'
    },
    { 
      icon: <Building2 size={24} />, 
      label: 'Stays'
    },
    { 
      icon: <Plane size={24} />, 
      label: 'Flights'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 block sm:hidden right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] px-4 py-2">
      <div className="flex justify-between items-center">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <div className={`p-2 transition-colors duration-200 ${activeIndex === index ? 'text-blue-600' : 'text-gray-400'}`}>
              {item.icon}
            </div>
            <span className={`text-xs mt-1 transition-colors duration-200 ${activeIndex === index ? 'text-blue-600' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;