import React from 'react';

const FaviconCorner: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <img 
        src="/src/favicon.png" 
        alt="Vektor Solutions" 
        className="w-12 h-12 opacity-30 hover:opacity-60 transition-opacity duration-300"
      />
    </div>
  );
};

export default FaviconCorner;
