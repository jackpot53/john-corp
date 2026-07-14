import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        경력
      </h2>

      <ol className="mt-8 space-y-8 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-foreground">
                {job.role} · {job.company}
              </h3>
              <span className="text-sm text-muted-foreground">
                {job.period}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {job.summary.map((line) => (
                <li key={line} className="leading-relaxed">
                  — {line}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
