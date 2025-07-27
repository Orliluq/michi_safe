import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, MapPin, Calendar, Cat } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ReportForm = () => {
  const { toast } = useToast();
  const [reportType, setReportType] = useState<"lost" | "found" | "">("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    contact: "",
    breed: "",
    color: "",
    size: "",
    image: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: reportType === "lost" ? "Gatito Perdido Reportado" : "Gatito Encontrado Reportado",
      description: "Nuestra IA comenzará a buscar coincidencias inmediatamente. Te notificaremos si encontramos algo.",
      duration: 5000
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Reporta un Gatito</span>{" "}
            <span className="text-primary">{reportType === "lost" ? "Perdido" : reportType === "found" ? "Encontrado" : ""}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Completa la información para que nuestra IA pueda ayudar en la búsqueda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Type Selection */}
          <div className="lg:col-span-3 mb-8">
            <div className="flex gap-4 justify-center">
              <Button
                variant={reportType === "lost" ? "default" : "outline"}
                size="lg"
                onClick={() => setReportType("lost")}
                className="px-8 py-6"
              >
                <Cat className="mr-2" size={20} />
                He Perdido un Gatito
              </Button>
              <Button
                variant={reportType === "found" ? "default" : "outline"}
                size="lg"
                onClick={() => setReportType("found")}
                className="px-8 py-6"
              >
                <Cat className="mr-2" size={20} />
                He Encontrado un Gatito
              </Button>
            </div>
          </div>

          {reportType && (
            <>
              {/* Image Upload */}
              <Card className="p-6 h-fit">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Upload size={20} className="text-primary" />
                  Foto del Gatito
                </h3>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-4 text-muted-foreground" size={48} />
                    <p className="text-muted-foreground mb-2">
                      Sube una foto clara del gatito
                    </p>
                    <p className="text-sm text-muted-foreground">
                      La IA analizará automáticamente las características
                    </p>
                  </label>
                  {formData.image && (
                    <p className="mt-4 text-sm text-primary font-medium">
                      ✓ {formData.image.name}
                    </p>
                  )}
                </div>
              </Card>

              {/* Main Form */}
              <Card className="lg:col-span-2 p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre del Gatito</Label>
                      <Input
                        id="name"
                        placeholder={reportType === "lost" ? "Ej: Luna, Michi..." : "Si conoces el nombre"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="breed">Raza</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, breed: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona la raza" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="persa">Persa</SelectItem>
                          <SelectItem value="siames">Siamés</SelectItem>
                          <SelectItem value="maine-coon">Maine Coon</SelectItem>
                          <SelectItem value="bengal">Bengal</SelectItem>
                          <SelectItem value="mestizo">Mestizo</SelectItem>
                          <SelectItem value="no-se">No sé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="color">Color Principal</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, color: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Color del pelaje" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="negro">Negro</SelectItem>
                          <SelectItem value="blanco">Blanco</SelectItem>
                          <SelectItem value="gris">Gris</SelectItem>
                          <SelectItem value="naranja">Naranja/Atigrado</SelectItem>
                          <SelectItem value="calico">Calicó</SelectItem>
                          <SelectItem value="tricolor">Tricolor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="size">Tamaño</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, size: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tamaño del gatito" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cachorro">Cachorro (0-6 meses)</SelectItem>
                          <SelectItem value="joven">Joven (6-12 meses)</SelectItem>
                          <SelectItem value="adulto-pequeno">Adulto Pequeño</SelectItem>
                          <SelectItem value="adulto-grande">Adulto Grande</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      Ubicación {reportType === "lost" ? "donde se perdió" : "donde se encontró"}
                    </Label>
                    <Input
                      id="location"
                      placeholder="Ej: Colonia Centro, Ciudad de México"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      Fecha {reportType === "lost" ? "de pérdida" : "de encuentro"}
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción Detallada</Label>
                    <Textarea
                      id="description"
                      placeholder={
                        reportType === "lost" 
                          ? "Describe características especiales, comportamiento, lugares frecuentes..."
                          : "Describe dónde y cómo encontraste al gatito, su estado de salud..."
                      }
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Información de Contacto</Label>
                    <Input
                      id="contact"
                      placeholder="Teléfono o email para contactarte"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full py-6 text-lg">
                    {reportType === "lost" ? "Reportar Gatito Perdido" : "Reportar Gatito Encontrado"}
                  </Button>
                </form>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  );
};