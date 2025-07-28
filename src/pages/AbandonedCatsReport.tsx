import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, MapPin, Calendar, Heart, AlertTriangle, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const AbandonedCatsReport = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    numberOfCats: "1",
    condition: "",
    urgency: "",
    access: "",
    contact: "",
    date: "",
    hasFood: false,
    hasShelter: false,
    needsVet: false,
    safeToApproach: false,
    images: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reporte de Gatitos Abandonados Enviado",
      description: "Hemos notificado a refugios locales y voluntarios. Te contactaremos pronto para coordinar el rescate.",
      duration: 5000
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/20 px-4 py-2 rounded-full border border-destructive/30 mb-6">
            <AlertTriangle className="text-destructive" size={16} />
            <span className="text-sm font-medium text-destructive-foreground">Situación de Emergencia</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-primary-foreground">Reportar Gatitos</span>{" "}
            <span className="text-foreground">Abandonados</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Ayúdanos a rescatar gatitos en situación de abandono. Cada reporte puede salvar vidas.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 shadow-card">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-primary" />
                Información del Reporte
              </h2>
              <p className="text-muted-foreground">
                Proporciona todos los detalles posibles para facilitar el rescate seguro
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Ubicación y Fecha */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Ubicación Exacta *
                  </Label>
                  <Input
                    id="location"
                    placeholder="Dirección completa o punto de referencia"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    Cuándo los viste *
                  </Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Detalles de los gatitos */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="numberOfCats">Número de Gatitos</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, numberOfCats: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Cuántos gatitos?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 gatito</SelectItem>
                      <SelectItem value="2-3">2-3 gatitos</SelectItem>
                      <SelectItem value="4-5">4-5 gatitos</SelectItem>
                      <SelectItem value="mas-5">Más de 5 gatitos</SelectItem>
                      <SelectItem value="camada">Camada completa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Estado de Salud</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, condition: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Condición aparente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bueno">Aparentemente sanos</SelectItem>
                      <SelectItem value="regular">Estado regular</SelectItem>
                      <SelectItem value="malo">Necesitan atención urgente</SelectItem>
                      <SelectItem value="critico">Estado crítico</SelectItem>
                      <SelectItem value="bebes">Bebés recién nacidos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="urgency">Nivel de Urgencia</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Prioridad del rescate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baja">Baja - Pueden esperar</SelectItem>
                      <SelectItem value="media">Media - En unos días</SelectItem>
                      <SelectItem value="alta">Alta - Lo antes posible</SelectItem>
                      <SelectItem value="critica">Crítica - Emergencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Condiciones del lugar */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Condiciones Actuales</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasFood" 
                      checked={formData.hasFood}
                      onCheckedChange={(checked) => setFormData({ ...formData, hasFood: !!checked })}
                    />
                    <Label htmlFor="hasFood" className="text-sm">Tienen acceso a comida</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasShelter" 
                      checked={formData.hasShelter}
                      onCheckedChange={(checked) => setFormData({ ...formData, hasShelter: !!checked })}
                    />
                    <Label htmlFor="hasShelter" className="text-sm">Tienen refugio del clima</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="needsVet" 
                      checked={formData.needsVet}
                      onCheckedChange={(checked) => setFormData({ ...formData, needsVet: !!checked })}
                    />
                    <Label htmlFor="needsVet" className="text-sm">Necesitan atención veterinaria</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="safeToApproach" 
                      checked={formData.safeToApproach}
                      onCheckedChange={(checked) => setFormData({ ...formData, safeToApproach: !!checked })}
                    />
                    <Label htmlFor="safeToApproach" className="text-sm">Es seguro acercarse</Label>
                  </div>
                </div>
              </div>

              {/* Acceso al lugar */}
              <div className="space-y-2">
                <Label htmlFor="access">Acceso al Lugar</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, access: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="¿Cómo acceder?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="publico">Lugar público - fácil acceso</SelectItem>
                    <SelectItem value="privado-permiso">Propiedad privada - con permiso</SelectItem>
                    <SelectItem value="privado-sin-permiso">Propiedad privada - sin permiso</SelectItem>
                    <SelectItem value="dificil">Acceso difícil - requiere equipo</SelectItem>
                    <SelectItem value="peligroso">Lugar peligroso</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Descripción detallada */}
              <div className="space-y-2">
                <Label htmlFor="description">Descripción Detallada</Label>
                <Textarea
                  id="description"
                  placeholder="Describe todo lo que puedas: apariencia de los gatitos, comportamiento, si hay gata madre presente, condiciones del lugar, peligros potenciales, etc."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[120px]"
                />
              </div>

              {/* Subir imágenes */}
              <div className="space-y-2">
                <Label htmlFor="images" className="flex items-center gap-2">
                  <Upload size={16} className="text-primary" />
                  Fotos del Lugar y Gatitos
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="images-upload"
                  />
                  <label htmlFor="images-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-4 text-muted-foreground" size={48} />
                    <p className="text-muted-foreground mb-2">
                      Sube fotos que ayuden al equipo de rescate
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Múltiples fotos son bienvenidas
                    </p>
                  </label>
                  {formData.images.length > 0 && (
                    <p className="mt-4 text-sm text-primary font-medium">
                      ✓ {formData.images.length} imagen(es) seleccionada(s)
                    </p>
                  )}
                </div>
              </div>

              {/* Información de contacto */}
              <div className="space-y-2">
                <Label htmlFor="contact">Tu Información de Contacto *</Label>
                <Input
                  id="contact"
                  placeholder="Teléfono y/o email para coordinar el rescate"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Heart className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2">¿Qué pasa después?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Notificaremos a refugios y voluntarios de tu área</li>
                      <li>• Un coordinador te contactará para planificar el rescate</li>
                      <li>• Proporcionaremos actualizaciones sobre los gatitos</li>
                      <li>• Te ayudaremos a encontrar hogares si decides adoptarlos temporalmente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full py-6 text-lg">
                <Shield className="mr-2" size={20} />
                Enviar Reporte de Rescate
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AbandonedCatsReport;