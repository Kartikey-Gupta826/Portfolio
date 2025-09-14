import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Kartikey
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Gupta
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a web developer. I am eager to learn new skills.
          </p>
          
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects" 
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};