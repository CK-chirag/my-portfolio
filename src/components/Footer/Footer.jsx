import React from 'react';

export default function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#000F27] rounded-lg shadow-sm mx-4 mt-16 mb-8 max-w-[1200px] lg:mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">
                <span className="text-sm text-text-white-primary text-center sm:text-left">
                    © Designed and Developed by <b>Chirag Khanna</b> with the help of ☕
                </span>

                <button
                    onClick={handleScrollToTop}
                    className="text-sm text-text-white-primary hover:underline bg-transparent border-none cursor-pointer"
                >
                    Scroll to top ↑
                </button>
            </div>
        </footer>
    );
}
