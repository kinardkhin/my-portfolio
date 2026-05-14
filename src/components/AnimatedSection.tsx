import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    left: visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
    right: visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
    none: visible ? 'opacity-100' : 'opacity-0',
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${directionClass} ${className}`}
    >
      {children}
    </div>
  );
}
