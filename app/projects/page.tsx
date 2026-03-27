'use client';

import { useState } from 'react';
import ProjectCard from '@/components/features/projects/ProjectCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsPage() {
    const allProjects = [
        {
            title: "Bisakol Shop",
            description: "A modern e-commerce platform built to provide a seamless and localized shopping experience with real-time state management.",
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            link: "https://bisakolshop.vercel.app/",
            image: "/bisakol.png"
        },
        {
            title: "CPU Scheduling — SJF",
            description: "A web-based simulation of the Shortest Job First (SJF) Non-Preemptive algorithm, designed to visualize process execution and wait times.",
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            link: "https://sjf-np.vercel.app/",
            image: "/cpu.png"
        },
        {
            title: "Operating System Portfolio",
            description: "A specialized portfolio website showcasing my deep dive into OS projects and system-level skills with a modern UI.",
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            link: "https://echan-portfolio.vercel.app/",
            image: "/os.png"
        },
        {
            title: "Sinking Fund",
            description: "A financial planning tool that helps users save for future expenses by calculating regular contributions to a sinking fund.",
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            link: "https://sinkingfundbeed3d.vercel.app/",
            image: "/sinking.png"
        },
        {
            title: "Valentines",
            description: "A romantic web app that generates personalized Valentine's Day messages and gift ideas based on user preferences.",
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            link: "https://markoy.vercel.app/",
            image: "/valen.png"
        },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const filteredProjects = allProjects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">

            <div className="max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight font-serif leading-tight">
                    My Projects
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    A collection of my recent work, side projects, and open-source contributions.
                </p>
            </div>

            <div className="relative max-w-md mb-12 group animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    placeholder="Search by title or technology..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm font-sans"
                />
            </div>

            {currentProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {currentProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                            image={project.image}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center border-2 border-dashed border-slate-200 dark:border-white/5 rounded-3xl">
                    <p className="text-slate-500 dark:text-slate-400 font-medium">No projects found matching &quot;{searchQuery}&quot;</p>
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

            <div className="mt-24 border-t border-slate-200 dark:border-white/5 pt-10 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-500 font-sans">
                    Want to see more? Check out my <a href="https://github.com/ChristianGlenn-Pacaldo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">GitHub</a>.
                </p>
            </div>
        </div>
    );
}