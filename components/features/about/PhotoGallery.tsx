'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
  span?: string;
}

const photos: Photo[] = [
  { src: '/profile.jpg', alt: 'Chilling vibes', span: 'col-span-2 row-span-2' },
  { src: '/boss.jpg', alt: 'Boss mode' },
  { src: '/cover.jpg', alt: 'Boracay trip' },
  { src: '/professor.jpg', alt: 'Professor fit' },
  { src: '/shh.jpg', alt: 'Beach day' },
];

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, goNext, goPrev]);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className={`relative overflow-hidden cursor-pointer group ${
              photo.span || 'col-span-1 row-span-1'
            }`}
          >
            <div className={`relative w-full ${photo.span ? 'aspect-square' : 'aspect-square'}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium truncate">{photo.alt}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="text-white" size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="text-white" size={20} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16 z-20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex items-center justify-center" style={{ maxHeight: '80vh' }}>
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl"
                priority
                unoptimized
              />
            </div>
            <p className="text-center text-white/70 text-sm mt-4 font-medium">
              {photos[selectedIndex].alt} &middot; {selectedIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
