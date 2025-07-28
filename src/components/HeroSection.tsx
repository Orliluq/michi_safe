import { Button } from "@/components/ui/button";
import { Heart, Search, Camera, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cats.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 sm:pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-paw opacity-30 animate-pulse-warm"></div>

      {/* Floating elements - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-20 left-10 text-primary/20 animate-float">
        <Heart size={24} />
      </div>
      <div
        className="hidden md:block absolute top-32 right-16 text-primary/20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Search size={20} />
      </div>
      <div
        className="hidden md:block absolute bottom-40 left-20 text-primary/20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Camera size={18} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-3 sm:px-4 py-2 rounded-full border border-accent/30">
            <Zap className="text-accent" size={14} />
            <span className="text-xs sm:text-sm font-medium text-accent-foreground">
              IA Avanzada para Detección
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-accent">Reúne</span>{" "}
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Gatitos
            </span>{" "}
            <span className="text-foreground">con sus</span>{" "}
            <span className="text-accent">Familias</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Nuestra IA rastrea automáticamente redes sociales, analiza imágenes
            y encuentra coincidencias para reunir gatitos perdidos con sus seres
            queridos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-warm hover:shadow-glow transition-all duration-300"
              onClick={() => {
                window.location.href = "#buscar";
                navigate("/#buscar");
              }}
            >
              <Search className="mr-2" size={16} />
              Buscar Gatito
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 border-primary/30 hover:bg-primary/5"
              onClick={() => {
                window.location.href = "#reportar";
                navigate("/#reportar");
              }}
            >
              <Camera className="mr-2" size={16} />
              Reportar Encontrado
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-foreground rounded-full animate-pulse"></div>
              <span>+500 Reuniones Exitosas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-foreground rounded-full animate-pulse"></div>
              <span>IA 24/7 Activa</span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-card">
            <img
              src={heroImage}
              alt="Gatitos siendo reunidos con sus familias - Tecnología IA para encontrar mascotas perdidas"
              className="w-full h-auto object-cover"
              onError={(e) => (e.currentTarget.src = "/placeholder-image.jpg")}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>

          {/* Floating cards - Responsive positioning */}
          <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-card/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-card animate-float">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <Search className="text-primary-foreground" size={16} />
              </div>
              <div>
                <p className="font-semibold text-xs sm:text-sm">
                  IA Detectando
                </p>
                <p className="text-xs text-muted-foreground">
                  3 coincidencias encontradas
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bg-card/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-card animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center">
                <Heart className="text-accent-foreground w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-semibold text-xs sm:text-sm">
                  ¡Reunión Exitosa!
                </p>
                <p className="text-xs text-muted-foreground">
                  Luna encontró a su familia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
