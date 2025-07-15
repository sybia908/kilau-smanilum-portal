import { WebsiteCard } from "./WebsiteCard";

export function WebsiteGrid() {
  const websites = [
    {
      title: "Portal Media",
      url: "media.smanilum.my.id",
      description: "Akses berita, informasi, dan konten media sekolah terkini. Dapatkan update terbaru tentang kegiatan dan prestasi SMAN 1 Lumbang.",
      icon: "media" as const,
      delay: 0
    },
    {
      title: "Cloud Storage",
      url: "nextcloud.smanilum.my.id",
      description: "Platform penyimpanan awan untuk berbagi file, dokumen, dan materi pembelajaran. Akses data Anda kapan saja, di mana saja.",
      icon: "cloud" as const,
      delay: 200
    },
    {
      title: "Bimbingan Konseling",
      url: "bk.smanilum.my.id",
      description: "Layanan konseling online untuk mendukung perkembangan akademik dan personal siswa. Konsultasi dengan konselor profesional.",
      icon: "counseling" as const,
      delay: 400
    },
    {
      title: "Website Sekolah",
      url: "sman1lumbang.sch.id",
      description: "Portal utama SMAN 1 Lumbang dengan informasi lengkap tentang profil, program, dan prestasi sekolah.",
      icon: "school" as const,
      delay: 600
    }
  ];

  return (
    <section id="websites" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Layanan Digital
            </span>
            <br />
            <span className="text-foreground">SMAN 1 Lumbang</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai layanan digital yang memudahkan akses informasi dan pembelajaran
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {websites.map((website, index) => (
            <WebsiteCard key={index} {...website} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-success">Semua layanan aktif dan terintegrasi</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Untuk bantuan teknis, silakan hubungi tim IT SMAN 1 Lumbang
          </p>
        </div>
      </div>
    </section>
  );
}