import { useState } from "react";
import { cn } from "@/lib/utils";

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
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, category: "Language" },
  { name: "Java", icon: FaJava, category: "Language" },
  { name: "Python", icon: SiPython, category: "Language" },
  { name: "C/C++", icon: SiCplusplus, category: "Language" },
  { name: "HTML/CSS", icon: SiHtml5, category: "Language" },

  // Frameworks
  { name: "React.js", icon: SiReact, category: "Framework" },
  { name: "Node.js", icon: SiNodedotjs, category: "Framework" },
  { name: "Express.js", icon: SiExpress, category: "Framework" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Framework" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "Framework" },

  // Tools
  { name: "MongoDB", icon: SiMongodb, category: "Tool" },
  { name: "MySQL", icon: SiMysql, category: "Tool" },
  { name: "Git/GitHub", icon: SiGithub, category: "Tool" },

];

const categories = ["all", "Language", "Framework", "Tool"];

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

                <div className="flex justify-center mt-3">
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