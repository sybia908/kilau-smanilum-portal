import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ExternalLink, 
  Newspaper, 
  Cloud, 
  Brain, 
  School2,
  Monitor,
  Library,
  UserPlus,
  Network,
  Sparkles
} from "lucide-react";

interface WebsiteCardProps {
  title: string;
  url: string;
  description: string;
  icon?: "media" | "cloud" | "counseling" | "school" | "graduation" | "library" | "users" | "network";
  delay?: number;
}

const iconMap = {
  media: Newspaper,
  cloud: Cloud,
  counseling: Brain,
  school: School2,
  graduation: Monitor,
  library: Library,
  users: UserPlus,
  network: Network,
};

const iconColorMap = {
  media: "from-blue-500 to-cyan-500",
  cloud: "from-purple-500 to-pink-500", 
  counseling: "from-green-500 to-emerald-500",
  school: "from-orange-500 to-red-500",
  graduation: "from-indigo-500 to-purple-500",
  library: "from-amber-500 to-yellow-500",
  users: "from-teal-500 to-cyan-500",
  network: "from-rose-500 to-pink-500",
};

export function WebsiteCard({ title, url, description, icon = "school", delay = 0 }: WebsiteCardProps) {
  const IconComponent = iconMap[icon];
  const gradientColor = iconColorMap[icon];

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
          {/* Cool Gradient Icon */}
          <div className="relative group/icon">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} rounded-xl blur-sm opacity-75 group-hover:opacity-100 group-hover:blur-md transition-all duration-300`} />
            <div className={`relative p-4 rounded-xl bg-gradient-to-br ${gradientColor} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
              <IconComponent className="h-6 w-6 text-white drop-shadow-sm" />
              <div className="absolute top-1 right-1">
                <Sparkles className="h-3 w-3 text-white/60 animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="p-2 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </div>
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