"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.open(
            `mailto:roronoazoljin@gmail.com?subject=${subject}&body=${body}`,
            "_self"
        );

        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight font-serif">
                            Let&#39;s connect.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-sans max-w-lg">
                            I&#39;m currently looking for new opportunities. Whether you have a question, a freelance project, or just want to say hi, I&#39;ll try my best to get back to you!
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase mb-2 font-sans">
                            Email
                        </p>
                        <a href="mailto:roronoazoljin@gmail.com" className="text-xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium font-sans transition-colors">
                            roronoazoljin@gmail.com
                        </a>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#0B1120] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-blue-900/10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">

                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@gmail.com"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="How can I help you?"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                            ></textarea>
                        </div>

                        {status === "success" && (
                            <p className="text-green-600 dark:text-green-400 text-sm font-medium font-sans text-center animate-in fade-in duration-300">
                                ✓ Your email client has been opened with the message. Thank you!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-600 dark:text-red-400 text-sm font-medium font-sans text-center animate-in fade-in duration-300">
                                Please fill in all fields before sending.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-5 py-4 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans text-lg mt-2"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}