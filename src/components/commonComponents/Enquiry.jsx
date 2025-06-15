import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Enquiry() {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatusMessage("Mail sent successfully!");
                    setShowMessage(true);
                    form.current.reset();
                },
                (error) => {
                    setStatusMessage("Failed to send mail. Please try again.");
                    setShowMessage(true);
                    console.log('FAILED...', error.text);
                }
            );
    };

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
                setStatusMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    return (
        <div className="mx-auto mt-10 max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-left">Let Connect</h2>
            <p className="text-base text-left text-text-black-primary mb-6">Open to opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.</p>

            {showMessage && (
                <div className={`mb-4 text-sm font-medium ${statusMessage.includes("successfully")
                        ? "text-green-600 bg-green-100 border-green-300"
                        : "text-red-600 bg-red-100 border-red-300"
                    } border rounded-md px-4 py-2`}>
                    {statusMessage}
                </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-500">
                        Name
                    </label>
                    <input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Enter your full name"
                        className="h-10 px-4 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-500">
                        Email ID
                    </label>
                    <input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="Enter your email"
                        className="h-10 px-4 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-500">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Type your message here..."
                        className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="h-12 mt-2 rounded-lg bg-black py-3 px-6 text-center font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:underline active:opacity-85 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
