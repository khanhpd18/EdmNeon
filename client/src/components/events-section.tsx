import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Ultra Music Festival Vietnam",
    type: "ULTRA FESTIVAL",
    date: "15-17 Tháng 12, 2024",
    location: "TP. Hồ Chí Minh, Việt Nam",
    description: "Lễ hội EDM lớn nhất Đông Nam Á với sự tham gia của các DJ hàng đầu thế giới.",
    price: "Từ 1.500.000đ",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "neon-cyan",
    buttonText: "Mua Vé"
  },
  {
    title: "Neon Nights Club",
    type: "CLUB NIGHT",
    date: "Mỗi thứ 7 hàng tuần",
    location: "Quận 1, TP. HCM",
    description: "Không gian club hiện đại với âm thanh đỉnh cao và DJ lineup hấp dẫn mỗi tuần.",
    price: "300.000đ",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    color: "neon-magenta",
    buttonText: "Đặt Bàn"
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 gradient-text">
            SỰ KIỆN SẮP TỚI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Đừng bỏ lỡ những lễ hội EDM đỉnh cao và các buổi biểu diễn đặc biệt
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-${event.color}/30 card-hover`}
            >
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`bg-${event.color} text-black px-3 py-1 rounded-full text-sm font-semibold`}>
                  {event.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-orbitron font-bold text-${event.color} mb-2`}>
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar className={`w-4 h-4 mr-2 text-${event.color}`} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className={`w-4 h-4 mr-2 text-${event.color}`} />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-400 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-${event.color} font-semibold`}>
                    {event.price}
                  </span>
                  <Button className={`bg-${event.color} text-black px-4 py-2 rounded-lg font-semibold hover:bg-white transition-colors`}>
                    {event.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
