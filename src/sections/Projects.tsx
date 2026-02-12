"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/Projects/ProjectCard";
import { projects } from "../lib/constants/projects";

export default function Projects() {
  const [filters, setFilters] = useState({
    language: "",
    framework: "",
    tag: "",
  });

  const filteredProjects = projects.filter((project) => {
    const matchesLanguage = filters.language
      ? project.languages.includes(filters.language)
      : true;
    const matchesFramework = filters.framework
      ? project.frameworks.includes(filters.framework)
      : true;
    const matchesTag = filters.tag ? project.tags.includes(filters.tag) : true;

    return matchesLanguage && matchesFramework && matchesTag;
  });

  return (
    <main id="projects" className="min-h-screen p-8 bg-white-100">
      
      <h1 className="text-3xl font-bold mb-6"> My Projects</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          className="border p-2 rounded"
          value={filters.language}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, language: e.target.value }))
          }
        >
          <option value="">Filter by Language</option>
          <option value="Java">Java</option>
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filters.framework}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, framework: e.target.value }))
          }
        >
          <option value="">Filter by Framework</option>
          <option value="Next.js">Next.js</option>
          <option value="React">React</option>
          <option value="Spring Boot">Spring Boot</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filters.tag}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, tag: e.target.value }))
          }
        >
          <option value="">Filter by Tag</option>
          <option value="Work">Work</option>
          <option value="University">University</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            frameworks={project.frameworks}
            languages={project.languages}
            technologies={project.technologies}
            tags={project.tags}
          />
        ))}
      </div>
    </main>
  );
}