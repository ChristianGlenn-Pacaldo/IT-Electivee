'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Blogs() {
    const allPosts = [
        {
            id: 1,
            title: "Understanding Next.js App Router",
            excerpt: "A deep dive into the new App Router, server components, and how it changes web development.",
            date: "Oct 15, 2025",
            category: "Development"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS Grid",
            excerpt: "Learn how to build complex, responsive layouts in minutes using Tailwind's powerful grid utilities.",
            date: "Nov 02, 2025",
            category: "Design"
        },
        {
            id: 3,
            title: "My Journey into Hardware Projects",
            excerpt: "Transitioning from pure software to building physical hardware logic and microcontrollers.",
            date: "Nov 28, 2025",
            category: "Hardware"
        },
        {
            id: 4,
            title: "Why I Love TypeScript",
            excerpt: "Catching bugs before they reach production. Here is how static typing saved my latest project.",
            date: "Jan 10, 2026",
            category: "Development"
        },
        {
            id: 5,
            title: "Building a Secure API",
            excerpt: "Best practices for backend security, data validation, and handling authentication tokens.",
            date: "Feb 14, 2026",
            category: "Backend"
        }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
            <div className="max-w-5xl mx-auto">

                <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight font-serif">
                        My Blogs
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans max-w-2xl">
                        Thoughts, tutorials, and deep dives into web development, software engineering, and things I learn along the way.
                    </p>
                </div>

                <div className="relative max-w-md mb-12 group animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search articles by title or category..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm font-sans"
                    />
                </div>

                {currentPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {currentPosts.map((post) => (
                            <article key={post.id} className="group bg-white dark:bg-[#0B1120] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 flex flex-col h-full">

                                <div className="flex justify-between items-center mb-6">
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full font-sans">
                                        {post.category}
                                    </span>
                                    <span className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1 font-sans">
                                        <Calendar size={14} /> {post.date}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-serif line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans mb-8 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* THE FIX IS RIGHT HERE: It now says /blog/ instead of /blogs/ */}
                                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold font-sans mt-auto">
                                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center border-2 border-dashed border-slate-200 dark:border-white/5 rounded-3xl">
                        <p className="text-slate-500 dark:text-slate-400 font-medium">No articles found matching &quot;{searchQuery}&quot;</p>
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-4 animate-in fade-in duration-700">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${currentPage === i + 1
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}