'use client'
import { usePathname, useRouter } from 'next/navigation';

const SLIDE_COUNT = 24;

export function usePresentation() {
  const router = useRouter();
  const pathName = usePathname();
  const currentSlide = Number(pathName.split('/').pop())

  const goToPrevious = () => {
    const previousSlide = (currentSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT || SLIDE_COUNT;
    router.push(`/slide/${previousSlide}`);
  };

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % (SLIDE_COUNT + 1) || 1;
    router.push(`/slide/${nextSlide}`);
  };

  return {
    currentSlide,
    goToPrevious,
    goToNext,
  };
}
