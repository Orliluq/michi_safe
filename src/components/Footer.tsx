import { Heart, Mail, MapPin, Phone, Bot, Github, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import kittenIcon from "@/assets/kitten-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-hero flex items-center justify-center">
                <img src={kittenIcon} alt="Gatitos Perdidos" className="w-10 h-10 object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Gatitos Perdidos</h3>
                <p className="text-sm text-muted-foreground">Reuniendo familias</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Plataforma inteligente que usa IA para reunir gatitos perdidos con sus familias. 
              Más de 500 reuniones exitosas y contando.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Heart size={16} className="animate-pulse" />
              <span>Hecho con amor para los gatitos</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#buscar" className="text-muted-foreground hover:text-primary transition-colors">Buscar Gatitos</a></li>
              <li><a href="#reportar" className="text-muted-foreground hover:text-primary transition-colors">Reportar Perdido</a></li>
              <li><a href="#ia" className="text-muted-foreground hover:text-primary transition-colors">Cómo Funciona la IA</a></li>
              <li><a href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors">Historias de Éxito</a></li>
              <li><a href="#ayuda" className="text-muted-foreground hover:text-primary transition-colors">Centro de Ayuda</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#guia" className="text-muted-foreground hover:text-primary transition-colors">Guía para Buscar Mascotas</a></li>
              <li><a href="#prevencion" className="text-muted-foreground hover:text-primary transition-colors">Prevención de Pérdidas</a></li>
              <li><a href="#primeros-auxilios" className="text-muted-foreground hover:text-primary transition-colors">Primeros Auxilios</a></li>
              <li><a href="#refugios" className="text-muted-foreground hover:text-primary transition-colors">Refugios Cercanos</a></li>
              <li><a href="#veterinarios" className="text-muted-foreground hover:text-primary transition-colors">Veterinarios 24h</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter y contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Mantente Informado</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe alertas de la IA y noticias sobre reuniones exitosas
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input placeholder="tu@email.com" className="text-sm" />
                <Button size="sm">
                  <Mail size={14} />
                </Button>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>+52 55 1234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>ayuda@gatitosperdidos.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  <span>Ciudad de México</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador y redes sociales */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Gatitos Perdidos. Todos los derechos reservados. | 
              <a href="#privacidad" className="hover:text-primary ml-1">Política de Privacidad</a> | 
              <a href="#terminos" className="hover:text-primary ml-1">Términos de Uso</a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bot size={16} className="text-primary" />
                <span>IA activa 24/7</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Github size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};