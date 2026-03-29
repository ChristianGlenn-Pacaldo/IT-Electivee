'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(timer);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                aria-label="Toggle theme"
            >
                <Sun size={18} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
        >
            {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}