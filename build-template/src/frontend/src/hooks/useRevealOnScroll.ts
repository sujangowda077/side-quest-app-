import { useEffect, useRef, useState } from 'react';

export function useRevealOnScroll(delay: number = 0) {
    const [isRevealed, setIsRevealed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTriggered.current) {
                        setTimeout(() => {
                            setIsRevealed(true);
                            hasTriggered.current = true;
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay]);

    return { ref, isRevealed };
}
