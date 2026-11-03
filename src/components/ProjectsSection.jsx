import { Cloud, Code2, ExternalLink, Gamepad2, Github } from "lucide-react";

const SHOW_PROJECT_LINKS = false;

const projects = [
  {
    id: 1,
    title: "Management System",
    description: "A simple management system web application.",
    image: "/projects/management-systems.jpg",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    demoUrl: "https://github.com/Kartikey-Gupta826/System-Management",
    githubUrl: "https://github.com/Kartikey-Gupta826/System-Management",
  },
  {
    id: 2,
    title: "Travel Story",
    description:
      "A place to store memories and build connection.",
    image: "/projects/travel.jpg",
    tags: ["React JS", "Tailwind Css", "Express JS", "MongoDB"],
    demoUrl: "https://travelstory-nine.vercel.app",
    githubUrl: "https://github.com/Kartikey-Gupta826/travelstory",
  },
  {
  id: 3,
  title: "RPG Game",
  description:
    "An AI-powered RPG dialogue engine featuring dynamic NPC interactions.",
  image: "/projects/rpg.jpg",
  tags: ["Java", "Maven", "REST API", "Gen AI"],
  demoUrl: "https://github.com/Kartikey-Gupta826/ZAVA-GAME",
  githubUrl: "https://github.com/Kartikey-Gupta826/ZAVA-GAME",
  },
  {
    id: 4,
    title: "Kitchen Preparation Time Prediction System",
    description: "AI-powered prep-time estimates with sub-minute accuracy.",
    image: "/projects/kpt.png",
    tags: ["Python", "Scikit-learn", "FastAPI", "React.js"],
    demoUrl: "https://github.com/Kartikey-Gupta826/kpt_calculation",
    githubUrl: "https://github.com/Kartikey-Gupta826/kpt_calculation",
  },
  {
    id: 5,
    title: "Cloud Kitchen ERP, CRM & Dispatch Platform",
    description:
      "A multi-tenant operations platform for kitchen inventory, orders, billing, CRM, and dispatch.",
    icon: Cloud,
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "BullMQ", "FastAPI", "Docker"],
  },
  {
    id: 6,
    title: "Codebase Understanding System",
    description:
      "An agentic RAG platform that answers questions about GitHub repositories with file- and line-level citations.",
    icon: Code2,
    tags: ["Node.js", "LangChain.js", "LangGraph.js", "RAG", "pgvector", "Gemini API", "Redis"],
  },
  {
    id: 7,
    title: "Extensible RPG Engine",
    description:
      "A data-driven RPG engine with turn-based combat, quests, save/load, and AI-powered NPC dialogue.",
    icon: Gamepad2,
    tags: ["JavaScript", "Node.js", "HTML5 Canvas", "Gemini API", "Docker"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <project.icon aria-hidden="true" size={64} strokeWidth={1.5} />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p
                  title={project.description}
                  className="text-muted-foreground text-sm mb-4 truncate"
                >
                  {project.description}
                </p>
                {SHOW_PROJECT_LINKS && (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title} demo`}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
