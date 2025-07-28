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
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Bot className="text-primary" size={16} />
            <span className="text-sm font-medium text-primary">Tecnología IA Avanzada</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Cómo Funciona Nuestra</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos machine learning, análisis de imágenes y monitoreo de redes sociales 
            para crear la plataforma más efectiva de reunión de gatitos perdidos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
              <div className="text-sm text-muted-foreground">Precisión IA</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoreo</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">&lt;5min</div>
              <div className="text-sm text-muted-foreground">Tiempo Detección</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};