"use client"

import { ProjectCarousel } from "@/components/ui/project-carousel"

export function ProjectCarouselDemo() {
  const slideData = [
    {
      title: "Portfolio Design",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tag: "#portfolio_site",
      category: "No-Code",
    },
    {
      title: "Color system for app",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "UI Design",
    },
    {
      title: "Onboarding screen process",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "UX Design",
    },
    {
      title: "Finance Landing page",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "UI Design",
    },
  ]

  return (
    <div className="relative overflow-hidden w-full h-full py-10">
      <ProjectCarousel slides={slideData} />
    </div>
  )
}

