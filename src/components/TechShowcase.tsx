import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const TechLogo: React.FC<{ name: string; logo: React.ReactNode; index: number }> = ({ logo, index }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.5 });
    const delay = index * 100;

    return (
        <div
            ref={ref}
            className={`
                flex items-center justify-center
                transition-all duration-500 ease-out transform
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="h-32 w-32 text-gray-300 flex items-center justify-center">{logo}</div>
        </div>
    );
};


const TechShowcase: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    const technologies = [
        { 
            name: "React", 
            logo: <img src="https://img.icons8.com/carbon_copy/512/EBEBEB/react.png" alt="React" className="w-full h-full object-contain" />
        },
        { 
            name: "Node.js", 
            logo: <img src="https://nodejs.org/download/release/v0.10.39/docs/api/assets/logo.svg" alt="Node.js" className="w-full h-full object-contain" />
        },
        { 
            name: "WordPress", 
            logo: <img src="https://s.w.org/style/images/about/WordPress-logotype-alternative-white.png" alt="WordPress" className="w-full h-full object-contain" />
        },
        { 
            name: "Figma", 
            logo: <img src="https://static.vecteezy.com/system/resources/previews/065/386/862/non_2x/figma-white-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png" alt="Figma" className="w-full h-full object-contain" />
        },
        { 
            name: "SQL", 
            logo: <img src="https://software.3metas.com/wp-content/uploads/2017/06/microsoftsqlBE.png" alt="SQL" className="w-full h-full object-contain" />
        },
        { 
            name: "OpenAI", 
            logo: <img src="https://ai.ls/assets/openai-logos/SVGs/openai-white-lockup.svg" alt="OpenAI" className="w-full h-full object-contain" />
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-circuit-board opacity-5 z-0"></div>
            <div
                className={`absolute -bottom-1/3 -left-1/4 w-full h-full bg-cyan-500/10 rounded-full blur-[150px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            ></div>
            <div
                className={`absolute -top-1/3 -right-1/4 w-full h-full bg-purple-600/10 rounded-full blur-[150px] transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            ></div>

            <div ref={ref} className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            <span className="text-cyan-400">INNOVATE</span>, <span className="text-cyan-400">CALIBRATE</span>, <span className="text-cyan-400">AUTOMATE</span> & <span className="text-cyan-400">ACCELERATE</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            We are the engine that powers your digital future, fueled by our finest human resources and the latest AI tools. We envision, design, and create optimized digital ecosystems that ensure an innovative and seamless IT platform.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
                       {technologies.map((tech, index) => (
                           <TechLogo key={tech.name} name={tech.name} logo={tech.logo} index={index} />
                       ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechShowcase;
