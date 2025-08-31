import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';

const ContentWritingSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const service = SERVICES[5];

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
                    <div className="relative w-full h-96 flex items-center justify-center p-4">
                        <svg viewBox="0 0 400 300" className="w-full h-full">
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

                            {/* Ranking Bubble */}
                            <g className={`transition-all duration-1000 ease-in-out delay-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <circle cx="350" cy="60" r="25" fill="#083344" stroke="#22d3ee" strokeWidth="2" />
                                <text x="350" y="65" textAnchor="middle" fill="#fff" className="font-bold text-lg">#1</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentWritingSection;
