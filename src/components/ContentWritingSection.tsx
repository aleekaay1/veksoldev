import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';

const ContentWritingSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const service = SERVICES[5];

    // SEO data points with their positions and information
    const seoDataPoints = [
        {
            id: 'research',
            x: 100,
            y: 200,
            stage: 'Research Phase',
            tags: ['Keyword Research', 'Competitor Analysis', 'Content Gap Analysis'],
            metrics: { difficulty: 'Medium', volume: 'High', cpc: '$2.50' }
        },
        {
            id: 'onpage',
            x: 200,
            y: 150,
            stage: 'On-Page Optimization',
            tags: ['Meta Tags', 'Content Optimization', 'Internal Linking'],
            metrics: { difficulty: 'Low', volume: 'Medium', cpc: '$1.80' }
        },
        {
            id: 'technical',
            x: 250,
            y: 120,
            stage: 'Technical SEO',
            tags: ['Site Speed', 'Mobile Optimization', 'Schema Markup'],
            metrics: { difficulty: 'High', volume: 'High', cpc: '$3.20' }
        },
        {
            id: 'content',
            x: 300,
            y: 80,
            stage: 'Content Strategy',
            tags: ['Blog Posts', 'Infographics', 'Video Content'],
            metrics: { difficulty: 'Medium', volume: 'Very High', cpc: '$2.10' }
        },
        {
            id: 'ranking',
            x: 350,
            y: 60,
            stage: 'Ranking Achievement',
            tags: ['Top 3 Position', 'Featured Snippets', 'Local Pack'],
            metrics: { difficulty: 'Very High', volume: 'Extreme', cpc: '$5.00' }
        }
    ];

    const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    };

    const handlePointHover = (pointId: string) => {
        setHoveredPoint(pointId);
    };

    const handlePointLeave = () => {
        setHoveredPoint(null);
    };

    const getCurrentPoint = () => {
        return seoDataPoints.find(point => point.id === hoveredPoint);
    };

    return (
        <section id="seo-services" className="py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
            <div ref={ref} className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center mb-4">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-cyan-400 mr-4" })}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h2>
                        </div>
                        <p className="text-gray-400 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Our SEO Services</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Local SEO</h4>
                                    <p className="text-gray-500">Dominate local search results and attract customers in your geographical area with targeted strategies.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">On-Page & Off-Page SEO</h4>
                                    <p className="text-gray-500">A comprehensive approach covering everything on your site and building your authority across the web.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Guest Posting & Link Building</h4>
                                    <p className="text-gray-500">We secure high-quality backlinks and placements on authoritative sites to boost your domain rating.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                               <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Website Optimization</h4>
                                    <p className="text-gray-500">Improving site speed, mobile-friendliness, and technical SEO factors to enhance user experience and rankings.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Interactive SEO Graph */}
                    <div className="relative w-full h-96 flex items-center justify-center p-4">
                        <svg 
                            viewBox="0 0 400 300" 
                            className="w-full h-full cursor-pointer"
                            onMouseMove={handleMouseMove}
                        >
                            {/* Background Grid */}
                            <defs>
                                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1f2937" strokeWidth="0.5" opacity="0.3"/>
                                </pattern>
                            </defs>
                            <rect width="400" height="300" fill="url(#grid)" />
                            
                            {/* Axis */}
                            <path d="M 50 250 L 50 50" stroke="#374151" strokeWidth="2" />
                            <path d="M 50 250 L 350 250" stroke="#374151" strokeWidth="2" />
                            <text x="35" y="60" textAnchor="end" fill="#6b7280" className="text-sm font-mono">Traffic</text>
                            <text x="340" y="270" textAnchor="end" fill="#6b7280" className="text-sm font-mono">Time</text>
                            
                            {/* Growth Line */}
                            <path
                                d="M 50 250 Q 150 200, 250 100 T 350 60"
                                fill="none"
                                stroke="#22d3ee"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="transition-all duration-[2000ms] ease-out"
                                style={{
                                    strokeDasharray: 500,
                                    strokeDashoffset: isVisible ? 0 : 500,
                                    filter: 'drop-shadow(0 0 5px #22d3ee)'
                                }}
                            />

                            {/* Interactive Data Points */}
                            {seoDataPoints.map((point, index) => (
                                <g key={point.id}>
                                    {/* Hover Area */}
                                    <circle
                                        cx={point.x}
                                        cy={point.y}
                                        r="20"
                                        fill="transparent"
                                        onMouseEnter={() => handlePointHover(point.id)}
                                        onMouseLeave={handlePointLeave}
                                        className="cursor-pointer"
                                    />
                                    
                                    {/* Data Point */}
                                    <circle
                                        cx={point.x}
                                        cy={point.y}
                                        r="8"
                                        fill={hoveredPoint === point.id ? "#22d3ee" : "#083344"}
                                        stroke={hoveredPoint === point.id ? "#ffffff" : "#22d3ee"}
                                        strokeWidth={hoveredPoint === point.id ? "3" : "2"}
                                        className="transition-all duration-300 ease-out"
                                        style={{
                                            filter: hoveredPoint === point.id ? 'drop-shadow(0 0 8px #22d3ee)' : 'none'
                                        }}
                                    />
                                    
                                    {/* Pulse Effect on Hover */}
                                    {hoveredPoint === point.id && (
                                        <circle
                                            cx={point.x}
                                            cy={point.y}
                                            r="25"
                                            fill="none"
                                            stroke="#22d3ee"
                                            strokeWidth="1"
                                            opacity="0.6"
                                            className="animate-ping"
                                        />
                                    )}
                                </g>
                            ))}

                            {/* SEO Tags and Stages Tooltip */}
                            {hoveredPoint && (
                                <g className="pointer-events-none">
                                    {/* Tooltip Background */}
                                    <rect
                                        x={mousePosition.x + 20}
                                        y={mousePosition.y - 80}
                                        width="280"
                                        height="160"
                                        rx="8"
                                        fill="#0f172a"
                                        stroke="#22d3ee"
                                        strokeWidth="2"
                                        opacity="0.95"
                                        className="drop-shadow-2xl"
                                    />
                                    
                                    {/* Stage Title */}
                                    <text
                                        x={mousePosition.x + 35}
                                        y={mousePosition.y - 55}
                                        fill="#22d3ee"
                                        className="font-bold text-sm"
                                        fontSize="14"
                                    >
                                        {getCurrentPoint()?.stage}
                                    </text>
                                    
                                    {/* SEO Tags */}
                                    <text
                                        x={mousePosition.x + 35}
                                        y={mousePosition.y - 35}
                                        fill="#ffffff"
                                        className="font-semibold text-xs"
                                        fontSize="12"
                                    >
                                        SEO Tags:
                                    </text>
                                    
                                    {getCurrentPoint()?.tags.map((tag, index) => (
                                        <text
                                            key={index}
                                            x={mousePosition.x + 35}
                                            y={mousePosition.y - 20 + (index * 15)}
                                            fill="#94a3b8"
                                            className="text-xs"
                                            fontSize="11"
                                        >
                                            • {tag}
                                        </text>
                                    ))}
                                    
                                    {/* Metrics */}
                                    <text
                                        x={mousePosition.x + 35}
                                        y={mousePosition.y + 20}
                                        fill="#ffffff"
                                        className="font-semibold text-xs"
                                        fontSize="12"
                                    >
                                        Metrics:
                                    </text>
                                    
                                    <text
                                        x={mousePosition.x + 35}
                                        y={mousePosition.y + 35}
                                        fill="#94a3b8"
                                        className="text-xs"
                                        fontSize="11"
                                    >
                                        Difficulty: {getCurrentPoint()?.metrics.difficulty}
                                    </text>
                                    
                                    <text
                                        x={mousePosition.x + 35}
                                        y={mousePosition.y + 50}
                                        fill="#94a3b8"
                                        className="text-xs"
                                        fontSize="11"
                                    >
                                        Volume: {getCurrentPoint()?.metrics.volume}
                                    </text>
                                    
                                    <text
                                        x={mousePosition.x + 35}
                                        y={mousePosition.y + 65}
                                        fill="#94a3b8"
                                        className="text-xs"
                                        fontSize="11"
                                    >
                                        CPC: {getCurrentPoint()?.metrics.cpc}
                                    </text>
                                </g>
                            )}
                        </svg>
                        
                        {/* Instructions */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                            <p className="text-xs text-gray-500 font-mono">
                                Hover over the graph points to see SEO stages & tags
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentWritingSection;
