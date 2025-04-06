"use client"
import { InView } from "@/components/ui/in-view"
import { motion } from "framer-motion"

interface Project {
  title: string
  category: string
  image: string
  tag?: string
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="w-full overflow-hidden">
      <InView
        viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.09 },
          },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                key={index}
                className="border border-gray-300 p-4 relative hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`h-48 flex items-center justify-center mb-4 ${project.image ? "" : "bg-[#9ddcff]"}`}>
                  {project.image ? (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p className="text-xl font-medium text-black">{project.title}</p>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.category === "No-Code"
                        ? "bg-[#f384d4] text-black"
                        : project.category === "UI Design"
                          ? "bg-[#5ab5e8] text-white"
                          : project.category === "UX Design"
                            ? "bg-[#e5c141] text-black"
                            : "bg-[#7cf072] text-black"
                    }`}
                  >
                    {project.category}
                  </div>
                </div>
                {project.tag && <div className="text-xs text-gray-500 mt-1">{project.tag}</div>}
              </motion.div>
            )
          })}
        </div>
      </InView>
    </div>
  )
}

