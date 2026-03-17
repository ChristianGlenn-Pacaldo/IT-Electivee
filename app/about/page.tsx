import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Code2, MapPin, User, FileText, Award } from 'lucide-react';

export default function About() {
const skills = ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'PHP', 'C#', 'Postgresql', 'MySQL'];

const certificates = [
{
title: "JavaScript Algorithms",
issuer: "FreeCodeCamp",
date: "2024",
image: "/4.png",
},
];

return (
<div className="min-h-screen bg-slate-50 dark:bg-[#03040C] pb-20">

  {/* --- COVER PHOTO AREA --- */}
  <div className="w-full h-48 md:h-80 bg-slate-300 dark:bg-slate-600 relative overflow-hidden">
    <Image src="/cover.jpg" alt="Cover Photo" fill className="object-cover" priority />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-150 opacity-40 dark:opacity-40"></div>
  </div>

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* --- PROFILE HEADER --- */}
    <div className="relative pb-6 border-b border-slate-200 dark:border-white/10 mb-8">
      
      {/* Profile Picture */}
      <div className="absolute -top-16 md:-top-24 left-4 md:left-8 z-10">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-slate-50 dark:border-[#03040C] bg-white dark:bg-slate-800 relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
           <Image src="/washing.webp" alt="Glenn" fill className="object-cover" />
        </div>
      </div>

      {/* Name & Bio */}
      <div className="pt-20 md:pt-4 pl-4 md:pl-[260px] flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
            Glenn
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mt-1 md:mt-2 font-sans">
            Web Developer | BSIT Student
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1 flex items-center gap-1 font-sans">
            <MapPin size={16} /> Cordova, Cebu
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 w-full sm:w-auto">
           <Link 
            href="/contact" 
            className="flex-1 sm:flex-none text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all font-sans shadow-md hover:shadow-lg hover:-translate-y-0.5"
           >
             Contact Me
           </Link>
           <a 
            href="/resumee.pdf" 
            target="_blank" 
            className="flex-1 sm:flex-none text-center px-6 py-3 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold rounded-xl transition-all font-sans flex items-center justify-center gap-2"
           >
             <FileText size={18} />
             Resume
           </a>
        </div>
      </div>
    </div>

    {/* --- TIMELINE CONTENT --- */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      
      {/* LEFT COLUMN: Intro & Skills */}
      <div className="col-span-1 space-y-6">
        <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white font-serif tracking-tight">Intro</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <p className="text-sm font-sans leading-relaxed">
                Studies <span className="font-semibold text-slate-900 dark:text-slate-200">BS Information Technology</span> at <span className="font-semibold text-slate-900 dark:text-slate-200">Cordova Public College</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold rounded-lg text-xs font-sans shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Posts & Certificates */}
      <div className="col-span-1 lg:col-span-2 space-y-6">
        
        {/* Ahmm About Me Post Ni*/}
        <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white font-serif">About Me</h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Pinned Post</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-[15px]">
            I am a passionate Software Developer dedicated to engineering high-performance web applications and custom software. I focus on bridging the gap between complex logic and visually captivating design.
          </p>
        </div>

        {/* --- CERTIFICATES SECTION NI SIYA --- */}
        <div className="bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <Award size={20} className="text-yellow-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white font-serif">Certificates</h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Achievements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{cert.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
);
}