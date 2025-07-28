import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, Heart, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data - En una app real vendría de la base de datos
const mockCats = [
  {
    id: 1,
    name: "Luna",
    type: "lost",
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400",
    location: "Colonia Roma, CDMX",
    date: "2024-01-15",
    description: "Gatita persa gris con ojos azules. Muy cariñosa y responde a su nombre.",
    breed: "Persa",
    color: "Gris",
    contact: "555-0123"
  },
  {
    id: 2,
    name: "Desconocido",
    type: "found",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
    location: "Parque México, CDMX",
    date: "2024-01-18",
    description: "Gatito naranja encontrado en el parque. Muy amigable, busca a su familia.",
    breed: "Mestizo",
    color: "Naranja",
    contact: "555-0456"
  },
  {
    id: 3,
    name: "Michi",
    type: "lost",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400",
    location: "Polanco, CDMX",
    date: "2024-01-20",
    description: "Gato siamés muy inteligente. Tiene un collar azul con cascabel.",
    breed: "Siamés",
    color: "Crema y marrón",
    contact: "555-0789"
  },
  {
    id: 4,
    name: "Encontrado",
    type: "found",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
    location: "Centro Histórico, CDMX",
    date: "2024-01-22",
    description: "Gatita calicó encontrada cerca del Zócalo. Está bien cuidada.",
    breed: "Mestizo",
    color: "Calicó",
    contact: "555-0321"
  }
];

export const GallerySection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "lost" | "found">("all");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredCats = mockCats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cat.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || cat.type === filterType;
    const matchesLocation = !filterLocation || cat.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Galería de</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Michis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Busca entre los reportes recientes. La IA analiza continuamente nuevas coincidencias.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-card mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Buscar por nombre, descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterType} onValueChange={(value: "all" | "lost" | "found") => setFilterType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de reporte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="lost">Perdidos</SelectItem>
                <SelectItem value="found">Encontrados</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Ubicación..."
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filtros Avanzados
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCats.map((cat) => (
            <Card key={cat.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={`Foto de ${cat.name} - ${cat.type === 'lost' ? 'michi perdido' : 'michi encontrado'}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{cat.name}</h3>
                  <Badge variant={cat.type === "lost" ? "destructive" : "default"}>
                    {cat.type === "lost" ? "Perdido" : "Encontrado"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{cat.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(cat.date).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cat.description}
                </p>
                
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">{cat.breed}</Badge>
                  <Badge variant="outline" className="text-xs">{cat.color}</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" onClick={() => navigate(`/report/${cat.id}`)}>
                    Ver Detalles
                  </Button>
                  <Button size="sm" variant="outline" className="px-3">
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredCats.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐱</div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
            <p className="text-muted-foreground">
              Intenta ajustar los filtros o crear un nuevo reporte
            </p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Cargar Más Resultados
          </Button>
        </div>
      </div>
    </section>
  );
};