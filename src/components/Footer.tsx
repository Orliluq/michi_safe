import { Heart, Mail, MapPin, Phone, Bot, Github, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import kittenIcon from "@/assets/kitten-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-hero flex items-center justify-center">
                <img src={kittenIcon} alt="Michi Safe" className="w-10 h-10 object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Michi Safe</h3>
                <p className="text-sm text-muted-foreground">Reuniendo michis con sus familias</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Plataforma inteligente que usa IA para reunir michis perdidos con sus familias. 
              Más de 500 reuniones exitosas y contando.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Heart size={16} className="animate-pulse" />
              <span>Hecho con amor para los michis</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#buscar" className="text-muted-foreground hover:text-primary transition-colors">Buscar Michis</a></li>
              <li><a href="#reportar" className="text-muted-foreground hover:text-primary transition-colors">Reportar Perdido</a></li>
              <li><a href="#ia" className="text-muted-foreground hover:text-primary transition-colors">Cómo Funciona la IA</a></li>
              <li>
                <Link 
                  to="/testimonios" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Historias de Éxito
                </Link>
              </li>
              <li>
                <Link 
                  to="/ayuda" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Centro de Ayuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link 
                  to="/guia" className="text-muted-foreground hover:text-primary transition-colors">Guía para Buscar Mascotas</Link></li>
              <li><Link 
                  to="/prevencion" className="text-muted-foreground hover:text-primary transition-colors">Prevención de Pérdidas</Link></li>
              <li><Link 
                  to="/primeros-auxilios" className="text-muted-foreground hover:text-primary transition-colors">Primeros Auxilios</Link></li>
              <li><Link 
                  to="/refugios" className="text-muted-foreground hover:text-primary transition-colors">Refugios Cercanos</Link></li>
              <li><Link 
                  to="/veterinarios" className="text-muted-foreground hover:text-primary transition-colors">Veterinarios 24h</Link></li>
              <li><Link 
                  to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
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
                  <span>+58 024 1234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>ayuda@gatitosperdidos.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  <span>Caracas, Venezuela</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador y redes sociales */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              &copy; {year} Made with 💜 by{" "}
              <a
                href="https://www.linkedin.com/in/orlibetdungonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                Orli
              </a>{" "}
              — All rights reserved.{" "}
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidad
              </a>{" "}
              <span className="text-muted-foreground/50">|</span>{" "}
              <a 
                href="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Términos de Uso
              </a>
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