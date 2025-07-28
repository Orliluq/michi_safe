import { Bot, Globe, Camera, MapPin, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "IA de Detección Avanzada",
    description: "Nuestra IA rastrea automáticamente redes sociales buscando publicaciones de gatitos perdidos y encontrados.",
    color: "text-primary",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Globe,
    title: "Monitoreo de Redes Sociales",
    description: "Análisis en tiempo real de Facebook, Twitter, Instagram detectando palabras clave como 'gatito perdido'.",
    color: "text-accent",
    gradient: "from-accent to-primary"
  },
  {
    icon: Camera,
    title: "Reconocimiento de Imágenes",
    description: "Tecnología de visión por computadora que analiza fotos para encontrar coincidencias de gatitos.",
    color: "text-primary",
    gradient: "from-primary-glow to-accent"
  },
  {
    icon: MapPin,
    title: "Geolocalización Inteligente",
    description: "Búsqueda por proximidad que prioriza encuentros en tu área local para mayor efectividad.",
    color: "text-accent",
    gradient: "from-accent to-primary-glow"
  },
  {
    icon: Clock,
    title: "Alertas en Tiempo Real",
    description: "Notificaciones instantáneas cuando la IA detecta posibles coincidencias de tu gatito perdido.",
    color: "text-primary",
    gradient: "from-primary to-accent"
  },
  {
    icon: Heart,
    title: "Comunidad Solidaria",
    description: "Red de amantes de los gatos que colaboran activamente en la búsqueda y rescate de mascotas.",
    color: "text-accent",
    gradient: "from-primary-glow to-primary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 mb-4 sm:mb-6">
            <Bot className="text-primary w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium text-primary">Tecnología IA Avanzada</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground block sm:inline">Cómo Funciona Nuestra</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
              Inteligencia Artificial
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos machine learning, análisis de imágenes y monitoreo de redes sociales 
            para crear la plataforma más efectiva de reunión de gatitos perdidos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="p-4 sm:p-6 md:p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 md:mb-6`}>
                <feature.icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-card w-full max-w-4xl mx-auto">
            {/* Precisión IA */}
            <div className="text-center w-full sm:w-auto px-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">99.2%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Precisión IA</div>
            </div>
            
            {/* Separador vertical solo en desktop */}
            <div className="hidden sm:block w-px h-12 bg-border flex-shrink-0"></div>
            
            {/* Monitoreo */}
            <div className="text-center w-full sm:w-auto px-2">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Monitoreo</div>
            </div>
            
            {/* Separador vertical solo en desktop */}
            <div className="hidden sm:block w-px h-12 bg-border flex-shrink-0"></div>
            
            {/* Tiempo de detección */}
            <div className="text-center w-full sm:w-auto px-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">&lt;5min</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Tiempo Detección</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};