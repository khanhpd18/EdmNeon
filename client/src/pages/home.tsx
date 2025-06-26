import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ArtistsSection from "@/components/artists-section";
import EventsSection from "@/components/events-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ArtistsSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
