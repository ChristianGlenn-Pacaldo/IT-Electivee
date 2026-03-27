'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blogs', href: '/blog' },
    ];

    return (
        <header className="sticky top-0 z-[100] w-full border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#03040C]/90 backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between relative z-[101]">

                <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity text-slate-900 dark:text-white font-serif"
                >
                    GLENN<span className="text-blue-600">.dev</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
                        >
                            Contact
                        </Link>

                        <ThemeToggle />
                    </div>
                </nav>

                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

            </div>

            <div
                className={`fixed top-0 left-0 w-full h-[100dvh] bg-white dark:bg-[#03040C] z-[90] flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
            >
                <div className="h-20 w-full"></div>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={toggleMenu}
                        className="text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="pt-8 w-full flex justify-center border-t border-slate-200 dark:border-white/10 mt-8 px-6">
                    <Link
                        href="/contact"
                        onClick={toggleMenu}
                        className="w-full max-w-[250px] text-center px-8 py-4 text-lg font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-md"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}