import { Logos3 } from "@/components/ui/logos3"

const techSkillsData = {
  heading: "Technical Skills",
  logos: [
    {
      id: "logo-1",
      description: "Playwright",
      image: "https://playwright.dev/img/playwright-logo.svg",
      className: "h-7 w-auto",
    },
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
      id: "logo-7",
      description: "Jenkins",
      image: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
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
  ],
}

function Logos3Demo() {
  return <Logos3 {...techSkillsData} />
}

export { Logos3Demo }

