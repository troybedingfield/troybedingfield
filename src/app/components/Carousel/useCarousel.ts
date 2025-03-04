import { ReactElement, useCallback, useEffect, useRef, useState } from "react"

export function useCarousel(slides: ReactElement[], interval?: number, automatic?: boolean) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isAutomatic, setAutomatic] = useState(automatic ? true : false);
    const [autoInterval, setInterval] = useState(interval ? interval : 0);
    const [isPlaying, setIsPlaying] = useState(true);

    const timerRef = useRef<number | null>(null);



    //     function next() {
    //         let next = currentSlideIndex + 1;
    //         setCurrentSlideIndex(next === slides!.length ? 0 : next);
    // }
    const next = useCallback(() => {
        let next = currentSlideIndex + 1;
        setCurrentSlideIndex(next === slides!.length ? 0 : next);
    }, [currentSlideIndex, slides])

    function goto(index: number) {
        setCurrentSlideIndex(index);
    }

    const handleMouseEnter = () => {
        setIsPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsPlaying(true);
    };

    useEffect(() => {
        if (autoInterval > 0 && isAutomatic && isPlaying) {
            timerRef.current = window.setInterval(next, autoInterval);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [autoInterval, slides.length, currentSlideIndex, isAutomatic, isPlaying, next]);

    function back() {
        let previous = currentSlideIndex - 1;
        setCurrentSlideIndex(previous < 0 ? slides!.length - 1 : previous);

    }



    return {
        currentSlideIndex,
        slide: slides[currentSlideIndex],
        slides,
        isFirstSlide: currentSlideIndex === 0,
        isLastSlide: currentSlideIndex === slides.length - 1,
        goto,
        next,
        back,
        handleMouseEnter,
        handleMouseLeave

    }
}
