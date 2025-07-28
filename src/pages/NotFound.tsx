import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cat, Home, Search } from "lucide-react";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Ilustración */}
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 flex items-center justify-center">
            <Cat className="h-32 w-32 text-primary" strokeWidth={1.5} />
            <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              404
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            ¡Ups! Página no encontrada
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            El gatito que estás buscando parece haberse perdido. La página que intentas acceder no existe o ha sido movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="gap-2">
              <Link to="/#buscar">
                <Search className="h-4 w-4" />
                Buscar gatitos
              </Link>
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              ¿Estás buscando algo en específico?{' '}
              <a 
                href="mailto:soporte@michisafe.com" 
                className="text-primary hover:underline font-medium"
              >
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Efectos decorativos */}
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-accent/5 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-destructive/10 blur-2xl -z-10"></div>
    </div>
  );
};

export default NotFound;
