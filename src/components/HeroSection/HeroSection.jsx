import React, { useState, useEffect } from 'react';
import SelfIntro from './SelfIntroduction';
import DetailsCard from './DetailsCard';
import Socials from './Socials';
import ButtonsToNavi from './ButtonsToNavi';
import Element from './Element';
import RoundLogo from '../commonComponents/RoundLogo';

export default function HeroSection() {
    const text = "Robotics Engineer ;)";
    const [displayed, setDisplayed] = useState('');
    const [showSubtext, setShowSubtext] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i === text.length) {
                clearInterval(interval);
                setTimeout(() => setShowSubtext(true), 400);
            }
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="text-center px-4 h-[100px] sm:h-[140px] mt-2 mb-6 py-4 sm:py-6 md:py-8">
                <h1 className="font-archivo font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px]">
                    {displayed}
                </h1>
                {showSubtext && (
                    <p className="font-archivo font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 animate-slideDown">
                        नमस्ते !! Chirag here, Robotics Engineer <br className="block sm:hidden" /> from Delhi, India and A Tech Enthusiast
                        <br className="block sm:hidden" />
                    </p>
                )}
            </div>
            <br />
            <br />
            <div className="flex flex-col items-center justify-center gap-8 mt-8
                            lg:flex-row lg:items-start lg:justify-center">
                {/* Cards always come first */}
                <div className="flex flex-col items-center gap-8 lg:flex-row">
                    <SelfIntro />
                    <DetailsCard />
                </div>

                {/* Utility Section */}
                <div className="hidden md:flex flex-col items-center justify-center gap-4
                md:flex-row md:mt-0
                lg:flex-col lg:items-center lg:justify-center lg:gap-4">

                    {/* Element stays first */}
                    <div className="order-1 md:order-1">
                        <Element />
                    </div>

                    {/* ButtonsToNavi comes second */}
                    <div className="order-2 md:order-2">
                        <ButtonsToNavi />
                    </div>

                    {/* Socials goes last on mobile, original order on md+ */}
                    <div className="order-3 md:order-3">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    );
}
