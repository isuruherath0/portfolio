interface Role {
  title: string;
  dates: string;
  projects?: string[];
}

interface ExperienceItemProps {
  logo: string;
  company: string;
  employmentType: string;
  roles: Role[];
  href?: string;
}

interface EducationItemProps {
  logo: string;
  institution: string;
  degree: string;
  dates: string;
  href?: string;
}

interface PublicationItemProps {
  title: string;
  details: string;
  href?: string;
}

export type {
  ExperienceItemProps,
  EducationItemProps,
  PublicationItemProps,
};