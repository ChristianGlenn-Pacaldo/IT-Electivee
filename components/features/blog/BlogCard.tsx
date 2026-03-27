import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
}

export default function BlogCard({ title, excerpt, date, category, slug }: BlogCardProps) {
    return (
        <article className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col group">
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {category}
                </span>
                <span className="text-sm text-slate-500 font-medium">{date}</span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {title}
            </h3>

            <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                {excerpt}
            </p>

            <Button asChild variant="ghost" className="w-fit -ml-4 hover:bg-transparent hover:text-blue-700 text-blue-600">
                <Link href={`/blog/${slug}`}>
                    Read More <ArrowRight size={16} className="ml-2" />
                </Link>
            </Button>
        </article>
    );
}