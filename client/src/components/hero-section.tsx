import { Play, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-magenta rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-lime rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-neon-yellow rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-orbitron font-black mb-6 gradient-text animate-glow">
          EDM WORLD
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-orbitron font-bold text-neon-cyan mb-4 text-neon-glow">
          ELECTRONIC DANCE MUSIC
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Khám phá thế giới âm nhạc điện tử đầy màu sắc. Từ những giai điệu mạnh mẽ đến những beat cuốn hút, 
          hãy cùng chúng tôi trải nghiệm văn hóa EDM độc đáo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-neon bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-4 rounded-full font-semibold text-lg border-2 border-neon-cyan hover:border-neon-magenta transition-all duration-300">
            <Play className="w-5 h-5 mr-2" />
            Nghe Ngay
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 neon-glow"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Sự Kiện
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNext} className="text-neon-cyan hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
