'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
    image?: string;
}

export default function ProjectCard({ title, description, tech, link, image }: ProjectCardProps) {
    return (
        <div className="group flex flex-col bg-white dark:bg-[#0B1120] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-300">

            <div className="h-52 bg-slate-100 dark:bg-slate-800/50 relative overflow-hidden border-b border-slate-100 dark:border-white/5">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <span className="text-slate-400 dark:text-slate-500 font-medium font-sans">Project Preview</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-serif">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed font-sans">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-white/10">
                            {t}
                        </span>
                    ))}
                </div>

                <Button asChild variant="ghost" className="w-full justify-between group/btn border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors rounded-xl font-sans">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink size={18} className="text-slate-400 dark:text-slate-500 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors" />
                    </a>
                </Button>
            </div>
        </div>
    );
}