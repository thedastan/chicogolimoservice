import { useEffect } from "react";

export function useParallax(
  ref: React.RefObject<HTMLElement>,
  speed = 0.25,
  maxOffset = 400  
) {
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // прогресс появления элемента в viewport (0 → 1)
            const progress =
              (windowHeight - rect.top) / (windowHeight + rect.height);

            // ограничиваем диапазон
            const clamped = Math.min(Math.max(progress, 0), 1);

            // финальное смещение
            const offset = (clamped - 0.5) * maxOffset * speed * 4;

            ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, speed, maxOffset]);
}
