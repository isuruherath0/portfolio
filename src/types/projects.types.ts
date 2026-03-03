interface ProjectCardProps {
  name: string;
  description: string;
  frameworks: string[];
  languages: string[];
  technologies: string[];
  tags: string[];
  href?: string;
  company?: string;
}

export type { ProjectCardProps };