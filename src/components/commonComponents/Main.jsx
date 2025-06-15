import React, { useState, useEffect, useRef } from 'react';

export default function SubHeader({ subheader }) {
    const [highlightDisplayed, setHighlightDisplayed] = useState('');
    const [highlightStarted, setHighlightStarted] = useState(false);
    const highlightRef = useRef(null);

    // Intersection Observer to detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !highlightStarted) {
                    setHighlightStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (highlightRef.current) observer.observe(highlightRef.current);
        return () => {
            if (highlightRef.current) observer.unobserve(highlightRef.current);
        };
    }, [highlightStarted]);

    // Typing animation effect
    useEffect(() => {
        if (!highlightStarted) return;
        let i = 0;
        setHighlightDisplayed('');
        const interval = setInterval(() => {
            setHighlightDisplayed(subheader.slice(0, i + 1));
            i++;
            if (i === subheader.length) clearInterval(interval);
        }, 100); // Slightly faster for smoother mobile feel
        return () => clearInterval(interval);
    }, [highlightStarted, subheader]);

    return (
        <div
            ref={highlightRef}
            className="min-h-[40px] h-[60px] flex items-center w-full px-4 sm:px-6 md:px-8"
        >
            <h2 className="font-archivo font-bold text-xl sm:text-2xl md:text-3xl text-text-black-primary text-left">
                {highlightDisplayed}
            </h2>
        </div>
    );
}
