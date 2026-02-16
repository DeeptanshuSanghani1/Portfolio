import { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import {
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiMicrosoftazure,
  SiJquery,
  SiSpring,
  SiAngular,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export type Skill = {
  title: string;
  icon: ReactNode;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: Skill[];
  logo?: string | StaticImageData;
};

const EXPERIENCE_SKILLS = {
  csharp: { title: "C#", icon: <SiCsharp /> },
  aspnet: { title: "ASP.NET", icon: <SiDotnet /> },
  mysql: { title: "MySQL", icon: <SiMysql /> },
  azure: { title: "Azure", icon: <SiMicrosoftazure /> },
  jquery: { title: "jQuery", icon: <SiJquery /> },
  java: { title: "Java", icon: <FaJava /> },
  springboot: { title: "Spring Boot", icon: <SiSpring /> },
  angular: { title: "Angular", icon: <SiAngular /> },
  docker: { title: "Docker", icon: <SiDocker /> },
};

const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Ontario Public Services, Treasury Board",
    role: "Junior Programmer Coop",
    duration: "Sep 2024 - Aug 2025",
    location: "Ontario, Canada",
    description: "Led end-to-end delivery of MFA rollout and cloud migration projects, improving security and scalability.",
    responsibilities: [
      "Led and owned the end-to-end delivery of an MFA rollout across 7 portal applications, improving authentication security by implementing one-time tokens (nonces) and rate limiting in C# / ASP.NET, backed by MySQL, with UI integration via jQuery",
      "Collaborated with Solution Architect to create architecture diagrams and sequence diagrams for the Multi-Factor Authentication application, speeding up implementation by documenting authentication flows and portal integration points",
      "Transitioned customer files storage from database binary objects to Azure Blob Storage by implementing a database schema for file references and updating C# / ASP.NET services (with jQuery UI integration), reducing database size significantly",
      "Created PowerShell scripts to automate scheduled backups for multiple databases supporting various portal applications, ensuring data reliability and reducing manual maintenance overhead",
      "Built and executed 40+ end-to-end automated test cases for the Tender Management application, increasing regression coverage and reducing release risk by using Selenium + C# with a BDD approach (feature files in Gherkin)",
    ],
    skills: [
      EXPERIENCE_SKILLS.csharp,
      EXPERIENCE_SKILLS.aspnet,
      EXPERIENCE_SKILLS.mysql,
      EXPERIENCE_SKILLS.azure,
      EXPERIENCE_SKILLS.jquery,
    ],
    logo: "/assets/company-logo-1.png",
  },
  {
    id: "exp-2",
    company: "Intellect Design Arena",
    role: "Software Engineer Intern",
    duration: "May 2024 - Aug 2024",
    location: "Remote",
    description: "Developed monitoring application for CIBC to track ~$200 million daily transactions.",
    responsibilities: [
      "Developed a monitoring application for CIBC to monitor transactions processed by the payment processing engine (value - ~$200 million daily), raise alerts for processing failures, transactions exceeding SLAs, channel-wise volumes processed in the last 15 days using Java(SpringBoot), Angular and MySQL",
      "Created deployment scripts using Docker for autonomous deployment, reducing manual release effort in WebLogic server",
      "Collaborated with Senior Engineers to develop sequential and architectural design diagrams for the monitoring application, improving design clarity and speeding up implementation by documenting key system flows",
    ],
    skills: [
      EXPERIENCE_SKILLS.java,
      EXPERIENCE_SKILLS.springboot,
      EXPERIENCE_SKILLS.angular,
      EXPERIENCE_SKILLS.mysql,
      EXPERIENCE_SKILLS.docker,
    ],
    logo: "/assets/company-logo-2.png",
  },
];

export default experiences;
