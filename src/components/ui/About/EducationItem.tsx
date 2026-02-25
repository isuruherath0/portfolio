import { EducationItemProps } from "@/types/about.types"
import Image from "next/image"

export default function EducationItem( { logo, institution, degree, dates, href }: EducationItemProps) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer', className: 'flex space-x-4 mb-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-lg transition-colors -m-2' } : { className: 'flex space-x-4 mb-4' };
  
  return (
    <Wrapper {...wrapperProps}>
      {/* Institution Logo */}
      <Image
        width={90}
        height={90}
        src={logo}
        alt={institution}
        className="w-12 h-12 object-contain flex-shrink-0"
      />
      {/* Institution Details */}
      <div>
        <p className="font-semibold text-base">{degree}</p>
        <p className="text-sm text-gray-600">{institution}</p>
        <p className="text-sm text-gray-600">{dates}</p>
      </div>
    </Wrapper>
  )
}
