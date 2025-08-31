import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col items-center text-center text-gray-500">
        <img 
            src="https://veksol.com/wp-content/uploads/2025/04/footer-logo-veksol.png" 
            alt="Vektor Solutions Footer Logo" 
            className="h-12 mb-4 opacity-70"
        />
        <p>&copy; {new Date().getFullYear()} Vektor Solutions. All Rights Reserved.</p>
        <p className="text-sm mt-2">Crafting the future, one line of code at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
