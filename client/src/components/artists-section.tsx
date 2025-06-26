import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const artists = [
  {
    name: "Calvin Harris",
    genre: "Progressive House, Electro House",
    description: "Nghệ sĩ người Scotland nổi tiếng với những bản hit toàn cầu và phong cách sản xuất độc đáo.",
    followers: "45M+ followers",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "neon-cyan"
  },
  {
    name: "Alison Wonderland",
    genre: "Future Bass, Trap",
    description: "DJ/Producer người Úc tiên phong trong việc kết hợp Future Bass với Trap music.",
    followers: "12M+ followers",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "neon-magenta"
  },
  {
    name: "Deadmau5",
    genre: "Progressive House, Techno",
    description: "Biểu tượng của Progressive House với những set nhạc dài và sâu lắng đầy cảm xúc.",
    followers: "18M+ followers",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "neon-lime"
  },
  {
    name: "The Chainsmokers",
    genre: "Pop EDM, Future Bass",
    description: "Bộ đôi DJ/Producer nổi tiếng với những bản hit Pop-EDM được yêu thích toàn cầu.",
    followers: "35M+ followers",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "neon-yellow"
  },
  {
    name: "Tiësto",
    genre: "Trance, Progressive House",
    description: "Huyền thoại Trance music người Hà Lan, được mệnh danh là \"Godfather of EDM\".",
    followers: "28M+ followers",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "neon-cyan"
  },
  {
    name: "Marshmello",
    genre: "Future Bass, Trap",
    description: "Producer bí ẩn với chiếc mặt nạ đặc trưng và phong cách Future Bass độc đáo.",
    followers: "50M+ followers",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "neon-magenta"
  }
];

export default function ArtistsSection() {
  return (
    <section id="artists" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 gradient-text">
            NGHỆ SĨ NỔI TIẾNG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá những tên tuổi lớn trong làng EDM thế giới với phong cách âm nhạc độc đáo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div 
              key={index}
              className={`bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-${artist.color}/30 card-hover group`}
            >
              <img 
                src={artist.image} 
                alt={`${artist.name} performing`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className={`text-xl font-orbitron font-bold text-${artist.color} mb-2`}>
                  {artist.name}
                </h3>
                <p className="text-gray-300 mb-4">{artist.genre}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {artist.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-${artist.color} font-semibold`}>
                    {artist.followers}
                  </span>
                  <Button 
                    size="icon"
                    variant="ghost"
                    className={`text-${artist.color} hover:text-white transition-colors`}
                  >
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-neon bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-3 rounded-full font-semibold text-lg">
            Xem Thêm Nghệ Sĩ
          </Button>
        </div>
      </div>
    </section>
  );
}
