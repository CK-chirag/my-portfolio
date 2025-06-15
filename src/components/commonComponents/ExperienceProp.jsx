import React from "react";

export default function ExperienceProp(props) {
    return (
        <div className="relative flex flex-col w-full max-w-[800px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto sm:h-auto lg:h-[541px]">
            {/* Image */}
            <div className="relative mx-4 -mt-6 h-60 sm:h-52 overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]">
                <img
                    src={props.image}
                    alt="Project"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title & Description */}
            <div className="p-4 sm:p-6 pb-0 flex-1 flex flex-col">
                <h5 className="text-lg sm:text-xl font-semibold text-left my-2">
                    {props.internshipheading}
                </h5>
                <p className="text-sm sm:text-[14px] font-medium text-justify">
                    {props.internshipDescription}
                </p>
            </div>

            {/* Responsibility */}
            <div className="px-4 sm:px-6 pt-2 pb-4 flex-1 flex flex-col">
                <p className="text-sm sm:text-[14px] font-medium text-justify">
                    <b>Key Responsibility: </b>
                    {props.internshipResponsibility}
                </p>
            </div>

            {/* Button */}
            <div className="px-4 sm:px-6 pt-0 mt-auto pb-6">
                <button
                    onClick={() => window.open(props.linkToNavi, '_blank')}
                    type="button"
                    className="w-full sm:w-auto select-none rounded-lg bg-text-black-primary py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:underline active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
                >
                    {props.buttonText || "View Project"}
                </button>
            </div>
        </div>
    );
}
