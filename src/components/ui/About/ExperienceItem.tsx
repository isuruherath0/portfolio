import { ExperienceItemProps } from "@/types/about.types";
import Image from "next/image";


export default function ExperienceItem({ logo, company, employmentType, roles }: ExperienceItemProps) {
  return (
    <div className="flex space-x-4 mb-3">
      {/* Company Logo */}
      <Image
        width={90}
        height={90}
        src={logo}
        alt={company}
        className="w-12 h-12 object-contain flex-shrink-0"
      />

      {/* Company Info and Roles */}
      <div className="flex-1">
        {/* Company Header */}
        <h3 className="font-semibold text-base mb-1">{company}</h3>
        <p className="text-sm text-gray-600 mb-3">{employmentType}</p>

        {/* Roles */}
        <div className="relative">
          {/* Vertical Line */}
          {roles.length > 1 && (
            <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gray-300"></div>
          )}

          {roles.map((role, index) => (
            <div
              key={index}
              className={`relative pl-6 ${index < roles.length - 1 ? "mb-4" : ""} flex justify-between`}
            >
                <div className="absolute left-0 top-[6px] w-[12px] h-[12px] bg-gray-400 rounded-full"></div>

              {/* Role Title and Dates */}
              <div>
                <h4 className="font-semibold text-base">{role.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{role.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}