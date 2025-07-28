import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  MapPin,
  Calendar,
  Cat,
  Search,
  FolderGit2,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// El tipo de dato para las coincidencias que devuelve la IA
type Coincidencia = {
  publicacion: {
    urlPublicacion: string;
    descripcionPublicacion: string;
    fotoUrl: string;
  };
  analisisIA: {
    justificacion: string;
    confianza: number;
  };
};

export const ReportForm = () => {
  const { toast } = useToast();
  const [reportType, setReportType] = useState<"lost" | "found" | "">("lost");

  // Estado unificado para todos los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    contact: "",
    breed: "",
    color: "",
    size: "",
    imageUrl: "", // Cambiado de 'image' a 'imageUrl' para aceptar una URL
  });

  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados para manejar la respuesta de la API
  const [resultados, setResultados] = useState<Coincidencia[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- LÓGICA DE UPLOAD ---

  // Handler for PC upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert file to base64 data URL for preview (temporary solution)
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      setFormData((prevData) => ({ ...prevData, imageUrl }));
      toast({
        title: "Imagen cargada",
        description:
          "Imagen lista para usar. Para producción, configura un servicio de upload.",
      });
    };
    reader.readAsDataURL(file);

    // TODO: For production, implement proper file upload to your backend or cloud storage
    // Example with your own backend:
    /*
  const uploadFormData = new FormData();
  uploadFormData.append("image", file);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: uploadFormData,
    });

    if (!response.ok) throw new Error("Upload failed");

    const result = await response.json();
    setFormData(prevData => ({ ...prevData, imageUrl: result.url }));
    toast({ title: "Imagen subida", description: "La URL de la imagen ha sido actualizada." });
  } catch (error) {
    console.error("Error uploading file:", error);
    toast({ variant: "destructive", title: "Error", description: "No se pudo subir la imagen." });
  }
  */
  };

  // Placeholder for Google Drive logic
  const handleDriveSelect = () => {
    // NOTE: This requires setting up Google Picker API
    // The logic would be similar to the one in the previous ImageUploader component
    alert("La funcionalidad de Google Drive se implementará aquí.");
  };

  // --- LÓGICA DE ENVÍO DEL FORMULARIO ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Solo buscamos si es un reporte de "perdido"
    if (reportType !== "lost") {
      toast({
        title: "Reporte Enviado",
        description:
          "Gracias por reportar al gatito encontrado. Tu información ayudará a otros a encontrar a su mascota.",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setResultados([]);

    toast({
      title: "Buscando coincidencias...",
      description:
        "Nuestra IA está analizando la información. Esto puede tardar unos segundos.",
    });

    try {
      // La URL de tu API de Genkit
      const response = await fetch(
        "http://localhost:3400/flows/encontrarMiGatitoFlow",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: {
              // Mapeamos los datos del formulario al formato que espera la API
              gatito: {
                descripcion: formData.description,
                colorPrincipal: formData.color,
                raza: formData.breed,
              },
              ultimaUbicacionConocida: formData.location,
              fotoGatitoPerdidoUrl: formData.imageUrl,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Error en la API: ${response.statusText}`
        );
      }

      const result = await response.json();
      const coincidencias = result.output || [];
      setResultados(coincidencias);

      toast({
        title: "Búsqueda Completada",
        description: `Se encontraron ${coincidencias.length} coincidencias de alta probabilidad.`,
      });
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: "destructive",
        title: "Error en la Búsqueda",
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Reporta un Michi</span>{" "}
            <span className="text-primary">
              {reportType === "lost"
                ? "Perdido"
                : reportType === "found"
                ? "Encontrado"
                : ""}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Completa la información para que nuestra IA pueda ayudar en la
            búsqueda.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Selección de Tipo de Reporte */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant={reportType === "lost" ? "default" : "outline"}
              size="lg"
              onClick={() => setReportType("lost")}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
            >
              <Cat className="mr-2" size={18} />
              Perdí a mi Gatito
            </Button>
            <Button
              variant={reportType === "found" ? "default" : "outline"}
              size="lg"
              onClick={() => setReportType("found")}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
            >
              <Cat className="mr-2" size={18} />
              Encontré a un Gatito
            </Button>
          </div>

          {/* Formulario principal */}
          {reportType && (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {/* Columna Izquierda: Imagen y Detalles Visuales */}
              <div className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Upload size={18} className="text-primary" />
                      Foto del Gatito
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Label htmlFor="imageUrl" className="text-sm sm:text-base">URL de la Imagen</Label>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-1">
                      <Input
                        id="imageUrl"
                        type="url"
                        placeholder="https://imgur.com/gallery/gato.jpg"
                        value={formData.imageUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, imageUrl: e.target.value })
                        }
                        required
                        className="flex-1 text-sm sm:text-base"
                      />
                      {/* Hidden file input */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                      />
                    </div>
                    <div className="flex gap-2">
                        {/* PC Upload Button */}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                          className="flex-1 sm:flex-none"
                        >
                          <Upload className="w-4 h-4 mr-1 sm:mr-0" />
                          <span className="sm:sr-only">Subir desde PC</span>
                        </Button>
                        {/* Drive Upload Button */}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleDriveSelect}
                          className="flex-1 sm:flex-none"
                      >
                        <FolderGit2 className="w-4 h-4" />
                        <span className="sr-only">Seleccionar desde Drive</span>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Pega una URL o sube una imagen desde tu PC o Drive.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cat size={20} className="text-primary" />
                      Apariencia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="color">Color Principal</Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, color: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Color del pelaje" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="negro">Negro</SelectItem>
                          <SelectItem value="blanco">Blanco</SelectItem>
                          <SelectItem value="gris">Gris</SelectItem>
                          <SelectItem value="naranja">
                            Naranja/Atigrado
                          </SelectItem>
                          <SelectItem value="calico">Calicó</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="size">Tamaño</Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, size: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Tamaño del gatito" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cachorro">Cachorro</SelectItem>
                          <SelectItem value="joven">Joven</SelectItem>
                          <SelectItem value="adulto">Adulto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Columna Derecha: Información y Contexto */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información del Reporte</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre del Gatito</Label>
                        <Input
                          id="name"
                          placeholder={
                            reportType === "lost"
                              ? "Ej: Luna, Michi..."
                              : "Si lo conoces"
                          }
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="breed">Raza</Label>
                        <Select
                          onValueChange={(value) =>
                            setFormData({ ...formData, breed: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona la raza" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mestizo">Mestizo</SelectItem>
                            <SelectItem value="persa">Persa</SelectItem>
                            <SelectItem value="siames">Siamés</SelectItem>
                            <SelectItem value="no-se">No sé</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="location"
                        className="flex items-center gap-2"
                      >
                        <MapPin size={16} /> Ubicación
                      </Label>
                      <Input
                        id="location"
                        placeholder="Colonia, Ciudad"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar size={16} /> Fecha
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción Detallada</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe señas particulares, si llevaba collar, su comportamiento, etc."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Información de Contacto</Label>
                      <Input
                        id="contact"
                        placeholder="Email o teléfono"
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Buscando..."
                  ) : (
                    <>
                      <Search className="mr-2" size={20} />
                      {reportType === "lost"
                        ? "Buscar Coincidencias con IA"
                        : "Enviar Reporte"}
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Sección de Resultados */}
          <div className="mt-8">
            {isLoading && (
              <p className="text-center">
                Analizando publicaciones, por favor espera...
              </p>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {resultados.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center">
                  Resultados de la Búsqueda
                </h3>
                {resultados.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid md:grid-cols-3">
                      <div className="md:col-span-1">
                        <img
                          src={item.publicacion.fotoUrl}
                          alt="Gatito encontrado"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <CardTitle>
                          Coincidencia con {item.analisisIA.confianza}% de
                          confianza
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Justificación de la IA:</strong>{" "}
                          {item.analisisIA.justificacion}
                        </p>
                        <p className="mt-4">
                          {item.publicacion.descripcionPublicacion}
                        </p>
                        <Button asChild className="mt-4">
                          <a
                            href={item.publicacion.urlPublicacion}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver Publicación Original
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
