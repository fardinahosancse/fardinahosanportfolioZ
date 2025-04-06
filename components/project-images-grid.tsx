"use client"
import { useState, useEffect, useRef } from "react"
import { InView } from "@/components/ui/in-view"
import { motion } from "framer-motion"
import { Modal } from "@/components/ui/modal"
import { ContentViewer } from "@/components/ui/content-viewer"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

// Define project content types
type ContentType = "image" | "video" | "gif" | "website"

interface ProjectContent {
  name: string
  description: string
  type: ContentType
  src: string
  thumbnail?: string
  url: string
}

// Update the projectsData array to include the new projects and modify the component to autoplay videos without hover
// Replace the projectsData array with this updated version:

const projectsData: ProjectContent[] = [
  // Add the three projects at the beginning of the array
  {
    name: "Polling Mania",
    description:
      "Engage your audience instantly with real-time, interactive polls. Gather immediate insights through feedback, predictions, or trivia, keeping fans engaged from start to finish. With easy setup and customizable options, you can tailor polls for any event or campaign. Create purposeful polls to capture opinions and get to know your audience better, or event-based polls where participants guess outcomes and earn rewards for correct answers.",
    type: "video",
    src: "https://websitecue.azureedge.net/Prod_Polling/PollingHeader_1.webm",
    url: "https://www.connectwithcue.com/products/polling-mania",
  },
  {
    name: "Bingo",
    description:
      "A new spin on a traditional game allows fans to become active participants, playing on their phones while the game unfolds in front of them. For brands, it's more than data collection; it's a dynamic way to engage with fans at the heart of game day energy!",
    type: "image",
    src: "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/6643730f28ce04d364bf2fcc_fullyCustomizable.png",
    url: "https://www.connectwithcue.com/products/bingo",
  },
  {
    name: "AR Prize Drop",
    description:
      "The perfect way to get your brand in thousands of people's hands. Play it live at an event to capture the energy of the moment, or use it to connect between events, allowing people to play in their backyard, couch, or wherever they are in the moment.",
    type: "video",
    src: "https://websitecue.azureedge.net/PROD_ARPRIZEDROP/Parachute_QRcode.webm",
    thumbnail:
      "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/664f85ebf136c336b676c15c_AR%20Prize%20Drop%20logo.svg",
    url: "https://www.connectwithcue.com/products/ar-prize-drop",
  },
  // Keep the rest of the existing projects
  {
    name: "FANSEE",
    description:
      "At CUE (https://www.connectwithcue.com), we helped shape FANSEE, transforming the traditional fan cam by allowing fans to share live streams from their phones. Over two years, we performed rigorous testing, reporting 1,400+ bugs and creating detailed test plans to ensure seamless functionality. Working within CUE's fast-paced development cycles, we adapted quickly to frequent releases. Our performance testing ensured the platform could handle 20,000+ active participants during live events, delivering a reliable and engaging fan experience.",
    type: "image",
    src: "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/658ae0f097fdafdaf1fe02dc_fansee-hero.png",
    url: "https://www.connectwithcue.com/products/fansee",
  },
  {
    name: "PostUP",
    description:
      "At CUE (https://www.connectwithcue.com), I contributed as an End-to-End QA for POST-UP, a platform designed to collect and display user-generated content in real time. I ensured the platform's functionality through rigorous testing, identifying critical issues and streamlining processes. By developing detailed test plans and test cases, I maintained high-quality standards. Additionally, my performance testing ensured the platform could handle real-time updates seamlessly, delivering an engaging and dynamic experience for users.",
    type: "video",
    src: "https://websitecue.azureedge.net/Prod_postup/POST_UP_HEADER_LOOP_1.mp4",
    thumbnail: "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/658ae0f097fdafdaf1fe02dc_fansee-hero.png", // Using a placeholder thumbnail
    url: "https://www.connectwithcue.com/products/postup",
  },
  {
    name: "Fanatic Filters",
    description:
      "At CUE (https://www.connectwithcue.com), I contributed to Fanatic Filters, a platform that lets fans shine with dynamic facial tracking filters, adding fun and surprise to events for all ages. Over two years, I helped identify 600+ bugs and developed test plans to ensure quality. I worked within CUE's fast-paced environment, quickly adapting to frequent releases. My performance testing ensured the platform could handle events with 15,000+ participants, delivering a seamless and engaging experience for all users.",
    type: "image",
    src: "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/658c9152b407268bd3c63198_FanaticFilters%20white.svg",
    url: "https://www.connectwithcue.com/products/fanatic-filters",
  },
  {
    name: "Aloompa",
    description:
      "Playwright Automation + Manual QA for Aloompa. At Aloompa (https://aloompa.com/), I ensured seamless functionality of event apps through Playwright Automation and Manual QA. I automated key workflows like scheduling, notifications, and user interactions, reducing testing time and improving accuracy. Manual testing focused on features like maps, live updates, and content delivery. Additionally, I conducted performance testing to handle high user loads during events and cross-device compatibility testing, ensuring a reliable experience for all users.",
    type: "image",
    src: "https://aloompa.com/wp-content/uploads/2023/03/WZA2023_resized.png",
    url: "https://aloompa.com/",
  },
  {
    name: "Prize It (Scratch Game, Pick 6)",
    description:
      "At CUE (https://www.connectwithcue.com), we played a pivotal role in shaping Prize-It, a platform designed to distribute prizes to audiences through interactive games while seamlessly integrating brand partners. Over two years, we conducted extensive manual testing, reporting 800+ bugs and creating robust test plans. Adapting to CUE's fast-paced development cycles, we ensured seamless functionality. Our performance testing verified the platform could handle 10,000+ active participants, delivering a reliable and engaging brand experience.",
    type: "video",
    src: "https://websitecue.azureedge.net/Prod_PrizeIT/PRIZEIT_HEADER_1_1.webm",
    thumbnail: "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/658ae0f097fdafdaf1fe02dc_fansee-hero.png", // Using a placeholder thumbnail
    url: "https://www.connectwithcue.com/products/prizeit",
  },
  {
    name: "Indybuild",
    description:
      "IndyBuild (https://www.indybuild.com/) is a platform for creators to showcase and monetize their projects. As a Manual QA, I focused on functional, usability, and compatibility testing to ensure a seamless user experience. I verified key workflows, such as project uploads, payment integrations, and content discovery. By identifying and reporting usability issues, I ensured smooth navigation for creators and users. Additionally, I conducted cross-browser and device testing to guarantee compatibility across platforms, enhancing accessibility and engagement.",
    type: "image",
    src: "https://www.indybuild.com/assets/images/workspace.png",
    url: "https://www.indybuild.com/",
  },
  {
    name: "Trivia Mania",
    description:
      "At CUE (https://www.connectwithcue.com), we played a critical role in shaping Trivia into the robust platform it is today. Over two years, we've identified and reported 1,400+ bugs, ensuring consistent quality in a high-velocity development environment. Our expertise in manual testing, paired with well-structured test plans and cases, enabled us to adapt quickly to the fast-paced project. Additionally, we conducted performance testing to ensure the platform could handle 20,000+ concurrent players seamlessly, delivering exceptional reliability under heavy usage.",
    type: "image",
    src: "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/65cfbf0c004633fbff87a68c_mobile_3up_opt_img.png",
    url: "https://www.connectwithcue.com/products/trivia-mania",
  },
  {
    name: "Light Show 2.0",
    description:
      "LightShow, one of our longest projects with CUE (https://www.connectwithcue.com), transforms sound into a captivating mobile light show, creating an immersive audience experience. From the ground up, we contributed as testers, conducting manual testing and raising 1,000+ bugs over two years. In CUE's fast-paced development with frequent sprint releases, we ensured robust quality by developing test plans and cases. With normal player hits per program reaching 30,000+, we performed extensive performance testing, ensuring LightShow's seamless operation and enhancing its impact on users.",
    type: "video",
    src: "https://websitecue.azureedge.net/Prod_lightshow/LS_HEADER_LOOP_1.webm",
    thumbnail:
      "https://cdn.prod.website-files.com/6581f5fb68a976a311d92569/658312072f789caac7e94782_LightShow%20white.svg",
    url: "https://www.connectwithcue.com/products/lightshow",
  },
  {
    name: "Shozon- Marketplace in UAE",
    description:
      "Shozon is the UAE's leading classifieds marketplace, offering a platform to buy, sell, or find anything, from properties and vehicles to jobs and goods. The platform is tailored to meet diverse needs, providing free ads for businesses and individuals. My contributions included identifying and reporting 130+ bugs using exploratory, regression, and cross-environment testing. I created test cases and conducted Usability, System, Functional, Cross-browser, and Compatibility Testing. Detailed reports in Azure DevOps ensured swift resolutions, with a complete bug report delivered in just three days.",
    type: "image",
    src: "https://shozon.com/assets/icon/logo.png",
    url: "https://shozon.com/",
  },
]

export function ProjectImagesGrid() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectContent | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showDescription, setShowDescription] = useState(false)
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Set up video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projectsData.length)

    // Autoplay all videos when they're in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting && projectsData[index].type === "video" && videoRefs.current[index]) {
            // Try to play the video immediately when it comes into view
            videoRefs.current[index]?.play().catch((err) => {
              console.log("Autoplay prevented:", err)
              // If autoplay is prevented, try again with muted
              if (videoRefs.current[index]) {
                videoRefs.current[index].muted = true
                videoRefs.current[index]?.play().catch((err) => {
                  console.log("Muted autoplay also prevented:", err)
                })
              }
            })
          } else if (!entry.isIntersecting && videoRefs.current[index]) {
            videoRefs.current[index]?.pause()
          }
        })
      },
      { threshold: 0.3 },
    ) // Lower threshold to start playing earlier

    // Observe all video elements
    const videoElements = document.querySelectorAll(".project-video")
    videoElements.forEach((el) => observer.observe(el))

    return () => {
      videoElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleProjectClick = (project: ProjectContent) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index)
    setShowDescription(false)

    // Start timer to show description after 5 seconds
    hoverTimerRef.current = setTimeout(() => {
      setShowDescription(true)
    }, 5000)

    // Don't pause videos on hover - they should continue playing
  }

  const handleMouseLeave = () => {
    setHoveredProject(null)
    setShowDescription(false)

    // Clear the timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }

    // Don't pause videos on mouse leave - they should continue playing
  }

  return (
    <div className="w-full overflow-hidden">
      <InView
        viewOptions={{ once: true, margin: "0px 0px -150px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.09 },
          },
        }}
      >
        <div className="columns-2 gap-4 sm:columns-3">
          {projectsData.map((project, index) => {
            const isHovered = hoveredProject === index

            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                }}
                key={index}
                className="mb-4 group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {project.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={project.src}
                    className="w-full h-full object-cover rounded-lg project-video"
                    data-index={index}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    poster={project.thumbnail}
                  />
                ) : (
                  <img
                    src={project.src || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full rounded-lg object-cover"
                  />
                )}

                {/* Overlay with name and description - only visible on hover */}
                <div
                  className={`absolute inset-0 bg-black transition-all duration-300 rounded-lg flex flex-col items-center justify-center p-4 ${
                    isHovered ? "bg-opacity-70" : "bg-opacity-0"
                  }`}
                >
                  <h3
                    className={`text-white font-semibold text-lg text-center transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {project.name}
                  </h3>

                  {isHovered && showDescription && (
                    <p className="text-white text-sm mt-2 overflow-y-auto max-h-[150px] text-center transition-opacity duration-300">
                      {project.description.length > 150
                        ? `${project.description.substring(0, 150)}...`
                        : project.description}
                    </p>
                  )}

                  {/* Visit Project button - only visible on hover */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 px-4 py-2 bg-white text-black rounded-md font-medium text-sm transition-opacity duration-300 hover:bg-gray-200 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation() // Prevent modal from opening when clicking the button
                    }}
                  >
                    Visit Project
                  </a>
                </div>

                {/* Icon indicators for content type */}
                {project.type === "video" && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </InView>

      {/* Enhanced Modal for displaying project content with description and visit button */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={selectedProject?.name}>
        {selectedProject && (
          <div className="flex flex-col">
            <ContentViewer
              src={selectedProject.src}
              type={selectedProject.type}
              title={selectedProject.name}
              autoplay={selectedProject.type === "video"}
            />
            <div className="p-6">
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              <div className="flex justify-center">
                <Button onClick={() => window.open(selectedProject.url, "_blank")} className="flex items-center gap-2">
                  Visit Project <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

