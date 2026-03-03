import { ProjectCardProps } from "@/types/projects.types";

export default function ProjectCard({
  name,
  description,
  frameworks,
  languages,
  technologies,
  tags,
  href,
  company,
}: ProjectCardProps) {
  // Display company name if it's a work project, otherwise show the tag
  const displayTags = company ? [company] : tags;
  
  return (
    <div
      className="block border border-gray-300 dark:border-gray-700 p-4 md:p-6 rounded-lg bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
    >
      {/* Title and Tags */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h2 className="text-xl font-bold">{name}</h2>
        {displayTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{description}</p>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700 mb-3"></div>

      {/* All tech chips on same line */}
      <div className="flex flex-wrap gap-1.5">
        {frameworks.map((framework) => (
          <span
            key={framework}
            className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
          >
            {framework}
          </span>
        ))}
        {languages.map((language) => (
          <span
            key={language}
            className="px-2.5 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
          >
            {language}
          </span>
        ))}
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}