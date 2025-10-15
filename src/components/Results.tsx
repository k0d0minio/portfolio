import { TrendingUp, Users, Zap, Award } from "lucide-react";
import content from "@/config/content.json";

const iconMap = {
  TrendingUp,
  Users,
  Zap,
  Award
};

const Results = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.results.heading.split(' ')[0]} <span className="bg-gradient-primary bg-clip-text text-transparent">{content.results.heading.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.results.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {content.results.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <div 
                key={metric.label}
                className="text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {metric.value}
                  </h3>
                  <p className="font-semibold text-foreground">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
