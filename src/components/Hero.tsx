import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.color = color;
            }

            draw() {
                if(!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

                this.x += this.speedX;
                this.y += this.speedY;

                // mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        this.x -= dx / 20;
                        this.y -= dy / 20;
                    }
                }
                
                this.draw();
            }
        }
        
        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const color = 'rgba(0, 255, 255, 0.8)';
                const speedX = (Math.random() - 0.5) * 0.5;
                const speedY = (Math.random() - 0.5) * 0.5;
                
                const x = Math.random() * (window.innerWidth - size * 2) + size;
                const y = Math.random() * (window.innerHeight - size * 2) + size;

                particles.push(new Particle(x, y, size, speedX, speedY, color));
            }
        };

        const connect = () => {
            if(!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                                   + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacityValue * 0.8})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if(!ctx) return;
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (const particle of particles) {
                particle.update();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        init();
        animate();

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };
        
        const handleMouseClick = (event: MouseEvent) => {
            for (let i = 0; i < 15; i++) {
                const size = Math.random() * 3 + 1.5;
                const x = event.clientX + (Math.random() - 0.5) * 10;
                const y = event.clientY + (Math.random() - 0.5) * 10;
                const speedX = (Math.random() - 0.5) * 2.5;
                const speedY = (Math.random() - 0.5) * 2.5;
                const color = 'rgba(255, 255, 255, 1)';
                particles.push(new Particle(x, y, size, speedX, speedY, color));
            }
        };

        window.addEventListener('resize', () => { resizeCanvas(); init(); });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        canvas.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('resize', () => { resizeCanvas(); init(); });
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            canvas.removeEventListener('click', handleMouseClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <div className="z-20 relative px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider mb-4 animate-fadeIn">
                    Innovate. Automate.
                    <br />
                    <span className="text-cyan-400">Elevate.</span>
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 font-light mb-8 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    We are Vektor Solutions. We build the future of digital interaction with cutting-edge AI and elegant web solutions.
                </p>
                <a
                    href="#services"
                    onClick={handleScrollClick}
                    className="cursor-pointer text-cyan-400 font-semibold tracking-wide transition-all duration-300 hover:text-white group inline-flex items-center animate-fadeIn text-lg"
                    style={{ animationDelay: '1s' }}
                >
                    Explore Our Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
