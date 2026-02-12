interface Role {
  title: string;
  dates: string;
}

interface ExperienceItemProps {
  logo: string;
  company: string;
  employmentType: string;
  roles: Role[];
}

interface EducationItemProps {
  logo: string;
  institution: string;
  degree: string;
  dates: string;
}

interface PublicationItemProps {
  title: string;
  details: string;
}

export type {
  ExperienceItemProps,
  EducationItemProps,
  PublicationItemProps,
};