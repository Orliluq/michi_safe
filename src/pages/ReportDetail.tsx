import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Heart, Share2, MessageCircle, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Datos de ejemplo - en una app real estos vendrían de una API
const mockReport = {
  id: "1",
  title: "Gatito atigrado perdido en Miraflores",
  description: "Se perdió mi gato atigrado de 2 años en el parque Kennedy. Es muy cariñoso y responde al nombre de 'Michi'. Tiene un collar azul con una placa con su nombre.",
  type: "lost", // 'lost' o 'found'
  image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  date: "2023-07-25",
  location: "Miraflores, Lima",
  breed: "Atigrado",
  color: "Naranja y blanco",
  age: "2 años",
  gender: "Macho",
  contact: {
    name: "María López",
    phone: "+51 987 654 321",
    email: "maria@ejemplo.com"
  },
  additionalImages: [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ]
};

export const ReportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // En una app real, aquí harías un fetch para obtener los detalles del reporte
  const report = mockReport;

  const handleContact = (method: 'whatsapp' | 'call' | 'email') => {
    // Lógica para contactar
    toast({
      title: "Contacto",
      description: `Iniciando ${method === 'whatsapp' ? 'WhatsApp' : method === 'call' ? 'llamada' : 'correo'} a ${report.contact.name}`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: report.title,
        text: report.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "¡Enlace copiado!",
        description: "El enlace ha sido copiado al portapapeles.",
      });
    }
  };

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Botón de volver */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Imagen principal */}
        <div className="relative rounded-2xl overflow-hidden bg-muted/50 h-80 md:h-96 lg:h-[500px] mb-8">
          <img 
            src={report.image} 
            alt={report.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge variant={report.type === 'lost' ? 'destructive' : 'default'}>
              {report.type === 'lost' ? 'Perdido' : 'Encontrado'}
            </Badge>
          </div>
        </div>

        {/* Galería de imágenes */}
        {report.additionalImages.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
            {report.additionalImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-muted/50">
                <img 
                  src={img} 
                  alt={`${report.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{report.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {report.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(report.date).toLocaleDateString('es-PE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-sm">{report.breed}</Badge>
                <Badge variant="outline" className="text-sm">{report.color}</Badge>
                <Badge variant="outline" className="text-sm">{report.age}</Badge>
                <Badge variant="outline" className="text-sm">{report.gender}</Badge>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold text-foreground mb-2">Descripción</h3>
              <p className="text-muted-foreground">{report.description}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Características adicionales</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Tamaño</p>
                  <p className="font-medium">Mediano</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pelaje</p>
                  <p className="font-medium">Corto</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Esterilizado</p>
                  <p className="font-medium">Sí</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Con chip</p>
                  <p className="font-medium">No</p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra lateral de contacto */}
          <div className="md:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-6">
              <h3 className="text-xl font-semibold mb-4">Contactar a {report.contact.name.split(' ')[0]}</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleContact('whatsapp')}
                >
                  <MessageCircle className="h-5 w-5 mr-2 text-green-500" />
                  Enviar mensaje
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleContact('call')}
                >
                  <Phone className="h-5 w-5 mr-2 text-blue-500" />
                  Llamar
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleContact('email')}
                >
                  <Mail className="h-5 w-5 mr-2 text-orange-500" />
                  Enviar correo
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Compartir reporte
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Guardar en favoritos
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Reportado el {new Date(report.date).toLocaleDateString('es-PE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
