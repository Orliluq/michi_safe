import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertTriangle, Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <FileText size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Términos de Uso
            </h1>
          </div>
          
          <p className="text-muted-foreground mb-8 border-l-2 border-primary/30 pl-4 py-1">
            Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border space-y-10">
          <section className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/5 mt-1">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">1. Aceptación de los Términos</h2>
                <p className="text-muted-foreground">
                  Al acceder y utilizar <span className="text-primary font-medium">Michi Safe</span>, aceptas cumplir con estos Términos de Uso. 
                  Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestro servicio.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              2. Uso del Servicio
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Michi Safe es una plataforma diseñada para ayudar a encontrar mascotas perdidas. Al utilizar nuestro servicio, te comprometes a:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">Proporcionar información precisa y veraz en los reportes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">Respetar la privacidad de los demás usuarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">No utilizar el servicio para fines ilegales o no autorizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">No publicar contenido ofensivo, difamatorio o inapropiado</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Importante:</span> Al publicar un reporte, asegúrate de que tienes el derecho de compartir las imágenes e información proporcionada.
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              3. Responsabilidades
            </h2>
            <div className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">3.1 Del Usuario</h3>
                <p className="text-muted-foreground">
                  Eres responsable de la exactitud de la información que proporcionas y del uso que hagas del servicio. 
                  Michi Safe no se hace responsable por la veracidad de la información publicada por los usuarios.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">3.2 De Michi Safe</h3>
                <p className="text-muted-foreground">
                  Nos esforzamos por mantener el servicio disponible y seguro, pero no garantizamos su disponibilidad ininterrumpida o libre de errores. 
                  Podemos modificar o interrumpir el servicio en cualquier momento sin previo aviso.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              4. Propiedad Intelectual
            </h2>
            <p className="text-muted-foreground">
              Los contenidos de Michi Safe, incluyendo textos, gráficos, logotipos y software, están protegidos por derechos de autor y otras leyes de propiedad intelectual. 
              Al publicar contenido en nuestra plataforma, nos otorgas una licencia no exclusiva para mostrarlo y distribuirlo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              5. Limitación de Responsabilidad
            </h2>
            <p className="text-muted-foreground">
              Michi Safe no se hace responsable por:
            </p>
            <ul className="space-y-2 pl-6 mt-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">Daños directos o indirectos derivados del uso del servicio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">La exactitud de la información proporcionada por los usuarios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">Interacciones entre usuarios fuera de nuestra plataforma</span>
              </li>
            </ul>
          </section>

          <div className="pt-6 border-t border-border mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Al usar nuestros servicios, aceptas nuestros Términos de Uso. 
                Podemos actualizar estos términos ocasionalmente, y te notificaremos sobre cambios significativos.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:legal@michisafe.com" className="hover:text-foreground transition-colors">
                  ¿Preguntas? Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
