'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface BackgroundSlideshowProps {
  images: string[]
  interval?: number
}

export default function BackgroundSlideshow({ images, interval = 5000 }: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover blur-sm"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>
      ))}
    </div>
  )
}
