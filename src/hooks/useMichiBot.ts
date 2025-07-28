import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, BotResponse, QuickSuggestion } from '../components/michibot/types';

const DEFAULT_GREETING = '¡Hola! Soy MichiBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?';
const STORAGE_KEY = 'michibot_chat_history';

type UseMichiBotProps = {
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  customResponses?: Record<string, string | ((input: string) => string)>;
  persistChat?: boolean;
};

export function useMichiBot({
  onMessageSent,
  onMessageReceived,
  customResponses = {},
  persistChat = true,
}: UseMichiBotProps = {}) {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined' && persistChat) {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickSuggestion[]>([]);

  // Cargar historial guardado al montar
  useEffect(() => {
    if (persistChat && messages.length === 0) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setMessages(parsed);
          }
        } catch (error) {
          console.error('Error al cargar el historial del chat:', error);
        }
      } else {
        // Mensaje de bienvenida inicial
        const welcomeMessage: Message = {
          id: uuidv4(),
          text: DEFAULT_GREETING,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }
    }
  }, [persistChat]);

  // Guardar historial cuando cambia
  useEffect(() => {
    if (persistChat) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, persistChat]);

  // Generar respuesta del bot
  const generateBotResponse = useCallback((userInput: string): BotResponse => {
    const input = userInput.toLowerCase().trim();
    
    // Verificar respuestas personalizadas primero
    for (const [key, response] of Object.entries(customResponses)) {
      if (input.includes(key.toLowerCase())) {
        return {
          text: typeof response === 'function' ? response(input) : response,
        };
      }
    }

    // Respuestas predefinidas
    if (input.includes('hola') || input.includes('holi') || input.includes('holis')) {
      return {
        text: '¡Hola! Soy MichiBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?',
        quickReplies: [
          { id: '1', text: '¿Cómo reportar un gato perdido?', category: 'help' },
          { id: '2', text: 'Encontré un gato, ¿qué hago?', category: 'report' },
          { id: '3', text: '¿Dónde están los refugios?', category: 'shelter' },
        ],
      };
    }
    
    if (input.includes('buscar') || input.includes('perdido')) {
      return {
        text: 'Puedo ayudarte a buscar a tu gatito perdido. Ve a la sección "Reportar Mascota Perdida" y completa el formulario con los detalles. ¿Necesitas ayuda con algo más?',
      };
    }
    
    if (input.includes('reportar') || input.includes('encontré') || input.includes('encontre')) {
      return {
        text: 'Si encontraste un gatito, puedes reportarlo en la sección "Reportar Mascota Encontrada". Necesitarás proporcionar detalles como la ubicación y una foto. ¿Te ayudo con algo más?',
      };
    }
    
    if (input.includes('refugio') || input.includes('veterinario') || input.includes('clínica')) {
      return {
        text: 'En la sección "Refugios Cercanos" encontrarás una lista de refugios y clínicas veterinarias. También puedes buscar por ubicación. ¿Necesitas ayuda para encontrar uno en específico?',
      };
    }
    
    if (input.includes('consejos') || input.includes('cuidados') || input.includes('ayuda')) {
      return {
        text: 'En el blog de Michi Safe encontrarás consejos sobre cuidados, alimentación, salud y comportamiento felino. ¿Hay algún tema en particular sobre el que te gustaría saber más?',
      };
    }
    
    if (input.includes('gracias') || input.includes('grax') || input.includes('thx')) {
      return {
        text: '¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en preguntar 😊',
      };
    }
    
    // Respuesta por defecto
    return {
      text: 'Lo siento, no estoy seguro de entenderte. ¿Podrías reformular tu pregunta? Estoy aquí para ayudarte con búsqueda de mascotas, reportes, refugios y consejos sobre cuidado felino.',
      quickReplies: [
        { id: '1', text: '¿Cómo reportar un gato perdido?', category: 'help' },
        { id: '2', text: 'Encontré un gato, ¿qué hago?', category: 'report' },
        { id: '3', text: '¿Dónde están los refugios?', category: 'shelter' },
      ],
    };
  }, [customResponses]);

  // Enviar mensaje
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    // Mensaje del usuario
    const userMessage: Message = {
      id: uuidv4(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    onMessageSent?.(text);
    setIsTyping(true);
    setQuickReplies([]);

    // Simular respuesta después de un retraso
    setTimeout(() => {
      const response = generateBotResponse(text);
      
      const botMessage: Message = {
        id: uuidv4(),
        text: response.text,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      onMessageReceived?.(response.text);
      
      if (response.quickReplies) {
        setQuickReplies(response.quickReplies);
      }
      
      setIsTyping(false);
    }, 1000);
  }, [generateBotResponse, onMessageReceived, onMessageSent]);

  // Limpiar el historial del chat
  const clearChat = useCallback(() => {
    setMessages([{
      id: uuidv4(),
      text: DEFAULT_GREETING,
      isUser: false,
      timestamp: new Date(),
    }]);
    setQuickReplies([]);
    
    if (persistChat) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [persistChat]);

  return {
    messages,
    isTyping,
    quickReplies,
    sendMessage,
    clearChat,
  };
}
