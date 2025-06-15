import React from "react";
import caeImage from "../../../../assets/bgimage.png";
import design1 from "../../../../assets/design1.gif";
import design2 from "../../../../assets/design2.gif";
import design3 from "../../../../assets/design3.gif";
import design4 from "../../../../assets/design4.gif";
import design5 from "../../../../assets/design5.gif";

export default function CaeProjects() {
    return (
        <div className="flex flex-col gap-10 items-center w-full px-4">
            {/* Header Image and Text */}
            <div className="relative w-full max-w-[1200px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] flex items-center justify-center overflow-hidden rounded-xl shadow-[0_4px_24px_0_rgba(0,0,0,0.15)] bg-white">
                <img
                    src={caeImage}
                    alt="CAE"
                    className="w-full h-full object-cover"
                />
                <span className="absolute text-center px-4 text-sm sm:text-base md:text-lg lg:text-xl text-text-black-primary font-bold drop-shadow-lg">
                    Some Of My CAD Models
                    <br />
                    <p className="text-[10px] sm:text-xs md:text-sm font-normal mt-1 max-w-[90%] mx-auto">
                        Self-taught in <b>Fusion 360</b> and <b>Ansys</b>, with hands-on experience in CAD modeling,
                        static structural analysis, and meshing. Applied these skills in real-world projects like
                        fixture design and component simulations.
                    </p>
                </span>
            </div>
            {/* Card Grid – responsive layout only */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
                {[design1, design2, design3, design4, design5].map((img, index) => {
                    const links = [
                        "https://a360.co/3HStVss",
                        "https://a360.co/440oWgW",
                        "https://a360.co/3HCzT0F",
                        "https://a360.co/4kDN3sH",
                        "https://a360.co/43Vi3gO"
                    ];
                    return (
                        <div
                            key={index}
                            className="relative w-[300px] h-[250px] bg-gray-100 rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_4px_24px_0_rgba(0,0,0,0.15)] transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.05] group"
                        >
                            <img
                                src={img}
                                className="w-full h-full object-cover duration-[600ms] group-hover:scale-0"
                                alt={`cad design ${index + 1}`}
                            />
                            <div className="absolute top-0 left-0 w-full h-full px-6 bg-gray-100 rotate-x-[-90deg] origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0 flex flex-col justify-center items-start">
                                <p className="text-xl font-bold text-[#333]">Design {index + 1}</p>
                                <p className="mt-1 text-sm text-gray-500"><b>Software Used:</b> Fusion 360</p>
                                <br />
                                <br />
                                <button
                                    onClick={() => window.open(links[index], "_blank")}
                                    type="button"
                                    className="mt-4 rounded-lg bg-text-black-primary py-2 px-4 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg hover:underline active:opacity-85 transition-all cursor-pointer"
                                >
                                    View Design
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
