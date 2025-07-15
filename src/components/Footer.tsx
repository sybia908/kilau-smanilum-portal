import { Heart, School, Mail, Phone, MapPin, Instagram, Music, Youtube } from "lucide-react";
import logoSman from "@/assets/logo-sman1lumbang.png";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/50 bg-gradient-card backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4 animate-slide-in-left">
            <div className="flex items-center gap-3">
              <img 
                src={logoSman} 
                alt="Logo SMAN 1 Lumbang" 
                className="w-12 h-12 object-contain rounded-lg bg-white/5 border border-border/20"
              />
              <div>
                <h3 className="font-semibold text-foreground">SMAN 1 Lumbang</h3>
                <p className="text-sm text-muted-foreground">Unggul dalam Prestasi</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sekolah Menengah Atas Negeri 1 Lumbang berkomitmen memberikan pendidikan berkualitas 
              dengan memanfaatkan teknologi digital untuk mendukung proses pembelajaran.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="font-medium text-foreground">Ikuti Kami</h5>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/sman1lumbang/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group"
                >
                  <Instagram className="h-4 w-4 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.tiktok.com/@sman1lumbang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-gray-900/10 to-red-500/10 border border-gray-700/20 hover:border-red-500/40 transition-all duration-300 group"
                >
                  <Music className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCyApX0-byphHOKi-4hrtsBg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
                >
                  <Youtube className="h-4 w-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-semibold text-foreground">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Lumbang, Pasuruan, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+62 xxx xxxx xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@sman1lumbang.sch.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '400ms' }}>
            <h4 className="font-semibold text-foreground">Tautan Cepat</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a 
                href="https://media.smanilum.my.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Portal Media
              </a>
              <a 
                href="https://nextcloud.smanilum.my.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Cloud Storage
              </a>
              <a 
                href="https://bk.smanilum.my.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Bimbingan Konseling
              </a>
              <a 
                href="https://sman1lumbang.sch.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Website Utama
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 SMAN 1 Lumbang. Semua hak cipta dilindungi.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Dibuat dengan</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>untuk pendidikan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}