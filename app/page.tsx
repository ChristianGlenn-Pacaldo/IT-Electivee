import HeroSection from '@/components/features/home/HeroSection';
import SkillsSection from '@/components/features/about/AboutSection';
import ProjectCard from '@/components/features/projects/ProjectCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />

      <div className="py-20 border-t border-slate-200 dark:border-white/5">
        <SkillsSection />
      </div>

      <section className="py-20 border-t border-slate-200 dark:border-white/5">
        <div className="flex justify-between items-end mb-10 px-4 md:px-0">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">Selected work I&apos;ve built recently.</p>
          </div>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium hidden md:block transition-colors">
            View all projects &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          <ProjectCard
            title="Bisakol Shop"
            description="A modern e-commerce platform built to provide a seamless and localized shopping experience with real-time state management."
            tech={['React', 'Next.js', 'TypeScript', 'Tailwind']}
            link="https://bisakolshop.vercel.app/"
            image="/bisakol.png"
          />
          <ProjectCard
            title="CPU Scheduling — SJF"
            description="A web-based simulation of the Shortest Job First (SJF) Non-Preemptive algorithm, designed to visualize process execution and wait times."
            tech={['React', 'Next.js', 'TypeScript', 'Tailwind']}
            link="https://sjf-np.vercel.app/"
            image="/cpu.png"
          />
          <ProjectCard
            title="Operating System Portfolio"
            description="A specialized portfolio website showcasing my deep dive into OS projects and system-level skills with a modern UI."
            tech={['React', 'Next.js', 'TypeScript', 'Tailwind']}
            link="https://echan-portfolio.vercel.app/"
            image="/os.png"
          />
        </div>
      </section>

      <section className="py-24 text-center bg-blue-600 dark:bg-blue-600/10 dark:border dark:border-blue-500/20 text-white rounded-[2.5rem] mb-12 px-4 shadow-xl shadow-blue-500/10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight dark:text-white font-serif">
          Let&apos;s build something great.
        </h2>
        <p className="text-blue-100 dark:text-blue-200/70 mb-10 max-w-lg mx-auto text-lg">
          I&apos;m currently open for new opportunities and freelance projects.
        </p>
        <Button asChild size="lg" className="px-8 py-7 bg-white dark:bg-blue-600 text-blue-600 dark:text-white font-bold rounded-full hover:bg-slate-50 dark:hover:bg-blue-500 transition-all shadow-lg text-base hover:scale-105">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </section>
    </div>
  );
}