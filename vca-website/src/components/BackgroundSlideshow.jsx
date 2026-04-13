import { useState, useEffect, useMemo } from 'react'

function BackgroundSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)
  const [opacity, setOpacity] = useState(0.15)

  // Swap these URLs with real VCA photos when you get them
  const images = useMemo(() => [
    'https://placehold.co/1920x1080/1a2b4a/fad6a5?text=VCA+Photo+1',
    'https://placehold.co/1920x1080/02029F/ffffff?text=VCA+Photo+2',
    'https://placehold.co/1920x1080/0f1a2e/fad6a5?text=VCA+Photo+3',
    'https://placehold.co/1920x1080/1a2b4a/ffffff?text=VCA+Photo+4',
    'https://placehold.co/1920x1080/02029F/fad6a5?text=VCA+Photo+5',
  ], [])

  // Sections mapped to image indices
  const sections = useMemo(() => ['home', 'about', 'events', 'eboard', 'contact'], [])

  useEffect(() => {
    const observers = sections.map((id, index) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Fade out
              setOpacity(0)
              // Swap image then fade back in
              setTimeout(() => {
                setCurrentImage(index)
                setOpacity(0.15)
              }, 400)
            }
          })
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach((obs, i) => {
        const el = document.getElementById(sections[i])
        if (obs && el) obs.unobserve(el)
      })
    }
  }, [images, sections])

  return (
    <div
      className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        opacity: opacity,
        transition: 'opacity 0.4s ease-in-out',
      }}
    />
  )
}

export default BackgroundSlideshow