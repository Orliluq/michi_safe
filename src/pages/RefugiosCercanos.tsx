import { Button } from "@/components/ui/button";
import { RefugiosMap } from "@/components/RefugiosMap";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Heart,
  ShieldCheck,
  Users,
  Home,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

const RefugiosCercanos = () => {
  const refugios = [
    {
      id: 1,
      nombre: "Fundación Misión Nevado",
      ubicacion: "Caracas, Distrito Capital",
      direccion:
        "Av. Francisco de Miranda, Edif. Mene Grande, Piso 1, Los Ruices",
      telefono: "0212-555-1234",
      email: "contacto@misionnevado.org.ve",
      web: "https://misionnevado.org.ve",
      horario: "Lunes a Viernes: 9:00 AM - 4:00 PM",
      servicios: [
        "Adopciones",
        "Atención veterinaria",
        "Esterilizaciones",
        "Voluntariado",
      ],
      descripcion:
        "Organización sin fines de lucro fundada en 2013 que se dedica al rescate, rehabilitación y adopción de animales en situación de calle.",
      imagen: "src/assets/nevado.jpg",
      destacado: true,
      lat: 10.4951,
      lng: -66.8286,
    },
    {
      id: 2,
      nombre: "ProAnimales de Venezuela",
      ubicacion: "Baruta, Miranda",
      direccion: "Calle Los Cedros, Qta. ProAnimales, Baruta",
      telefono: "0212-987-6543",
      email: "proanimalesve@gmail.com",
      web: "http://proanimales.org.ve",
      horario: "Martes a Domingo: 10:00 AM - 5:00 PM",
      servicios: [
        "Adopciones",
        "Campañas de esterilización",
        "Educación comunitaria",
        "Atención veterinaria básica",
      ],
      descripcion:
        "Organización dedicada al bienestar animal con más de 20 años de trayectoria en la protección y defensa de los animales.",
      imagen: "src/assets/proanimales.png",
      destacado: true,
      lat: 10.4171,
      lng: -66.8756,
    },
    {
      id: 3,
      nombre: "Huellas de Esperanza",
      ubicacion: "Chacao, Caracas",
      direccion: "Calle Los Manguitos, Qta. Huellas, Chacao",
      telefono: "0414-123-4567",
      email: "huellasesperanza@gmail.com",
      horario: "Lunes a Sábado: 10:00 AM - 4:00 PM",
      servicios: [
        "Rescate de emergencia",
        "Adopciones",
        "Atención veterinaria",
        "Voluntariado",
      ],
      descripcion:
        "Pequeño refugio familiar que se dedica al rescate y rehabilitación de animales maltratados y abandonados.",
      imagen: "src/assets/huellas.png",
      lat: 10.4956,
      lng: -66.8489,
    },
    {
      id: 4,
      nombre: "Patitas en Marcha",
      ubicacion: "Los Teques, Miranda",
      direccion: "Sector La Línea, Vía Colonia Tovar",
      telefono: "0412-555-7890",
      email: "patitasenmarcha.ve@gmail.com",
      web: "http://patitasenmarcha.org.ve",
      horario: "Jueves a Domingo: 9:00 AM - 3:00 PM",
      servicios: [
        "Adopciones",
        "Esterilizaciones",
        "Campañas de vacunación",
        "Educación comunitaria",
      ],
      descripcion:
        "Organación sin fines de lucro que trabaja en la protección animal y concientización sobre tenencia responsable.",
      imagen: "src/assets/patitas.jpg",
      lat: 10.3442,
      lng: -66.8311,
    },
  ];

  const serviciosComunes = [
    { nombre: "Adopciones", icon: <Heart className="w-4 h-4" /> },
    { nombre: "Esterilizaciones", icon: <ShieldCheck className="w-4 h-4" /> },
    {
      nombre: "Atención veterinaria",
      icon: <HeartPulse className="w-4 h-4" />,
    },
    { nombre: "Voluntariado", icon: <Users className="w-4 h-4" /> },
    { nombre: "Hospedaje temporal", icon: <Home className="w-4 h-4" /> },
    {
      nombre: "Rescate de emergencia",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
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
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Refugios Cercanos
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Conoce los refugios más confiables en Caracas y Miranda para
              adopción o apoyo
            </p>
          </div>
        </div>

        {/* Filtros y Mapa */}
        <div className="mb-12 bg-card p-6 rounded-xl border border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Encuentra refugios</h2>
              <p className="text-muted-foreground text-sm">
                Filtra por ubicación o servicios disponibles
              </p>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="gap-1">
                <MapPin className="h-4 w-4" />
                Caracas
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <MapPin className="h-4 w-4" />
                Miranda
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <ShieldCheck className="h-4 w-4" />
                Esterilizaciones
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Heart className="h-4 w-4" />
                Adopciones
              </Button>
            </div>
          </div>

          {/* Mapa interactivo */}
          <div className="mt-6">
            <RefugiosMap refugios={refugios} />
          </div>
        </div>

        {/* Lista de Refugios */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {refugios.map((refugio) => (
            <div
              key={refugio.id}
              className={`bg-card rounded-xl border border-border overflow-hidden transition-all hover:shadow-md ${
                refugio.destacado ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={refugio.imagen}
                    alt={`Refugio ${refugio.nombre}`}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.currentTarget.src = "/placeholder-image.jpg")
                    }
                    loading="eager"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {refugio.nombre}
                        {refugio.destacado && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                            <ShieldCheck className="h-3 w-3" />
                            Verificado
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {refugio.ubicacion}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/refugios/${refugio.id}`}>Ver más</Link>
                    </Button>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {refugio.descripcion}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Servicios:</h4>
                    <div className="flex flex-wrap gap-2">
                      {refugio.servicios.slice(0, 4).map((servicio, i) => (
                        <span
                          key={i}
                          className="text-xs bg-muted/50 rounded-full px-3 py-1 flex items-center gap-1"
                        >
                          {servicio}
                        </span>
                      ))}
                      {refugio.servicios.length > 4 && (
                        <span className="text-xs bg-muted/50 rounded-full px-3 py-1">
                          +{refugio.servicios.length - 4} más
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <a
                        href={`tel:${refugio.telefono}`}
                        className="hover:text-primary"
                      >
                        {refugio.telefono}
                      </a>
                    </div>
                    {refugio.web && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4" />
                        <a
                          href={
                            refugio.web.startsWith("http")
                              ? refugio.web
                              : `https://${refugio.web}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          Sitio web
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{refugio.horario}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Ayuda a los Refugios */}
        <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              ¿Quieres ayudar a los refugios?
            </h2>
            <p className="text-muted-foreground mb-6">
              Los refugios siempre necesitan ayuda. Considera donar, ser
              voluntario o compartir esta información para apoyar su labor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/donar" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Hacer una donación
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/voluntariado" className="gap-2">
                  <Users className="h-4 w-4" />
                  Ser voluntario
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefugiosCercanos;
