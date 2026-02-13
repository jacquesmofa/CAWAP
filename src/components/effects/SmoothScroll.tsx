import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.075;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      targetScroll = window.scrollY;
      currentScroll = lerp(currentScroll, targetScroll, ease);

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${currentScroll}px)`;
      }

      requestAnimationFrame(updateScroll);
    };

    requestAnimationFrame(updateScroll);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.style.transform = 'translateY(0)';
      }
    };
  }, []);

  return (
    <div className="smooth-scroll-wrapper">
      <div ref={scrollRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
