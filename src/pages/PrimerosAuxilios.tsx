import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, HeartPulse, Droplets, Thermometer, Bandage, Syringe, Phone, AlertCircle, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PrimerosAuxilios = () => {
  const emergencias = [
    {
      id: 'asfixia',
      titulo: 'Atragantamiento',
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'bg-red-100 text-red-600',
      pasos: [
        'Mantén la calma y revisa la boca del gato',
        'Si ves el objeto, intenta retirarlo con cuidado con pinzas',
        'Nunca metas los dedos si no ves el objeto',
        'Si no puedes quitarlo, llévalo al veterinario inmediatamente'
      ],
      imagen: 'https://i.ibb.co/jkX7R3Qz/adorable-gatito-con-pared-monocromatica-detras-de-ella.jpg',
      noHacer: 'No intentes el método de Heimlich sin entrenamiento'
    },
    {
      id: 'herida',
      titulo: 'Heridas y Sangrado',
      icon: <Droplets className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-600',
      pasos: [
        'Lávate las manos y usa guantes si es posible',
        'Aplica presión suave con gasa estéril',
        'Lava con solución salina o agua limpia',
        'Aplica un vendaje ligero si es necesario'
      ],
      imagen: 'https://i.ibb.co/8LPJTcYc/cono-marron-despues-de-la-cirugia-inyeccion-para-un-animal-veterinario-en-guantes-con-una-inyeccion.jpg',
      noHacer: 'No uses alcohol ni peróxido en heridas abiertas'
    },
    {
      id: 'quemadura',
      titulo: 'Quemaduras',
      icon: <Thermometer className="w-5 h-5" />,
      color: 'bg-orange-100 text-orange-600',
      pasos: [
        'Enfría la zona con agua fría (no helada) por 5-10 minutos',
        'No apliques hielo directamente',
        'Cubre con gasa estéril sin apretar',
        'Consulta al veterinario, especialmente si la quemadura es grave'
      ],
      imagen: 'https://i.ibb.co/2YqSGcCv/cerrar-medico-sosteniendo-gato.jpg',
      noHacer: 'No apliques pomadas ni remedios caseros sin consultar'
    },
    {
      id: 'envenenamiento',
      titulo: 'Envenenamiento',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-yellow-100 text-yellow-600',
      pasos: [
        'Identifica la sustancia ingerida si es posible',
        'Llama al veterinario o centro de control de envenenamiento',
        'No induzcas el vómito a menos que lo indique un profesional',
        'Lleva el envase de la sustancia al veterinario'
      ],
      imagen: 'https://i.ibb.co/3mbv1q0T/gato-con-cono.jpg',
      noHacer: 'No des leche ni intentes remedios caseros sin consultar'
    },
    {
      id: 'golpe-calor',
      titulo: 'Golpe de Calor',
      icon: <Thermometer className="w-5 h-5" />,
      color: 'bg-red-100 text-red-600',
      pasos: [
        'Lleva al gato a un lugar fresco',
        'Humedece su cuerpo con agua tibia (no fría)',
        'Ofrece agua fresca para beber',
        'Acude al veterinario inmediatamente'
      ],
      imagen: 'https://i.ibb.co/jkX7R3Qz/adorable-gatito-con-pared-monocromatica-detras-de-ella.jpg',
      noHacer: 'No uses agua helada ni hielo para enfriar al gato'
    },
    {
      id: 'convulsiones',
      titulo: 'Convulsiones',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-purple-100 text-purple-600',
      pasos: [
        'Aleja objetos con los que pueda lastimarse',
        'No intentes sujetar al gato',
        'Apaga luces y reduce el ruido',
        'Toma nota de la duración y síntomas'
      ],
      imagen: 'https://i.ibb.co/QvPhsXfQ/primer-disparo-vertical-de-un-lindo-gato-europeo-de-pelo-corto.jpg',
      noHacer: 'No metas las manos cerca de la boca del gato durante la convulsión'
    }
  ];

  const botiquinBasico = [
    'Gasas estériles',
    'Vendas elásticas',
    'Tijeras de punta redonda',
    'Pinzas',
    'Termómetro digital',
    'Guantes desechables',
    'Solución salina estéril',
    'Toallitas antisépticas',
    'Manta térmica',
    'Tela adhesiva hipoalergénica',
    'Jeringa sin aguja',
    'Contactos de emergencia veterinaria'
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
              Primeros Auxilios para Gatos
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Guía rápida de primeros auxilios que todo dueño de gatos debe conocer
            </p>
          </div>
        </div>

        {/* Sección de Emergencias Comunes */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Emergencias Comunes</h2>
            <p className="text-muted-foreground">
              Aprende a actuar rápidamente en estas situaciones de emergencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {emergencias.map((emergencia) => (
              <div key={emergencia.id} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={emergencia.imagen} 
                    alt={emergencia.titulo} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`${emergencia.color} p-2 rounded-full`}>
                      {emergencia.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{emergencia.titulo}</h3>
                  </div>
                  
                  <h4 className="font-medium text-foreground mb-2">Qué hacer:</h4>
                  <ul className="space-y-2 mb-4">
                    {emergencia.pasos.map((paso, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{paso}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">
                          <span className="font-medium">No hacer:</span> {emergencia.noHacer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Botiquín Básico */}
        <section className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Syringe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Botiquín de Primeros Auxilios</h2>
            <p className="text-muted-foreground">
              Prepara tu botiquín con estos elementos esenciales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {botiquinBasico.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Llamado a la Acción */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda de emergencia?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              En caso de emergencia, contacta inmediatamente a tu veterinario o clínica de emergencia más cercana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="tel:+582123456789" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Llamar a Emergencias
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/veterinarios" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Encontrar Veterinario Cercano
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Esta guía no sustituye la atención veterinaria profesional. En caso de emergencia, busca ayuda calificada.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrimerosAuxilios;
