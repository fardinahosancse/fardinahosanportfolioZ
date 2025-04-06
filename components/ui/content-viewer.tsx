"use client"

import { useState, useEffect, useRef } from "react"

interface ContentViewerProps {
  src: string
  type: "image" | "video" | "gif" | "website"
  title?: string
  autoplay?: boolean
}

export function ContentViewer({ src, type, title, autoplay = false }: ContentViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true)

    // Autoplay video if needed
    if (type === "video" && autoplay && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err)
      })
    }
  }, [src, type, autoplay])

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
        </div>
      )}

      {type === "website" && (
        <div className="w-full h-[80vh]">
          <iframe
            src={src}
            title={title || "Website preview"}
            className="w-full h-full border-0"
            onLoad={handleLoad}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {type === "image" && (
        <img
          src={src || "/placeholder.svg"}
          alt={title || "Project image"}
          className="w-full h-auto max-h-[80vh] object-contain"
          onLoad={handleLoad}
        />
      )}

      {(type === "video" || type === "gif") && (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-auto max-h-[80vh]"
          controls
          autoPlay={autoplay}
          loop={type === "gif" || autoplay}
          muted={type === "gif"}
          playsInline
          onLoadedData={handleLoad}
        />
      )}
    </div>
  )
}

