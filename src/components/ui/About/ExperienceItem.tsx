import { ExperienceItemProps } from "@/types/about.types";
import Image from "next/image";

export default function ExperienceItem({ logo, company, employmentType, roles, href }: ExperienceItemProps) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer', className: 'flex space-x-3 mb-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-lg transition-colors -m-2' } : { className: 'flex space-x-3 mb-4' };
  
  return (
    <Wrapper {...wrapperProps}>
      {/* Company Logo */}
      <Image
        width={48}
        height={48}
        src={logo}
        alt={company}
        className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
      />

      {/* Company Info and Roles */}
      <div className="flex-1 min-w-0">
        {/* Company Header */}
        <h3 className="font-semibold text-sm md:text-base mb-0.5">{company}</h3>
        <p className="text-xs md:text-sm text-gray-600 mb-2">{employmentType}</p>

        {/* Roles */}
        <div className="relative">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`relative pl-5 ${index < roles.length - 1 ? "mb-3" : ""}`}
            >
              {/* Dot */}
              <div className="absolute left-0 top-[5px] w-[10px] h-[10px] bg-gray-400 rounded-full flex-shrink-0"></div>

              {/* Role Title and Dates on same line */}
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-sm leading-snug">{role.title}</h4>
                <p className="text-xs text-gray-500 whitespace-nowrap pt-[1px]">{role.dates}</p>
              </div>
              
              {/* Projects */}
              {role.projects && role.projects.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {role.projects.map((project) => (
                    <span
                      key={project}
                      className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}