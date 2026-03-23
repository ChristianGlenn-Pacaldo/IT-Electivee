import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
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

                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white font-serif">
                    Dynamic Blog Post: <span className="text-blue-600 capitalize">{slug.replace(/-/g, ' ')}</span>
                </h1>

                <div className="bg-white dark:bg-[#0B1120] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-sans mb-6">
                        This is a dynamically generated page demonstrating Next.js single dynamic segments routing (e.g., <code>app/blog/[slug]/page.tsx</code>).
                    </p>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/10">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2 font-serif">Route Parameters Extracted:</h3>
                        <pre className="text-sm text-pink-600 dark:text-pink-400 font-mono">
                            {JSON.stringify({ slug }, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}