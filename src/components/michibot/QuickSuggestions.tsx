import { Button } from '../ui/button';

interface QuickSuggestionsProps {
  onSelect: (suggestion: string) => void;
  disabled?: boolean;
}

const SUGGESTIONS = [
  '¿Cómo reportar un gato perdido?',
  'Encontré un gato, ¿qué hago?',
  '¿Dónde están los refugios cercanos?',
  'Consejos para cuidar un gato',
];

export function QuickSuggestions({ onSelect, disabled = false }: QuickSuggestionsProps) {
  return (
    <div className="mt-4 space-y-2">
      <p className="text-xs text-muted-foreground text-center">
        ¿No sabes qué preguntar? Prueba con:
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {SUGGESTIONS.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            className="text-xs h-8 px-2 py-1 rounded-full whitespace-nowrap"
            onClick={() => onSelect(suggestion)}
            disabled={disabled}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
}
