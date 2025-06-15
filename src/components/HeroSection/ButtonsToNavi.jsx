import React from "react";

export default function ButtonsToNavi() {
    // Smooth scroll handler
    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-[200px] h-auto bg-white rounded-[20px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] border border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-[rgba(124,58,237,0.2)] font-sans group">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)] opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 animate-[shine_3s_infinite]"></div>
            <div className="absolute -inset-[10px] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3)_0%,rgba(124,58,237,0)_70%)] opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100"></div>

            <div className="p-6 px-6 h-full flex flex-col relative z-[2]">
                <div className="flex flex-col">
                    <p className="text-text-black-primary text-[1.1em] text-left m-0 font-bold transition-all duration-300 ease-in group-hover:text-[#0055DE] group-hover:translate-x-[2px]">
                        <a
                            href="#projects"
                            className="hover:underline"
                            onClick={e => handleSmoothScroll(e, "projects")}
                        >
                            View Projects
                        </a>
                    </p>
                    <br />
                    <p className="text-text-black-primary text-left text-[1.1em] m-0 font-bold transition-all duration-300 ease-in group-hover:text-[#0055DE] group-hover:translate-x-[2px]">
                        <a
                            href="#experience"
                            className="hover:underline"
                            onClick={e => handleSmoothScroll(e, "experience")}
                        >
                            View Experience
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}