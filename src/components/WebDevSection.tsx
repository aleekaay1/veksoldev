import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';
import FaviconCorner from './FaviconCorner';

const WebDevSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const service = SERVICES[0];
    const [isHovered, setIsHovered] = useState(false);
    const [hasBeenHovered, setHasBeenHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setHasBeenHovered(true);
    };

    return (
        <section id="services" className="py-20 md:py-32 bg-black overflow-hidden relative">
            <FaviconCorner />
            <div ref={ref} className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Interactive Animation Container */}
                    <div
                        className="relative w-full h-80 flex items-center justify-center cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Prompt */}
                        {!hasBeenHovered && isVisible && (
                             <p className={`absolute z-20 font-mono text-white/50 animate-pulse pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                Hover Me
                            </p>
                        )}
                        
                        {/* Base Layer for shadow/depth */}
                        <div className={`absolute w-72 h-48 bg-gray-800/30 rounded-lg border border-gray-700 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}></div>

                        {/* JS Layer (Front) */}
                        <div className={`absolute w-64 h-40 bg-gray-900 border-2 border-yellow-400/50 rounded-lg p-4 flex flex-col justify-between transition-all duration-500 ease-in-out transform-gpu ${isHovered ? 'translate-x-24 rotate-12 scale-105 shadow-2xl shadow-yellow-500/20' : 'translate-x-4 translate-y-4 rotate-6'}`}>
                            <p className="font-mono text-yellow-400 text-xs">{`// Logic & Interactivity`}</p>
                            <p className={`font-mono text-yellow-400 text-sm self-end transition-all duration-300 delay-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>{`() => animate()`}</p>
                        </div>

                        {/* CSS Layer (Middle) */}
                         <div className={`absolute w-64 h-40 bg-gray-900/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-lg p-4 flex flex-col justify-between transition-all duration-500 ease-in-out transform-gpu ${isHovered ? '-translate-y-5 scale-110 shadow-2xl shadow-purple-500/20 z-10' : 'z-0'}`}>
                            <p className="font-mono text-purple-400 text-xs">{`/* Style & Appearance */`}</p>
                             <div className={`transition-all duration-300 delay-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <p className="font-mono text-purple-400 text-sm">{`.style {`}</p>
                                <p className="font-mono text-purple-400 text-sm pl-4">{`color: #fff;`}</p>
                                <p className="font-mono text-purple-400 text-sm">{`}`}</p>
                             </div>
                        </div>

                        {/* HTML Layer (Back) */}
                        <div className={`absolute w-64 h-40 bg-gray-900 border-2 border-cyan-400/50 rounded-lg p-4 flex flex-col justify-between transition-all duration-500 ease-in-out transform-gpu ${isHovered ? '-translate-x-24 -rotate-12 scale-105 shadow-2xl shadow-cyan-500/20' : '-translate-x-4 -translate-y-4 -rotate-6'}`}>
                            <p className="font-mono text-cyan-400 text-xs">{`<!-- Structure & Content -->`}</p>
                            <div className={`transition-all duration-300 delay-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <div className="w-3/4 h-2 bg-cyan-400/50 rounded mt-2"></div>
                                <div className="w-1/2 h-2 bg-cyan-400/50 rounded mt-2"></div>
                                <div className="w-2/3 h-2 bg-cyan-400/50 rounded mt-2"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center mb-4">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-cyan-400 mr-4" })}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h2>
                        </div>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Approach</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Responsive Design</h4>
                                    <p className="text-gray-500">Flawless performance and aesthetics on any device, from mobile phones to widescreen desktops.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Performance Optimization</h4>
                                    <p className="text-gray-500">Blazing-fast load times and smooth interactions that keep users engaged and improve SEO ranking.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Intuitive UX/UI</h4>
                                    <p className="text-gray-500">Human-centered design that is not only beautiful but also easy to navigate and a joy to use.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevSection;
