'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#03040C]/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-serif">
                    Christian<span className="text-blue-600">.dev</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#03040C] px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
