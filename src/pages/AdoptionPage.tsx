import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Heart, Home, User, MapPin, Calendar, Phone, Mail, Cat } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Mock data para gatitos disponibles
const availableCats = [
  {
    id: 1,
    name: "Pelusa",
    age: "2 meses",
    gender: "Hembra",
    breed: "Mestiza",
    color: "Gris y blanco",
    description: "Gatita muy cariñosa y juguetona. Le encanta dormir en lugares cálidos.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
    vaccinated: true,
    sterilized: false,
    location: "Refugio Centro",
    urgent: false
  },
  {
    id: 2,
    name: "Simba",
    age: "4 meses",
    gender: "Macho",
    breed: "Naranja Atigrado",
    color: "Naranja",
    description: "Gatito muy activo y aventurero. Perfecto para familias con niños.",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400",
    vaccinated: true,
    sterilized: false,
    location: "Foster Home Norte",
    urgent: true
  },
  {
    id: 3,
    name: "Luna",
    age: "1 año",
    gender: "Hembra",
    breed: "Siamés mix",
    color: "Crema y marrón",
    description: "Gata adulta muy tranquila. Ideal para apartamentos pequeños.",
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400",
    vaccinated: true,
    sterilized: true,
    location: "Refugio Sur",
    urgent: false
  }
];

const AdoptionPage = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    houseType: "",
    hasYard: false,
    hasPets: false,
    petDetails: "",
    hasChildren: false,
    childrenAges: "",
    workSchedule: "",
    previousPets: "",
    veterinarian: "",
    emergencyContact: "",
    adoptionReason: "",
    expectations: "",
    timeCommitment: "",
    financialReady: false,
    agreesToVisit: false,
    catPreference: ""
  });

  const handleAdoptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud de Adopción Enviada",
      description: "Revisaremos tu solicitud y nos pondremos en contacto contigo en 24-48 horas para coordinar una visita.",
      duration: 5000
    });
    setShowForm(false);
  };

  const startAdoption = (catId?: number) => {
    if (catId) {
      setSelectedCat(catId);
      const cat = availableCats.find(c => c.id === catId);
      setFormData({ ...formData, catPreference: cat?.name || "" });
    }
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30 mb-6">
            <Heart className="text-accent" size={16} />
            <span className="text-sm font-medium text-accent-foreground">Dale un Hogar a un Gatito</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-primary-foreground">Adopta un</span>{" "}
            <span className="text-accent">Compañero</span>{" "}
            <span className="text-primary-foreground">de Vida</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Encuentra a tu nuevo mejor amigo entre nuestros gatitos rescatados que esperan un hogar lleno de amor.
          </p>
          
          <Button size="lg" onClick={() => startAdoption()} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Heart className="mr-2" size={20} />
            Iniciar Proceso de Adopción
          </Button>
        </div>
      </section>

      {!showForm ? (
        <>
          {/* Available Cats Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Gatitos Disponibles para <span className="text-primary">Adopción</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Cada uno de estos gatitos ha sido rescatado y está listo para encontrar su familia definitiva
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {availableCats.map((cat) => (
                  <Card key={cat.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    {cat.urgent && (
                      <div className="bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium">
                        🚨 Adopción Urgente
                      </div>
                    )}
                    
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={cat.image} 
                        alt={`${cat.name} - gatito disponible para adopción`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-xl">{cat.name}</h3>
                        <Badge variant="outline">{cat.gender}</Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>Edad: {cat.age}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cat size={14} />
                          <span>{cat.breed} - {cat.color}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{cat.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {cat.description}
                      </p>
                      
                      <div className="flex gap-2 mb-4">
                        {cat.vaccinated && (
                          <Badge variant="default" className="text-xs">✓ Vacunado</Badge>
                        )}
                        {cat.sterilized && (
                          <Badge variant="default" className="text-xs">✓ Esterilizado</Badge>
                        )}
                      </div>
                      
                      <Button 
                        onClick={() => startAdoption(cat.id)} 
                        className="w-full"
                        variant={cat.urgent ? "default" : "outline"}
                      >
                        <Heart className="mr-2" size={16} />
                        Adoptar a {cat.name}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Ver Más Gatitos Disponibles
                </Button>
              </div>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Requisitos para <span className="text-primary">Adopción</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Home className="text-primary" />
                      Requisitos Básicos
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ser mayor de 18 años</li>
                      <li>• Tener vivienda estable y segura</li>
                      <li>• Capacidad económica para gastos veterinarios</li>
                      <li>• Tiempo disponible para cuidado y atención</li>
                      <li>• Compromiso de por vida (15+ años)</li>
                      <li>• Autorización de todos los miembros de la familia</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <User className="text-primary" />
                      Proceso de Adopción
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Llenar formulario de solicitud</li>
                      <li>• Entrevista telefónica o virtual</li>
                      <li>• Visita domiciliaria (si es necesario)</li>
                      <li>• Conocer al gatito presencialmente</li>
                      <li>• Período de adaptación supervisado</li>
                      <li>• Firma del contrato de adopción</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Adoption Form */
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-8 shadow-card">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="text-primary" />
                  Formulario de Solicitud de Adopción
                  {selectedCat && (
                    <Badge className="ml-2">
                      Para {availableCats.find(c => c.id === selectedCat)?.name}
                    </Badge>
                  )}
                </h2>
                <p className="text-muted-foreground">
                  Completa toda la información para ayudarnos a encontrar la mejor familia para nuestros gatitos
                </p>
              </div>

              <form onSubmit={handleAdoptionSubmit} className="space-y-8">
                {/* Información Personal */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Información Personal</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nombre Completo *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección Completa *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Información del Hogar */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Información del Hogar</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="houseType">Tipo de Vivienda</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, houseType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tipo de vivienda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casa">Casa propia</SelectItem>
                          <SelectItem value="apartamento">Apartamento/Departamento</SelectItem>
                          <SelectItem value="renta">Casa/Depto en renta</SelectItem>
                          <SelectItem value="familiar">Casa familiar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workSchedule">Horario de Trabajo</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, workSchedule: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="¿Cuánto tiempo pasas fuera?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casa">Trabajo desde casa</SelectItem>
                          <SelectItem value="medio">4-6 horas fuera</SelectItem>
                          <SelectItem value="tiempo-completo">8+ horas fuera</SelectItem>
                          <SelectItem value="viajes">Viajo frecuentemente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="hasYard" 
                        checked={formData.hasYard}
                        onCheckedChange={(checked) => setFormData({ ...formData, hasYard: !!checked })}
                      />
                      <Label htmlFor="hasYard">Tengo patio o jardín</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="hasPets" 
                        checked={formData.hasPets}
                        onCheckedChange={(checked) => setFormData({ ...formData, hasPets: !!checked })}
                      />
                      <Label htmlFor="hasPets">Tengo otras mascotas</Label>
                    </div>
                  </div>
                  
                  {formData.hasPets && (
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="petDetails">Detalles de tus otras mascotas</Label>
                      <Textarea
                        id="petDetails"
                        placeholder="Describe qué mascotas tienes, sus edades, si están esterilizadas y vacunadas"
                        value={formData.petDetails}
                        onChange={(e) => setFormData({ ...formData, petDetails: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                {/* Experiencia con Mascotas */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Experiencia con Mascotas</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="previousPets">Experiencia previa con gatos</Label>
                      <Textarea
                        id="previousPets"
                        placeholder="Cuéntanos sobre tu experiencia cuidando gatos"
                        value={formData.previousPets}
                        onChange={(e) => setFormData({ ...formData, previousPets: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="veterinarian">Veterinario de confianza</Label>
                      <Input
                        id="veterinarian"
                        placeholder="Nombre y contacto de tu veterinario"
                        value={formData.veterinarian}
                        onChange={(e) => setFormData({ ...formData, veterinarian: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Motivación y Expectativas */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Motivación y Expectativas</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="adoptionReason">¿Por qué quieres adoptar un gato?</Label>
                      <Textarea
                        id="adoptionReason"
                        placeholder="Comparte tu motivación para adoptar"
                        value={formData.adoptionReason}
                        onChange={(e) => setFormData({ ...formData, adoptionReason: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expectations">¿Qué esperas de tu nuevo compañero?</Label>
                      <Textarea
                        id="expectations"
                        placeholder="Describe qué tipo de relación esperas con el gatito"
                        value={formData.expectations}
                        onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Compromisos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Compromisos</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="financialReady" 
                        checked={formData.financialReady}
                        onCheckedChange={(checked) => setFormData({ ...formData, financialReady: !!checked })}
                      />
                      <Label htmlFor="financialReady" className="text-sm">
                        Me comprometo a cubrir todos los gastos veterinarios, comida y cuidados necesarios
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="agreesToVisit" 
                        checked={formData.agreesToVisit}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreesToVisit: !!checked })}
                      />
                      <Label htmlFor="agreesToVisit" className="text-sm">
                        Acepto recibir una visita domiciliaria si es necesario para completar el proceso
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Volver a Gatitos
                  </Button>
                  <Button type="submit" className="flex-1">
                    <Heart className="mr-2" size={16} />
                    Enviar Solicitud
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default AdoptionPage;