import { Facebook, Instagram, Youtube, Music } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", color: "neon-cyan" },
  { icon: Instagram, href: "#", color: "neon-magenta" },
  { icon: Youtube, href: "#", color: "neon-lime" },
  { icon: Music, href: "#", color: "neon-yellow" }
];

const footerLinks = {
  "Liên kết": ["Trang chủ", "Nghệ sĩ", "Sự kiện", "Tin tức"],
  "Hỗ trợ": ["Liên hệ", "FAQ", "Điều khoản", "Bảo mật"]
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-cyan/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-4 neon-glow">
              EDM WORLD
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Nền tảng âm nhạc điện tử hàng đầu Việt Nam. Kết nối nghệ sĩ, người yêu nhạc và những trải nghiệm âm nhạc tuyệt vời.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className={`text-${social.color} hover:text-white transition-colors`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="text-lg font-orbitron font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2 text-gray-300">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-neon-cyan transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-neon-cyan/30 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EDM World. All rights reserved. Made with{" "}
            <span className="text-neon-cyan">♪</span>{" "}
            for EDM lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
