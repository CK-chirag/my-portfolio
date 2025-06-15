import React from 'react';
import { Home } from 'lucide-react';

export default function StickyBottomNav() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 
            bg-white/30 backdrop-blur-md border border-white/30 shadow-lg 
            rounded-full px-8 py-2 flex items-center justify-center gap-6
            glassmorphism">
            {/* Home */}
            <a onClick={handleScrollToTop} title="Home" className="flex items-center justify-center">
                <Home className="w-5 h-5 hover:text-blue-500 transition-colors" />
            </a>

            {/* Divider */}
            <span className="h-8 w-px bg-gray-300"></span>

            {/* GitHub */}
            <a
                href="https://github.com/CK-chirag"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="hover:text-black transition-colors"
                >
                    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.94c.58.11.77-.25.77-.56v-2c-3.24.7-3.92-1.38-3.92-1.38a3.08 3.08 0 00-1.29-1.7c-1.05-.7.08-.7.08-.7a2.45 2.45 0 011.79 1.2 2.5 2.5 0 003.41 1 2.52 2.52 0 01.75-1.56c-2.59-.29-5.31-1.3-5.31-5.82A4.56 4.56 0 017 6.55a4.2 4.2 0 01.11-3.09s.98-.31 3.21 1.2a11.06 11.06 0 015.85 0c2.22-1.51 3.2-1.2 3.2-1.2a4.2 4.2 0 01.12 3.09 4.56 4.56 0 011.21 3.17c0 4.53-2.73 5.52-5.33 5.81a2.82 2.82 0 01.81 2.19v3.25c0 .31.2.68.79.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/chiragkhanna16"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex items-center justify-center w-10 h-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="hover:text-blue-700 transition-colors mx-auto my-auto"
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>

            {/* LeetCode */}
            <a
                href="https://leetcode.com/u/chirag_04/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="flex items-center justify-center"
            >
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
            </a>
        </div>
    );
}