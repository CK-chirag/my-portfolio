import React from "react";

export default function DetailsCard() {
    const cardBaseStyles = `
        w-full max-w-[600px]
        h-auto
        bg-[rgba(255,255,255,0.58)]
        border border-white
        shadow-[12px_17px_51px_rgba(0,0,0,0.22)]
        backdrop-blur-[6px]
        rounded-[17px]
        hover:rounded-md
        cursor-pointer
        transition-all duration-500
        select-none
        font-normal
        text-text-black-primary
        hover:scale-105
        active:scale-95
        active:rotate-[1.7deg]
        px-6 sm:px-8
        py-4
        flex flex-col gap-6
    `;

    return (
        <div className="flex flex-col items-center gap-6 justify-center h-full px-4 sm:px-0">
            <div className={cardBaseStyles}>
                <div className="flex flex-col items-start w-full mb-2">
                    <p className="font-bold text-[14px] mb-1">
                        University School Of Automation And Robotics, GGSIPU EDC, Delhi, India
                    </p>
                    <p className="text-[12px]">
                        B.Tech in Robotics and Automation, CGPA - 8.42
                    </p>
                </div>
            </div>

            <div className={cardBaseStyles}>
                <div className="flex flex-col items-start w-full mb-2">
                    <p className="font-bold text-[14px] mb-1">
                        Lovely Public Sr. Sec. School, Delhi, India
                    </p>
                    <p className="text-[12px]">
                        12th Standard (PCM) - 95.3%
                    </p>
                </div>
            </div>

            <div className={`${cardBaseStyles} h-auto`}>
                <div className="text-[14px] text-left">
                    <span className="font-bold">Key Capabilities:</span>
                    <br /><br />
                    1. <span className="font-bold">Proficient</span> in <span className="font-bold">3D Modelling (Fusion 360)</span> and <span className="font-bold">Structural Analysis and Meshing (Ansys).</span>
                    <br />
                    2. <span className="font-bold">Experienced</span> with <span className="font-bold">IoT</span> and <span className="font-bold">embedded systems</span>, including <span className="font-bold">ESP32</span> and <span className="font-bold">Arduino</span>.
                    <br />
                    3. <span className="font-bold">Skilled</span> in <span className="font-bold">UI/UX tools (Figma, Framer)</span> and <span className="font-bold">frontend frameworks (ReactJS, Tailwind, Flutter).</span>
                    <br />
                    4. <span className="font-bold">Proficient</span> in backend integration using <span className="font-bold">Firebase, Python, MySQL</span>, and data handling libraries like Pandas.
                    <br />
                    5. Strong in <span className="font-bold">data structures</span>, <span className="font-bold">algorithms</span>, and cross-platform app development.
                    <br />
                </div>
            </div>
        </div>
    );
}
