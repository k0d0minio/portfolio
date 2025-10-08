import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Smartphone, GitBranch, Workflow } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    icon: Database,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"]
  },
  {
    icon: GitBranch,
    title: "Version Control",
    technologies: ["Git", "GitHub", "GitLab", "Code Review", "Branching"]
  },
  {
    icon: Workflow,
    title: "Architecture",
    technologies: ["Microservices", "System Design", "Clean Code", "Testing", "Agile"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and best practices across the full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
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
