import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ReportForm } from "@/components/ReportForm";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="ia">
          <FeaturesSection />
        </section>
        <section id="buscar">
          <GallerySection />
        </section>
        <section id="reportar">
          <ReportForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
