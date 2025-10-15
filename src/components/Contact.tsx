import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import content from "@/config/content.json";

const Contact = () => {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-card border-border/50 text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {content.contact.heading.part1}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {content.contact.heading.highlight}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {content.contact.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href={`mailto:${content.contact.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  {content.contact.buttons.email}
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href={content.contact.scheduleLink} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  {content.contact.buttons.schedule}
                </a>
              </Button>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center text-left">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">{content.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">{content.contact.responseTime}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
