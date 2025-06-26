import { Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "10K+", label: "Bài hát EDM", color: "neon-cyan" },
  { number: "500+", label: "Nghệ sĩ", color: "neon-magenta" },
  { number: "50K+", label: "Thành viên", color: "neon-lime" },
  { number: "100+", label: "Sự kiện/năm", color: "neon-yellow" }
];

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neon-cyan/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-neon-magenta/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-neon-lime/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 gradient-text">
          BẮT ĐẦU HÀNH TRÌNH EDM
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Tham gia cộng đồng EDM lớn nhất Việt Nam. Khám phá, chia sẻ và tận hưởng âm nhạc điện tử đỉnh cao.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button className="btn-neon bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-10 py-4 rounded-full font-bold text-xl animate-pulse-neon">
            <Music className="w-6 h-6 mr-3" />
            NGHE NGAY
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-neon-cyan text-neon-cyan px-10 py-4 rounded-full font-bold text-xl hover:bg-neon-cyan hover:text-black transition-all duration-300 neon-glow"
          >
            <Users className="w-6 h-6 mr-3" />
            THAM GIA CỘNG ĐỒNG
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className={`text-3xl font-orbitron font-bold text-${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
