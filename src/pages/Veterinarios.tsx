import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Veterinarios = () => {
  const veterinarios = [
    {
      id: 1,
      nombre: "Veterinaria Las Mercedes",
      direccion:
        "Av. Principal de Las Mercedes, Centro Comercional Paseo Las Mercedes, Nivel C2",
      telefono: "0212-991-1234",
      horario: "24 horas / 7 días",
      servicios: [
        "Emergencias",
        "Hospitalización",
        "Cirugía",
        "Laboratorio",
        "Rayos X",
      ],
      destacado: true,
      calificacion: 4.8,
      imagen: "src/assets/hombre-con-su-adorable-gato-mascota.jpg",
    },
    {
      id: 2,
      nombre: "Hospital Veterinario San Bernardo",
      direccion: "Av. San Juan Bosco, Edif. San Bernardo, PB, Altamira",
      telefono: "0212-263-1234",
      horario: "24 horas / 7 días",
      servicios: [
        "Emergencias",
        "Cirugía",
        "Ecografía",
        "Laboratorio",
        "Farmacia",
      ],
      calificacion: 4.7,
      imagen:
        "src/assets/acercamiento-al-medico-veterinario-cuidando-la-mascota.jpg",
    },
    {
      id: 3,
      nombre: "Clínica Veterinaria La Castellana",
      direccion:
        "Av. Francisco de Miranda, Centro Plaza, Nivel C1, Los Palos Grandes",
      telefono: "0212-285-5678",
      horario: "Lun-Vie: 8:00 AM - 8:00 PM | Sáb-Dom: 9:00 AM - 5:00 PM",
      servicios: ["Consultas", "Vacunación", "Peluquería", "Laboratorio"],
      calificacion: 4.5,
      imagen:
        "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      nombre: "Centro Veterinario de Oriente",
      direccion: "Av. Francisco de Miranda, C.C. Líder, Nivel Jardín, Chacao",
      telefono: "0212-267-8910",
      horario: "Lun-Sáb: 8:00 AM - 8:00 PM | Dom: 9:00 AM - 3:00 PM",
      servicios: ["Consultas", "Cirugía", "Estética", "Farmacia"],
      calificacion: 4.3,
      imagen:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      nombre: "Veterinaria Los Naranjos",
      direccion:
        "Av. Principal de Los Naranjos, Edif. Galerías, PB, Los Naranjos",
      telefono: "0212-239-4567",
      horario: "24 horas / 7 días",
      servicios: ["Emergencias", "Hospitalización", "Cirugía", "Laboratorio"],
      destacado: true,
      calificacion: 4.9,
      imagen:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
              <HeartPulse className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Veterinarios 24 Horas
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Encuentra atención veterinaria de emergencia cerca de ti en
              Caracas y Miranda
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-12 bg-card p-6 rounded-xl border border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Buscar veterinarios
              </h2>
              <p className="text-muted-foreground text-sm">
                Filtra por ubicación o tipo de servicio
              </p>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="gap-1">
                <MapPin className="h-4 w-4" />
                Cercanos
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Clock className="h-4 w-4" />
                24 Horas
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <ShieldCheck className="h-4 w-4" />
                Emergencias
              </Button>
            </div>
          </div>
        </div>

        {/* Lista de Veterinarios */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {veterinarios.map((veterinario) => (
            <div
              key={veterinario.id}
              className={`bg-card rounded-xl border border-border overflow-hidden transition-all hover:shadow-md ${
                veterinario.destacado ? "ring-2 ring-primary/20" : ""
              } min-h-[320px] flex`}
              style={{ minHeight: 320 }}
            >
              <div className="md:flex w-full">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={veterinario.imagen}
                    alt={`Veterinaria ${veterinario.nombre}`}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")
                    }
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          {veterinario.nombre}
                          {veterinario.destacado && (
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              Emergencias 24/7
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          {veterinario.direccion}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(veterinario.calificacion)
                                    ? "text-amber-400 fill-amber-400"
                                    : "text-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {veterinario.calificacion}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`tel:${veterinario.telefono}`}
                          className="gap-1"
                        >
                          <Phone className="h-4 w-4" />
                          Llamar
                        </a>
                      </Button>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{veterinario.horario}</span>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium mb-2">Servicios:</h4>
                        <div className="flex flex-wrap gap-2">
                          {veterinario.servicios.map((servicio, i) => (
                            <span
                              key={i}
                              className="text-xs bg-muted/50 rounded-full px-3 py-1"
                            >
                              {servicio}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consejos de Emergencia */}
        <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              ¿Qué hacer en una emergencia veterinaria?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Señales de emergencia
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dificultad para respirar</li>
                  <li>• Convulsiones o pérdida de conocimiento</li>
                  <li>• Sangrado abundante</li>
                  <li>• Ingesta de sustancias tóxicas</li>
                  <li>• Dolor intenso o angustia evidente</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  Primeros auxilios básicos
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mantén la calma y llama al veterinario</li>
                  <li>• No des medicamentos sin consultar</li>
                  <li>• Si hay sangrado, aplica presión suave</li>
                  <li>• En caso de envenenamiento, lleva el envase</li>
                  <li>• Transporta a tu mascota con cuidado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veterinarios;
