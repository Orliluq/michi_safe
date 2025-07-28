import { useState, useEffect } from "react";
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
    location: "Colonia Tovar, Miranda",
    date: "2024-01-15",
    description: "Gatita persa gris con ojos azules. Muy cariñosa y responde a su nombre.",
    breed: "Persa",
    color: "Gris",
    contact: "555-0123",
    isFavorite: false
  },
  {
    id: 2,
    name: "Desconocido",
    type: "found",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
    location: "Parque del Este, Caracas",
    date: "2024-01-18",
    description: "Gatito naranja encontrado en el parque. Muy amigable, busca a su familia.",
    breed: "Mestizo",
    color: "Naranja",
    contact: "555-0456",
    isFavorite: false
  },
  {
    id: 3,
    name: "Michi",
    type: "lost",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400",
    location: "El Valle, Caracas",
    date: "2024-01-20",
    description: "Gato siamés muy inteligente. Tiene un collar azul con cascabel. Busca a su familia.",
    breed: "Siamés",
    color: "Crema y marrón",
    contact: "555-0789",
    isFavorite: false
  },
  {
    id: 4,
    name: "Encontrado",
    type: "found",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
    location: "Plaza Bolívar, Caracas",
    date: "2024-01-22",
    description: "Gatita calicó encontrada cerca del ministerio. Está bien cuidada. Busca a su familia.",
    breed: "Mestizo",
    color: "Calicó",
    contact: "555-0321",
    isFavorite: false
  },
  {
    id: 5,
    name: "Manchitas",
    type: "lost",
    image: "src/assets/los-veterinarios-hacen-un-gato-enfermo-de-rayos-x-en-una-mesa-en-una-clinica-veterinaria.jpg",
    location: "La Candelaria, Caracas",
    date: "2024-01-25",
    description: "Gatito blanca con manchas atigradas. Se perdió cerca del mercado. Responde al nombre de Manchitas.",
    breed: "Atigrado",
    color: "Blanco",
    contact: "555-0457",
    isFavorite: false
  },
  {
    id: 6,
    name: "Nieve",
    type: "found",
    image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=400",
    location: "El Hatillo, Caracas",
    date: "2024-01-27",
    description: "Gatito tricolor de ojos verdes encontrado en la plaza principal. Muy tranquilo y cariñoso.",
    breed: "Mestizo",
    color: "Blanco",
    contact: "555-0788",
    isFavorite: false
  }
];

type Cat = typeof mockCats[0];

export const GallerySection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "lost" | "found">("all");
  const [filterLocation, setFilterLocation] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [visibleCats, setVisibleCats] = useState(6); // Mostrar 6 gatos inicialmente
  const catsPerLoad = 3; // Cuántos gatos cargar con cada "Cargar más"
  
  const [cats, setCats] = useState<Cat[]>(() => {
    // Limpiar el localStorage temporalmente para forzar la recarga
    // localStorage.removeItem('galleryCats');
    
    const savedCats = localStorage.getItem('galleryCats');
    if (!savedCats) {
      // Si no hay gatos guardados, guarda los mockCats
      localStorage.setItem('galleryCats', JSON.stringify(mockCats));
      return mockCats;
    }
    
    try {
      const parsedCats = JSON.parse(savedCats);
      // Si hay gatos guardados, úsalos
      return parsedCats;
    } catch (e) {
      // Si hay un error al parsear, usa los mockCats
      localStorage.setItem('galleryCats', JSON.stringify(mockCats));
      return mockCats;
    }
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('galleryCats', JSON.stringify(cats));
  }, [cats]);

  const toggleFavorite = (id: number) => {
    setCats(cats.map(cat => 
      cat.id === id ? { ...cat, isFavorite: !cat.isFavorite } : cat
    ));
  };

  const filteredCats = cats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cat.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || cat.type === filterType;
    const matchesLocation = !filterLocation || cat.location.toLowerCase().includes(filterLocation.toLowerCase());
    const matchesFavorites = !showFavorites || cat.isFavorite;
    
    return matchesSearch && matchesType && matchesLocation && matchesFavorites;
  });

  const displayCats = filteredCats.slice(0, visibleCats);
  const hasMoreCats = visibleCats < filteredCats.length;

  const loadMoreCats = () => {
    setVisibleCats(prev => Math.min(prev + catsPerLoad, filteredCats.length));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('galleryCats');
    window.location.reload();
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Botón temporal para limpiar el localStorage */}
        <button 
          onClick={clearLocalStorage}
          /* className="fixed bottom-4 right-4 text-white p-2 rounded-full z-50 bg-red-500"
          title="Limpiar caché" */
        >
        {/*   🗑️ */}
        </button>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Galería de </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gatitos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encuentra gatitos perdidos o reporta uno que hayas encontrado.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-card p-6 rounded-xl shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nombre, descripción o ubicación..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterType} onValueChange={(value: "all" | "lost" | "found") => setFilterType(value)}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="lost">Perdidos</SelectItem>
                <SelectItem value="found">Encontrados</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant={showFavorites ? "default" : "outline"}
              onClick={() => setShowFavorites(!showFavorites)}
              className="flex items-center gap-2"
            >
              <Heart 
                className={`h-5 w-5 ${showFavorites ? 'fill-current' : ''}`} 
                fill={showFavorites ? 'currentColor' : 'none'}
              />
              Favoritos
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterLocation && (
              <Badge className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20">
                {filterLocation}
                <button onClick={() => setFilterLocation("")}>×</button>
              </Badge>
            )}
          </div>
        </div>

        {/* Grid de gatos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCats.map((cat) => (
            <Card key={cat.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(cat.id);
                  }}
                  className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100 transition-colors"
                  aria-label={cat.isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                >
                  <Heart 
                    className={`h-6 w-6 ${cat.isFavorite ? 'text-red-500 fill-current' : 'text-foreground'}`} 
                  />
                </button>
                <Badge 
                  variant={cat.type === 'lost' ? 'destructive' : 'default'}
                  className="absolute top-2 left-2"
                >
                  {cat.type === 'lost' ? 'Perdido' : 'Encontrado'}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{cat.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {cat.location}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{cat.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(cat.date).toLocaleDateString()}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate(`/report/${cat.id}`)}
                  >
                    Ver detalles
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCats.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron resultados. Intenta con otros filtros.</p>
          </div>
        ) : hasMoreCats ? (
          <div className="flex justify-center mt-8">
            <Button 
              onClick={loadMoreCats} 
              variant="outline"
              className="px-8 py-6 text-base"
            >
              Cargar más gatitos
            </Button>
          </div>
        ) : (
          <div className="text-center py-6 mt-4 text-muted-foreground">
            Has visto todos los gatitos disponibles
          </div>
        )}
      </div>
    </section>
  );
};