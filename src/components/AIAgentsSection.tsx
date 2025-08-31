import React, { useState } from 'react';
import { SERVICES } from '../constants';

const AIAgentsSection: React.FC = () => {
    const service = SERVICES[1];
    const [isHovered, setIsHovered] = useState(false);
    const [hasBeenHovered, setHasBeenHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setHasBeenHovered(true);
    };

    return (
        <section id="ai-agents" className="py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="transition-all duration-700 ease-out">
                        <div className="flex items-center mb-4">
                            {React.cloneElement(service.icon, { className: "w-12 h-12 text-cyan-400 mr-4" })}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h2>
                        </div>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Core Capabilities</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Process Automation</h4>
                                    <p className="text-gray-500">Eliminate repetitive manual tasks, reduce human error, and free up your team for more strategic work.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Data Analysis & Insights</h4>
                                    <p className="text-gray-500">Our agents can sift through vast amounts of data to identify trends, predict outcomes, and provide actionable insights.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Seamless API Integration</h4>
                                    <p className="text-gray-500">We integrate our AI agents with your existing software and tools to create a unified, intelligent ecosystem.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                     <div 
                        className="relative w-full h-96 flex items-center justify-center cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={() => setIsHovered(false)}
                     >
                        {!hasBeenHovered && (
                            <p className={`absolute z-20 font-mono text-white/50 animate-pulse pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                Hover Me
                            </p>
                        )}

                        <svg viewBox="65 30 320 240" className="w-full h-full overflow-visible">
                            <defs>
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Lines */}
                            <path d="M 125 150 H 175" fill="none" stroke="#06b6d4" strokeWidth="2" className="transition-all duration-500 ease-out" strokeDasharray="50" style={{ strokeDashoffset: isHovered ? 0 : 50, transitionDelay: '100ms' }} />
                            <path d="M 225 150 H 275" fill="none" stroke="#06b6d4" strokeWidth="2" className="transition-all duration-500 ease-out" strokeDasharray="50" style={{ strokeDashoffset: isHovered ? 0 : 50, transitionDelay: '200ms' }} />
                            <path d="M 300 150 L 325 110" fill="none" stroke="#06b6d4" strokeWidth="2" className="transition-all duration-500 ease-out" strokeDasharray="50" style={{ strokeDashoffset: isHovered ? 0 : 50, transitionDelay: '300ms' }} />
                            <path d="M 300 150 L 325 190" fill="none" stroke="#06b6d4" strokeWidth="2" className="transition-all duration-500 ease-out" strokeDasharray="50" style={{ strokeDashoffset: isHovered ? 0 : 50, transitionDelay: '300ms' }} />

                            {/* Nodes */}
                            {/* Input */}
                            <g className="transition-all duration-500 ease-out" style={{ transform: isHovered ? 'translate(0, 0) scale(1)' : 'translate(80px, 0) scale(0)', opacity: isHovered ? 1 : 0, transitionDelay: '100ms' }}>
                                <circle cx="100" cy="150" r="25" fill="#083344" stroke="#06b6d4" strokeWidth="2" />
                                <text x="100" y="155" textAnchor="middle" fill="#22d3ee" fontSize="11" className="font-sans font-bold">Input</text>
                            </g>

                            {/* Decision */}
                            <g className="transition-all duration-500 ease-out" style={{ transform: isHovered ? 'translate(0, 0) scale(1)' : 'translate(-80px, 0) scale(0)', opacity: isHovered ? 1 : 0, transitionDelay: '200ms' }}>
                                <rect x="275" y="125" width="50" height="50" rx="5" fill="#083344" stroke="#06b6d4" strokeWidth="2" style={{ transform: 'rotate(45deg)', transformOrigin: '300px 150px' }}/>
                                <text x="300" y="155" textAnchor="middle" fill="#22d3ee" fontSize="11" className="font-sans font-bold">Decision</text>
                            </g>
                             
                            {/* Task 1 */}
                            <g className="transition-all duration-500 ease-out" style={{ transform: isHovered ? 'translate(0, 0) scale(1)' : 'translate(-125px, 40px) scale(0)', opacity: isHovered ? 1 : 0, transitionDelay: '300ms' }}>
                                <circle cx="350" cy="110" r="25" fill="#083344" stroke="#06b6d4" strokeWidth="2" />
                                <text x="350" y="115" textAnchor="middle" fill="#22d3ee" fontSize="11" className="font-sans font-bold">Task A</text>
                            </g>

                            {/* Task 2 */}
                             <g className="transition-all duration-500 ease-out" style={{ transform: isHovered ? 'translate(0, 0) scale(1)' : 'translate(-125px, -40px) scale(0)', opacity: isHovered ? 1 : 0, transitionDelay: '300ms' }}>
                                <circle cx="350" cy="190" r="25" fill="#083344" stroke="#06b6d4" strokeWidth="2" />
                                <text x="350" y="195" textAnchor="middle" fill="#22d3ee" fontSize="11" className="font-sans font-bold">Task B</text>
                            </g>
                            
                            {/* Central Brain */}
                            <g 
                                className="transition-transform duration-300 ease-out" 
                                style={{ 
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                    transformOrigin: '200px 150px' 
                                }}
                            >
                                <circle cx="200" cy="150" r="25" fill="#083344" stroke="#22d3ee" strokeWidth="2" style={{ filter: 'url(#glow)' }} />
                                <text x="200" y="155" textAnchor="middle" fill="#93c5fd" fontSize="12" className="font-sans font-bold">AI Brain</text>
                            </g>
                        </svg>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default AIAgentsSection;
