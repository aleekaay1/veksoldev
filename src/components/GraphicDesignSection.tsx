import React, { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';
import FaviconCorner from './FaviconCorner';

const GraphicDesignSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const service = SERVICES[4];

    // State for interaction
    const [brushPosition, setBrushPosition] = useState<{ x: number; y: number } | null>(null);
    const [scratchedPath, setScratchedPath] = useState('');
    const [isOverCanvas, setIsOverCanvas] = useState(false);
    
    // Refs for DOM elements
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    
    // Effect to reset animation when it scrolls into view
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setScratchedPath('');
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setBrushPosition(null);
        }
    }, [isVisible]);
    
    // Mouse move handler on the parent container
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !svgRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const brushX = e.clientX - containerRect.left;
        const brushY = e.clientY - containerRect.top;
        setBrushPosition({ x: brushX, y: brushY });

        if (isOverCanvas) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const svgX = e.clientX - svgRect.left;
            const svgY = e.clientY - svgRect.top;

            const viewBoxSize = 200;
            const scale = viewBoxSize / svgRect.width;
            const pathX = svgX * scale;
            const pathY = svgY * scale;
            
            setScratchedPath(prev => {
                const command = prev.trim() === '' ? 'M' : 'L';
                return `${prev} ${command} ${pathX.toFixed(2)} ${pathY.toFixed(2)}`;
            });
        }
    };
    
    const handleMouseLeaveContainer = () => {
        setBrushPosition(null);
        setIsOverCanvas(false);
    };

    return (
        <section id="graphic-design" className="py-20 md:py-32 bg-black overflow-hidden relative">
            <FaviconCorner />
            <div ref={ref} className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div 
                        ref={containerRef}
                        className="relative w-full h-96 flex items-center justify-center select-none"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeaveContainer}
                        style={{ cursor: 'none' }}
                     >
                        {/* Easel Structure */}
                        <div className="absolute w-80 h-80 flex items-center justify-center pointer-events-none">
                            <div className={`absolute w-2 h-96 bg-yellow-900/80 -rotate-12 top-[-20px] left-[75px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}></div>
                            <div className={`absolute w-2 h-96 bg-yellow-900/80 rotate-12 top-[-20px] right-[75px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}></div>
                            <div className={`absolute w-80 h-2 bg-yellow-900/80 bottom-[75px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
                        </div>

                        {/* Interactive Canvas SVG */}
                        <svg 
                            ref={svgRef}
                            viewBox="0 0 200 200" 
                            className={`w-72 h-72 touch-none relative z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            onMouseEnter={() => setIsOverCanvas(true)}
                            onMouseLeave={() => setIsOverCanvas(false)}
                        >
                            <defs>
                                <mask id="scratchMask">
                                    {/* Start with the mask being fully white (visible) */}
                                    <rect x="0" y="0" width="200" height="200" fill="white" />
                                    {/* Draw black lines where the user scratches, making those parts of the mask transparent */}
                                    <path 
                                        d={scratchedPath}
                                        stroke="black" 
                                        strokeWidth="35" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        fill="none"
                                        className="transition-opacity duration-300"
                                        style={{opacity: isVisible ? 1 : 0}}
                                    />
                                </mask>
                            </defs>
                            
                            {/* Layer 1: The hidden content (Logo on black background) */}
                            <rect x="10" y="10" width="180" height="180" rx="5" fill="black" />
                            <image 
                                href="/images/favicon.png" 
                                x="15" y="15" width="170" height="170" 
                                preserveAspectRatio="xMidYMid meet"
                            />

                            {/* Layer 2: The scratchable gray layer on top */}
                             <rect 
                                x="10" y="10" width="180" height="180" rx="5" 
                                className="fill-gray-700" 
                                mask="url(#scratchMask)" 
                            />
                        </svg>
                        
                        {/* Floating Brush Element */}
                        {brushPosition && isVisible && (
                             <div 
                                className="absolute top-0 left-0 pointer-events-none z-20"
                                style={{
                                    transform: `translate(${brushPosition.x}px, ${brushPosition.y}px) rotate(45deg)`,
                                    transformOrigin: 'top left',
                                }}
                            >
                                <svg width="120" height="20" style={{ transform: 'translate(-88px, -6px) scale(0.8)' }}>
                                    <g>
                                        <rect x="0" y="0" width="80" height="15" rx="5" fill="#a16207" />
                                        <rect x="80" y="-2" width="10" height="19" fill="#a8a29e" />
                                        <path d="M90 0 L 110 7.5 L 90 15 Z" fill="#4b5563" />
                                    </g>
                                </svg>
                            </div>
                        )}
                        
                        {/* "Scratch to Reveal" Prompt */}
                        {!brushPosition && isVisible && (
                            <p className="absolute z-20 font-mono text-white/50 animate-pulse pointer-events-none">
                                Scratch to Reveal
                            </p>
                        )}
                    </div>

                    {/* Service Description */}
                     <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center mb-4">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-cyan-400 mr-4" })}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h2>
                        </div>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">What We Create</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Logo & Branding Identity</h4>
                                    <p className="text-gray-500">We craft memorable logos and comprehensive brand guides that form the foundation of your visual identity.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">UI/UX for Applications</h4>
                                    <p className="text-gray-500">Designing beautiful and functional interfaces for web and mobile applications that delight users.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 010-2.828L14 8M12 12l-2 2m2-2l2 2m-2-2l-2-2m2 2l2-2M3 12l6.414 6.414a2 2 0 002.828 0L21 12" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Marketing & Social Materials</h4>
                                    <p className="text-gray-500">Eye-catching graphics for social media campaigns, presentations, and marketing collateral that drive engagement.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraphicDesignSection;
