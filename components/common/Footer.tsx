import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#03040C]">
            <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    <div>
                        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono uppercase">
                            GLENN<span className="text-blue-600">.DEV</span>
                        </h2>
                        <div className="w-12 h-[2px] bg-blue-600 mt-2 mb-5"></div>
                        <div className="space-y-1 text-sm text-slate-500 dark:text-slate-500 font-mono">
                            <p>IT Student &</p>
                            <p>Full-Stack Developer</p>
                            <p>Cebu, Philippines</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5 font-mono">
                            // Pages
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5 font-mono">
                            // Resources
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'GitHub Boilerplates', href: 'https://github.com/ChristianGlenn-Pacaldo' },
                                { name: 'CodePen Examples', href: 'https://codepen.io' },
                                { name: 'MDN Docs', href: 'https://developer.mozilla.org' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5 font-mono">
                            // Connect
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'GitHub', href: 'https://github.com/ChristianGlenn-Pacaldo' },
                                { name: 'Facebook', href: 'https://www.facebook.com/itsme.nahce' },
                                { name: 'Instagram', href: 'https://www.instagram.com/allabout.glenn/' },
                                { name: 'Email', href: 'mailto:roronoazoljin@gmail.com' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/5">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-400 dark:text-slate-600 font-mono uppercase tracking-wider">
                        &copy; {new Date().getFullYear()} Glenn. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-600 font-mono uppercase tracking-wider">
                        System_Status: <span className="text-emerald-500 dark:text-emerald-400">Stable</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}