import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "프로젝트 이름 1",
    description:
      "프로젝트에 대한 한두 문장 설명을 여기에 작성하세요. 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 적어주면 좋습니다.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://example.com",
    repoHref: "https://github.com/your-id/project-1",
  },
  {
    title: "프로젝트 이름 2",
    description:
      "프로젝트에 대한 한두 문장 설명을 여기에 작성하세요. 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 적어주면 좋습니다.",
    stack: ["React", "Node.js", "PostgreSQL"],
    href: "https://example.com",
    repoHref: "https://github.com/your-id/project-2",
  },
  {
    title: "프로젝트 이름 3",
    description:
      "프로젝트에 대한 한두 문장 설명을 여기에 작성하세요. 어떤 문제를 해결했는지, 어떤 역할을 맡았는지 적어주면 좋습니다.",
    stack: ["Vue", "Firebase"],
    repoHref: "https://github.com/your-id/project-3",
  },
];
