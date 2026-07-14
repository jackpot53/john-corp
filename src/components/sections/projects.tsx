import { ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        프로젝트
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="text-base font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {(project.href || project.repoHref) && (
              <div className="mt-5 flex items-center gap-4 text-sm">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline"
                  >
                    <ExternalLink size={14} />
                    사이트
                  </a>
                )}
                {project.repoHref && (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-foreground"
                  >
                    <GithubIcon className="size-3.5" />
                    코드
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
