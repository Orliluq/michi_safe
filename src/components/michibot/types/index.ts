// Tipos para los mensajes del chat
export declare type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

// Tipos para las sugerencias rápidas
export declare type QuickSuggestion = {
  id: string;
  text: string;
  category?: 'help' | 'report' | 'shelter' | 'advice';
};

// Tipos para las respuestas del bot
export declare type BotResponse = {
  text: string;
  quickReplies?: QuickSuggestion[];
  actions?: {
    type: 'navigate' | 'open_url' | 'suggest';
    payload: string;
  }[];
};

// Tipos para el estado del chat
declare interface ChatState {
  messages: Message[];
  isTyping: boolean;
  isOpen: boolean;
  quickReplies: QuickSuggestion[];
  lastInteraction: Date | null;
}

// Tipos para las props del componente MichiBot
declare interface MichiBotProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor?: string;
  accentColor?: string;
  title?: string;
  subtitle?: string;
  avatar?: string;
  greetingMessage?: string;
  showOnInitial?: boolean;
  storageKey?: string;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onToggle?: (isOpen: boolean) => void;
  customResponses?: Record<string, string | ((input: string) => string)>;
}
