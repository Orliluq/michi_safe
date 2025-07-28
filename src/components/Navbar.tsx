import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Search, Plus, Home, Bot, Shield } from "lucide-react";
import kittenIcon from "@/assets/kitten-icon.png";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "@/services/authService";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [auth, setAuth] = useState(isAuthenticated());

  const handleLogout = () => {
    logout();
    setAuth(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-hero flex items-center justify-center">
              <img
                src={kittenIcon}
                alt="Michi Safe"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Michi Safe</h1>
              <p className="text-xs text-muted-foreground">
                IA para reunir para salvar michis
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Home size={16} />
              Inicio
            </a>
            <a
              href="/#buscar"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Search size={16} />
              Buscar
            </a>
            <a
              href="/#reportar"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Plus size={16} />
              Reportar
            </a>
            <a
              href="/adopcion"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Heart size={16} />
              Adopción
            </a>
            <a
              href="/abandonados"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Shield size={16} />
              Rescate
            </a>
            <a
              href="/#ia"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Bot size={16} />
              Cómo Funciona IA
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {auth ? (
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/login")}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  size="sm"
                  className="shadow-warm"
                  onClick={() => navigate("/register")}
                >
                  <Heart className="mr-2" size={14} />
                  Registrarse
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Home size={16} />
                Inicio
              </a>
              <a
                href="/#buscar"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Search size={16} />
                Buscar Gatitos
              </a>
              <a
                href="/#reportar"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Plus size={16} />
                Reportar
              </a>
              <a
                href="/adopcion"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Heart size={16} />
                Adopción
              </a>
              <a
                href="/abandonados"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Shield size={16} />
                Rescate
              </a>
              <a
                href="/#ia"
                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Bot size={16} />
                Cómo Funciona IA
              </a>

              <div className="px-4 pt-4 border-t border-border/50 space-y-3">
                {auth ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate("/login")}
                    >
                      Iniciar Sesión
                    </Button>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => navigate("/register")}
                    >
                      <Heart className="mr-2" size={14} />
                      Registrarse
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
