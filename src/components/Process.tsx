import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description: "Understanding your business goals, target audience, and technical requirements to build the perfect solution."
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Creating a comprehensive roadmap with clear milestones, timeline, and technology stack decisions."
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Building with clean, scalable code following best practices. Rigorous testing ensures quality at every step."
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Smooth deployment to production with ongoing maintenance, monitoring, and continuous improvements."
  }
];

const Process = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How I <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers results consistently
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.title}
                  className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">0{index + 1}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
