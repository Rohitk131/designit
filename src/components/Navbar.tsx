import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ];
  
  const generateFlickerAnimation = () => {
    return Math.random() > 0.7 ? 'animate-flicker' : '';
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-old-paper backdrop-blur-md',
        scrolled ? 'py-2 border-b border-sepia/30' : 'py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          aria-label="Cyber HQ Logo"
        >
          <div className="h-8 w-8 border-2 border-sepia neon-border bg-old-paper pixel-corners flex items-center justify-center">
            <div className="text-sepia animate-pulse text-lg font-bold old-movie-text">CX</div>
          </div>
          <span className={`text-xl font-bold old-movie-text text-sepia ${generateFlickerAnimation()}`}>
            DaVinci Resolve
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`old-movie-text text-lg tracking-wider transition-all duration-300 border-b-2 border-transparent hover:border-sepia hover:text-sepia ${generateFlickerAnimation()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <button
          className="md:hidden text-gray-800 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? 
            <X className="h-6 w-6 text-neon-pink" /> : 
            <Menu className="h-6 w-6 text-sepia" />
          }
        </button>
      </div>
      
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-old-paper/90 z-50 backdrop-blur-sm transition-transform duration-300 pt-20',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-6 items-center pt-10">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="old-movie-text text-xl text-gray-800 border-2 border-sepia w-full text-center py-3 pixel-corners hover:bg-sepia hover:text-old-paper transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
