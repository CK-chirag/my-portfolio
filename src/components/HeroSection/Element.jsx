import React from "react";

export default function Element() {
    return (
        <div class="p-4 overflow-hidden border border-gray-300 rounded-xl bg-white/10 backdrop-blur-md w-[200px]">
            <div class="flex flex-col gap-4 relative z-10 border border-gray-600 rounded-lg overflow-hidden">
                <div class="flex flex-col font-mono">
                    <div class="flex items-center justify-between min-h-[40px] px-3 rounded-t-lg bg-[#202425]">
                        <p class="flex items-center gap-2 h-10 select-none font-semibold text-gray-400 truncate">
                            <svg width="18" height="18" class="text-blue-600 mt-[2px]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" />
                            </svg>
                            Terminal
                        </p>
                    </div>

                    <div class="flex flex-col relative rounded-b-lg overflow-x-auto p-4 leading-[19px] text-white bg-black whitespace-nowrap">
                        <pre class="flex flex-row items-center whitespace-pre text-[16px]">
                            <code class="text-pink-400">-&nbsp;</code>
                            <code class="relative flex items-center h-[19px] before:content-[attr(data-cmd)] before:block before:whitespace-nowrap before:overflow-hidden before:animate-[inputs_8s_steps(22)_infinite] after:content-[''] after:block after:h-full after:border-r-[0.15em] after:border-pink-400 after:animate-[cursor_0.5s_step-end_infinite_alternate,blinking_0.5s_infinite]" data-cmd="scroll-down"></code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}