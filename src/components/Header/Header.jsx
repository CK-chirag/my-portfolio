import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // Show popup for 2 seconds
    const handleTechClick = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    return (
        <header className="mt-10 mb-18 max-w-[1200px] mx-auto pt-2 px-4 relative">
            {/* Popup message (does not affect responsiveness) */}
            {showPopup && (
                <div className="fixed top-8 right-8 z-[100] bg-black text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in pointer-events-none">
                    Under development
                </div>
            )}

            {/* Top Row */}
            <div className="flex items-center justify-between w-full px-4 sm:px-0">
                <button
                    onClick={() => navigate("/")}
                    className="cursor-pointer rounded-lg bg-transparent text-text-black-primary font-medium px-0 py-2 text-lg"
                >
                    Chirag Khanna ✌️
                </button>

                {/* Desktop Buttons */}
                <div className="hidden sm:flex items-center gap-6">
                    <button
                        onClick={handleTechClick}
                        className="rounded-3xl border border-black-primary bg-transparent text-text-black-primary font-medium text-[12px] px-6 py-3 cursor-pointer hover:underline hover:shadow-lg hover:scale-105 transition duration-200"
                    >
                        View My Tech Experience
                    </button>
                    <button
                        onClick={() =>
                            window.open(
                                "https://docs.google.com/document/d/1vS3oTfMiNzEKmXWE-gwb9wkBH1W2mfQaO0K4POCrBnk/edit?usp=sharing",
                                "_blank"
                            )
                        }
                        className="rounded-3xl bg-[#000F27] text-white font-normal text-[12px] px-6 py-3 cursor-pointer hover:underline"
                    >
                        View My Resume
                    </button>
                </div>

                {/* Hamburger Icon */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="text-black text-2xl"
                    >
                        {menuOpen ? <HiX /> : <HiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="sm:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-10 z-50 w-full flex flex-col gap-4">
                    <button
                        onClick={() => {
                            handleTechClick();
                            setMenuOpen(false);
                        }}
                        className="rounded-3xl border border-black-primary bg-transparent text-text-black-primary font-medium text-[12px] px-6 py-2 cursor-pointer hover:underline hover:shadow-lg hover:scale-105 transition duration-200"
                    >
                        View My Tech Experience
                    </button>
                    <button
                        onClick={() => {
                            window.open(
                                "https://docs.google.com/document/d/1vS3oTfMiNzEKmXWE-gwb9wkBH1W2mfQaO0K4POCrBnk/edit?usp=sharing",
                                "_blank"
                            );
                            setMenuOpen(false);
                        }}
                        className="rounded-3xl bg-[#000F27] text-white font-normal text-[12px] px-6 py-2 cursor-pointer hover:underline"
                    >
                        View My Resume
                    </button>
                </div>
            )}

            {/* Slide-in animation for popup */}
            <style>
                {`
                .animate-slide-in {
                    animation: slideInRight 0.4s cubic-bezier(0.4,0,0.2,1);
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                `}
            </style>
        </header>
    );
}
