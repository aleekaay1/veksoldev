import React, { useState, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';
import FaviconCorner from './FaviconCorner';

const ContentWritingSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const [clickedTag, setClickedTag] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const service = SERVICES[5];

    // SEO tags with different colors and categories
    const seoTags = [
        { id: 'meta', text: 'Meta Tags', color: '#22d3ee', category: 'On-Page', description: 'Title, description, and meta information' },
        { id: 'keywords', text: 'Keywords', color: '#f59e0b', category: 'Research', description: 'Target keywords and search terms' },
        { id: 'schema', text: 'Schema', color: '#8b5cf6', category: 'Technical', description: 'Structured data markup' },
        { id: 'alt', text: 'Alt Text', color: '#10b981', category: 'On-Page', description: 'Image accessibility and SEO' },
        { id: 'headings', text: 'H1-H6', color: '#ef4444', category: 'Content', description: 'Heading hierarchy and structure' },
        { id: 'links', text: 'Internal Links', color: '#06b6d4', category: 'Navigation', description: 'Site structure and user flow' },
        { id: 'speed', text: 'Page Speed', color: '#f97316', category: 'Technical', description: 'Core Web Vitals optimization' },
        { id: 'mobile', text: 'Mobile First', color: '#84cc16', category: 'Technical', description: 'Responsive design and mobile optimization' },
        { id: 'core', text: 'Core Web Vitals', color: '#ec4899', category: 'Performance', description: 'LCP, FID, and CLS metrics' },
        { id: 'backlinks', text: 'Backlinks', color: '#6366f1', category: 'Off-Page', description: 'External authority and trust signals' }
    ];

    const handleTagClick = (tagId: string) => {
        setClickedTag(clickedTag === tagId ? null : tagId);
    };

    const getCurrentTag = () => {
        return seoTags.find(tag => tag.id === clickedTag);
    };

    return (
        <section id="seo-services" className="py-20 md:py-32 bg-[#0a0a0a] overflow-hidden relative">
            <FaviconCorner />
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
                    
                    {/* Interactive SEO Tags Animation */}
                    <div className="relative w-full h-96 flex items-center justify-center">
                        <div 
                            ref={containerRef}
                            className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl border border-gray-700 overflow-hidden"
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 25% 25%, #22d3ee 2px, transparent 2px)`,
                                    backgroundSize: '50px 50px'
                                }}></div>
                            </div>

                            {/* Floating SEO Tags */}
                            {seoTags.map((tag, index) => (
                                <div
                                    key={tag.id}
                                    className={`absolute cursor-pointer transition-all duration-700 ease-out transform ${
                                        clickedTag === tag.id 
                                            ? 'scale-125 z-20' 
                                            : clickedTag 
                                                ? 'scale-90 opacity-40' 
                                                : 'scale-100 opacity-80'
                                    }`}
                                    style={{
                                        left: `${30 + (index % 3) * 110}px`,
                                        top: `${50 + Math.floor(index / 3) * 85}px`,
                                        animationDelay: `${index * 0.2}s`
                                    }}
                                    onClick={() => handleTagClick(tag.id)}
                                >
                                    {/* Tag Background with Glow */}
                                    <div 
                                        className="relative px-3 py-2 rounded-lg border-2 font-mono font-bold text-xs transition-all duration-500 text-center min-w-[80px]"
                                style={{
                                            color: tag.color,
                                            borderColor: tag.color,
                                            backgroundColor: `${tag.color}15`,
                                            boxShadow: clickedTag === tag.id 
                                                ? `0 0 30px ${tag.color}80, 0 0 60px ${tag.color}40` 
                                                : `0 0 15px ${tag.color}40`
                                        }}
                                    >
                                        {/* Floating Animation */}
                                        <div className={`${isVisible ? 'animate-bounce' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                                            {tag.text}
                                        </div>
                                        
                                        {/* Click Effect Ring */}
                                        {clickedTag === tag.id && (
                                            <div 
                                                className="absolute inset-0 rounded-lg animate-ping"
                                                style={{
                                                    backgroundColor: tag.color,
                                                    opacity: 0.3
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Click Info Panel - Right Side Vertical Rectangle */}
                            {clickedTag && (
                                <div className="absolute right-4 top-4 bottom-4 w-64 bg-gray-900/95 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-4 transition-all duration-500 ease-out overflow-y-auto">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div 
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: getCurrentTag()?.color }}
                                        ></div>
                                        <span className="text-cyan-400 font-bold text-xl">
                                            {getCurrentTag()?.text}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
                                            {getCurrentTag()?.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {getCurrentTag()?.description}
                                    </p>
                                </div>
                            )}

                            {/* Instructions */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                                <p className="text-xs text-gray-500 font-mono bg-black/50 px-3 py-1 rounded-full">
                                    {clickedTag ? 'Explore SEO elements' : 'Click tags to learn more'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentWritingSection;
