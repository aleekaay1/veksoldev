import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
           <img src="/images/logo.png" alt="Vektor Solutions Logo" className="h-16" />
        </div>
        <div className="flex items-center space-x-6">
          <Link 
            to="/contact"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
