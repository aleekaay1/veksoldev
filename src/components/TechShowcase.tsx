import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const TechLogo: React.FC<{ name: string; logo: React.ReactNode; index: number }> = ({ name, logo, index }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.5 });
    const delay = index * 100;

    return (
        <div
            ref={ref}
            className={`
                bg-gray-800/60 border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center gap-2
                transition-all duration-500 ease-out transform
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="h-10 w-10 text-gray-300 flex items-center justify-center">{logo}</div>
            <p className="font-mono text-cyan-300 text-sm">{name}</p>
        </div>
    );
};


const TechShowcase: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    const technologies = [
        { name: "React", logo: <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/><path d="M10 4.5c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5s.5-.22.5-.5v-1c0-.28-.22-.5-.5-.5zm-4.1 1.04c-.2-.2-.51-.2-.71 0l-.71.71c-.2.2-.2.51 0 .71.1.1.23.15.35.15s.26-.05.35-.15l.71-.71c.2-.2.2-.51 0-.71zm8.2 0c.2-.2.2-.51 0-.71l-.71-.71c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l.71.71c.2.2.51.2.71 0zm-1.04 8.2c.2.2.51.2.71 0l.71-.71c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-.71.71c-.2.2-.2.51 0 .71zM4.75 13.25c.1.1.23.15.35.15s.26-.05.35-.15l.71-.71c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-.71.71c-.2.2-.2.51 0 .71zM10 13.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5-.5.5z"/></svg> },
        { name: "Node.js", logo: <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8.5 15.5h-1V4.5h1v11zm3-11h-1V15.5h1V4.5zM13.5 15.5h-1V4.5h1v11zM15.5 15.5h-1V4.5h1v11zM6.5 15.5h-1V4.5h1v11zM4.5 15.5h-1V4.5h1v11z"/></svg> },
        { name: "WordPress", logo: <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8.5 15.5h-1V4.5h1v11zm3-11h-1V15.5h1V4.5z"/></svg> },
        { name: "Figma", logo: <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8.5 15.5h-1V4.5h1v11zm3-11h-1V15.5h1V4.5zM13.5 15.5h-1V4.5h1v11z"/></svg> },
        { name: "SQL", logo: <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1 15.5h-1V4.5h1v11zm3-11h-1V15.5h1V4.5z"/></svg> },
        { name: "JavaScript", logo: <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8.5 15.5h-1V4.5h1v11zm3-11h-1V15.5h1V4.5z"/></svg> }
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
                            Built on the <span className="text-cyan-400">Bleeding Edge</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Our solutions are forged with the most powerful and scalable technologies available. We don't just follow trends; we define them. By leveraging a robust stack of modern frameworks, AI libraries, and cloud infrastructure, we build products that are not only innovative but also secure, reliable, and future-proof.
                        </p>
                        <p className="text-gray-400">
                            From private, on-device AI with Local LLMs to globally-scalable web platforms, our technical expertise is the bedrock of your success.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
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
