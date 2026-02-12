import { ProjectCardProps } from "@/types/projects.types";

export default function ProjectCard({
  name,
  description,
  frameworks,
  languages,
  technologies,
  tags,
}: ProjectCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700 mt-2">{description}</p>

      <div className="mt-4">
        <h3 className="font-semibold">Frameworks:</h3>
        <ul className="list-disc list-inside">
          {frameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Languages:</h3>
        <ul className="list-disc list-inside">
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Technologies:</h3>
        <ul className="list-disc list-inside">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Tags:</h3>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}