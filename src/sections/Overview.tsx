'use client';

import { useEffect, useState } from 'react';
import me from "@/assets/images/me.jpg"
import Image from "next/image"
import LogoLoop from "@/components/LogoLoop";
import { 
  SiPython, 
  SiJavascript, 
  SiSwift, 
  SiReact, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiAmazondynamodb,
  SiFlask,
  SiFastapi,
  SiRedux,
  SiNestjs,
  SiNextdotjs,
  SiTerraform,
  SiGit,
  SiJira,
  SiXcode,
  SiSonarqube,
  SiElasticsearch,
  SiRabbitmq
} from 'react-icons/si';

const techLogosLeft = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiSwift />, title: "Swift", href: "https://swift.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMysql />, title: "SQL", href: "https://www.mysql.com" },
  { node: <SiAmazondynamodb />, title: "DynamoDB", href: "https://aws.amazon.com/dynamodb" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  { node: <SiXcode />, title: "Xcode", href: "https://developer.apple.com/xcode/" },

];

const techLogosRight = [
  { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiReact />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTerraform />, title: "Terraform", href: "https://www.terraform.io" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiSonarqube />, title: "SonarQube", href: "https://www.sonarqube.org" },
  { node: <SiElasticsearch />, title: "ElasticSearch", href: "https://www.elastic.co/elasticsearch/" },
  { node: <SiRabbitmq />, title: "RabbitMQ", href: "https://www.rabbitmq.com" },
];


export default function Overview() {
  const [direction, setDirection] = useState<'up' | 'left'>('up');

  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth >= 768 ? 'up' : 'left');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main id="overview" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white py-20">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-60">
        
        {/* Left/Top Logo Loop */}
        <div className="w-full h-20 md:w-auto md:h-[600px] flex justify-center overflow-hidden">
          <LogoLoop
            logos={techLogosLeft}
            speed={100}
            direction={direction}
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center space-y-4 px-4 md:px-8 z-10">
          <Image
            width={280}
            height={280}
            src={me.src}
            alt="Isuru Herath"
            className="w-80 h-80 rounded-full object-cover"
          />
          <h1 className="text-2xl text-center">Software Engineer at Surge Global</h1>
          <h1 className="text-2xl text-center">Graduate from SLIIT</h1>
          <h1 className="text-2xl text-center">Based in 🇱🇰</h1>
        </div>

        {/* Right/Bottom Logo Loop */}
        <div className="w-full h-20 md:w-auto md:h-[600px] flex justify-center overflow-hidden">
          <LogoLoop
            logos={techLogosRight}
            speed={100}
            direction={direction}
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut
          />
        </div>
      </div>
    </main>
  );
}