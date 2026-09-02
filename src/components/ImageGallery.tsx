import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="rounded-lg overflow-hidden border border-gray-200 hover:border-gold-400 transition-colors duration-200"
          >
            <img
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              className="w-full h-40 object-cover"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <img
            src={images[openIndex]}
            alt={`${alt} screenshot ${openIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-colors"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {openIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
