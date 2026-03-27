import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts: Record<string, {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    content: string[];
}> = {
    "1": {
        id: 1,
        title: "Understanding Next.js App Router",
        excerpt: "A deep dive into the new App Router, server components, and how it changes web development.",
        date: "Oct 15, 2025",
        category: "Development",
        readTime: "5 min read",
        content: [
            "The Next.js App Router represents a paradigm shift in how we build React applications. Moving away from the traditional Pages Router, it embraces React Server Components (RSC) as the default, fundamentally changing the way we think about data fetching, rendering, and component architecture.",
            "With the App Router, every component is a Server Component by default. This means your components run on the server, have direct access to databases and file systems, and send only the rendered HTML to the client. The result is dramatically smaller JavaScript bundles and faster page loads.",
            "One of the most powerful features is the new layout system. Layouts are UI components that are shared between multiple pages. They preserve state, remain interactive, and don't re-render on navigation. This is a huge improvement for creating consistent, performant user experiences.",
            "Data fetching has been simplified as well. Instead of using getServerSideProps or getStaticProps, you can now fetch data directly inside your components using async/await. This colocation of data fetching and rendering logic makes components more self-contained and easier to reason about.",
            "The App Router also introduces new conventions for loading states, error handling, and parallel routes. Loading UI can be defined with a simple loading.tsx file, and error boundaries are created with error.tsx. These conventions make it easy to build resilient applications with great user experiences."
        ]
    },
    "2": {
        id: 2,
        title: "Mastering Tailwind CSS Grid",
        excerpt: "Learn how to build complex, responsive layouts in minutes using Tailwind's powerful grid utilities.",
        date: "Nov 02, 2025",
        category: "Design",
        readTime: "4 min read",
        content: [
            "CSS Grid has revolutionized the way we create layouts on the web, and Tailwind CSS makes it incredibly easy to harness its power. With just a few utility classes, you can create complex, responsive grid layouts that would have taken dozens of lines of custom CSS.",
            "The foundation of any grid layout in Tailwind starts with the grid class, combined with grid-cols-{n} to define your column structure. For responsive designs, you can prefix these with breakpoint modifiers like md:grid-cols-3 to adapt the layout across different screen sizes.",
            "One of the most useful features is the gap utility. Instead of adding margins to individual items, you can use gap-{n} to create consistent spacing between all grid items. This approach is cleaner and more maintainable than traditional margin-based spacing.",
            "For more advanced layouts, Tailwind provides utilities for grid-row and grid-column spanning. Using col-span-2 or row-span-3, you can create items that stretch across multiple columns or rows, enabling magazine-style layouts and dashboard designs.",
            "Don't forget about the place-items and place-content utilities for alignment. These Tailwind classes map directly to CSS Grid's alignment properties, giving you precise control over how items are positioned within their grid cells."
        ]
    },
    "3": {
        id: 3,
        title: "My Journey into Hardware Projects",
        excerpt: "Transitioning from pure software to building physical hardware logic and microcontrollers.",
        date: "Nov 28, 2025",
        category: "Hardware",
        readTime: "6 min read",
        content: [
            "As a software developer, I always thought hardware was this mysterious black box. But when I started exploring microcontrollers and digital logic, I discovered a whole new world that deepened my understanding of how computers actually work at the most fundamental level.",
            "My journey began with an Arduino Uno and a simple LED blinking project. While it might sound trivial, there's something magical about writing code that controls a physical object in the real world. It bridges the gap between the abstract world of software and tangible, physical outcomes.",
            "From there, I moved on to more complex projects: reading sensor data, controlling motors, and building simple circuits. Each project taught me something new about electronics, from understanding resistors and capacitors to reading datasheets and designing PCB layouts.",
            "One of the biggest challenges was debugging hardware issues. Unlike software where you can set breakpoints and inspect variables, hardware debugging often requires a multimeter, an oscilloscope, and a lot of patience. But this process taught me to think more systematically about problem-solving.",
            "The intersection of hardware and software is where things get really exciting. Building IoT devices that connect to web dashboards, creating custom input devices for specific workflows, or designing embedded systems — these projects combine the best of both worlds and open up endless possibilities."
        ]
    },
    "4": {
        id: 4,
        title: "Why I Love TypeScript",
        excerpt: "Catching bugs before they reach production. Here is how static typing saved my latest project.",
        date: "Jan 10, 2026",
        category: "Development",
        readTime: "4 min read",
        content: [
            "When I first encountered TypeScript, I was skeptical. Why add all this extra syntax when JavaScript works just fine? But after using it on a large project, I became a true believer. TypeScript doesn't just catch bugs — it fundamentally changes how you think about code architecture.",
            "The most immediate benefit is catching errors at compile time rather than runtime. How many times have you seen 'Cannot read property of undefined' in the browser console? With TypeScript's strict null checks, these errors are caught before your code ever runs.",
            "But TypeScript's real power goes beyond simple type checking. Features like discriminated unions, generics, and utility types enable you to model complex domain logic in ways that are both type-safe and expressive. Your types become living documentation of your application's data flow.",
            "The developer experience improvements are substantial too. With proper type definitions, your IDE can provide accurate autocomplete, inline documentation, and refactoring tools. Renaming a property across an entire codebase becomes a simple, safe operation instead of a terrifying search-and-replace.",
            "For team projects, TypeScript is invaluable. It serves as a contract between different parts of your application. When one developer changes an API response shape, TypeScript immediately highlights every place in the codebase that needs to be updated. This prevents entire categories of integration bugs."
        ]
    },
    "5": {
        id: 5,
        title: "Building a Secure API",
        excerpt: "Best practices for backend security, data validation, and handling authentication tokens.",
        date: "Feb 14, 2026",
        category: "Backend",
        readTime: "7 min read",
        content: [
            "API security is not optional — it's a fundamental requirement of any production application. In this post, I'll share the key practices I follow when building backend APIs, from authentication to input validation to secure data handling.",
            "Authentication is the first line of defense. I prefer using JWT (JSON Web Tokens) for stateless authentication, combined with refresh tokens for maintaining sessions. The key is to keep access tokens short-lived (15 minutes or less) and store refresh tokens securely, ideally in HTTP-only cookies.",
            "Input validation is critical and should never be done only on the client side. Every piece of data that enters your API should be validated and sanitized on the server. Libraries like Zod or Joi make it easy to define schemas and validate incoming requests against them.",
            "Rate limiting is often overlooked but essential. Without it, your API is vulnerable to brute force attacks, denial of service, and abuse. Implement rate limiting at multiple levels: per-IP, per-user, and per-endpoint, with stricter limits on sensitive operations like login attempts.",
            "Finally, always follow the principle of least privilege. Database users should only have the permissions they need, API endpoints should only expose the data that's necessary, and error messages should never leak implementation details. Security is a mindset, not a checklist."
        ]
    }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
            <div className="max-w-3xl mx-auto">

                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-10 transition-colors font-medium font-sans group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full font-sans">
                        {post.category}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1.5 font-sans">
                        <Calendar size={14} /> {post.date}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1.5 font-sans">
                        <Clock size={14} /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight font-serif leading-tight">
                    {post.title}
                </h1>

                <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 font-sans leading-relaxed border-l-4 border-blue-500 pl-4">
                    {post.excerpt}
                </p>

                <div className="flex items-center gap-3 mb-12 pb-8 border-b border-slate-200 dark:border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <User size={20} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm font-sans">Glenn</p>
                        <p className="text-xs text-slate-500 font-sans">Software Developer</p>
                    </div>
                </div>

                <article className="space-y-6">
                    {post.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-slate-700 dark:text-slate-300 text-[16px] leading-[1.85] font-sans"
                        >
                            {paragraph}
                        </p>
                    ))}
                </article>

                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all font-sans group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to all articles
                    </Link>
                </div>

            </div>
        </div>
    );
}