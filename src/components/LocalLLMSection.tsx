import React, { useState, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';
import MatrixAnimation from './animations/MatrixAnimation';

const LocalLLMSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const service = SERVICES[3];
    
    // State for flashlight effect
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
        });
    };
    
    const handleMouseLeave = () => {
        setMousePosition(null);
    };

    return (
        <section id="local-llm" className="py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            <div ref={ref} className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center mb-4">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-cyan-400 mr-4" })}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h2>
                        </div>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Core Benefits</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Maximum Data Security</h4>
                                    <p className="text-gray-500">Your sensitive data never leaves your infrastructure, ensuring complete privacy and compliance.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Full Offline Capability</h4>
                                    <p className="text-gray-500">Operate your powerful AI applications without needing a constant internet connection.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Fine-Tuned Custom Models</h4>
                                    <p className="text-gray-500">We train and fine-tune models on your specific data, creating a highly specialized AI for your unique needs.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div 
                        ref={containerRef}
                        className="relative w-full h-80 bg-black border border-cyan-900/50 rounded-lg overflow-hidden cursor-none"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isVisible && <MatrixAnimation />}
                        {/* Flashlight mask overlay */}
                        <div
                            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: mousePosition
                                    ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`
                                    : 'black',
                                opacity: 1,
                            }}
                        />
                        {/* Prompt */}
                        {!mousePosition && isVisible && (
                             <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-white/50 animate-pulse pointer-events-none">
                                Explore
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalLLMSection;
