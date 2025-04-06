import { IconCloud } from "@/components/ui/interactive-icon-cloud"

// These are the skills we want to display in the cloud
const slugs = [
  "selenium",
  "postman",
  "typescript",
  "react",
  "jenkins",
  "githubactions",
  "azuredevops",
  "jira",
  "slack",
  "figma",
  "python",
  "cypress",
  // Additional related technologies
  "javascript",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "git",
  "github",
  "visualstudiocode",
  "docker",
  "jest",
]

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full min-h-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background px-4 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}

