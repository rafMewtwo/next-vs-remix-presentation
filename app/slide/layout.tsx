'use client'
import { usePresentation } from '@/hooks/usePresentation'
import '../globals.css'
import { useEffect, useRef } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { goToPrevious, goToNext } = usePresentation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, [containerRef.current]);

  return (
    <main
    ref={containerRef}
    tabIndex={0}
    className="w-full h-full"
    onKeyDown={({ key }) => {
      if (['ArrowLeft', 'ArrowUp', 'Backspace'].includes(key)) {
        return goToPrevious()
      }
      if (['ArrowRight', 'ArrowDown', 'Enter'].includes(key)) {
        return goToNext();
      }
    }}
    >
      {children}
    </main>

  )
}
