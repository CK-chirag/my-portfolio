import React from "react";
import "../../../src/App.css";

export default function Socials() {
    return (
        <div className="card">
            <div className="background"></div>
            <div className="logo">Socials</div>

            <a href="https://www.linkedin.com/in/chiragkhanna16" target="_blank" rel="noopener noreferrer">
                <div className="box box1">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 448 512" width="20" height="20">
                            <path fill="#fff" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.2 0 53.9A53.79 53.79 0 01107.57 53.9c0 29.3-24.09 54.2-53.78 54.2zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-239.2 0-264h92.4v37.4c12.3-19 34.4-46.1 83.6-46.1 61 0 106.7 39.8 106.7 125.3V448z" />
                        </svg>
                    </span>
                </div>
            </a>

            <a href="https://leetcode.com/u/chirag_04/" target="_blank" rel="noopener noreferrer">
                <div className="box box2">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 24 24">
                            <path fill="#fff" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                    </span>
                </div>
            </a>

            <a href="https://github.com/CK-chirag" target="_blank" rel="noopener noreferrer">
                <div className="box box3">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 24 24">
                            <path fill="#fff" d="M12 .5C5.6.5.5 5.7.5 12.3c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C16.9 6 18 6.3 18 6.3c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.5-5.3 5.8.4.4.7 1 .7 2v2.9c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.5 5.7 18.4.5 12 .5z" />
                        </svg>
                    </span>
                </div>
            </a>

            <div className="box box4"></div>
        </div>
    );
}