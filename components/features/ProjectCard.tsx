interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
}

export default function ProjectCard({ title, description, tech, link, image }: ProjectCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-[#0B1120] rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden flex flex-col h-full"
        >
            <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-serif">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans mb-4 flex-grow line-clamp-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full font-sans"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
