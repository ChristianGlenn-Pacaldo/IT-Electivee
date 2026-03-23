import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="py-24 md:py-32 flex flex-col items-center text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 font-sans">
                    <span className="waving-hand inline-block text-3xl mr-2">👋</span> Hey, I&apos;m
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-serif mb-6 leading-tight">
                    Christian Glenn
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans mb-10">
                    A passionate <span className="text-blue-600 dark:text-blue-400 font-bold">Software Developer</span> who loves building modern, performant, and beautiful web experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="px-8 py-7 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg text-base hover:scale-105">
                        <Link href="/projects">
                            View My Work
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="px-8 py-7 font-bold rounded-full transition-all text-base hover:scale-105">
                        <Link href="/contact">
                            Get in Touch
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
