import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
           <Link to="/">
             <img src="/images/logo.png" alt="Vektor Solutions Logo" className="h-16 cursor-pointer hover:opacity-80 transition-opacity duration-300" />
           </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <Link 
            to="/contact"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
            >
              Home
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
