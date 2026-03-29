"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MessageSquare, Clock, Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${firstName} ${lastName}`);
        const body = encodeURIComponent(
            `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.open(
            `mailto:roronoazoljin@gmail.com?subject=${subject}&body=${body}`,
            "_self"
        );

        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* Left Column: Contact Cards */}
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

                    {/* Email Card */}
                    <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-lg group hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                <Mail size={18} className="text-slate-600 dark:text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Email</h2>
                        </div>
                        <a href="mailto:roronoazoljin@gmail.com" className="text-slate-600 dark:text-slate-200 font-medium hover:underline font-sans block mb-4">
                            roronoazoljin@gmail.com
                        </a>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-sans">
                            <MessageSquare size={14} />
                            <p>I will email you back within 24 hours.</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-lg group hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                <Phone size={18} className="text-slate-600 dark:text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Phone</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-200 font-medium font-sans block mb-4">
                            +63 (992) 313 4916
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-sans">
                            <Clock size={14} />
                            <p>I&apos;m available during regular weekday</p>
                        </div>
                    </div>

                    {/* Connect Card */}
                    <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-lg group hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                <MessageSquare size={18} className="text-slate-600 dark:text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Connect with me</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Social Icons */}
                            {[
                                { icon: Mail, href: "mailto:roronoazoljin@gmail.com" },
                                { icon: Github, href: "https://github.com/ChristianGlenn-Pacaldo" },
                                { icon: Instagram, href: "https://www.instagram.com/allabout.glenn/" },
                                { icon: Facebook, href: "https://www.facebook.com/itsme.nahce" }
                            ].map((Social, index) => (
                                <a key={index} href={Social.href} target="_blank" rel="noopener noreferrer" className="w-16 h-12 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                                    <Social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white dark:bg-[#0B1120] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-blue-900/10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-3xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight font-serif">
                            Let&apos;s get in touch
                        </h1>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                            Whether you have a project in mind or just want to connect, I&apos;d love to hear from you. Feel free to reach out for any inquiries or collaborations.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">

                        {/* First and Last Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-sans">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-sans">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 font-sans">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans text-sm"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 font-sans">How can I help you?</label>
                                <span className="text-xs text-slate-400 font-sans">Max 500 characters</span>
                            </div>
                            <textarea
                                id="message"
                                rows={4}
                                maxLength={500}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your message here..."
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none text-sm"
                            ></textarea>
                        </div>

                        {status === "success" && (
                            <p className="text-green-600 dark:text-green-400 text-sm font-medium font-sans text-center animate-in fade-in duration-300">
                                ✓ Your email has been sent, Please wait for the response. Thank you!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-600 dark:text-red-400 text-sm font-medium font-sans text-center animate-in fade-in duration-300">
                                Please fill in all fields before sending.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold rounded-xl px-5 py-4 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans text-sm mt-2"
                        >
                            Submit
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}