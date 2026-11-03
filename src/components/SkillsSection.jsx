import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  BarChart3,
  Braces,
  Cloud,
  Database,
  GitBranch,
  KeyRound,
  Network,
  Server,
  Sparkles,
  TestTube,
  Workflow,
} from "lucide-react";

import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiScikitlearn,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiFastapi,
  SiTensorflow,
  SiPandas,
  SiQt,
  SiDocker,
  SiNextdotjs,
  SiSelenium,
  SiPytest,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, category: "Language" },
  { name: "Java", icon: FaJava, category: "Language" },
  { name: "Python", icon: SiPython, category: "Language" },
  { name: "C/C++", icon: SiCplusplus, category: "Language" },
  { name: "SQL", icon: Database, category: "Language" },

  // Frontend
  { name: "HTML/CSS", icon: SiHtml5, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "React.js", icon: SiReact, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "PyQt5", icon: SiQt, category: "Frontend" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "FastAPI", icon: SiFastapi, category: "Backend" },
  { name: "REST APIs", icon: Network, category: "Backend" },
  { name: "WebSockets", icon: Network, category: "Backend" },
  { name: "Pydantic", icon: Braces, category: "Backend" },

  // Agentic AI
  { name: "FastMCP", icon: Server, category: "Agentic AI" },
  { name: "Gemini API", icon: Sparkles, category: "Agentic AI" },
  { name: "Tool-calling", icon: Workflow, category: "Agentic AI" },
  { name: "RAG", icon: BrainCircuit, category: "Agentic AI" },
  { name: "LangChain.js", icon: Workflow, category: "Agentic AI" },
  { name: "LangGraph.js", icon: Workflow, category: "Agentic AI" },
  { name: "Structured Output", icon: Braces, category: "Agentic AI" },

  // Machine Learning & Deep Learning
  { name: "Scikit-learn", icon: SiScikitlearn, category: "ML & DL" },
  { name: "TensorFlow", icon: SiTensorflow, category: "ML & DL" },
  { name: "Pandas", icon: SiPandas, category: "ML & DL" },
  { name: "Matplotlib", icon: BarChart3, category: "ML & DL" },

  // Tools & DevOps
  { name: "MongoDB", icon: SiMongodb, category: "Database & Tools" },
  { name: "PostgreSQL", icon: Database, category: "Database & Tools" },
  { name: "Redis", icon: Database, category: "Database & Tools" },
  { name: "MySQL", icon: SiMysql, category: "Database & Tools" },
  { name: "Git/GitHub", icon: SiGithub, category: "Database & Tools" },
  { name: "JWT", icon: KeyRound, category: "Database & Tools" },
  { name: "Docker", icon: SiDocker, category: "Database & Tools" },
  { name: "Selenium", icon: SiSelenium, category: "Database & Tools" },
  { name: "GitHub Actions (CI/CD)", icon: GitBranch, category: "DevOps & Testing" },
  { name: "Cloud Deployment", icon: Cloud, category: "DevOps & Testing" },
  { name: "Jest", icon: TestTube, category: "DevOps & Testing" },
  { name: "Supertest", icon: TestTube, category: "DevOps & Testing" },
  { name: "pytest", icon: SiPytest, category: "DevOps & Testing" },
];

const categories = [
  "all",
  "Language",
  "Frontend",
  "Backend",
  "Agentic AI",
  "ML & DL",
  "Database & Tools",
  "DevOps & Testing",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;

            return (
              <div
                key={key}
                className="
                  bg-card
                  border
                  rounded-xl
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:shadow-lg
                  hover:-translate-y-1
                "
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>

                <h3 className="font-semibold text-center text-lg">
                  {skill.name}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};