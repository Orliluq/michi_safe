import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageCircle, MapPin, Calendar, Cat, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type Story = {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  quote: string;
  author: string;
  catName: string;
};

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories: Story[] = [
    {
      id: 1,
      title: "Michi regresó a casa después de 3 meses",
      description: "Luna desapareció durante una tormenta y después de meses de búsqueda, gracias a un reporte en Michi Safe, fue encontrada a 15km de casa. La familia estaba desesperada, pero nunca perdieron la esperanza. Ahora Luna está de vuelta, más mimada que nunca.",
      location: "Valencia, Carabobo",
      date: "15 de Junio, 2025",
      image: "https://i.ibb.co/vyydnH2/acercamiento-al-medico-veterinario-cuidando-la-mascota.jpg",
      quote: "Gracias a Michi Safe, nuestra familia está completa otra vez. No teníamos esperanzas después de tanto tiempo, pero la comunidad nos ayudó a encontrarla.",
      author: "Familia Rodríguez",
      catName: "Luna"
    },
    {
      id: 2,
      title: "Encontramos a Simón gracias a la IA de reconocimiento",
      description: "Simón salió por la ventana y se perdió en el vecindario. Publicamos su foto en Michi Safe y en solo 2 días recibimos una alerta de coincidencia. La tecnología de reconocimiento facial de la aplicación lo identificó en un refugio cercano.",
      location: "Caracas, Distrito Capital",
      date: "2 de Julio, 2025",
      image: "https://i.ibb.co/2YqSGcCv/cerrar-medico-sosteniendo-gato.jpg",
      quote: "No podíamos creerlo cuando recibimos la notificación. Simón estaba asustado pero en buen estado. ¡La tecnología es increíble!",
      author: "Carlos Márquez",
      catName: "Simón"
    },
    {
      id: 3,
      title: "Una historia de amor a primera vista",
      description: "No estábamos buscando adoptar, pero cuando vimos a Panchito en Michi Safe, supimos que era el gato para nosotros. Había sido rescatado después de vivir en la calle. Ahora es el rey de la casa y nos llena de amor todos los días.",
      location: "Maracaibo, Zulia",
      date: "22 de Mayo, 2025",
      image: "https://i.ibb.co/3mbv1q0T/gato-con-cono.jpg",
      quote: "Panchito nos eligió a través de la app. Fue amor a primera vista y no podríamos estar más felices con nuestra decisión de adoptar.",
      author: "Laura y Miguel",
      catName: "Panchito"
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

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
              <Heart className="h-8 w-8 text-primary" fill="currentColor" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Historias de Éxito
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Conoce las conmovedoras historias de michis que han encontrado un hogar o se han reunido con sus familias gracias a nuestra comunidad.
            </p>
          </div>
        </div>

        {/* Story Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            {/* Story Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={stories[currentStory].image} 
                alt={stories[currentStory].catName}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{stories[currentStory].title}</h2>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {stories[currentStory].location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {stories[currentStory].date}
                  </span>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button 
                  onClick={prevStory}
                  className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                  aria-label="Historia anterior"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button 
                  onClick={nextStory}
                  className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                  aria-label="Siguiente historia"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <Cat size={20} />
                </div>
                <h3 className="text-xl font-semibold">{stories[currentStory].catName}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {stories[currentStory].description}
              </p>
              
              <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                <MessageCircle className="h-5 w-5 text-primary mb-2" />
                <p className="italic text-muted-foreground">"{stories[currentStory].quote}"</p>
                <p className="mt-2 font-medium text-foreground">— {stories[currentStory].author}</p>
              </div>
              
              <div className="flex justify-center mt-8 gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentStory === index ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                    aria-label={`Ir a la historia ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">¿Tienes una historia que compartir?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si Michi Safe te ha ayudado a encontrar a tu michi o has adoptado a través de nuestra plataforma, ¡nos encantaría escuchar tu historia!
            </p>
            <Button asChild>
              <Link to="/reportar" className="gap-2">
                Comparte tu historia
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
