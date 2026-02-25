import Surge from "@/assets/images/Surge.png"
import Adl from "@/assets/images/Adl.jpg"
import SLIIT from "@/assets/images/SLIIT.png"
import Dharmaraja from "@/assets/images/Dharmaraja.jpg"
import Esoft from "@/assets/images/Esoft.jpg"
import ExperienceItem from "@/components/ui/About/ExperienceItem";
import EducationItem from "@/components/ui/About/EducationItem";
import { tools, technologies } from "@/lib/constants/skills";

export default function About() {
  return (
    <main id="about" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white space-y-8 p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {/* Experience */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-black">
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          <ExperienceItem
            logo={Surge.src}
            company="Surge Global"
            employmentType="Full-time · Hybrid"
            roles={[
              { 
                title: "Software Engineer", 
                dates: "Dec 2025 - Present",
                projects: ["Americas Home Manager"]
              },
              { 
                title: "Software Engineer Intern", 
                dates: "Feb 2025 - Dec 2025",
                projects: ["Surge-Hub" , "TimeForge"]
              },
            ]}
            href="https://www.surge.global"
          />
          <ExperienceItem
            logo={Adl.src}
            company="Axiata Digital Labs"
            employmentType="Internship · Hybrid"
            roles={[
              { 
                title: "Software Engineer Intern", 
                dates: "May 2023 - Nov 2023",
                projects: ["WOW Super App"]
              },
            ]}
            href="https://www.axiatadigitallabs.com"
          />
        </div>

        {/* Education */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-black">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <EducationItem
            logo={SLIIT.src}
            institution="Sri Lanka Institute of Information Technology (SLIIT), Malabe"
            degree="BSc (Hons) in IT Specializing in Software Engineering"
            dates="2nd Class Honors (2021 - 2025)"
            href="https://www.sliit.lk"
          />
          <EducationItem
            logo={Esoft.src}
            institution="Esoft Metro Campus, Kandy"
            degree="Diploma in Information Technology"
            dates="2017"
            href="https://www.esoft.lk"
          />
          <EducationItem
            logo={Dharmaraja.src}
            institution="Dharmaraja College, Kandy"
            degree="GCE O/L & Advanced Levels"
            dates="2005 - 2020"
            href="https://www.dharmaraja.lk/"
          />
        </div>

        {/* Technical Skills */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-black">
          <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
          <p className="font-semibold mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="font-semibold mb-2">Tools and Services:</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-black">
          <h2 className="text-xl font-bold mb-2">Publications</h2>
          <a 
            href="https://ieeexplore.ieee.org/document/10882522" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block mb-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer -m-2"
          >
            <p className="font-semibold">
              Enhancing Diabetic Retinopathy Management Through Personalized
              Recommendations With Reinforcement Learning
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              International Conference on System Modeling & Advancement in
              Research Trends
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              First Author &middot; Presented on Conference &middot; Published in
              IEEE Xplore
            </p>
          </a>
          <a 
            href="https://propulsiontechjournal.com/index.php/journal/article/view/1388" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer -m-2"
          >
            <p className="font-semibold">
              Customize Your Clothing Through 3D Models: A New Trend In The
              Fashion Industry
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Published in Tuijin Jishu/Journal of Propulsion Technology &middot;
              First Author
            </p>
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full max-w-6xl border-t border-gray-300 dark:border-gray-700 pt-8">
        <blockquote className="text-center text-2xl italic text-gray-600 dark:text-gray-400">
          &quot;Software Engineering is about finding solutions for real world
          problems through code, and optimizing solutions which are already
          implemented. Its not about being biased to a framework or by-hearting
          syntax&quot;
        </blockquote>
      </div>
    </main>
  );
}