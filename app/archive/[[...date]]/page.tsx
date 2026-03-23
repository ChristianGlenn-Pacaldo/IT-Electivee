import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

export default async function ArchiveOptionalCatchAllPage({ params }: { params: Promise<{ date?: string[] }> }) {

    const { date } = await params;

    return (
        <div className="container mx-auto px-4 py-32 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium font-sans"
                >
                    <ArrowLeft size={16} /> Back to Blogs
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                        <CalendarDays size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
                        Archive Filter
                    </h1>
                </div>

                <div className="bg-white dark:bg-[#0B1120] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-sans mb-6">
                        This page scopes the root folder and catches optional deeply nested dates using <strong>optional catch-all segments</strong> (e.g., <code>app/archive/[[...date]]/page.tsx</code>).
                    </p>

                    <div className="mb-6">
                        <span className="text-sm font-bold text-slate-900 dark:text-white mb-3 block font-serif">Filter Results:</span>
                        {date && date.length > 0 ? (
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-slate-600 dark:text-slate-400">Showing posts from: </span>
                                <div className="flex items-center gap-2 font-mono font-bold text-lg text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-4 py-1.5 rounded-xl border border-purple-200 dark:border-purple-500/20">
                                    {date.join(' / ')}
                                </div>
                            </div>
                        ) : (
                            <div className="text-slate-600 dark:text-slate-400 italic">
                                No specific date filtered. Showing all archived records from the root <code>/archive</code> folder.
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/10">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 font-serif">Route Parameters Extracted:</h3>
                        <pre className="text-sm text-pink-600 dark:text-pink-400 font-mono overflow-x-auto">
                            {JSON.stringify({ date: date || null }, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}