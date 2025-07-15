import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Globe, Cloud, Heart, GraduationCap } from "lucide-react";

interface WebsiteCardProps {
  title: string;
  url: string;
  description: string;
  icon?: "media" | "cloud" | "counseling" | "school";
  delay?: number;
}

const iconMap = {
  media: Globe,
  cloud: Cloud,
  counseling: Heart,
  school: GraduationCap,
};

export function WebsiteCard({ title, url, description, icon = "school", delay = 0 }: WebsiteCardProps) {
  const IconComponent = iconMap[icon];

  const handleVisit = () => {
    window.open(`https://${url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleVisit}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-glow transition-colors duration-300" />
          </div>
          
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
        </div>

        <div className="pt-2 border-t border-border/50">
          <p className="text-xs text-primary font-medium group-hover:text-primary-glow transition-colors duration-300">
            {url}
          </p>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleVisit();
          }}
        >
          Kunjungi Website
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>
    </Card>
  );
}