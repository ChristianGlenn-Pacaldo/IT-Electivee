import Link from "next/link";
import { ArrowLeft, FolderTree } from "lucide-react";

export default async function CategoryCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

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
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                        <FolderTree size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
                        Category Directory
                    </h1>
                </div>

                <div className="bg-white dark:bg-[#0B1120] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-sans mb-6">
                        This page catches all sub-segments under <code>/category/</code> demonstrating <strong>catch-all segments</strong> (e.g., <code>app/category/[...slug]/page.tsx</code>).
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white mb-2 w-full font-serif">Current Path Segments:</span>
                        {slug?.map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-200 dark:border-blue-500/20 capitalize font-sans">
                                    {s}
                                </span>
                                {i < slug.length - 1 && <span className="text-slate-300 dark:text-slate-600">/</span>}
                            </div>
                        ))}
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/10">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 font-serif">Route Parameters Array Extracted:</h3>
                        <pre className="text-sm text-pink-600 dark:text-pink-400 font-mono overflow-x-auto">
                            {JSON.stringify({ slug }, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}