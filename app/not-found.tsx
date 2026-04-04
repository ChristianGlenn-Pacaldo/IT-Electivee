'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef, useCallback } from 'react';

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio('/404-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => { });
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">

        <div className="relative mb-8 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-500/30">
            <Image
              src="/404.png"
              alt="404 - Page Not Found"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1
          className={`text-7xl md:text-9xl font-black tracking-tighter mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent transition-all duration-200 ${glitch ? 'translate-x-1 skew-x-2 opacity-80' : ''
            }`}
        >
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">
          Oops! Page not found
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg max-w-md leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-base hover:scale-105"
          >
            <Link href="/">
              ← Back to Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-6 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-base hover:scale-105"
          >
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>

        <p className="mt-12 text-sm text-slate-400 dark:text-slate-600 font-mono">
          Error 404 • {new Date().getFullYear()}
        </p>
      </div>

      <button
        onClick={toggleMusic}
        id="music-toggle"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer border-2 ${isPlaying
            ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/40 scale-110'
            : 'bg-slate-800/80 border-white/10 hover:border-blue-500/50 hover:bg-slate-700/80 shadow-lg shadow-black/20'
          }`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-5">
            <span className="w-[3px] bg-white rounded-full animate-[soundbar_0.6s_ease-in-out_infinite_alternate]" style={{ height: '60%' }} />
            <span className="w-[3px] bg-white rounded-full animate-[soundbar_0.6s_ease-in-out_0.2s_infinite_alternate]" style={{ height: '100%' }} />
            <span className="w-[3px] bg-white rounded-full animate-[soundbar_0.6s_ease-in-out_0.4s_infinite_alternate]" style={{ height: '40%' }} />
            <span className="w-[3px] bg-white rounded-full animate-[soundbar_0.6s_ease-in-out_0.1s_infinite_alternate]" style={{ height: '80%' }} />
          </div>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path d="M9 19V5l12-2v12.553A3.5 3.5 0 1 1 17 13V7.17L11 8.17v9.383A3.5 3.5 0 1 1 7 15.553 3.5 3.5 0 0 1 9 19z" />
          </svg>
        )}
      </button>
    </div>
  );
}
