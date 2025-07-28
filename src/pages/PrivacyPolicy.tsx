import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Mail, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
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
              <Shield size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Política de Privacidad
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
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">1. Introducción</h2>
                <p className="text-muted-foreground">
                  En <span className="text-primary font-medium">Michi Safe</span>, valoramos y respetamos tu privacidad. 
                  Esta política explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal 
                  cuando utilizas nuestra plataforma para reportar y buscar mascotas perdidas.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              2. Información que Recopilamos
            </h2>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-muted-foreground mb-3">Recopilamos varios tipos de información, incluyendo:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Información de contacto:</span> Nombre, correo electrónico, número de teléfono
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Datos de ubicación:</span> Para búsquedas geolocalizadas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Contenido del reporte:</span> Fotos y descripciones de mascotas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Datos de uso:</span> Cómo interactúas con nuestra plataforma
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              3. Uso de la Información
            </h2>
            <p className="text-muted-foreground">
              Utilizamos tu información para:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">Facilitar la conexión entre dueños de mascotas perdidas y quienes las encuentran</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">Mejorar la precisión de nuestro sistema de búsqueda con IA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">Enviar actualizaciones sobre reportes de mascotas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-muted-foreground">Proporcionar soporte al usuario y mejorar nuestros servicios</span>
              </li>
            </ul>
          </section>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-medium">Importante:</span> Nunca compartiremos tu información de contacto sin tu permiso explícito.
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              4. Tus Derechos
            </h2>
            <p className="text-muted-foreground">
              Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. 
              También puedes oponerte al procesamiento de tus datos o solicitar una copia de la información que tenemos sobre ti.
            </p>
            <p className="text-muted-foreground">
              Para ejercer estos derechos, contáctanos en:
            </p>
            <div className="flex items-center gap-2 text-primary mt-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:privacidad@michisafe.com" className="hover:underline">
                privacidad@michisafe.com
              </a>
            </div>
          </section>

          <div className="pt-6 border-t border-border mt-8">
            <p className="text-sm text-muted-foreground">
              Al usar nuestros servicios, aceptas nuestra política de privacidad. 
              Te recomendamos revisar esta página periódicamente para estar informado sobre cualquier cambio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
