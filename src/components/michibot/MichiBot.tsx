import { useState, useRef, useEffect } from 'react';
import { Send, X, Trash2, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { useMichiBot } from '@/hooks/useMichiBot';
import { QuickSuggestions } from './QuickSuggestions';
import './styles/michibot.css';
import kittenIcon from "@/assets/kitten-icon.png";

type MichiBotProps = {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  title?: string;
  subtitle?: string;
  avatar?: string;
  greetingMessage?: string;
  showOnInitial?: boolean;
  storageKey?: string;
  customResponses?: Record<string, string | ((input: string) => string)>;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onToggle?: (isOpen: boolean) => void;
};

export function MichiBot({
  position = 'bottom-right',
  title = 'MichiBot',
  subtitle = 'Tu asistente virtual',
  avatar = '/src/assets/kitten-icon.png',
  greetingMessage = '¡Hola! Soy MichiBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?',
  showOnInitial = false,
  storageKey = 'michibot_chat',
  customResponses = {},
  onMessageSent,
  onMessageReceived,
  onToggle,
}: MichiBotProps) {
  const [isOpen, setIsOpen] = useState(showOnInitial);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, isTyping, quickReplies, sendMessage, clearChat } = useMichiBot({
    onMessageSent,
    onMessageReceived,
    customResponses,
    persistChat: true,
  });

  // Efecto para hacer scroll al final de los mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    sendMessage(input);
    setInput('');
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
    
    if (newState && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleClearChat = () => {
    if (confirm('¿Estás seguro de que quieres borrar el historial de la conversación?')) {
      clearChat();
    }
  };

  // Clases de posición responsivas con márgenes mejorados
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4 sm:bottom-6 sm:right-6 mb-16 sm:mb-6',
    'bottom-left': 'bottom-4 left-4 sm:bottom-6 sm:left-6 mb-16 sm:mb-6',
    'top-right': 'top-20 right-4 sm:top-24 sm:right-6', 
    'top-left': 'top-20 left-4 sm:top-24 sm:left-6',    
  }[position];

  return (
    <div className={`fixed z-40 ${positionClasses}`}>
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-10rem)] max-h-[600px] bg-background border rounded-lg shadow-xl flex flex-col overflow-hidden michibot-chat-window" style={{ top: '80px' }}>
          {/* Header */}
          <div 
            className="bg-primary text-white p-4 flex justify-between items-center"
          >
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={avatar} alt={title} />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-xs opacity-80">{subtitle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={handleClearChat}
                title="Borrar historial"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={toggleChat}
                aria-label="Cerrar chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto michibot-scrollbar">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex',
                    message.isUser ? 'justify-end' : 'justify-start'
                  )}
                >
                  {!message.isUser && (
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src={avatar} alt={title} />
                      <AvatarFallback>MB</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-xs p-3 rounded-lg',
                      message.isUser
                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                        : 'bg-muted rounded-tl-none',
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-75" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-150" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Replies */}
          {quickReplies.length > 0 && !isTyping && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply.id}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 px-2 py-1 rounded-full whitespace-nowrap"
                    onClick={() => handleQuickReply(reply.text)}
                  >
                    {reply.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="relative">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="pr-10"
                disabled={isTyping}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-0 top-0 h-full rounded-l-none"
                disabled={!input.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <QuickSuggestions 
              onSelect={handleQuickReply} 
              disabled={isTyping} 
            />
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full p-0 michibot-float"
          aria-label="Abrir chat"
        >
           <img src={kittenIcon} alt="Michi Safe" className="w-8 h-8 object-cover" ></img>
        </Button>
      )}
    </div>
  );
}
