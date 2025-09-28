import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import FaviconCorner from './FaviconCorner';

const CTA: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

    return (
        <section id="contact" className="py-24 md:py-40 bg-[#0a0a0a] relative">
            <FaviconCorner />
            <div ref={ref} className="container mx-auto px-6 text-center">
                <div className={`
                    bg-gradient-to-r from-cyan-500/80 to-purple-600/80 rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-500/20
                    transition-all duration-1000 ease-in-out transform
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-8">
                        Let's turn your vision into a reality. We're ready to build the next big thing with you.
                    </p>
                    <a
                        href="https://veksol.com/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:shadow-white/50 transform hover:-translate-y-1 text-lg inline-block"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
