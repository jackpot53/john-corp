import Link from "next/link";
import { Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-24 sm:pt-32"
    >
      <p className="text-sm font-medium text-accent">{profile.title}</p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        안녕하세요, {profile.name}입니다.
      </h1>
      <p className="max-w-xl text-lg text-muted">{profile.tagline}</p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="#projects"
          className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          프로젝트 보기
        </Link>
        <Link
          href="#experience"
          className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
        >
          경력 보기
        </Link>
      </div>

      <div className="flex items-center gap-4 pt-4 text-muted">
        {profile.social.github && (
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
        )}
        {profile.social.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
        )}
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="transition-colors hover:text-foreground"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
}
