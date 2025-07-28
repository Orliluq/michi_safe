import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Home, UserCheck, Bell, Tag, MapPin, Smartphone, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

type ConsejoCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tips?: string[];
};

const ConsejoCard = ({ icon, title, description, tips = [] }: ConsejoCardProps) => (
  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-200">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        {tips.length > 0 && (
          <ul className="space-y-2 mt-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const PrevencionPerdidas = () => {
  const consejosPrevencion = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Identificación Básica",
      description: "La identificación adecuada es tu primera línea de defensa para recuperar a tu mascota si se pierde.",
      tips: [
        "Collar con placa que incluya tu teléfono",
        "Microchip con datos actualizados",
        "Chapita con código QR de identificación"
      ]
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Seguridad en Casa",
      description: "Tu hogar debe ser un lugar seguro donde tu mascota no pueda escapar accidentalmente.",
      tips: [
        "Revisa cercas y portones regularmente",
        "Instala cerraduras a prueba de mascotas",
        "Crea una zona de transición en las entradas"
      ]
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Entrenamiento Básico",
      description: "Comandos esenciales que pueden salvar la vida de tu mascota.",
      tips: [
        "Enseña a venir cuando se le llama",
        "Entrena para quedarse quieto",
        "Acostumbra a usar correa"
      ]
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Tecnología de Seguridad",
      description: "Aprovecha la tecnología para mantener a salvo a tu compañero peludo.",
      tips: [
        "Collares GPS para localización en tiempo real",
        "Cámaras de seguridad para mascotas",
        "Aplicaciones de seguimiento"
      ]
    },
    {
      icon: <Tag className="w-5 h-5" />,
      title: "Registro y Documentación",
      description: "Mantén actualizada la información de tu mascota para una rápida identificación.",
      tips: [
        "Registro en la base de datos local",
        "Fotos actualizadas cada 6 meses",
        "Documentos médicos al día"
      ]
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Preparación para Emergencias",
      description: "Prepara un plan para situaciones de emergencia que puedan causar que tu mascota se pierda.",
      tips: [
        "Kit de emergencia para mascotas",
        "Fotos recientes impresas",
        "Lista de contactos de emergencia"
      ]
    }
  ];

  const situacionesComunes = [
    {
      situacion: "Visitas al veterinario",
      consejo: "Usa siempre correa y transportín seguro. Los gatos deben ir en transportín cerrado."
    },
    {
      situacion: "Paseos diarios",
      consejo: "Usa arnés resistente y correa corta en áreas con tráfico. Evita correas extensibles en la calle."
    },
    {
      situacion: "Fiestas y visitas",
      consejo: "Crea un espacio seguro para tu mascota lejos del bullicio y las salidas abiertas."
    },
    {
      situacion: "Mudanzas o viajes",
      consejo: "Mantén a tu mascota en un cuarto cerrado con sus pertenencias el día de la mudanza."
    },
    {
      situacion: "Truenos o fuegos artificiales",
      consejo: "Proporciona un refugio seguro y considera el uso de feromonas o ropa anti-ansiedad."
    },
    {
      situacion: "Puertas automáticas del coche",
      consejo: "Usa siempre arnés de seguridad y nunca dejes a tu mascota sola en el vehículo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/" className="flex items-center gap-2 mx-auto w-fit">
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </Button>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Prevención de Pérdidas
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Medidas esenciales para mantener a tu mascota segura y evitar que se pierda.
            </p>
          </div>
        </div>

        {/* Sección Principal */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Mantén a tu mascota segura en todo momento</h2>
            <p className="text-muted-foreground">
              La prevención es la mejor manera de proteger a tu compañero peludo. Sigue estos consejos para minimizar los riesgos de que tu mascota se pierda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {consejosPrevencion.map((consejo, index) => (
              <ConsejoCard 
                key={index}
                icon={consejo.icon}
                title={consejo.title}
                description={consejo.description}
                tips={consejo.tips}
              />
            ))}
          </div>
        </section>

        {/* Sección de Situaciones Comunes */}
        <section className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Situaciones de Riesgo Comunes</h2>
            <p className="text-muted-foreground">
              Aprende a manejar estas situaciones para mantener a tu mascota segura.
            </p>
          </div>
          
          <div className="space-y-4">
            {situacionesComunes.map((item, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-medium text-foreground">{item.situacion}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.consejo}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Llamado a la Acción */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda adicional?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si tienes preguntas sobre cómo mantener segura a tu mascota o necesitas asesoramiento personalizado, nuestro equipo está aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/ayuda" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Encontrar Recursos
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+582123456789" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Llamar a Soporte
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrevencionPerdidas;
