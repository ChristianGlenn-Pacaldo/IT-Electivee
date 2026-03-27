import { Code2 } from 'lucide-react';

const skills = [
    { name: 'Next.js', category: 'Framework' },
    { name: 'React.js', category: 'Library' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'TailwindCSS', category: 'Styling' },
    { name: 'PHP', category: 'Language' },
    { name: 'C#', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
];

export default function AboutSection() {
    return (
        <section>
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Code2 size={20} className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-serif">
                    Skills & Technologies
                </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-10 ml-[52px]">
                Tools and technologies I work with daily.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group flex flex-col items-center justify-center p-5 bg-white dark:bg-[#0B1120] rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                            {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                            {skill.category}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}