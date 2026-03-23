import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#03040C]">
            <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 dark:text-slate-500 font-sans">
                    &copy; {new Date().getFullYear()} Christian.dev — All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="/projects" className="text-sm text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans">
                        Projects
                    </Link>
                    <Link href="/blog" className="text-sm text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-sm text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans">
                        Contact
                    </Link>
                    <a href="https://github.com/ChristianGlenn-Pacaldo" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
