export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 gradient-text">
            EDM LÀ GÌ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-neon-cyan">Electronic Dance Music</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              EDM (Electronic Dance Music) là thể loại âm nhạc được tạo ra chủ yếu bằng thiết bị điện tử, 
              được thiết kế đặc biệt để tạo ra không khí sôi động trong các sự kiện khiêu vũ và lễ hội âm nhạc.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Với những giai điệu cuốn hút, beat mạnh mẽ và hiệu ứng âm thanh độc đáo, EDM đã trở thành 
              một phần không thể thiếu trong văn hóa âm nhạc hiện đại trên toàn thế giới.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 border border-neon-cyan/30 rounded-lg card-hover">
                <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">130+</div>
                <div className="text-sm text-gray-400">BPM Trung bình</div>
              </div>
              <div className="text-center p-4 border border-neon-magenta/30 rounded-lg card-hover">
                <div className="text-3xl font-orbitron font-bold text-neon-magenta mb-2">50+</div>
                <div className="text-sm text-gray-400">Thể loại phụ</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="DJ performing at electronic music festival" 
              className="rounded-xl shadow-2xl w-full h-auto animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold">DJ Live Performance</p>
              <p className="text-gray-300 text-sm">Trải nghiệm âm nhạc điện tử đỉnh cao</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
