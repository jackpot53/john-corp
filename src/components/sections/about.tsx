import { about } from "@/content/about";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        소개
      </h2>
      <div className="mt-6 space-y-4 text-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {about.highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {highlight.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
