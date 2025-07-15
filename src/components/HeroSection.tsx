import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export function HeroSection() {
  const scrollToWebsites = () => {
    document.getElementById('websites')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Educational Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-5xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary animate-glow-pulse" />
          <span className="text-sm font-medium text-primary">Portal Digital SMAN 1 Lumbang</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Selamat Datang
            </span>
            <br />
            <span className="text-foreground">
              di Era Digital
            </span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Pendidikan
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Akses semua layanan digital SMAN 1 Lumbang dalam satu tempat. 
          Mulai dari portal media, cloud storage, hingga layanan bimbingan konseling.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 py-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">4</div>
            <div className="text-sm text-muted-foreground">Layanan Digital</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mx-auto">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">1000+</div>
            <div className="text-sm text-muted-foreground">Siswa Aktif</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mx-auto">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Akses Online</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToWebsites}
            className="group"
          >
            Jelajahi Layanan
            <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => window.open('https://sman1lumbang.sch.id', '_blank')}
          >
            Website Utama
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToWebsites}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
          <span className="text-sm font-medium">Scroll untuk melihat layanan</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
    </section>
  );
}