"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/Projects/ProjectCard";
import { projects } from "../lib/constants/projects";

export default function Projects() {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterValue, setFilterValue] = useState<string>("");

  // Get unique values for each category
  const getUniqueValues = (category: string) => {
    switch (category) {
      case "language":
        return [...new Set(projects.flatMap((p) => p.languages))];
      case "framework":
        return [...new Set(projects.flatMap((p) => p.frameworks))];
      case "type":
        return [...new Set(projects.flatMap((p) => p.tags))];
      default:
        return [];
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (filterCategory === "all" || !filterValue) return true;

    switch (filterCategory) {
      case "language":
        return project.languages.includes(filterValue);
      case "framework":
        return project.frameworks.includes(filterValue);
      case "type":
        return project.tags.includes(filterValue);
      default:
        return true;
    }
  });

  return (
    <main id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white py-20 px-4 md:px-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h1>

        {/* Filters - Two dropdowns on either side */}
        <div className="flex justify-between items-center gap-4 mb-8 max-w-4xl mx-auto">
          {/* Left side - Category filter */}
          <select
            className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 cursor-pointer appearance-none"
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              setFilterValue(""); // Reset value when category changes
            }}
          >
            <option value="all">All Projects</option>
            <option value="language">Language</option>
            <option value="framework">Framework</option>
            <option value="type">Type</option>
          </select>

          {/* Right side - Value filter (only show when category is not "all") */}
          {filterCategory !== "all" && (
            <select
              className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 cursor-pointer appearance-none"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="">
                All {filterCategory === "type" ? "Types" : filterCategory === "language" ? "Languages" : "Frameworks"}
              </option>
              {getUniqueValues(filterCategory).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              frameworks={project.frameworks}
              languages={project.languages}
              technologies={project.technologies}
              tags={project.tags}
              href={project.href}
              company={project.company}
            />
          ))}
        </div>
      </div>
    </main>
  );
}