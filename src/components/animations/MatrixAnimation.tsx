import React, { useRef, useEffect } from 'react';

const MatrixAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        const parent = canvas.parentElement;
        if(!parent) return;

        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;

        const characters = '01';
        const words = ['SECURE', 'PRIVATE', 'POWERFUL', 'CUSTOM'];
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops: { y: number; word?: string; wordIndex?: number }[] = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = { y: 1 + Math.random() * -100 };
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#06b6d4'; // cyan-500
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                if (drops[i].word && drops[i].wordIndex !== undefined) {
                    const char = drops[i].word![drops[i].wordIndex!];
                    ctx.fillText(char, i * fontSize, drops[i].y * fontSize);
                    drops[i].wordIndex!++;
                    if(drops[i].wordIndex! >= drops[i].word!.length){
                        delete drops[i].word;
                        delete drops[i].wordIndex;
                    }
                } else {
                    const text = characters.charAt(Math.floor(Math.random() * characters.length));
                    ctx.fillText(text, i * fontSize, drops[i].y * fontSize);
                }

                if (drops[i].y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i].y = 0;
                    // Start a word
                    if(Math.random() > 0.7){
                        drops[i].word = words[Math.floor(Math.random() * words.length)];
                        drops[i].wordIndex = 0;
                    }
                }
                drops[i].y++;
            }
        };

        const animate = () => {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default MatrixAnimation;
