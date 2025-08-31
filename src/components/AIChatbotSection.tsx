import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SERVICES } from '../constants';

const TypingBubble: React.FC<{ text: string, delay: number, isVisible: boolean }> = ({ text, delay, isVisible }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (isVisible) {
            setDisplayedText(''); // Reset on re-trigger
            setTimeout(() => {
                let i = 0;
                const interval = setInterval(() => {
                    setDisplayedText(text.substring(0, i + 1));
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                    }
                }, 50);
                return () => clearInterval(interval);
            }, delay);
        }
    }, [isVisible, text, delay]);

    return (
         <div className="bg-cyan-500 text-black p-3 rounded-lg rounded-bl-none max-w-xs shadow-md">
            {displayedText}
            <span className="inline-block w-1 h-4 bg-black/70 animate-pulse ml-1"></span>
        </div>
    );
};


const AIChatbotSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const service = SERVICES[2];

    return (
        <section id="ai-chatbot" className="py-20 md:py-32 bg-black overflow-hidden">
            <div ref={ref} className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-80 flex flex-col justify-center items-start space-y-4 p-4">
                        {/* Chat Bubbles */}
                        <div className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                            <div className="bg-gray-700 text-white p-3 rounded-lg rounded-br-none max-w-xs">
                                I need help with my order.
                            </div>
                        </div>

                        <div className={`self-end transition-all duration-500 ease-out delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
                             {isVisible && <TypingBubble text="Of course! What's your order number?" delay={1000} isVisible={isVisible} />}
                        </div>
                        
                        <div className={`transition-all duration-500 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{transitionDelay: '3000ms'}}>
                            <div className="bg-gray-700 text-white p-3 rounded-lg rounded-br-none max-w-xs">
                                It's #12345.
                            </div>
                        </div>
                    </div>
                     <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex items-center mb-4">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-cyan-400 mr-4" })}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h2>
                        </div>
                        <p className="text-gray-400 mb-6">{service.description}</p>

                        <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Features</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">24/7 Availability</h4>
                                    <p className="text-gray-500">Provide instant, round-the-clock support to your customers, answering queries even when your team is offline.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Multi-platform Integration</h4>
                                    <p className="text-gray-500">Deploy your chatbot across your website, social media, and messaging apps for a consistent user experience.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Natural Language Processing</h4>
                                    <p className="text-gray-500">Advanced NLP allows our chatbots to understand context, handle complex conversations, and learn over time.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIChatbotSection;
