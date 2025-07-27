import { Button } from "@/components/ui/button";
import { Heart, Search, Camera, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cats.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-paw opacity-30 animate-pulse-warm"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Heart size={24} />
      </div>
      <div className="absolute top-32 right-16 text-primary/20 animate-float" style={{animationDelay: '1s'}}>
        <Search size={20} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/20 animate-float" style={{animationDelay: '2s'}}>
        <Camera size={18} />
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
            <Zap className="text-accent" size={16} />
            <span className="text-sm font-medium text-accent-foreground">IA Avanzada para Detección</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-primary">Reúne</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gatitos
            </span>{" "}
            <span className="text-foreground">con sus</span>{" "}
            <span className="text-primary">Familias</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Nuestra IA rastrea automáticamente redes sociales, analiza imágenes y encuentra coincidencias 
            para reunir gatitos perdidos con sus seres queridos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-lg px-8 py-6 shadow-warm hover:shadow-glow transition-all duration-300">
              <Search className="mr-2" size={20} />
              Buscar Gatito
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
              <Camera className="mr-2" size={20} />
              Reportar Encontrado
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-hero rounded-full animate-pulse"></div>
              <span>+500 Reuniones Exitosas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span>IA 24/7 Activa</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img 
              src={heroImage} 
              alt="Gatitos siendo reunidos con sus familias - Tecnología IA para encontrar mascotas perdidas"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-card animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <Search className="text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">IA Detectando</p>
                <p className="text-xs text-muted-foreground">3 coincidencias encontradas</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-card animate-float" style={{animationDelay: '1.5s'}}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Heart className="text-accent-foreground" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">¡Reunión Exitosa!</p>
                <p className="text-xs text-muted-foreground">Luna encontró a su familia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};