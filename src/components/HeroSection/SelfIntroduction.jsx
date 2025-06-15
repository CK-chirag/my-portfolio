import React from "react";
import SelfPic from '../../assets/selfpic.jpg';

export default function SelfIntro() {
    return (
        <div className="w-80 sm:w-[350px] bg-white p-4 rounded-[17px] shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px]">
            <div className="bg-gray-200 w-full h-[275px] rounded-t-md p-2 transition-transform duration-200 hover:scale-95 flex items-start justify-center overflow-hidden">
                <img
                    src={SelfPic}
                    alt="Portrait of Chirag Khanna"
                    className="w-full h-full object-cover object-top rounded-t-md"
                />
            </div>
            <div className="text-[20px] font-semibold text-left text-black pt-4 px-2">
                Here's A Brief Intro About Me
            </div>
            <div className="font-semibold text-[14px] text-gray-700 pt-2 px-2 text-justify">
                Hey! <span className="font-bold">Chirag Khanna</span> here, pursuing <span className="font-bold">Robotics Engineering</span> from USAR, GGSIPU EDC, Delhi, India. I am a tech enthusiast with a passion for robotics and automation. I love exploring new technologies and applying them to solve real-world problems.
            </div>
        </div>
    );
}
