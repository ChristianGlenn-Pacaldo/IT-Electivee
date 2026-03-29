'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Facebook, Instagram, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TikTokIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export default function HeroSection() {
    return (
        <section className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center container mx-auto px-6 relative min-h-[calc(100vh-80px)]">

            <div className="flex flex-col items-start text-left relative z-10 w-full max-w-2xl">

                <div className="text-5xl md:text-6xl mb-6 waving-hand cursor-pointer inline-block">
                    👋
                </div>

                <p className="text-blue-600 dark:text-blue-500 font-bold mb-4 text-sm tracking-widest uppercase">
                    Welcome to my portfolio!
                </p>

                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 font-serif leading-[1.1]">
                    Hello, my <br className="hidden md:block" /> name&apos;s <span className="text-blue-600">Glenn</span>.
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-sans">
                    I specialize in developing robust web applications and custom software from the ground up. I am committed to delivering tools that are technically sound, highly functional, and aesthetically refined.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mb-12 w-full sm:w-auto">
                    <Button asChild className="rounded-full px-8 py-6 h-auto bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-base flex items-center justify-center gap-x-3 w-full sm:w-auto border-0">
                        <Link href="/resumee.pdf">
                            <Download size={20} />
                            Download CV
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" className="rounded-full px-8 py-6 h-auto border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white/90 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-base flex items-center justify-center gap-x-3 w-full sm:w-auto">
                        <Link href="/projects">
                            See my work
                            <ArrowRight size={20} className="text-blue-600 dark:text-blue-500" />
                        </Link>
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/itsme.nahce" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-blue-600 dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all">
                        <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/allabout.glenn/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-pink-600 dark:text-pink-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@allabout.glenn" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 rounded-full text-slate-900 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all">
                        <TikTokIcon size={20} />
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end w-full mt-12 lg:mt-0 relative z-10">

                <div className="relative w-full max-w-[360px] md:max-w-[420px] aspect-[4/5]">

                    <div className="absolute -inset-1.5 bg-blue-500 rounded-[2.5rem] blur-xl opacity-60 dark:opacity-100 animate-pulse z-0"></div>

                    <div className="group relative h-full w-full rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-[#070B1A] border-4 border-slate-200 dark:border-[#10172A] z-10">
                        {/* Image for Light Mode (crossfades out in dark mode) */}
                        <Image
                            src="/profile.jpg"
                            alt="Glenn Light Mode"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-105 opacity-100 dark:opacity-0"
                            sizes="(max-width: 768px) 100vw, 420px"
                            priority
                        />
                        {/* Image for Dark Mode (crossfades in in dark mode) */}
                        <Image
                            src="/boss.jpg"
                            alt="Glenn Dark Mode"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-105 opacity-0 dark:opacity-100"
                            sizes="(max-width: 768px) 100vw, 420px"
                            priority
                        />

                        <div className="absolute bottom-6 left-6 right-6 flex items-center">
                            <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                                    <User size={14} className="text-white" />
                                </div>
                                <span className="text-white font-medium tracking-wide">Glenn</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}