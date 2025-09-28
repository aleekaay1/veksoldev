import React from 'react';
import FaviconCorner from './FaviconCorner';
import Header from './Header';

const ContactUs: React.FC = () => {
    return (
        <div className="bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
            <Header />
            
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black">
                <FaviconCorner />
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-20 bg-[#0a0a0a]">
                <FaviconCorner />
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* USA Office */}
                        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white">VEKTOR SOLUTIONS LLC</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-gray-300">2803 Philadelphia Pike, Suite # B-577,<br />Claymont, Delaware 19703. USA</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+19293425044" className="text-gray-300 hover:text-cyan-400 transition-colors">+1 (929) 342 5044</a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@veksol.com" className="text-gray-300 hover:text-cyan-400 transition-colors">info@veksol.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Pakistan Office */}
                        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white">VEKTOR TECHNOLOGIES</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-gray-300">99-A Babar Block, New Garden Town<br />Lahore, Punjab 54000</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+923330493333" className="text-gray-300 hover:text-cyan-400 transition-colors">+92 (333) 049 3333</a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@veksol.com" className="text-gray-300 hover:text-cyan-400 transition-colors">info@veksol.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="text-center mb-16">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://veksol.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Vektor Home
                            </a>
                            <a
                                href="https://vektorbilling.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Vektor Billing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="bg-black py-8 border-t border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img 
                                src="/images/logo.png" 
                                alt="Vektor Solutions Footer Logo" 
                                className="h-12 mr-4 opacity-70"
                            />
                            <div>
                                <p className="text-gray-500 text-sm">
                                    &copy; {new Date().getFullYear()} Vektor Solutions. All Rights Reserved.
                                </p>
                                <p className="text-gray-600 text-xs">
                                    Crafting the future, one line of code at a time.
                                </p>
                            </div>
                        </div>
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
                            <a 
                                href="https://wa.me/19293425044" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
