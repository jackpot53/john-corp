export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface AboutContent {
  paragraphs: string[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  repoHref?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string[];
}
