import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-1 px-6 py-8 text-center text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-muted-foreground">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
