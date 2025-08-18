import { useState, useEffect, useRef, useCallback } from 'react'

export const useScrollAnimation = (options = {}) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const elementRef = useRef(null)
  const frameRef = useRef(null)

  const {
    threshold = 0.1,
    rootMargin = '0px',
    offset = 0,
    smooth = true
  } = options

  const updateScrollProgress = useCallback(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Calculate progress based on element position relative to viewport
    const elementTop = rect.top
    const elementHeight = rect.height
    
    // Progress from when element enters viewport to when it exits
    const startTrigger = windowHeight - offset
    const endTrigger = -elementHeight + offset
    
    const totalDistance = startTrigger - endTrigger
    const currentPosition = startTrigger - elementTop
    
    let progress = Math.max(0, Math.min(1, currentPosition / totalDistance))
    
    if (smooth) {
      // Apply easing function for smoother animation
      progress = easeInOutCubic(progress)
    }
    
    setScrollProgress(progress)
  }, [offset, smooth])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Intersection Observer for visibility detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    // Scroll event listener for progress tracking
    const handleScroll = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      
      frameRef.current = requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [threshold, rootMargin, updateScrollProgress])

  return {
    elementRef,
    scrollProgress,
    isInView
  }
}

// Easing function for smooth animations
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

// Hook for tracking individual timeline item animations
export const useTimelineItemAnimation = (index, totalItems, options = {}) => {
  const { elementRef, scrollProgress, isInView } = useScrollAnimation(options)
  
  // Calculate individual item progress based on scroll
  const itemProgress = Math.max(0, Math.min(1, (scrollProgress * totalItems) - index))
  
  // Animation states for different elements
  const dotScale = Math.max(0, Math.min(1, itemProgress * 2))
  const lineProgress = Math.max(0, Math.min(1, (itemProgress - 0.2) * 1.25))
  const contentOpacity = Math.max(0, Math.min(1, (itemProgress - 0.3) * 2))
  const contentTranslateY = (1 - Math.max(0, Math.min(1, (itemProgress - 0.2) * 1.5))) * 30
  
  return {
    elementRef,
    scrollProgress,
    isInView,
    itemProgress,
    dotScale,
    lineProgress,
    contentOpacity,
    contentTranslateY
  }
}

// Hook for timeline connecting line animation
export const useTimelineLineAnimation = (options = {}) => {
  const { elementRef, scrollProgress, isInView } = useScrollAnimation(options)
  
  // Calculate total line progress
  const lineHeight = scrollProgress * 100
  
  return {
    elementRef,
    scrollProgress,
    isInView,
    lineHeight
  }
}

// Legacy compatibility
export default useScrollAnimation