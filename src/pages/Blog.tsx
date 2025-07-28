import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, User, MessageSquare, Heart, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '10 Consejos para el Cuidado de Gatos en Casa',
      excerpt: 'Aprende cómo crear un ambiente seguro y estimulante para tu gato en casa con estos consejos prácticos.',
      category: 'Cuidado',
      date: '15 Julio 2024',
      readTime: '5 min',
      author: 'Dra. María González',
      image: 'https://i.ibb.co/QvPhsXfQ/primer-disparo-vertical-de-un-lindo-gato-europeo-de-pelo-corto.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Guía Completa para la Adopción Responsable',
      excerpt: 'Todo lo que necesitas saber antes de adoptar una mascota y cómo asegurarte de que sea una experiencia exitosa.',
      category: 'Adopción',
      date: '10 Julio 2024',
      readTime: '8 min',
      author: 'Carlos Mendoza',
      image: 'https://i.ibb.co/4gMyvqFY/los-veterinarios-hacen-un-gato-enfermo-de-rayos-x-en-una-mesa-en-una-clinica-veterinaria.jpg'
    },
    {
      id: 3,
      title: 'Alimentación Saludable para Mascotas: Mitos y Verdades',
      excerpt: 'Descubre los mitos más comunes sobre la alimentación de perros y gatos y cómo elegir la mejor opción para tu mascota.',
      category: 'Salud',
      date: '5 Julio 2024',
      readTime: '6 min',
      author: 'Nutrióloga Ana Torres',
      image: 'https://i.ibb.co/2YqSGcCv/cerrar-medico-sosteniendo-gato.jpg'
    },
    {
      id: 4,
      title: 'Cómo Socializar a un Gato Adulto',
      excerpt: 'Técnicas efectivas para ayudar a tu gato adulto a sentirse cómodo con personas y otros animales.',
      category: 'Comportamiento',
      date: '28 Junio 2024',
      readTime: '7 min',
      author: 'Eduardo Rojas',
      image: 'https://i.ibb.co/vyydnH2/acercamiento-al-medico-veterinario-cuidando-la-mascota.jpg'
    },
    {
      id: 5,
      title: 'Los Beneficios de Esterilizar a tu Mascota',
      excerpt: 'Conoce todas las ventajas de la esterilización para la salud y bienestar de tu mascota y la comunidad.',
      category: 'Salud',
      date: '20 Junio 2024',
      readTime: '5 min',
      author: 'Dra. Laura Pérez',
      image: 'https://i.ibb.co/jkX7R3Qz/adorable-gatito-con-pared-monocromatica-detras-de-ella.jpg'
    },
    {
      id: 6,
      title: 'Juguetes Caseros para Gatos: Divertidos y Económicos',
      excerpt: 'Ideas creativas para crear juguetes estimulantes para tu gato con materiales que tienes en casa.',
      category: 'Entretenimiento',
      date: '15 Junio 2024',
      readTime: '4 min',
      author: 'Martha Sánchez',
      image: 'https://i.ibb.co/3mbv1q0T/gato-con-cono.jpg'
    }
  ];

  const categories = ['Todos', 'Cuidado', 'Salud', 'Adopción', 'Comportamiento', 'Alimentación', 'Entretenimiento'];

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
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Blog de Michi Safe
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Consejos, guías y noticias sobre el cuidado, salud y bienestar de tus mascotas
            </p>
          </div>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Artículo destacado */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Artículo destacado</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 h-80">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')}
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {articles[0].category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {articles[0].date}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {articles[0].readTime} de lectura
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{articles[0].title}</h3>
                <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{articles[0].author}</span>
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${articles[0].id}`}>
                      Leer más
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de artículos */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Últimos artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article key={article.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1517331156700-3c241d90b4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-3 w-3" />
                      </div>
                      <span className="text-xs">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Suscripción al newsletter */}
        <div className="mt-20 bg-primary/5 border border-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Suscríbete a nuestro boletín</h2>
            <p className="text-muted-foreground mb-6">
              Recibe consejos útiles y actualizaciones directamente en tu correo electrónico
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="whitespace-nowrap">
                Suscribirse
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Respetamos tu privacidad. Nunca compartiremos tu información.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
