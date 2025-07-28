import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  AlertCircle,
  Search,
  ChevronDown,
  Heart,
  Settings,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Reportes y Búsquedas",
      icon: <AlertCircle className="w-5 h-5" />,
      items: [
        {
          question: "¿Cómo reporto un gato perdido?",
          answer:
            "Para reportar un gato perdido, ve a la sección 'Reportar Perdido' en el menú principal. Completa el formulario con la información del gato, incluyendo fotos claras, última ubicación vista y detalles de contacto. Recibirás actualizaciones por correo electrónico cuando haya novedades.",
        },
        {
          question:
            "¿Qué información debo incluir al reportar un gato perdido?",
          answer:
            "Es importante incluir: fotos claras del gato desde diferentes ángulos, descripción detallada (color, tamaño, marcas distintivas), ubicación y fecha en que se perdió, si tiene microchip o collar, y tu información de contacto. Mientras más detalles proporciones, mayores serán las posibilidades de encontrarlo.",
        },
        {
          question: "¿Cómo funciona el sistema de coincidencias?",
          answer:
            "Nuestro sistema de IA compara automáticamente las fotos de gatos reportados como perdidos con los que han sido encontrados. Cuando hay una coincidencia potencial, ambos usuarios reciben una notificación para que puedan ponerse en contacto y verificar si se trata del mismo gato.",
        },
      ],
    },
    {
      title: "Adopciones",
      icon: <Heart className="w-5 h-5" />,
      items: [
        {
          question: "¿Cómo puedo adoptar un gato?",
          answer:
            "Visita nuestra sección de 'Adopción' para ver los gatos disponibles. Cada perfil incluye fotos, descripción, personalidad y requisitos de adopción. Si encuentras un gato que te guste, completa el formulario de solicitud y nos pondremos en contacto contigo para continuar con el proceso.",
        },
        {
          question: "¿Cuáles son los requisitos para adoptar?",
          answer:
            "Los requisitos básicos incluyen: ser mayor de 21 años, completar un formulario de solicitud, proporcionar referencias personales, permitir una visita al hogar (virtual o presencial), firmar un contrato de adopción y cubrir la tarifa de adopción que ayuda con los gastos veterinarios.",
        },
      ],
    },
    {
      title: "Cuenta y Configuración",
      icon: <Settings className="w-5 h-5" />,
      items: [
        {
          question: "¿Cómo cambio mi contraseña?",
          answer:
            "Para cambiar tu contraseña, inicia sesión y ve a 'Configuración de la cuenta'. Haz clic en 'Cambiar contraseña', ingresa tu contraseña actual y luego la nueva. Asegúrate de que la nueva contraseña sea segura y no la hayas usado anteriormente.",
        },
        {
          question: "¿Cómo actualizo mi información de perfil?",
          answer:
            "Puedes actualizar tu información de perfil en cualquier momento desde la sección 'Mi Perfil'. Haz clic en el botón 'Editar' y actualiza la información que desees cambiar. No olvides guardar los cambios antes de salir.",
        },
      ],
    },
    {
      title: "Soporte Técnico",
      icon: <HeartHandshake className="w-5 h-5" />,
      items: [
        {
          question: "La aplicación no carga correctamente",
          answer:
            "Si experimentas problemas de carga, intenta los siguientes pasos: 1) Cierra completamente la aplicación y vuélvela a abrir. 2) Verifica tu conexión a internet. 3) Limpia la caché de la aplicación en la configuración de tu dispositivo. Si el problema persiste, contáctanos para asistencia técnica.",
        },
        {
          question: "No recibo notificaciones",
          answer:
            "Primero, verifica que las notificaciones estén habilitadas en la configuración de tu dispositivo para nuestra aplicación. Luego, asegúrate de que las notificaciones estén activadas en la configuración de la aplicación. Si el problema continúa, desinstala y vuelve a instalar la aplicación.",
        },
      ],
    },
  ];

  // Filtrar preguntas según la búsqueda
  const filteredFaqs = faqCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
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
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Centro de Ayuda
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Estamos aquí para ayudarte. Encuentra respuestas a las preguntas
              más frecuentes o contáctanos directamente.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes..."
              className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* FAQ Sections */}
          <div className="space-y-8">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="bg-card rounded-xl shadow-sm border border-border overflow-hidden"
                >
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <h2 className="text-xl font-semibold">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                  <div className="divide-y divide-border">
                    {category.items.map((item, itemIndex) => {
                      const index = `${catIndex}-${itemIndex}`;
                      const isActive = activeIndex === itemIndex;

                      return (
                        <div key={item.question} className="p-6">
                          <button
                            onClick={() => toggleFaq(itemIndex)}
                            className="flex justify-between items-center w-full text-left"
                            aria-expanded={isActive}
                            aria-controls={`faq-${index}`}
                          >
                            <h3 className="text-lg font-medium text-foreground">
                              {item.question}
                            </h3>
                            <ChevronDown
                              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                                isActive ? "transform rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            id={`faq-${index}`}
                            className={`mt-3 text-muted-foreground overflow-hidden transition-all duration-200 ${
                              isActive ? "max-h-96" : "max-h-0"
                            }`}
                            aria-hidden={!isActive}
                          >
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No se encontraron resultados para tu búsqueda.
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-primary"
                  onClick={() => setSearchQuery("")}
                >
                  Limpiar búsqueda
                </Button>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-card rounded-xl shadow-sm border border-border p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo de soporte está listo para ayudarte. Contáctanos
              por cualquiera de estos medios:
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Correo Electrónico</h3>
                <p className="text-muted-foreground text-sm">
                  <a
                    href="mailto:ayuda@michisafe.com"
                    className="text-primary hover:text-foreground"
                  >
                    ayuda@michisafe.com
                  </a>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Respuesta en 24-48 horas
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Teléfono</h3>
                <p className="text-muted-foreground text-sm">
                  <a
                    href="tel:+58123456789"
                    className="text-primary hover:text-foreground"
                  >
                    +58 123-456-789
                  </a>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Lunes a Viernes, 9am - 6pm
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Chat en Vivo</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Habla directamente con nuestro equipo
                </p>
                <Button asChild>
                  <a
                    href="https://wa.me/584123456789?text=Hola%2C%20necesito%20ayuda%20con%20Michi%20Safe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Iniciar chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
