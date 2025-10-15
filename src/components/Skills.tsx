import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Smartphone, GitBranch, Workflow, TrendingUp } from "lucide-react";
import content from "@/config/content.json";

const iconMap = {
  Code2,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
  Workflow,
  TrendingUp
};

const Skills = () => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.skills.heading.split(' ')[0]} <span className="bg-gradient-primary bg-clip-text text-transparent">{content.skills.heading.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.skills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.skills.items.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <Card 
                key={skill.title}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
