import { Heart, School, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/50 bg-gradient-card backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4 animate-slide-in-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <School className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">SMAN 1 Lumbang</h3>
                <p className="text-sm text-muted-foreground">Unggul dalam Prestasi</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sekolah Menengah Atas Negeri 1 Lumbang berkomitmen memberikan pendidikan berkualitas 
              dengan memanfaatkan teknologi digital untuk mendukung proses pembelajaran.
            </p>
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