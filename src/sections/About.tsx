import Surge from "@/assets/images/Surge.png"
import Adl from "@/assets/images/Adl.jpg"
import SLIIT from "@/assets/images/SLIIT.png"
import Dharmaraja from "@/assets/images/Dharmaraja.jpg"
import Esoft from "@/assets/images/Esoft.jpg"
import ExperienceItem from "@/components/ui/About/ExperienceItem";
import EducationItem from "@/components/ui/About/EducationItem";
import { tools , technologies } from "@/lib/constants/skills"



export default function About() {
  return (

    <main id="about" className="min-h-screen flex flex-col items-center justify-center bg-white text-black space-y-8">
      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        {/* Experience */}

       <div className="border border-gray-300 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Experience</h2>

          <ExperienceItem
            logo={Surge.src}
            company="Surge Global"
            employmentType="Full-time · Hybrid"
            roles={[
              { title: "Software Engineer", dates: "Dec 2025 - Present" },
              { title: "Software Engineer Intern", dates: "Feb 2025 - Dec 2025" },
            ]}
          />
          <ExperienceItem
            logo={Adl.src}
            company="Axiata Digital Labs"
            employmentType="Internship · Hybrid"
            roles={[
              { title: "Software Engineer Intern", dates: "May 2023 - Nov 2023" },
            ]}
          />
        </div>

        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <EducationItem
            logo={SLIIT.src}
            institution="Sri Lanka Institute of Information Technology (SLIIT), Malabe"
            degree="BSc (Hons) in IT Specializing in Software Engineering"
            dates="2nd Class Honors (2021 - 2025)"
          />
          <EducationItem
            logo={Esoft.src}
            institution="Esoft Metro Campus, Kandy"
            degree="Diploma in Information Technology"
            dates="2017"
          />
          <EducationItem
            logo={Dharmaraja.src}
            institution="Dharmaraja College, Kandy"
            degree="GCE O/L & Advanced Levels"
            dates="2005 - 2020"
          />
        </div>

        {/* Technical Skills */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
          <p className="font-semibold">Technologies:</p>
          <p>{technologies.join(", ")}</p>
          <p className="font-semibold mt-2">Tools and Services:</p>
          <p>{tools.join(", ")}</p>
        </div>

        {/* Publications */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Publications</h2>
            <p className="font-semibold">Enhancing Diabetic Retinopathy Management Through Personalized Recommendations With Reinforcement Learning</p>
          <p className="text-sm text-gray-600">International Conference on System Modeling & Advancement in Research Trends</p>
          <p className="text-sm text-gray-600"> First Author &middot;  Presented on Conference &middot;  Published in IEEE Xplore</p>
          <p className="font-semibold mt-2">Customize Your Clothing Through 3D Models: A New Trend In The Fashion Industry</p>
            <p className="text-sm text-gray-600">Published in Tuijin Jishu/Journal of Propulsion Technology &middot; First Author</p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full max-w-6xl border-t border-gray-300 pt-8">
        <blockquote className="text-center text-2xl italic text-gray-600">
          &quot;Software Engineering is about finding solutions for real world
            problems through code, and optimizing solutions which are already
            implemented. Its not about being biased to a framework or
            by-hearting syntax&quot;
        </blockquote>
      </div>
    </main>
  );
} 