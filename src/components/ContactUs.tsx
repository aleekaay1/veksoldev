import React from 'react';
import FaviconCorner from './FaviconCorner';
import Header from './Header';
import Footer from './Footer';

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
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
