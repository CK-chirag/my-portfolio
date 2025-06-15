import React from 'react';

export default function Cards(props) {
    return (
        <div className="relative flex flex-col h-auto max-w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md md:h-[541px] md:w-auto">
            <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 md:h-60">
                <img
                    src={props.image}
                    alt="Project"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 pb-0 flex-1 flex flex-col md:p-6 md:pb-0">
                <h5 className="text-[18px] font-semibold text-left my-2 md:text-[20px]">
                    {props.heading}
                </h5>
                <p className="text-[13px] font-medium text-justify md:text-[14px]">
                    {props.description.split('\n').map((line, idx) => (
                        <span key={idx} className="block">
                            {line}
                        </span>
                    ))}
                </p>
            </div>
            <div className="p-4 flex-1 flex flex-col md:p-6">
                <p className="text-[13px] font-medium text-justify md:text-[14px]">
                    <b>Key Resonsibilities :</b>&nbsp;
                    {props.resp.split('\n').map((line, idx) => (
                        <span key={idx} className="block">
                            {line}
                        </span>
                    ))}
                </p>
            </div>
            <div className="p-4 pt-0 mt-auto md:p-6 md:pt-0">
                <button
                    data-ripple-light="true"
                    onClick={() => window.open(props.githubLink, '_blank')}
                    type="button"
                    className="select-none rounded-lg bg-text-black-primary py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:underline active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer md:py-3 md:px-6"
                >
                    {props.buttonText || "View Github Link"}
                </button>
            </div>
        </div>
    );
}