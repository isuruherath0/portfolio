import { ExperienceItemProps } from "@/types/about.types";
import Image from "next/image";

export default function ExperienceItem({ logo, company, employmentType, roles }: ExperienceItemProps) {
  return (
    <div className="flex space-x-3 mb-4">
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
          {/* Vertical Line */}
          {roles.length > 1 && (
            <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gray-300"></div>
          )}

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}