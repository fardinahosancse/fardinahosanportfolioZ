"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface Logo {
  id: string
  description: string
  image: string
  className?: string
}

interface Logos3Props {
  heading?: string
  logos?: Logo[]
  className?: string
}

const Logos3 = ({
  heading = "",
  logos = [
    {
      id: "logo-2",
      description: "Selenium",
      image: "https://www.selenium.dev/images/selenium_logo_square_green.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "K6",
      image: "https://k6.io/images/logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Postman",
      image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "GitHub Actions",
      image: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-9",
      description: "Azure DevOps",
      image: "https://cdn.worldvectorlogo.com/logos/azure-devops.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-10",
      description: "Jira",
      image: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/apple-touch-icon.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-11",
      description: "Slack",
      image: "https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_128.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-12",
      description: "Figma",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-13",
      description: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-14",
      description: "Cypress",
      image: "https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts1.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-15",
      description: "Playwright",
      image: "https://playwright.dev/img/playwright-logo.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-8">
      {heading && (
        <div className="container flex flex-col items-center text-center">
          <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl text-black">{heading}</h1>
        </div>
      )}
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 0.7 })]} className="w-full">
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div className="flex flex-col items-center">
                      <img src={logo.image || "/placeholder.svg"} alt={logo.description} className={logo.className} />
                      <span className="mt-2 text-xs text-gray-600">{logo.description}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}

export { Logos3 }

