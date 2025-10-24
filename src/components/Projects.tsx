import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import content from "@/config/content.json";

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {content.projects.heading.split(' ')[0]} <span className="bg-gradient-primary bg-clip-text text-transparent">{content.projects.heading.split(' ')[1]}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.projects.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {content.projects.items.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 sm:p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Results:</p>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li key={result} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-center">
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
