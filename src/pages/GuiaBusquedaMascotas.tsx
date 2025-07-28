import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, MapPin, Phone, Bell, Share2, AlertTriangle, Heart, Home, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

type TipCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const TipCard = ({ icon, title, description }: TipCardProps) => (
  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-200 h-full">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const GuiaBusquedaMascotas = () => {
  const pasosBusqueda = [
    {
      paso: 1,
      titulo: "Actúa rápidamente",
      descripcion: "Cuanto antes empieces la búsqueda, mayores serán las posibilidades de encontrar a tu mascota. Los primeros minutos y horas son cruciales."
    },
    {
      paso: 2,
      titulo: "Busca en el área cercana",
      descripcion: "Revisa escondites en tu casa, jardín, garaje y alrededores. Los gatos especialmente pueden esconderse en lugares pequeños y silenciosos."
    },
    {
      paso: 3,
      titulo: "Notifica a vecinos y locales",
      descripcion: "Informa a los vecinos, tiendas de la zona y repartidores. Ellos pueden ser tus mejores aliados en la búsqueda."
    },
    {
      paso: 4,
      titulo: "Usa redes sociales",
      descripcion: "Comparte la información en grupos locales de mascotas perdidas en Facebook, Twitter, Instagram y WhatsApp de tu comunidad."
    },
    {
      paso: 5,
      titulo: "Coloca carteles",
      descripcion: "Crea carteles con una foto clara, descripción, área donde se perdió y tu información de contacto. Colócalos en lugares visibles."
    },
    {
      paso: 6,
      titulo: "Contacta refugios y veterinarios",
      descripcion: "Llama o visita los refugios de animales, clínicas veterinarias y tiendas de mascotas de la zona para dejar información sobre tu mascota perdida."
    }
  ];

  const consejosUtiles = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horarios clave",
      description: "Busca temprano en la mañana o al anochecer, cuando hay menos ruido y las mascotas perdidas suelen sentirse más seguras para salir."
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Lleva su juguete favorito",
      description: "El sonido de su juguete favorito o el de su plato de comida puede ayudar a atraerlo si está cerca pero asustado."
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Amplía la búsqueda gradualmente",
      description: "Comienza cerca de donde se perdió y ve ampliando el radio. Los gatos rara vez se alejan más de 1-2 km de casa."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Precaución con estafas",
      description: "Ten cuidado con ofertas de recompensa falsas. Nunca envíes dinero a cambio de información sin verificar primero."
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
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Guía para Buscar Mascotas
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Sigue estos pasos y consejos para aumentar las posibilidades de encontrar a tu mascota perdida.
            </p>
          </div>
        </div>

        {/* Pasos de Búsqueda */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">¿Tu mascota se perdió? Sigue estos pasos</h2>
            
            <div className="space-y-6">
              {pasosBusqueda.map((paso, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                    {paso.paso}
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border flex-1">
                    <h3 className="text-xl font-semibold mb-2">{paso.titulo}</h3>
                    <p className="text-muted-foreground">{paso.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consejos Rápidos */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Consejos Rápidos para la Búsqueda</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consejosUtiles.map((consejo, index) => (
                <TipCard 
                  key={index}
                  icon={consejo.icon}
                  title={consejo.title}
                  description={consejo.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Acción */}
        <section className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">¿No has encontrado a tu mascota?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              No pierdas la esperanza. Muchas mascotas son encontradas días o incluso semanas después de haberse perdido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/#reportar" className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Reportar Mascota Perdida
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contacto" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contactar a Refugios
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de Prevención */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Cómo Prevenir Pérdidas Futuras</h2>
            <p className="text-muted-foreground text-center mb-6">
              Toma estas medidas para proteger a tu mascota y evitar que se pierda nuevamente:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Microchip de identificación</h3>
                  <p className="text-muted-foreground text-sm">Un microchip es la forma más segura de identificación permanente.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Placa de identificación</h3>
                  <p className="text-muted-foreground text-sm">Incluye tu número de teléfono en el collar de tu mascota.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Fotos actualizadas</h3>
                  <p className="text-muted-foreground text-sm">Mantén fotos recientes que muestren marcas distintivas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Entrenamiento básico</h3>
                  <p className="text-muted-foreground text-sm">Enseña a tu mascota a venir cuando la llames.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Recuerda mantener la calma y ser persistente. La comunidad de Michi Safe está aquí para ayudarte.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuiaBusquedaMascotas;
