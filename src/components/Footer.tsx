import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/src/logo.png" 
              alt="Vektor Solutions Footer Logo" 
              className="h-16 mb-4 opacity-70"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Crafting the future, one line of code at a time. We innovate, calibrate, automate and accelerate your digital transformation.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/veksol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/veksol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* USA Office */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">VEKTOR SOLUTIONS LLC</h3>
            <div className="space-y-2 text-gray-400">
              <p>2803 Philadelphia Pike,<br />Suite # B-577</p>
              <p>Claymont, Delaware 19703</p>
              <p>USA</p>
              <p>+1 (929) 342 5044</p>
              <a href="mailto:info@veksol.com" className="text-cyan-400 hover:text-white transition-colors">info@veksol.com</a>
            </div>
          </div>

          {/* Pakistan Office */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">VEKTOR TECHNOLOGIES</h3>
            <div className="space-y-2 text-gray-400">
              <p>99-A Babar Block</p>
              <p>New Garden Town</p>
              <p>Lahore, Punjab 54000</p>
              <p>+92 (333) 049 3333</p>
              <a href="mailto:info@veksol.com" className="text-cyan-400 hover:text-white transition-colors">info@veksol.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Vektor Solutions. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Crafting the future, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
