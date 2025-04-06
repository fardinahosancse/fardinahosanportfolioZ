"use client"
import Link from "next/link"
import { SparklesText } from "@/components/ui/sparkles-text"
import { Logos3 } from "@/components/ui/logos3"
import { ProjectImagesGrid } from "@/components/project-images-grid"
import { Footerdemo } from "@/components/ui/footer-section"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* 20% left white space */}
      <div className="w-[20%]"></div>

      {/* 60% centered content with thin border lines on both sides */}
      <main className="w-[60%] bg-white border-l border-r border-gray-300 relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1196 3103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin slice"
          >
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Content with z-index to appear above the grid */}
        <div className="relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center py-6 px-8">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold flex items-center text-black">
                <span className="text-3xl">✦</span> fardin
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="#portfolio" className="text-black hover:underline">
                Portfolio
              </Link>
              <Link href="#hire-me" className="text-black hover:underline">
                Hire Me
              </Link>
            </nav>
          </header>

          {/* Hero Section - Fixed image loading */}
          <section className="px-8 pt-16 pb-8">
            <div className="flex flex-col gap-12">
              {/* Top Fardin Image (Profile + Title) */}
              <div className="w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-fardin-Pqh4XDk0pCCj4gnsZLgJRWecUB5MeH.png"
                  alt="Fardin Ahosan - SQA Engineer - Bug Lover"
                  className="w-full h-auto"
                />
              </div>

              {/* Headline and Description - Updated with new content and reduced font size */}
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col">
                  <SparklesText
                    text="Full-time QA, part-time Software Developer, and a full-time perfectionist when it comes to product quality."
                    className="text-2xl font-bold leading-tight text-black font-poppins"
                    colors={{ first: "#f384d4", second: "#5ab5e8" }}
                    sparklesCount={15}
                  />
                  <Link href="#contact" className="bg-black text-white px-8 py-3 inline-block w-fit mt-6">
                    Hire me
                  </Link>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg mb-6 text-black">
                    I'm a QA Engineer with 2+ years of making sure SaaS, gamification, streaming, and health tracking
                    apps don't break (at least, not on my watch).
                  </p>
                  <p className="text-md mb-6 text-gray-700">
                    I hunt bugs, automate tests, and obsess over pixel-perfect experiences—all while having fun pushing
                    software to its limits!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills Section - Moved above Work Experience and taking full width */}
          <section className="px-8 py-16 border-t border-b border-gray-300">
            <div className="w-full">
              <div className="w-full overflow-hidden">
                <Logos3 heading="" />
              </div>
            </div>
          </section>

{/* Work Experience - Updated with new content */}
<section className="px-8 py-16 border-t border-b border-gray-300">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/4">
      <div className="relative">
        <h2 className="text-2xl font-semibold bg-[#ffc9f0] px-3 py-1 inline-block mb-4 text-black">
          Work Experience
        </h2>
        <div className="absolute -right-8 top-12 transform rotate-12">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15C20 -5 40 35 59 15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="mt-12 text-black">Have been working in QA for 2+ years</p>
    </div>
    <div className="md:w-3/4 grid gap-6">
      <div className="flex gap-6 items-start">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md text-black text-xl font-bold">
          1
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">
            QA Developer at <span className="font-bold">Bevy Commerce</span>
          </h3>
          <p className="text-gray-700">
            Bevy Commerce is a leading provider of gamification solutions for e-commerce platforms. As a QA
            Developer, I am responsible for ensuring the quality and reliability of our software products
            through rigorous testing and automation.
          </p>
          <p className="text-gray-500 text-sm">April 2025 - Present | Remote</p>
        </div>
      </div>
      <div className="flex gap-6 items-start">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md text-black text-xl font-bold">
          2
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">
            SQA Engineer at <span className="font-bold">unidevGO Software Solutions</span>
          </h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-1 mt-2">
            <li>
              Contributed to high-velocity Agile environments, reducing regression testing time by 15% through
              optimized test plans.
            </li>
            <li>
              Streamlined communication between developers and QA, accelerating critical bug resolution by
              20%.
            </li>
            <li>
              Played a key role in enhancing software quality, leading to a 20% increase in user satisfaction.
            </li>
            <li>Influenced UX design decisions in Figma, improving feature adoption by 15%.</li>
          </ul>
          <p className="text-gray-500 text-sm">December 2023 - January 2025 | Remote</p>
        </div>
      </div>
      <div className="flex gap-6 items-start">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md text-black text-xl font-bold">
          3
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">
            Test Engineer at <span className="font-bold">Debug Studio</span>
          </h3>
          <p className="text-gray-700">
            Designed test plans for three product lines, improving coverage by 20%, and led usability testing,
            reducing support tickets by 25%. Implemented Azure DevOps for bug tracking, identifying 300+ bugs
            in the first year.
          </p>
          <p className="text-gray-500 text-sm">October 2022 - August 2023 | Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Education Section - New section */}
<section className="px-8 py-16 border-b border-gray-300">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/4">
      <div className="relative">
        <h2 className="text-2xl font-semibold bg-[#ffc9f0] px-3 py-1 inline-block mb-4 text-black">
          Education
        </h2>
        <div className="absolute -right-8 top-12 transform rotate-12">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15C20 -5 40 35 59 15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="mt-12 text-black">My academic background</p>
    </div>
    <div className="md:w-3/4">
      <div className="flex gap-6 items-start">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md text-black text-xl font-bold">
          1
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">B.Sc in Computer Science & Engineering</h3>
          <p className="text-lg font-medium text-black">
            Bangladesh Army University of Engineering & Technology (BAUET)
          </p>
          <p className="text-gray-500 text-sm">2019 - 2023</p>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* Featured Projects - New Image Grid with Animation */}
          <section className="px-8 py-16 border-b border-gray-300">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="relative">
                  <h2 className="text-2xl font-semibold bg-[#ffc9f0] px-3 py-1 inline-block mb-4 text-black">
                    Featured Projects
                  </h2>
                  <div className="absolute -right-8 top-12 transform rotate-12">
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 15C20 -5 40 35 59 15" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <p className="mt-12 text-black">Have designed morethan 20 projects</p>
              </div>
              <div className="md:w-3/4">
                <ProjectImagesGrid />
              </div>
            </div>
          </section>

          {/* New Footer */}
          <Footerdemo />
        </div>
      </main>

      {/* 20% right white space */}
      <div className="w-[20%]"></div>
    </div>
  )
}

